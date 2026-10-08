import { useI18n } from '../i18n'
import { Icon } from './Icon'
import { Reveal } from './Reveal'
import { Section } from './Section'

export function EnterpriseSection() {
  const { t } = useI18n()

  return (
    <Section
      id="enterprise"
      eyebrow={t.enterprise.eyebrow}
      title={t.enterprise.title}
      subtitle={t.enterprise.subtitle}
      footer={
        <Reveal>
          <div className="chipsBlock">
            <span className="chipsBlock__label">{t.enterprise.metricsLabel}</span>
            <div className="chips">
              {t.enterprise.metrics.map((metric) => (
                <span className="chip chip--accent" key={metric}>
                  {metric}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      }
    >
      <Reveal>
        <p className="lede">{t.enterprise.intro}</p>
      </Reveal>

      <div className="cards">
        {t.enterprise.items.map((item, index) => (
          <Reveal key={item.title} delay={index * 50}>
            <article className="card card--compact">
              <header className="card__head">
                <span className="card__icon">
                  <Icon name={item.icon} size={19} />
                </span>
                <h3 className="card__title card__title--inline">{item.title}</h3>
              </header>
              <p className="card__summary">{item.summary}</p>
              <ul className="bullets">
                {item.points.map((point) => (
                  <li key={point}>
                    <i className="bullets__dot" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
