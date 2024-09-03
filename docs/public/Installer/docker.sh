#!/bin/bash

# 检查Docker是否安装
check_docker() {
    if command -v docker &> /dev/null; then
        echo "true"
    else
        echo "false"
    fi
}
RED_COLOR='\e[1;31m'
GREEN_COLOR='\e[1;32m'
RES='\e[0m'
DOCKER=$(docker -v)
COMPOSE=$(docker-compose -v)

# 检查docker-compose是否安装
check_compose() {
    if command -v docker-compose &> /dev/null; then
        echo "true"
    else
        echo "false"
    fi
}

check() {
    if [ "$(check_docker)" == "false" ]; then
        echo -e "${RED_COLOR}Docker未安装，请先安装Docker${RES}"
    else
        echo -e "${GREEN_COLOR}Docker已安装，版本、${DOCKER}${RES}"
    fi

    if [ "$(check_compose)" == "false" ]; then
        echo -e "${RED_COLOR}Docker Compose未安装，请先安装Docker Compose${RES}"
    else
        echo -e "${GREEN_COLOR}Docker Compose已安装，版本、${COMPOSE}${RES}"
    fi
}    



# 检测包管理器
detect_package_manager() {
    if command -v apt &> /dev/null; then
        echo "apt"
    elif command -v yum &> /dev/null; then
        echo "yum"
    else
        echo "none"
    fi
}

# 安装
install() {
    package_manager=$(detect_package_manager)
    # 开始安装基础依赖
    if [ "$package_manager" = "apt" ]; then
        apt update -y
        apt install -y jq curl
    elif [ "$package_manager" = "yum" ]; then
        yum install -y jq curl
    else
        echo "包管理器检查失败，目前仅支持apt/yum。"
        exit 1
    fi
}


daemon() {
    NAPCAT_PATH=/etc/docker/daemon.json
  cat <<EOF > $NAPCAT_PATH
{
    "registry-mirrors": [
        "https://docker.m.daocloud.io",
        "https://docker.1panel.live",
        "https://hub.rat.dev"
    ]
}
EOF
}

version() {
    compose_version=$(curl "https://api.github.com/repos/docker/compose/releases/latest" | jq -r '.tag_name')
    if [ -z $compose_version ]; then
        echo "无法获取docker-compose版本，请检查错误。"
        exit 1
    fi	
}


# 使用Docker
use_docker() {
    install
    # 检查Docker是否安装
    if [ "$(check_docker)" == "false" ]; then
        echo "Docker未安装，开始安装Docker..."
        curl -fsSL https://gitee.com/tech-shrimp/docker_installer/releases/download/latest/linux.sh| bash -s docker --mirror Aliyun
        service docker start
        echo "Docker安装完成！"
        
    else
        echo "Docker已安装！"
    fi

    if [ "$(check_compose)" == "false" ]; then
        echo "Docker Compose未安装，开始安装Docker Compose..."
		version
        curl -L "https://mirror.ghproxy.com/https://github.com/docker/compose/releases/download/${compose_version}/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
        chmod +x /usr/local/bin/docker-compose
        # 安装Docker Compose
        echo "Docker Compose安装完成！"
    else
        echo "Docker Compose已安装！"
    fi
    WBT=$(docker -v)
    GE=$(docker-compose -v)
    daemon
    clear
    service docker restart
    echo -e "\r\n${GREEN_COLOR}启动docker"
    echo -e "docker版本、${WBT}"
    echo -e "Docker Compose版本、${GE}"
    echo -e "${RES}"
    
}


# 使用easybot
EasyBot() {
    cat > docker-compose.yml <<EOF
version: '3'
services:
  easybot:
    image: xrcuor/easybot:napcat
    container_name: easybot
    environment:
      - ACCOUNT=$account # 机器人qq
      - WS_ENABLE=true # 正向 WS
      - TOKEN=1234 # access_token，可以为空
      - WEBUI_TOKEN=wscc # 登录密钥，默认是自动生成的随机登录密码
      - SERVER_HOST=0.0.0.0 # WebSocket服务器地址
      - SERVER_PORT=26990 # WebSocket服务器端口
    restart: always
    volumes:
      - ./napcat/config:/app/napcat/config
      - ./ntqq/qq:/root/.config/QQ
      - ./EasyBot:/data
    ports:
      - "6099:6099"
      - "5000:5000"
      - "5001:5001"
EOF
}


use_easybot() {
    check
    echo -e "配置 easybot Service"
    Set_Dir
    RUN_BASE_DIR=$PANEL_BASE_DIR/easybot
    mkdir -p "$RUN_BASE_DIR"
    cd "$RUN_BASE_DIR"
    echo -e "您选择的安装路径为 $RUN_BASE_DIR"
    read -p "请输入机器人QQ号: " account
    EasyBot
    clear
    sleep 3
    echo -e "正在启动 easybot..."
    docker-compose up -d
    echo -e "easybot 启动成功！" 
}

Set_Dir(){
    if read -t 120 -p "设置 easybot 安装目录（默认为/app）：" PANEL_BASE_DIR;then
        if [[ "$PANEL_BASE_DIR" != "" ]];then
            if [[ "$PANEL_BASE_DIR" != /* ]];then
                echo -e "请输入目录的完整路径"
                Set_Dir
            fi

            if [[ ! -d $PANEL_BASE_DIR ]];then
                mkdir -p "$PANEL_BASE_DIR"
            fi
        else
            PANEL_BASE_DIR=/app
        fi
    else
        PANEL_BASE_DIR=/app
        echo -e "(设置超时，使用默认安装路径 /app)"
    fi
}




main(){
    check    
    while :
        do
        echo "0、退出"                      
        echo "1、安装Docker"
        echo "2、安装easybot"  
        echo "3、登录"
        echo "4、启动easybot"
        echo "5、停止easybot"
        read -p "请选择: " input
        case ${input} in
            [0]*)
            break
                ;;
            [1]*)
            use_docker
                ;;
            [2]*)
            use_easybot
                ;;
            [3]*)
            docker logs easybot
                ;;
            [4]*)
            docker start easybot
                ;;
            [5]*)
            docker stop easybot
                ;;        
            *)                                                              
            echo -e "\n\e[1;31m输入有误,请重新选择正确的选项!\e[0m\n"
                ;;
        esac
    done
}

main


