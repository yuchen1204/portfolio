import { useState, useEffect } from 'react'

const projects = [
  {
    id: 1,
    title: 'Canvas on Web',
    description: '一个基于web且功能完善的画板，后续还会更新功能',
    tags: ['React'],
    url: 'https://canvas-on-web.vercel.app/',
    image: 'https://blogdata.yuchen.my/canvas-on-web-vercel-app-.jpg',
  },
  {
    id: 2,
    title: 'Daylo',
    description: '集 Markdown 编辑、自由画布、思维导图于一体的渐进式网络应用（PWA），贯彻"本地优先"原则',
    tags: ['React', 'IndexedDB', 'PWA'],
    url: 'https://daylo.yuchen.my/',
    image: 'https://blogdata.yuchen.my/daylo-yuchen-my.jpg',
  },
  {
    id: 3,
    title: 'Roulet训练小游戏',
    description: '在Resort World Genting当荷官时开发的训练算法小游戏',
    tags: ['React'],
    url: 'https://rollet-48c72.web.app/',
    image: 'https://blogdata.yuchen.my/rollet-48c72-web-app-.jpg',
  }
]

const skills = [
  'Python', 'Go', 'React', 'Vibe Coding', 'PostgreSQL', 'MySQL', 'Redis', 'MongoDB', 'Vite', 'Pentest'
]

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/yuchen1204', icon: 'M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z' },
  { name: 'Twitter', url: 'https://x.com/yccc_0000', icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' },
  { name: 'Email', url: 'mailto:yuchen@yuchen.my', icon: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z' }
]

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm border-b border-gray-100' : 'bg-transparent'}`}>
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <button onClick={() => scrollToSection('home')} className="text-base font-semibold text-gray-900 hover:text-pink-500 transition-colors cursor-pointer tracking-tight">
            yuchenx
          </button>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6">
            {['about', 'projects', 'skills', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-sm font-medium text-gray-500 hover:text-pink-500 transition-colors cursor-pointer capitalize"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-b border-gray-100">
            {['about', 'projects', 'skills', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-6 py-3 text-sm font-medium text-gray-500 hover:text-pink-500 capitalize cursor-pointer"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-16 relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-20 -left-32 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-20 -right-32 w-72 h-72 bg-violet-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <div className="fade-in mb-12">
            <div className="relative w-full max-w-md h-56 mx-auto rounded-3xl overflow-hidden">
              <img 
                src="https://blogdata.yuchen.my/wx_camera_1759208458247.jpg" 
                alt="" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="flex justify-center -mt-10 relative z-10">
              <img 
                src="https://blogdata.yuchen.my/IMG_20250316_223312_263.jpg" 
                alt="yuchenx" 
                className="w-28 h-28 object-cover rounded-full shadow-lg border-4 border-white"
              />
            </div>
          </div>
          <div className="fade-in">
            <p className="text-sm font-medium text-pink-500 uppercase tracking-widest mb-4">Full Stack Developer</p>
          </div>
          <h1 className="fade-in stagger-1 text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            yuchenx 雨晨
          </h1>
          <div className="fade-in stagger-2">
            <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-lg mx-auto leading-relaxed">
              全栈开发者，后端使用 Go，数据库常用 PostgreSQL，前端喜欢 React。具备红队网络安全技术背景。
            </p>
          </div>
          <div className="fade-in stagger-3 flex flex-wrap justify-center gap-3">
            <button 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-pink-500 to-violet-500 text-white px-6 py-2.5 text-sm font-medium cursor-pointer hover:shadow-lg hover:opacity-90 transition-all duration-200"
            >
              View Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-white text-gray-900 border border-gray-200 px-6 py-2.5 text-sm font-medium cursor-pointer hover:border-pink-300 hover:text-pink-500 transition-all duration-200"
            >
              Get In Touch
            </button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-gradient-to-b from-white to-pink-50/50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">About</h2>
          
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              我是一名<span className="text-gray-900 font-medium">全栈开发者</span>，后端熟悉 Go 语言，数据库常用 PostgreSQL，前端偏好 React。
            </p>
            <p>
              同时具备<span className="text-gray-900 font-medium">红队网络安全技术</span>背景，曾在云顶高原度假村担任荷官，现离职在家寻找新的工作机会。
            </p>
            <p>
              我热爱技术，擅长 <span className="text-gray-900 font-medium">Vibe Coding</span>，喜欢用代码创造有趣的项目。
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-gradient-to-b from-pink-50/50 to-violet-50/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Projects</h2>
          <p className="text-center text-gray-400 text-sm mb-12">近期作品</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, index) => (
              <a 
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card bg-white p-0 cursor-pointer block overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-full h-40 bg-gray-100">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="bg-pink-50 text-pink-500 px-2.5 py-1 text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-gradient-to-b from-violet-50/50 to-white relative overflow-hidden">
        {/* Decorative */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-pink-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-violet-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30"></div>
        
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Skills</h2>
          
          <div className="flex flex-wrap justify-center gap-2.5">
            {skills.map((skill, index) => (
              <div 
                key={skill}
                className="bg-white border border-gray-200 px-4 py-2 text-sm text-gray-600 cursor-pointer hover:border-pink-300 hover:text-pink-500 transition-all duration-200"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gray-900 text-white">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-400 mb-10">
            有兴趣一起合作的话，随时联系我。
          </p>
          
          <div className="flex justify-center gap-4 mb-10">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-500 transition-colors cursor-pointer"
                aria-label={link.name}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d={link.icon} />
                </svg>
              </a>
            ))}
          </div>

          <div className="inline-block">
            <p className="text-gray-500 text-xs mb-2">Email</p>
            <a 
              href="mailto:yuchen@yuchen.my" 
              className="text-pink-400 hover:text-pink-300 transition-colors"
            >
              yuchen@yuchen.my
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs text-gray-400">
            &copy; 2024 yuchenx
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
