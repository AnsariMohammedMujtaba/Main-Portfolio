import { Github, Linkedin } from 'lucide-react'

export default function SocialLinks() {
  return (
    <div className="flex space-x-6">
      <a
        href="https://www.linkedin.com/in/ansarimohammedmujtaba/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-400 transition-colors"
      >
        <Linkedin className="w-12 h-12" />
      </a>
      <a
        href="https://github.com/AnsariMohammedMujtaba"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-200 transition-colors"
      >
        <Github className="w-12 h-12" />
      </a>
    </div>
  )
}

