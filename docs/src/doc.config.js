/* eslint-disable */
import packageJson from '../../package.json';
import apis from '../../api-config';
import components from '../../components-config';
import refcomponents from '../../refcomponents-config';
const { version } = packageJson;

export const github = 'https://github.com/youzan/vant-weapp';

export const versions = [version];

export default {
  header: {
    logo: {
      image: 'https://img.yzcdn.cn/vant/logo.png',
      title: 'Wcyui Weapp',
      href: '#/',
    },
    nav: {
      logoLink: [
        {
          image: 'https://img.yzcdn.cn/vant/vant-o.svg',
          url: '/vant',
        }
      ],
    },
  },
  nav: [
    {
      name: '开发指南',
      groups: [
        {
          list: [
            {
              path: '/intro',
              title: '介绍',
              md: true,
            },
            {
              path: '/quickstart',
              title: '快速上手',
              md: true,
            },
            {
              path: '/changelog',
              title: '更新日志',
              md: true,
            }
          ],
        },
      ],
    },
    {
      name: '集成Api',
      groups: apis,
    },{
      name: '扩展组件',
      groups: components,
    },{
      name: '其他',
      groups: refcomponents
    }
  ],
};