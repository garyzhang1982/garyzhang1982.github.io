import { Collapse } from 'antd-mobile'
import { useI18n } from '../i18n'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { Icon } from './Icon'
import { Reveal } from './Reveal'
import { Section } from './Section'

/** 桌面宽屏下用的卡片（内容全展开，方便扫读） */
function CapabilityCards() {
  const { t } = useI18n()

  return (
    <div className="cards cards--caps">
      {t.capabilities.items.map((item, index) => (
        <Reveal key={item.title} delay={index * 60}>
          <article className="card">
            <header className="card__head">
              <span className="card__icon">
                <Icon name={item.icon} size={20} />
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
  )
}

/** 移动端用的手风琴（省纵向空间） */
function CapabilityCollapse() {
  const { t } = useI18n()

  return (
    <Collapse accordion className="capCollapse">
      {t.capabilities.items.map((item) => (
        <Collapse.Panel
          key={item.title}
          title={
            <span className="cap__head">
              <span className="cap__icon">
                <Icon name={item.icon} size={19} />
              </span>
              <span className="cap__text">
                <span className="cap__title">{item.title}</span>
                <span className="cap__summary">{item.summary}</span>
              </span>
            </span>
          }
        >
          <ul className="bullets">
            {item.points.map((point) => (
              <li key={point}>
                <i className="bullets__dot" aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </Collapse.Panel>
      ))}
    </Collapse>
  )
}

export function Capabilities() {
  const { t } = useI18n()
  const isWide = useMediaQuery('(min-width: 768px)')

  return (
    <Section
      id="capabilities"
      eyebrow={t.capabilities.eyebrow}
      title={t.capabilities.title}
      subtitle={t.capabilities.subtitle}
    >
      {isWide ? (
        <CapabilityCards />
      ) : (
        <Reveal>
          <CapabilityCollapse />
        </Reveal>
      )}
    </Section>
  )
}
