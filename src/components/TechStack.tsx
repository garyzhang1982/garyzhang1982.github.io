import { useState } from 'react'
import { Tabs } from 'antd-mobile'
import { useI18n } from '../i18n'
import { Reveal } from './Reveal'
import { Section } from './Section'

export function TechStack() {
  const { t } = useI18n()
  const [activeKey, setActiveKey] = useState(t.stack.groups[0].key)

  const group = t.stack.groups.find((item) => item.key === activeKey) ?? t.stack.groups[0]

  return (
    <Section id="stack" eyebrow={t.stack.eyebrow} title={t.stack.title} subtitle={t.stack.subtitle}>
      <Reveal>
        <div className="stackTabs">
          <Tabs activeKey={group.key} onChange={setActiveKey}>
            {t.stack.groups.map((item) => (
              <Tabs.Tab key={item.key} title={item.label} />
            ))}
          </Tabs>
        </div>
      </Reveal>

      <Reveal delay={50}>
        <div className="chips chips--panel">
          {group.items.map((tech) => (
            <span className="chip" key={tech}>
              {tech}
            </span>
          ))}
        </div>
      </Reveal>
    </Section>
  )
}
