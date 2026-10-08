import { useEffect, useState } from 'react'

/** 页面滚动进度 0–1，用于顶部进度条 */
export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let raf = 0

    const update = () => {
      raf = 0
      const doc = document.documentElement
      const max = doc.scrollHeight - window.innerHeight
      setProgress(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0)
    }

    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) window.cancelAnimationFrame(raf)
    }
  }, [])

  return progress
}

/** 滚动到指定区块（自动避开吸顶头部，靠 CSS scroll-margin-top 处理） */
export function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

/** 当前位于视口中线的区块 id，用于导航高亮 */
export function useActiveSection(ids: string[]): string {
  const key = ids.join('|')
  const [active, setActive] = useState(ids[0] ?? '')

  useEffect(() => {
    const list = key ? key.split('|') : []
    const elements = list
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (!elements.length || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (hit) setActive(hit.target.id)
      },
      // 只在视口中线附近的一条横带里判定，避免多个区块同时命中
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.5, 1] },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [key])

  return active
}
