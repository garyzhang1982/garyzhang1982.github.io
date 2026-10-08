import { useI18n, type Locale } from '../i18n'
import { siteConfig } from '../site.config'
import { useScrollProgress, scrollToSection } from '../hooks/useScroll'
import { Icon } from './Icon'

type TopBarProps = {
  onOpenNav: () => void
  /** 当前所在区块，用于高亮顶部导航 */
  activeId: string
}

const LANGS: { key: Locale; label: string }[] = [
  { key: 'zh', label: '中' },
  { key: 'en', label: 'EN' },
]

export function TopBar({ onOpenNav, activeId }: TopBarProps) {
  const { locale, setLocale, tx, t } = useI18n()
  const progress = useScrollProgress()

  // 顶部栏空间有限：只取头衔的第一段（如「全栈开发工程师」），避免被截断成半截词
  const shortRole = tx(siteConfig.role).split('·')[0].trim()

  return (
    <header className="topbar">
      <div className="topbar__row">
        <button
          type="button"
          className="topbar__brand"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label={tx(siteConfig.name)}
        >
          <span className="topbar__mark" aria-hidden="true">
            {siteConfig.monogram}
          </span>
          <span className="topbar__meta">
            <span className="topbar__name">{tx(siteConfig.name)}</span>
            <span className="topbar__role">{shortRole}</span>
          </span>
        </button>

        {/* 桌面端：横向导航（移动端与平板由 CSS 隐藏，改用底部弹层） */}
        <nav className="topnav" aria-label={t.nav.title}>
          {t.nav.items.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`topnav__link${activeId === item.id ? ' is-active' : ''}`}
              onClick={() => scrollToSection(item.id)}
              aria-current={activeId === item.id ? 'true' : undefined}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="topbar__actions">
          <div className="lang" role="group" aria-label={t.meta.switchTo}>
            <span
              className={`lang__thumb${locale === 'en' ? ' lang__thumb--end' : ''}`}
              aria-hidden="true"
            />
            {LANGS.map((item) => (
              <button
                key={item.key}
                type="button"
                className={`lang__opt${locale === item.key ? ' is-active' : ''}`}
                onClick={() => setLocale(item.key)}
                aria-pressed={locale === item.key}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="iconbtn topbar__menu"
            onClick={onOpenNav}
            aria-label={t.meta.navAria}
          >
            <Icon name="menu" size={18} />
          </button>
        </div>
      </div>

      <span
        className="topbar__progress"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />
    </header>
  )
}
