import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-purple-800">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Hi, I'm <span className="text-green-400">Rafael</span>! 👋
          </h1>
          <p className="text-xl md:text-2xl text-purple-200 mb-8">
            Welcome to my personal space where I share my projects, hobbies, and adventures!
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="#projects" 
              className="bg-green-500 text-black px-8 py-3 rounded-full hover:bg-green-400 transition-colors font-semibold"
            >
              View My Projects
            </a>
            <a 
              href="#contact" 
              className="border-2 border-green-400 text-green-400 px-8 py-3 rounded-full hover:bg-green-400 hover:text-black transition-colors font-semibold"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-black py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">About Me</h2>
            <p className="text-lg text-purple-200 leading-relaxed">
              I'm a passionate student who loves building cool projects with my friends and my grandpa! 
              Whether it's launching balloon surveillance systems or competing in speech and debate, 
              I'm always excited to learn new things and take on exciting challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12">My Projects</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Balloon Surveillance Project */}
              <div className="bg-black border-2 border-green-400 rounded-xl shadow-lg p-8 hover:shadow-green-400/50 transition-shadow">
                <div className="text-4xl mb-4">🎈</div>
                <h3 className="text-2xl font-bold text-white mb-4">Balloon Surveillance Project</h3>
                <p className="text-purple-200 mb-6">
                  An exciting project I worked on with my friends and my grandpa! We built a high-altitude 
                  balloon system for surveillance and data collection. It was an amazing learning experience 
                  combining engineering, electronics, and teamwork.
                </p>
                <a 
                  href="#" 
                  className="inline-block bg-green-500 text-black px-6 py-2 rounded-lg hover:bg-green-400 transition-colors font-semibold"
                >
                  Learn More
                </a>
              </div>

              {/* Speech & Debate */}
              <div className="bg-black border-2 border-green-400 rounded-xl shadow-lg p-8 hover:shadow-green-400/50 transition-shadow">
                <div className="text-4xl mb-4">🎤</div>
                <h3 className="text-2xl font-bold text-white mb-4">Speech & Debate</h3>
                <p className="text-purple-200 mb-6">
                  I'm passionate about speech and debate! It's helped me develop critical thinking skills, 
                  public speaking abilities, and the confidence to express my ideas clearly. I love the 
                  challenge of crafting compelling arguments and presenting them effectively.
                </p>
                <a 
                  href="#" 
                  className="inline-block bg-green-500 text-black px-6 py-2 rounded-lg hover:bg-green-400 transition-colors font-semibold"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-12">My Hobbies</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center bg-purple-900 p-6 rounded-xl border border-green-400">
                <div className="text-5xl mb-4">🛠️</div>
                <h3 className="text-xl font-semibold text-white mb-2">Building Things</h3>
                <p className="text-purple-200">I love creating and building projects, from electronics to software!</p>
              </div>
              
              <div className="text-center bg-purple-900 p-6 rounded-xl border border-green-400">
                <div className="text-5xl mb-4">💻</div>
                <h3 className="text-xl font-semibold text-white mb-2">Technology</h3>
                <p className="text-purple-200">Exploring new technologies and learning how things work under the hood.</p>
              </div>
              
              <div className="text-center bg-purple-900 p-6 rounded-xl border border-green-400">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold text-white mb-2">Problem Solving</h3>
                <p className="text-purple-200">Tackling complex challenges and finding creative solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-r from-purple-800 via-black to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-8">Let's Connect!</h2>
            <p className="text-xl mb-8 text-purple-200">
              I'd love to hear from you! Whether you want to collaborate on a project, 
              discuss ideas, or just say hello, feel free to reach out.
            </p>
            
            <div className="flex justify-center space-x-6 mb-8">
              <a 
                href="#" 
                className="bg-green-500 text-black px-6 py-3 rounded-full hover:bg-green-400 transition-colors flex items-center space-x-2 font-semibold"
              >
                <span>📧</span>
                <span>Email</span>
              </a>
              <a 
                href="#" 
                className="bg-green-500 text-black px-6 py-3 rounded-full hover:bg-green-400 transition-colors flex items-center space-x-2 font-semibold"
              >
                <span>🐦</span>
                <span>Twitter</span>
              </a>
              <a 
                href="#" 
                className="bg-green-500 text-black px-6 py-3 rounded-full hover:bg-green-400 transition-colors flex items-center space-x-2 font-semibold"
              >
                <span>📷</span>
                <span>Instagram</span>
              </a>
              <a 
                href="#" 
                className="bg-green-500 text-black px-6 py-3 rounded-full hover:bg-green-400 transition-colors flex items-center space-x-2 font-semibold"
              >
                <span>💼</span>
                <span>LinkedIn</span>
              </a>
            </div>
            
            <p className="text-sm text-purple-300">
              Built with ❤️ using Next.js and Tailwind CSS
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

