import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type SectionProps = {
  id: string
  eyebrow: string
  title: string
  subtitle?: string
  children: ReactNode
  /** 末尾的补充内容（如指标标签行） */
  footer?: ReactNode
}

export function Section({ id, eyebrow, title, subtitle, children, footer }: SectionProps) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <Reveal>
        <header className="section__head">
          <span className="eyebrow">
            <i className="eyebrow__dot" aria-hidden="true" />
            {eyebrow}
          </span>
          <h2 className="section__title" id={`${id}-title`}>
            {title}
          </h2>
          {subtitle ? <p className="section__subtitle">{subtitle}</p> : null}
        </header>
      </Reveal>
      <div className="section__body">{children}</div>
      {footer ? <div className="section__footer">{footer}</div> : null}
    </section>
  )
}
