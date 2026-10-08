// antd-mobile 的基础变量与全局样式必须先加载，后面的 tokens.css 才能覆盖它
import 'antd-mobile/es/global'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { I18nProvider } from './i18n'
import App from './App'

import './styles/tokens.css'
import './styles/base.css'
import './styles/components.css'

// 本项目是移动端优先的深色站点：让 antd-mobile 从一开始就进入暗色模式
document.documentElement.setAttribute('data-prefers-color-scheme', 'dark')

const container = document.getElementById('root')
if (!container) throw new Error('找不到 #root 挂载点')

createRoot(container).render(
  <StrictMode>
    <I18nProvider>
      <App />
    </I18nProvider>
  </StrictMode>,
)
