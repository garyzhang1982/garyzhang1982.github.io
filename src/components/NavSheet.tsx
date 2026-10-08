import { Popup } from 'antd-mobile'
import { useI18n } from '../i18n'
import { scrollToSection } from '../hooks/useScroll'
import { Icon } from './Icon'
import { siteConfig } from '../site.config'

type NavSheetProps = {
  open: boolean
  activeId: string
  onClose: () => void
}

export function NavSheet({ open, activeId, onClose }: NavSheetProps) {
  const { t, tx } = useI18n()

  const go = (id: string) => {
    onClose()
    // 等底部弹层收起再滚动，避免动画打架
    window.setTimeout(() => scrollToSection(id), 220)
  }

  return (
    <Popup
      visible={open}
      position="bottom"
      onMaskClick={onClose}
      destroyOnClose
      bodyClassName="navsheet"
      bodyStyle={{
        // 让弹层与 560px 内容列对齐，而不是贴在浏览器窗口左右边缘
        left: 'max(0px, calc(50% - 280px))',
        width: 'min(100%, 560px)',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
      }}
    >
      <div className="navsheet__head">
        <span className="navsheet__title">{t.nav.title}</span>
        <button type="button" className="iconbtn" onClick={onClose} aria-label="关闭">
          <Icon name="close" size={16} />
        </button>
      </div>

      <nav className="navsheet__list">
        {t.nav.items.map((item, index) => (
          <button
            key={item.id}
            type="button"
            className={`navsheet__item${activeId === item.id ? ' is-active' : ''}`}
            onClick={() => go(item.id)}
          >
            <span className="navsheet__index">{String(index + 1).padStart(2, '0')}</span>
            <span className="navsheet__label">{item.label}</span>
            <Icon name="arrow" size={16} className="navsheet__arrow" />
          </button>
        ))}
      </nav>

      <div className="navsheet__foot">
        <span className="navsheet__mark" aria-hidden="true">
          {siteConfig.monogram}
        </span>
        <span>{tx(siteConfig.location)}</span>
      </div>
    </Popup>
  )
}
