import { Mail, Phone } from 'lucide-react'

export default function Contact() {
  return (
    <section className="section-spacing px-4 bg-gray-900/30" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="section-title">Let's Work Together...</h2>
        <div className="space-y-8">
          <a href="mailto:mohammedmujtaba.j@gmail.com" 
             className="flex items-center justify-center gap-4 text-gray-300 hover:text-purple-400 transition-colors text-xl">
            <Mail className="w-8 h-8" />
            <span>mohammedmujtaba.j@gmail.com</span>
          </a>
          <a href="tel:+917796759917" 
             className="flex items-center justify-center gap-4 text-gray-300 hover:text-purple-400 transition-colors text-xl">
            <Phone className="w-8 h-8" />
            <span>+917796759917</span>
          </a>
        </div>
      </div>
    </section>
  )
}

