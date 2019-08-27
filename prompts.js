module.exports = [
    {
        type: 'list',
        name: 'appTemplate',
        message: '选择一个应用框架',
        choices: [
            { name: '底部导航', value: 'tab_bottom' },
            { name: '首页导航', value: 'home_nav' },
            { name: '侧边导航', value: 'slide_nav' },
            { name: '空白', value: 'blank' }
        ],
        default: 'tab_bottom',
    }
]