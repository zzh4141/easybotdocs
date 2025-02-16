export const StaticData = {
    backendUrl: "http://chongqing.hualib.com:5000/",
};

export const Templates = [
    {
        manifest: {
            name: '玩家信息模板',
            description: '高自定义显示玩家信息,支持自定义变量,显示皮肤(支持离线,皮肤站),可自定义排版和图标',
            icon: 'http://dl.inectar.cn/p/%E5%9B%BE%E7%89%87%E6%A8%A1%E6%9D%BF/%E7%AE%80%E6%B4%81%E6%A8%A1%E6%9D%BF%E5%A5%97%E8%A3%85/.img/icon.png',
            author: ['MiuxuE'],
            tag: ['信息'],
            version: "1.0.0-测试版",
            content: null,
            links: [
                {
                    name: "论坛介绍",
                    href: "https://bbs.hualib.com/217.html"
                },
                {
                    name: "下载",
                    href: "https://dl.inectar.cn/%E5%9B%BE%E7%89%87%E6%A8%A1%E6%9D%BF/%E7%8E%A9%E5%AE%B6%E4%BF%A1%E6%81%AF%E6%A8%A1%E6%9D%BF"
                }
            ]
        },
        props: {
            templateCount: 2,
            dependencies: [
            ]
        }
    },
    {
        manifest: {
            name: '简洁模板套装',
            description: '简洁的模板套装: 服务器列表、玩家列表',
            icon: 'http://dl.inectar.cn/p/%E5%9B%BE%E7%89%87%E6%A8%A1%E6%9D%BF/%E7%AE%80%E6%B4%81%E6%A8%A1%E6%9D%BF%E5%A5%97%E8%A3%85/.img/icon.png',
            author: ['MiuxuE'],
            tag: ['信息'],
            version: "0.1.0",
            content: "/market/easybot_template_concise_kit/",
            links: [
                {
                    name: "源代码",
                    href: "https://github.com/zkhssb/easybot-react-vite-template/tree/main"
                },
                {
                    name: "下载",
                    href: "http://dl.inectar.cn/%E5%9B%BE%E7%89%87%E6%A8%A1%E6%9D%BF/%E7%AE%80%E6%B4%81%E6%A8%A1%E6%9D%BF%E5%A5%97%E8%A3%85"
                }
            ]
        },
        props: {
            templateCount: 2,
            dependencies: [
            ]
        }
    },
    {
        manifest: {
            name: '测试图片模板',
            description: '本模板包含了一些基础的图片模板，仅用于测试离线PAPI。',
            icon: 'http://dl.inectar.cn/p/%E5%9B%BE%E7%89%87%E6%A8%A1%E6%9D%BF/%E6%B5%8B%E8%AF%95%E7%94%A8%E5%9B%BE%E7%89%87%E6%A8%A1%E6%9D%BF/icon.png',
            author: ['MiuxuE'],
            tag: ['信息'],
            version: "1.0.0",
            content: "/market/easybot_image_template_1/",
            links: [
                {
                    name: "下载",
                    href: "http://dl.inectar.cn/%E5%9B%BE%E7%89%87%E6%A8%A1%E6%9D%BF/%E6%B5%8B%E8%AF%95%E7%94%A8%E5%9B%BE%E7%89%87%E6%A8%A1%E6%9D%BF"
                }
            ]
        },
        props: {
            templateCount: 1,
            dependencies: [
                'papi',
                'papi-[Player]'
            ]
        }
    },
    {
        manifest: {
            name: '时间模板',
            description: '一个简单的显示当前时间的模板。',
            author: ['MiuxuE'],
            tag: ['信息'],
            version: "1.0.0",
            links: [
                {
                    name: "下载",
                    href: "https://github.com/zkhssb/easybot-image-clock"
                }
            ]
        },
        props: {
            templateCount: 1,
            dependencies: [
            ]
        }
    }
]