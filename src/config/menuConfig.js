const menuList = [
    {
        title: '首页',
        key: '/'
    },
    {
        title: 'UI',
        key: '/ui',
        children: [
            {
                title: '按钮',
                key: '/ui/buttons'
            },
            {
                title: '弹框',
                key: '/ui/modals'
            },
            {
                title: 'loading',
                key: '/ui/loading'
            }
        ]
    },
    {
        title: '表格',
        key: '/table',
        children: [
            {
                title: '表格1',
                key: '/table/1'
            },
            {
                title: '表格2',
                key: '/table/2'
            },
            {
                title: '表格3',
                key: '/table/3'
            }
        ]
    }
]

export default menuList