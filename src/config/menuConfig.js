
const menuConfig = [
    {
        title: '模块A',
        key: '/',
        breadcrumbName: 'index',
    },
    {
        title: '模块B',
        key: '/all',
        breadcrumbName: 'all',
    },
    {
        title: '模块C',
        key: '/project',
        breadcrumbName: 'project',
    },
    {
        title: '模块D',
        key: '/team',
        breadcrumbName: 'project',
    },
    {
        title: '模块E',
        key: '/syn',
        breadcrumbName: 'syn',
        children: [
            {
                title: 'Option1',
                key: '/syn',
                breadcrumbName: 'Option1',
            },
            {
                title: 'Option2',
                key: '/Option2',
                breadcrumbName: 'Option2',
            },
            {
                title: 'Option3',
                key: '/Option3',
                breadcrumbName: 'Option3',
            },
            {
                title: 'Option4',
                key: '/Option4',
                breadcrumbName: 'Option4',
            },
        ]
    },
];

export default menuConfig;
