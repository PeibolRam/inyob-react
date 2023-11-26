import './App.css'
import { Hero } from './components/Hero'
import { Find } from './components/Find'
import { HowWorks } from './components/HowWorks'
import { WhyJoin } from './components/WhyJoin'
import { Invite } from './components/Invite'
import { Companies } from './components/Companies'
import { Reviews } from './components/Reviews'

function App() {

  return (
    <main>
      <Hero />
      <Find />
      <HowWorks />
      <WhyJoin />
      <Invite />
      <Companies />
      <Reviews />
    </main>
  )
}

export default App
