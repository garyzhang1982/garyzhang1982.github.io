import { useI18n } from '../i18n'
import { Icon } from './Icon'
import { Reveal } from './Reveal'
import { Section } from './Section'

export function FdeSection() {
  const { t } = useI18n()

  return (
    <Section id="fde" eyebrow={t.fde.eyebrow} title={t.fde.title} subtitle={t.fde.subtitle}>
      <Reveal>
        <p className="lede">{t.fde.intro}</p>
      </Reveal>

      <Reveal delay={60}>
        <blockquote className="quote quote--def">
          <span className="quote__mark" aria-hidden="true">
            &ldquo;
          </span>
          <p>{t.fde.definition}</p>
        </blockquote>
      </Reveal>

      <Reveal delay={90}>
        <h3 className="subhead">{t.fde.phasesTitle}</h3>
      </Reveal>

      <ol className="timeline">
        {t.fde.phases.map((phase, index) => (
          <Reveal as="li" key={phase.title} delay={index * 60} className="timeline__item">
            <span className="timeline__node">
              <Icon name={phase.icon} size={16} />
            </span>
            <div className="timeline__body">
              <span className="timeline__tag">{phase.tag}</span>
              <h4 className="timeline__title">{phase.title}</h4>
              <p className="timeline__desc">{phase.desc}</p>
            </div>
          </Reveal>
        ))}
      </ol>

      <Reveal>
        <div className="fit">
          <h3 className="subhead">{t.fde.fitTitle}</h3>
          <ul className="bullets bullets--roomy">
            {t.fde.fit.map((point) => (
              <li key={point}>
                <i className="bullets__dot" aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  )
}
