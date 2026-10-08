import { useI18n } from '../i18n'
import { Icon } from './Icon'
import { Reveal } from './Reveal'
import { Section } from './Section'

export function WhyMe() {
  const { t } = useI18n()

  return (
    <Section id="why" eyebrow={t.why.eyebrow} title={t.why.title} subtitle={t.why.subtitle}>
      <div className="cards cards--grid">
        {t.why.items.map((item, index) => (
          <Reveal key={item.title} delay={index * 60}>
            <article className="card card--why">
              <span className="card__icon">
                <Icon name={item.icon} size={20} />
              </span>
              <h3 className="card__title card__title--sm">{item.title}</h3>
              <p className="card__summary">{item.desc}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <blockquote className="quote quote--hero">
          <p>{t.why.quote}</p>
        </blockquote>
      </Reveal>
    </Section>
  )
}
