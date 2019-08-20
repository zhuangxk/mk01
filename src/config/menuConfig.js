const menuList = [
    {
        title: '首页',
        key: '/admin/home'
    },
    {
        title: 'UI',
        key: '/admin/ui',
        children: [
            {
                title: '按钮',
                key: '/admin/ui/buttons'
            },
            {
                title: '弹框',
                key: '/admin/ui/modals'
            },
            {
                title: 'loading',
                key: '/admin/ui/loading'
            }
        ]
    },
    {
        title: '表格',
        key: '/admin/table',
        children: [
            {
                title: '表格1',
                key: '/admin/table/1'
            },
            {
                title: '表格2',
                key: '/admin/table/2'
            },
            {
                title: '表格3',
                key: '/admin/table/3'
            }
        ]
    }
]

export default menuList