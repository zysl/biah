<<<<<<< HEAD
import imgHomeUrl1 from '../images/sider/icon_home.png';
import imgHomeUrl2 from '../images/sider/home_select.png';
import imgAllUrl1 from '../images/sider/icon_all.png';
import imgAllUrl2 from '../images/sider/icon_all_select.png';
import imgProjectUrl1 from '../images/sider/icon_project.png';
import imgProjectUrl2 from '../images/sider/icon_project_select.png';
import imgTeamUrl1 from '../images/sider/icon_team.png';
import imgTeamUrl2 from '../images/sider/icon_team_select.png';
import imgBugUrl1 from '../images/sider/icon_bug.png';
import imgBugUrl2 from '../images/sider/icon_bug_select.png';
import imgSynUrl1 from '../images/sider/icon_syn.png';
import imgSynUrl2 from '../images/sider/icon_syn_select.png';

const menuConfig = [
  {
    title: '七日汇总',
    key: '/',
    icon: imgHomeUrl1,
    iconSelect:imgHomeUrl2
  },
  {
    title: '汇总统计',
    key: '/all',
    icon: imgAllUrl1,
    iconSelect:imgAllUrl2
  },
  {
    title: '项目分析',
    key: '/project',
    icon: imgProjectUrl1,
    iconSelect:imgProjectUrl2
  },
  {
    title: '团队分析',
    key: '/team',
    icon: imgTeamUrl1,
    iconSelect:imgTeamUrl2
  },
  {
    title: '漏洞分析',
    key: '/bug',
    icon: imgBugUrl1,
    iconSelect:imgBugUrl2
  },
  {
    title: '同步管理',
    key: '/syn',
    icon: imgSynUrl1,
    iconSelect:imgSynUrl2
  },
=======

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
>>>>>>> 862198c11d7bf4186af4f4752e9ad287176aab86
];

export default menuConfig;
