import { Button } from 'antd-mobile'
import { useI18n } from '../i18n'
import { siteConfig } from '../site.config'
import { scrollToSection } from '../hooks/useScroll'
import { Icon } from './Icon'
import { Reveal } from './Reveal'

export function Hero() {
  const { t, tx } = useI18n()
  const name = tx(siteConfig.name)

  return (
    <section id="hero" className="hero" aria-label={name}>
      <div className="hero__bg" aria-hidden="true">
        <span className="hero__orb hero__orb--a" />
        <span className="hero__orb hero__orb--b" />
        <span className="hero__grid" />
      </div>

      <div className="hero__inner">
        <div className="hero__main">
          {tx(siteConfig.availability) ? (
            <Reveal>
              <span className="pill">
                <i className="pill__dot" aria-hidden="true" />
                {tx(siteConfig.availability)}
              </span>
            </Reveal>
          ) : null}

          <Reveal delay={70}>
            <div className="hero__ident">
              {siteConfig.avatar ? (
                <img className="hero__avatar" src={siteConfig.avatar} alt={name} width={76} height={76} />
              ) : (
                <span className="hero__avatar hero__avatar--mono" aria-hidden="true">
                  {siteConfig.monogram}
                </span>
              )}
              <div className="hero__identText">
                <span className="hero__kicker">{t.hero.kicker}</span>
                <h1 className="hero__name">{name}</h1>
              </div>
            </div>
          </Reveal>

          <Reveal delay={130}>
            <p className="hero__role">{tx(siteConfig.role)}</p>
          </Reveal>

          <Reveal delay={190}>
            <p className="hero__headline">{t.hero.headline}</p>
          </Reveal>

          <Reveal delay={240}>
            <p className="hero__intro">{t.hero.intro}</p>
          </Reveal>

          <Reveal delay={290}>
            <div className="hero__cta">
              <Button
                className="btn btn--primary"
                color="primary"
                size="large"
                onClick={() => scrollToSection('contact')}
              >
                {t.hero.ctaPrimary}
                <Icon name="arrow" size={16} />
              </Button>
              <Button
                className="btn btn--ghost"
                fill="outline"
                size="large"
                onClick={() => scrollToSection('capabilities')}
              >
                {t.hero.ctaSecondary}
              </Button>
            </div>
          </Reveal>
        </div>

        {/* 手机上这两块紧跟在按钮下方；桌面端整列移动到右侧 */}
        <div className="hero__aside">
          <Reveal delay={340}>
            <ul className="stats">
              {siteConfig.stats.map((stat) => (
                <li className="stat" key={stat.label.en}>
                  <span className="stat__value">
                    {stat.value}
                    <em className="stat__unit">{tx(stat.unit)}</em>
                  </span>
                  <span className="stat__label">{tx(stat.label)}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={380}>
            <p className="hero__location">
              <Icon name="globe" size={14} />
              {tx(siteConfig.location)}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
