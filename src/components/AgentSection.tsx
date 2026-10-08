import { useI18n } from '../i18n'
import { Icon } from './Icon'
import { Reveal } from './Reveal'
import { Section } from './Section'

export function AgentSection() {
  const { t } = useI18n()

  return (
    <Section
      id="agent"
      eyebrow={t.agent.eyebrow}
      title={t.agent.title}
      subtitle={t.agent.subtitle}
    >
      <Reveal>
        <p className="lede">{t.agent.intro}</p>
      </Reveal>

      <div className="cards">
        {t.agent.items.map((item, index) => (
          <Reveal key={item.title} delay={index * 60}>
            <article className="card">
              <header className="card__head">
                <span className="card__icon">
                  <Icon name={item.icon} size={20} />
                </span>
                <span className="card__num">{String(index + 1).padStart(2, '0')}</span>
              </header>
              <h3 className="card__title">{item.title}</h3>
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

      <Reveal>
        <div className="chipsBlock">
          <span className="chipsBlock__label">{t.agent.stackLabel}</span>
          <div className="chips">
            {t.agent.stack.map((tech) => (
              <span className="chip" key={tech}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
