import { useI18n } from '../i18n'
import { siteConfig } from '../site.config'

export function Footer() {
  const { t, tx } = useI18n()
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <span className="footer__mark" aria-hidden="true">
        {siteConfig.monogram}
      </span>
      <p className="footer__note">{t.footer.note}</p>
      <p className="footer__meta">
        © {year} {tx(siteConfig.name)}
      </p>
      <p className="footer__meta footer__meta--dim">{t.footer.builtWith}</p>
    </footer>
  )
}
