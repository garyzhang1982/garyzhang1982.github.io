import { useI18n } from '../i18n'
import { Reveal } from './Reveal'
import { Section } from './Section'

export function Process() {
  const { t } = useI18n()

  return (
    <Section id="process" eyebrow={t.process.eyebrow} title={t.process.title} subtitle={t.process.subtitle}>
      <ol className="steps">
        {t.process.steps.map((step, index) => (
          <Reveal as="li" key={step.title} delay={index * 60} className="steps__item">
            <span className="steps__num">{String(index + 1).padStart(2, '0')}</span>
            <div className="steps__body">
              <h3 className="steps__title">{step.title}</h3>
              <p className="steps__desc">{step.desc}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
