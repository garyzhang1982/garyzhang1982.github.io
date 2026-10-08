import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { siteConfig, type I18nText } from '../site.config'
import { en } from './en'
import { zh, type Dict } from './zh'

export type Locale = 'zh' | 'en'

const DICTS: Record<Locale, Dict> = { zh, en }
const STORAGE_KEY = 'person-introduce.locale'

type I18nValue = {
  locale: Locale
  t: Dict
  setLocale: (locale: Locale) => void
  toggle: () => void
  /** 读取 site.config 里的双语字段 */
  tx: (text: I18nText) => string
}

const I18nContext = createContext<I18nValue | null>(null)

/** 首次进入：优先用上次的选择，其次跟随浏览器语言 */
function detectInitialLocale(): Locale {
  if (typeof window === 'undefined') return 'zh'
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved === 'zh' || saved === 'en') return saved
  } catch {
    /* 隐私模式下 localStorage 可能不可用，忽略 */
  }
  const nav = window.navigator.language?.toLowerCase() ?? ''
  return nav.startsWith('zh') ? 'zh' : 'en'
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(detectInitialLocale)

  const setLocale = useCallback((next: Locale) => setLocaleState(next), [])
  const toggle = useCallback(() => setLocaleState((prev) => (prev === 'zh' ? 'en' : 'zh')), [])

  useEffect(() => {
    const dict = DICTS[locale]
    document.documentElement.lang = dict.meta.htmlLang
    document.title = `${siteConfig.name[locale]} · ${siteConfig.role[locale]}`
    try {
      window.localStorage.setItem(STORAGE_KEY, locale)
    } catch {
      /* 忽略写入失败 */
    }
  }, [locale])

  const value = useMemo<I18nValue>(
    () => ({
      locale,
      t: DICTS[locale],
      setLocale,
      toggle,
      tx: (text: I18nText) => text[locale],
    }),
    [locale, setLocale, toggle],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n 必须在 <I18nProvider> 内部使用')
  return ctx
}
