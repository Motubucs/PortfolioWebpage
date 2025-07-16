"use client"

import { useState, useEffect } from "react"
import { Github, ExternalLink, Mail, Linkedin, Twitter, ChevronDown, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution built with Next.js, featuring real-time inventory management and secure payment processing.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      github: "#",
      live: "#",
    },
    {
      title: "AI Chat Application",
      description:
        "Real-time chat application with AI integration, featuring message encryption and smart reply suggestions.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["React", "Node.js", "Socket.io", "OpenAI"],
      github: "#",
      live: "#",
    },
    {
      title: "Task Management Dashboard",
      description:
        "Collaborative project management tool with drag-and-drop functionality and team collaboration features.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["Vue.js", "Express", "MongoDB", "WebSocket"],
      github: "#",
      live: "#",
    },
  ]

  const otherWorks = [
    {
      title: "UI/UX Design Portfolio",
      description: "Collection of user interface designs for mobile and web applications",
      category: "Design",
      link: "#",
    },
    {
      title: "Technical Blog",
      description: "Articles about web development, best practices, and emerging technologies",
      category: "Writing",
      link: "#",
    },
    {
      title: "Open Source Contributions",
      description: "Contributions to various open source projects and libraries",
      category: "Development",
      link: "#",
    },
    {
      title: "Photography",
      description: "Landscape and street photography showcasing visual storytelling",
      category: "Creative",
      link: "#",
    },
  ]

  const blurAmount = Math.min(scrollY / 300, 10)

  return (
    <div className={`min-h-screen transition-all duration-1000 ${isDarkMode ? "bg-gray-900" : "bg-white"} relative`}>
      {/* Theme Toggle Button */}
      <div className="fixed top-6 right-6 z-50">
        <Button
          onClick={toggleTheme}
          size="icon"
          className={`rounded-full transition-all duration-500 transform hover:scale-110 ${
            isDarkMode
              ? "bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 text-gray-900 shadow-lg shadow-yellow-500/25"
              : "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-lg shadow-purple-500/25"
          }`}
        >
          {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </Button>
      </div>

      {/* Background Image */}
      <div className="fixed inset-0 z-0 opacity-10">
        <img src="/placeholder.svg?height=1080&width=1920" alt="Background" className="w-full h-full object-cover" />
      </div>

      {/* Hero Section */}
      <section
        className="min-h-screen w-full flex items-center justify-center relative overflow-hidden"
        style={{
          filter: `blur(${blurAmount}px)`,
          transform: `scale(${1 + scrollY * 0.0005})`,
        }}
      >
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          {isDarkMode ? (
            <>
              {/* Dark Mode Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900"></div>
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl animate-pulse delay-2000"></div>
              <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-pink-500/20 rounded-full blur-2xl animate-bounce"></div>
              <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-3000"></div>
            </>
          ) : (
            <>
              {/* Light Mode Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-200/40 rounded-full blur-3xl animate-pulse delay-2000"></div>
              <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-pink-200/30 rounded-full blur-2xl animate-bounce"></div>
              <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-cyan-200/30 rounded-full blur-3xl animate-pulse delay-3000"></div>
            </>
          )}
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 rounded-full ${
                isDarkMode ? "bg-white/20" : "bg-purple-400/30"
              } animate-pulse`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="text-center z-10 px-4 max-w-6xl mx-auto">
          
           
            {!isDarkMode && (
              <div className="absolute inset-0 p-1 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-3xl -z-10"></div>
            )}

            <h1
              className={`text-7xl md:text-9xl font-bold mb-8 tracking-tight transition-all duration-1000 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Mustafa Tarig
            </h1>

            <p
              className={`text-2xl md:text-3xl mb-10 max-w-4xl transition-all duration-1000 ${
                isDarkMode ? "text-purple-200" : "text-gray-700"
              }`}
            >
              Full Stack Developer & Creative Technologist
            </p>

            <p
              className={`text-xl mb-16 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Crafting digital experiences with modern technologies and innovative design. Passionate about creating
              solutions that make a difference in the digital world.
            </p>

            <div className="flex gap-8 justify-center mb-16">
              {[Github, Linkedin, Twitter, Mail].map((Icon, index) => (
                <div key={index} className="relative group">
                  {!isDarkMode && (
                    <div className="absolute inset-0 p-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full -z-10 group-hover:scale-110 transition-transform"></div>
                  )}
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`transition-all duration-300 transform hover:scale-110 ${
                      isDarkMode
                        ? "bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40"
                        : "bg-white hover:bg-gray-50 text-gray-700 border-0"
                    }`}
                  >
                    <Icon className="w-7 h-7" />
                  </Button>
                </div>
              ))}
            </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown
            className={`w-10 h-10 transition-colors duration-1000 ${isDarkMode ? "text-white/60" : "text-gray-500"}`}
          />
        </div>
      </section>

      {/* Projects Section */}
      <section
        className={`py-20 px-4 md:px-8 relative z-20 sticky top-0 shadow-lg border-t-4 border-transparent bg-clip-padding transition-all duration-1000 ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <div
          className={`absolute inset-x-0 top-0 h-1 transition-all duration-1000 ${
            isDarkMode
              ? "bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400"
              : "bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600"
          }`}
        ></div>

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className={`text-5xl font-bold mb-6 transition-colors duration-1000 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Featured Projects
            </h2>
            <p
              className={`text-xl max-w-3xl mx-auto transition-colors duration-1000 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              A showcase of my recent work, featuring full-stack applications and innovative solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="relative group">
                <div
                  className={`absolute inset-0 p-0.5 rounded-lg -z-10 transition-all duration-1000 ${
                    isDarkMode
                      ? "bg-gradient-to-r from-purple-400 to-cyan-400"
                      : "bg-gradient-to-r from-purple-600 to-blue-600"
                  }`}
                ></div>
                <Card
                  className={`hover:scale-105 transition-all duration-300 border-0 h-full ${
                    isDarkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-white hover:bg-gray-50"
                  }`}
                >
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle
                      className={`mb-3 text-xl transition-colors duration-1000 ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {project.title}
                    </CardTitle>
                    <CardDescription
                      className={`mb-4 line-clamp-3 transition-colors duration-1000 ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {project.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-3 py-1 text-xs text-white rounded-full transition-all duration-1000 ${
                            isDarkMode
                              ? "bg-gradient-to-r from-purple-400 to-cyan-400"
                              : "bg-gradient-to-r from-purple-600 to-blue-600"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      {[
                        { icon: Github, text: "Code" },
                        { icon: ExternalLink, text: "Live Demo" },
                      ].map((btn, btnIndex) => (
                        <div key={btnIndex} className="relative">
                          {!isDarkMode && (
                            <div className="absolute inset-0 p-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded -z-10"></div>
                          )}
                          <Button
                            variant="ghost"
                            size="sm"
                            className={`transition-all duration-300 ${
                              isDarkMode
                                ? "bg-white/10 hover:bg-white/20 text-white border border-white/20"
                                : "bg-white hover:bg-gray-50 text-gray-700 border-0"
                            }`}
                          >
                            <btn.icon className="w-4 h-4 mr-2" />
                            {btn.text}
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Works Section */}
      <section
        className={`py-20 px-4 md:px-8 relative z-30 sticky top-0 shadow-lg border-t-4 border-transparent bg-clip-padding transition-all duration-1000 ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <div
          className={`absolute inset-x-0 top-0 h-1 transition-all duration-1000 ${
            isDarkMode
              ? "bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400"
              : "bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600"
          }`}
        ></div>

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className={`text-5xl font-bold mb-6 transition-colors duration-1000 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Other Works
            </h2>
            <p
              className={`text-xl max-w-3xl mx-auto transition-colors duration-1000 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Beyond development, I explore various creative and technical endeavors
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {otherWorks.map((work, index) => (
              <div key={index} className="relative group cursor-pointer">
                <div
                  className={`absolute inset-0 p-0.5 rounded-lg -z-10 transition-all duration-1000 ${
                    isDarkMode
                      ? "bg-gradient-to-r from-purple-400 to-cyan-400"
                      : "bg-gradient-to-r from-purple-600 to-blue-600"
                  }`}
                ></div>
                <Card
                  className={`hover:scale-105 transition-all duration-300 border-0 h-full ${
                    isDarkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-white hover:bg-gray-50"
                  }`}
                >
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <CardTitle
                          className={`mb-2 text-xl transition-colors duration-300 ${
                            isDarkMode
                              ? "text-white group-hover:text-cyan-300"
                              : "text-gray-900 group-hover:text-purple-600"
                          }`}
                        >
                          {work.title}
                        </CardTitle>
                        <span
                          className={`px-3 py-1 text-xs text-white rounded-full transition-all duration-1000 ${
                            isDarkMode
                              ? "bg-gradient-to-r from-purple-400 to-cyan-400"
                              : "bg-gradient-to-r from-purple-600 to-blue-600"
                          }`}
                        >
                          {work.category}
                        </span>
                      </div>
                      <ExternalLink
                        className={`w-5 h-5 transition-colors duration-300 ${
                          isDarkMode
                            ? "text-gray-400 group-hover:text-white"
                            : "text-gray-500 group-hover:text-gray-700"
                        }`}
                      />
                    </div>
                    <CardDescription
                      className={`text-base transition-colors duration-1000 ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {work.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-12 px-4 md:px-8 relative z-40 sticky top-0 shadow-lg border-t-4 border-transparent bg-clip-padding transition-all duration-1000 ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <div
          className={`absolute inset-x-0 top-0 h-1 transition-all duration-1000 ${
            isDarkMode
              ? "bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400"
              : "bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600"
          }`}
        ></div>

        <div className="max-w-7xl mx-auto">
          <div className="relative">
            <div
              className={`absolute inset-0 p-0.5 rounded-2xl -z-10 transition-all duration-1000 ${
                isDarkMode
                  ? "bg-gradient-to-r from-purple-400 to-cyan-400"
                  : "bg-gradient-to-r from-purple-600 to-blue-600"
              }`}
            ></div>
            <div
              className={`rounded-2xl p-8 text-center transition-all duration-1000 ${
                isDarkMode ? "bg-gray-700" : "bg-white"
              }`}
            >
              <h3
                className={`text-2xl font-bold mb-4 transition-colors duration-1000 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Let's Work Together
              </h3>
              <p
                className={`mb-6 max-w-2xl mx-auto transition-colors duration-1000 ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                I'm always interested in new opportunities and exciting projects. Let's connect and create something
                amazing together.
              </p>
              <Button
                className={`transition-all duration-1000 border-0 ${
                  isDarkMode
                    ? "bg-gradient-to-r from-purple-400 to-cyan-400 hover:from-purple-300 hover:to-cyan-300 text-gray-900"
                    : "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                }`}
              >
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className={`transition-colors duration-1000 ${isDarkMode ? "text-gray-500" : "text-gray-400"}`}>
              © 2024 Mustafa Tarig. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
