// 本文档使用 Docusaurus 编写，各类内容请查看 https://docusaurus.io

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'McPatchDocs', //网站名称
  tagline: 'Minecraft客户端文件更新解决方案', //网站简介
  favicon: 'img/logo.png', //网站 Icon
  url: 'https://balloonupdate.github.io', //网站地址
  baseUrl: '/', //路由

  // GitHub 编辑引用
  organizationName: 'BalloonUpdate', // 用户 & 组织名
  projectName: 'McPatchDocs', // 仓库名
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  // 国际化
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  // 插件
  plugins: [
    'plugin-image-zoom', //图片灯箱
    './plugins/sponsor-info',
  ],

  // 预设内容。https://docusaurus.io/zh-CN/docs/using-plugins#using-presets
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/BalloonUpdate/McPatchDocs/tree/main',
        },
        blog: {
          showReadingTime: true,
          path: 'blog',
          blogTitle: '更新日志',
          blogSidebarTitle: '所有文章',
          blogSidebarCount: 'ALL',
          showReadingTime: true,
          postsPerPage: 5,
          editUrl:
            'https://github.com/BalloonUpdate/McPatchDocs/tree/main',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  // 主题设置
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',//

      // 顶部全局横条（姑且叫这个）
      /* announcementBar: {
        id: 'support_us',
        content: '该版本仍在编写，请查阅 <a href="https://balloonupdate.github.io/McPatchDocs/">V1版本文档</a> & <a href="https://balloonupdate.github.io/McPatchDocsNext/">V2版本文档</a>',
        backgroundColor: '#84ccc9',
        textColor: '#fff',
        isCloseable: true,
      }, */
      // 网站信息
      navbar: {
        title: 'McPatchDocs', // 网站标题。显示在右上角
        logo: {
          alt: 'McPatchDocs Logo', // Logo名称
          src: 'img/logo.png', //
        },

        // 导航栏
        items: [
          {
            href: '/docs/v1-old/start',
            label: 'V1 文档',
            position: 'left',
          },
          /*{
            href: '/docs/v1/start',
            label: 'V1 新版文档',
            position: 'left',
          },*/
          {
            href: '/docs/v2/start',
            label: 'V2 文档',
            position: 'left',
          },
          // {to: '/blog', label: '更新日志', position: 'left'},
          {
            href: '/docs/release-notes',
            label: '更新记录',
            position: 'left',
          },
          {
            href: '/docs/sponsors',
            label: '赞助名单',
            position: 'right',
          },
          {
            href: '/contribute',
            label: '贡献者列表',
            position: 'right',
          },
          {
            href: 'https://jq.qq.com/?_wv=1027&k=PqAEtn39',
            label: 'QQ群',
            position: 'right',
          },
          {
            href: 'https://github.com/BalloonUpdate',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      // 页脚
      footer: {
        style: 'dark',
        links: [
          {
            title: 'V1版本',
            items: [
              {
                label: '管理端',
                href: 'https://github.com/BalloonUpdate/McPatchManage',
              },
              {
                label: '客户端',
                href: 'https://github.com/BalloonUpdate/McPatchClient',
              },
              {
                label: '服务端',
                href: 'https://github.com/BalloonUpdate/MiniHttpServer',
              },
            ],
          },
          {
            title: 'V2版本',
            items: [
              {
                label: '新客户端',
                href: 'https://github.com/BalloonUpdate/Mcpatch2JavaClient',
              },
              {
                label: '旧客户端',
                href: 'https://github.com/BalloonUpdate/Mcpatch2RustClient',
              },
              {
                label: '管理端',
                href: 'https://github.com/BalloonUpdate/McPatch2',
              },
              {
                label: '加载器',
                href: 'https://github.com/BalloonUpdate/McPatch2Loader',
              },
            ],
          },
          {
            title: '其他',
            items: [
              {
                label: '贡献者列表',
                href: '/contribute',
              }
            ],
          },
          {
            title: '相关链接',
            items: [
              {
                label: 'QQ群',
                href: 'https://jq.qq.com/?_wv=1027&k=PqAEtn39',
              },
              {
                label: '爱发电',
                href: 'https://afdian.com/a/aprilforest',
              },
            ],
          },
        ],
        copyright: `<p><small>© ${new Date().getFullYear()} BalloonUpdate. Bulit with <a href="https://docusaurus.io/zh-CN">Docusaurus</a>.<br>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),

  // 添加主题配置
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // 配置搜索
        language: ["en","zh"],
        // 其他配置
        hashed: true,
        // 显示搜索快捷键提示 (应该是布尔值而不是字符串)
        searchBarShortcutHint: true,
        // 高亮搜索结果
        highlightSearchTermsOnTargetPage: true,
        // 搜索结果预览长度
        searchResultContextMaxLength: 50
      }),
    ],
  ],
};

export default config;