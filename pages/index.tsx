import Layout from '../components/Layout'
import Hero from '../components/Home/Hero'
import Whatwedo from '../components/Home/Whatwedo'
import Whoweare from '../components/Home/Whoweare'
import About from '../components/Home/About'
import Team from '../components/Home/Team'
import Client from '../components/Home/Client'
import Contact from '../components/Home/Contact'

export default function Index() {
  return (
    <Layout>
      <Hero />
      <Whatwedo />
      <Whoweare />
      <About />
      <Team />
      <Client />
      <Contact />
    </Layout>
  )
}
