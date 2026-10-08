/**
 * ============================================================
 *  唯一需要你手动修改的文件 —— 所有"个人信息"都集中在这里
 * ============================================================
 *  改完保存即可，全站中英文会自动同步。
 *  文案（大段介绍文字）在 src/i18n/zh.ts 与 src/i18n/en.ts。
 */

/** 双语文本：中英各一份 */
export type I18nText = { zh: string; en: string }

export const siteConfig = {
  /** 你的名字 */
  name: { zh: '张贤林', en: 'gary zhang' } as I18nText,

  /** 名字首字母 / 品牌标记，显示在左上角方块里（1–2 个字符即可） */
  monogram: 'GZ',

  /** 头像：把你的照片放到 public/ 目录，然后把这里改成 '/avatar.jpg' */
  avatar: '',

  /** 头衔（显示在名字下方） */
  role: {
    zh: '全栈开发工程师 · AI Agent 工程师 · 前沿部署工程师',
    en: 'Full-Stack Engineer · AI Agent Developer · Forward Deployed Engineer',
  } as I18nText,

  /** 所在地 / 协作方式 */
  location: { zh: '中国 · 支持全球远程协作', en: 'China · Remote worldwide' } as I18nText,

  /** 顶部"可接单"提示条；留空字符串则隐藏 */
  availability: {
    zh: '可接新项目 · 通常 24 小时内回复',
    en: 'Available for new projects · Replies within 24h',
  } as I18nText,

  /** 首页数字看板 —— 请务必改成你的真实数字 */
  stats: [
    { value: '20', unit: { zh: '年', en: 'yrs' } as I18nText, label: { zh: '企业级开发经验', en: 'Enterprise experience' } as I18nText },
    { value: '50', unit: { zh: '+', en: '+' } as I18nText, label: { zh: '交付上线项目', en: 'Projects shipped' } as I18nText },
    { value: '4', unit: { zh: '个领域', en: 'areas' } as I18nText, label: { zh: '全栈 / AI Agent / FDE / 企业 AI', en: 'Full-stack / AI Agents / FDE / Enterprise AI' } as I18nText },
    { value: '24', unit: { zh: 'h', en: 'h' } as I18nText, label: { zh: '内响应沟通', en: 'Response time' } as I18nText },
  ],

  /** 联系方式 —— 不需要的项留空字符串即可自动隐藏 */
  contact: {
    email: '32025343@qq.com',
    upwork: 'https://www.upwork.com/freelancers/~01957c6136857a6777',
    github: 'https://github.com/garyzhang1982',
    linkedin: '#',
    wechat: 'zxl0110',
  },
}

export type SiteConfig = typeof siteConfig
