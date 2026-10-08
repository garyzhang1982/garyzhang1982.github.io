import { Button, Toast } from 'antd-mobile'
import { useI18n } from '../i18n'
import { siteConfig } from '../site.config'
import { copyText, prettyUrl } from '../utils/clipboard'
import { Icon } from './Icon'
import { Reveal } from './Reveal'
import { Section } from './Section'

export function Contact() {
  const { t } = useI18n()
  const c = siteConfig.contact

  /** 留空或占位符 '#' 都视为「未配置」，避免渲染出点了没反应的死链 */
  const isConfigured = (value: string) => value !== '' && value !== '#'

  const links = [
    { key: 'email', icon: 'mail', label: t.contact.labels.email, value: c.email, href: c.email ? `mailto:${c.email}` : '' },
    { key: 'upwork', icon: 'link', label: t.contact.labels.upwork, value: prettyUrl(c.upwork), href: c.upwork },
    { key: 'github', icon: 'code', label: t.contact.labels.github, value: prettyUrl(c.github), href: c.github },
    { key: 'linkedin', icon: 'globe', label: t.contact.labels.linkedin, value: prettyUrl(c.linkedin), href: c.linkedin },
  ].filter((row) => isConfigured(row.value))

  const handleCopyWechat = async () => {
    const ok = await copyText(c.wechat)
    Toast.show({
      content: ok ? `${t.contact.copied} · ${c.wechat}` : c.wechat,
      position: 'center',
      duration: 1600,
    })
  }

  return (
    <Section id="contact" eyebrow={t.contact.eyebrow} title={t.contact.title} subtitle={t.contact.subtitle}>
      <Reveal>
        <p className="lede">{t.contact.body}</p>
      </Reveal>

      <Reveal delay={50}>
        <div className="contact">
          {links.map((row) => (
            <a
              className="contact__row"
              key={row.key}
              href={row.href}
              target={row.key === 'email' ? undefined : '_blank'}
              rel="noreferrer noopener"
            >
              <span className="contact__icon">
                <Icon name={row.icon} size={18} />
              </span>
              <span className="contact__text">
                <span className="contact__label">{row.label}</span>
                <span className="contact__value">{row.value}</span>
              </span>
              <Icon name="arrow" size={16} className="contact__arrow" />
            </a>
          ))}

          {isConfigured(c.wechat) ? (
            <button type="button" className="contact__row" onClick={handleCopyWechat}>
              <span className="contact__icon">
                <Icon name="chat" size={18} />
              </span>
              <span className="contact__text">
                <span className="contact__label">
                  {t.contact.labels.wechat} · {t.contact.wechatHint}
                </span>
                <span className="contact__value">{c.wechat}</span>
              </span>
              <Icon name="link" size={16} className="contact__arrow" />
            </button>
          ) : null}
        </div>
      </Reveal>

      {isConfigured(c.email) ? (
        <Reveal delay={80}>
          <Button
            className="btn btn--primary btn--block"
            color="primary"
            size="large"
            onClick={() => {
              window.location.href = `mailto:${c.email}`
            }}
          >
            {t.contact.cta}
            <Icon name="arrow" size={16} />
          </Button>
        </Reveal>
      ) : null}
    </Section>
  )
}
