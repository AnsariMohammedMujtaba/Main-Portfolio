import Head from 'next/head'
import Navbar from '../components/navbar'
import SocialLinks from '../components/social-links'
import StatusBadge from '../components/status-badge'
import Introduction from '../components/introduction'
import Experience from '../components/experience'
import Skills from '../components/skills'
import Projects from '../components/projects'
import Contact from '../components/contact'

export default function Home() {
  return (
    <>
      <Head>
        <title>Mohammed Mujtaba</title>
      </Head>
      <main className="bg-[#0a0b14]">
        <Navbar />
        <div className="hero-bg min-h-screen flex flex-col items-center justify-center relative px-4">
          <div className="max-w-4xl mx-auto text-center relative">
            {/* Visible vertical line */}
            <div className="absolute left-0 top-0 bottom-0 hero-line"></div>

            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 pl-6">
              Hi, I'm <span className="text-purple-500">Mujtaba</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-8 pl-6">
              I Make highly functional<br />websites and Applications.
            </p>
            <StatusBadge>
              Looking for Job
            </StatusBadge>
            <div className="mt-6 text-purple-400 text-3xl pl-6">
              +917796759917
            </div>
            <div className="mt-8 pl-6">
              <SocialLinks />
            </div>
          </div>
        </div>
        <Introduction className="section-spacing" />
        <Experience className="section-spacing" />
        <Skills className="section-spacing" />
        <Projects className="section-spacing" />
        <Contact className="section-spacing" />
      </main>
    </>
  )
}
