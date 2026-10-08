import { useMemo, useState } from 'react'
import { useI18n } from './i18n'
import { useActiveSection } from './hooks/useScroll'
import { TopBar } from './components/TopBar'
import { NavSheet } from './components/NavSheet'
import { Hero } from './components/Hero'
import { Capabilities } from './components/Capabilities'
import { AgentSection } from './components/AgentSection'
import { FdeSection } from './components/FdeSection'
import { EnterpriseSection } from './components/EnterpriseSection'
import { TechStack } from './components/TechStack'
import { WhyMe } from './components/WhyMe'
import { Process } from './components/Process'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  const { t } = useI18n()
  const [navOpen, setNavOpen] = useState(false)

  const sectionIds = useMemo(() => t.nav.items.map((item) => item.id), [t])
  const activeId = useActiveSection(sectionIds)

  return (
    <div className="app">
      <TopBar onOpenNav={() => setNavOpen(true)} activeId={activeId} />

      <main className="main">
        <Hero />
        <Capabilities />
        <AgentSection />
        <FdeSection />
        <EnterpriseSection />
        <TechStack />
        <WhyMe />
        <Process />
        <Contact />
      </main>

      <Footer />

      <NavSheet open={navOpen} activeId={activeId} onClose={() => setNavOpen(false)} />
    </div>
  )
}
