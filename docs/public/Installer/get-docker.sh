#!/bin/bash

# 检查Docker是否安装
check_docker() {
    if command -v docker &> /dev/null; then
        echo "true"
    else
        echo "false"
    fi
}


# 检查docker-compose是否安装
check_compose() {
    if command -v docker-compose &> /dev/null; then
        echo "true"
    else
        echo "false"
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
        #      
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
    daemon
    clear
    service docker restart
    echo "启动docker"
    docker -v
    docker-compose -v
}



while :
    do
        echo "0、退出"                      
        echo "1、安装Docker"
        read -p "请选择: " input
        case ${input} in
        [0]*)
            break
            ;;
        [1]*)
        use_docker
            ;;
        *)                                                              
            echo -e "\n\e[1;31m输入有误,请重新选择正确的选项!\e[0m\n"
            ;;
        esac
    done
