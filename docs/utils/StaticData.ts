export const StaticData = {
    backendUrl: "http://chongqing.hualib.com:5000/",
};

export const Templates = [
    {
        manifest: {
            name: '图片模板套装',
            description: '本模板包含了一些基础的图片模板，你可以根据需要选择使用。',
            icon: '/market/assets/easybot_image_template_1.png',
            author: ['MiuxuE'],
            tag: ['信息'],
            version: "1.0.0",
            content: "/market/easybot_image_template_1/",
            links: [
                {
                    name: "下载",
                    href: "https://github.com/zkhssb/easybot-image-template"
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