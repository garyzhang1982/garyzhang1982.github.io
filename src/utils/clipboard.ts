/** 复制到剪贴板；优先 Clipboard API，失败时回退到 execCommand */
export async function copyText(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text)
      return true
    }
  } catch {
    /* 继续尝试回退方案 */
  }

  try {
    const area = document.createElement('textarea')
    area.value = text
    area.setAttribute('readonly', '')
    area.style.position = 'fixed'
    area.style.top = '-1000px'
    area.style.opacity = '0'
    document.body.appendChild(area)
    area.select()
    const ok = document.execCommand('copy')
    document.body.removeChild(area)
    return ok
  } catch {
    return false
  }
}

/** 去掉协议与结尾斜杠，用于展示链接 */
export function prettyUrl(url: string): string {
  return url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/+$/, '')
}
