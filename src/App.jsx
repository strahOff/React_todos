import TableSection from "./components/TableSection"
import IntroSection from "./IntroSection"
import { useState } from "react"

export default function App() {
  const [tab, setTab] = useState('main');
  return (
    <>
      <main>
        <IntroSection />
        {tab === 'main' && (
          <>
            <TableSection />
          </>
        )}
      </main>
    </>
  )
}
