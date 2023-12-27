import { Hero } from '../components/Hero'
import { Find } from '../components/Find'
import { HowWorks } from '../components/HowWorks'
import { WhyJoin } from '../components/WhyJoin'
import { Invite } from '../components/Invite'
import { Companies } from '../components/Companies'
import { Reviews } from '../components/Reviews'

export const Home = () => {
  return (
    <>
      <Hero />
      <Find />
      <HowWorks />
      <WhyJoin />
      <Invite />
      <Companies />
      <Reviews />
    </>
  )
}
