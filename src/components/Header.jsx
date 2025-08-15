import React, { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-gray-800 shadow-sm border-b border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <i className="ri-bar-chart-line text-white text-xl"></i>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">DataPro Dashboard</h1>
              <p className="text-sm text-gray-400">Business Intelligence Portfolio</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#overview" className="text-gray-300 hover:text-blue-400 font-medium transition-colors">
              Overview
            </a>
            <a href="#skills" className="text-gray-300 hover:text-blue-400 font-medium transition-colors">
              Skills
            </a>
            <a href="#projects" className="text-gray-300 hover:text-blue-400 font-medium transition-colors">
              Projects
            </a>
            <a href="#experience" className="text-gray-300 hover:text-blue-400 font-medium transition-colors">
              Experience
            </a>
            <a href="#contact" className="text-gray-300 hover:text-blue-400 font-medium transition-colors">
              Contact
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 text-sm text-gray-400">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Available for hire</span>
            </div>
            <button 
              className="md:hidden w-8 h-8 flex items-center justify-center text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i className="ri-menu-line text-xl"></i>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-700 pt-4">
            <nav className="flex flex-col space-y-2">
              <a href="#overview" className="text-gray-300 hover:text-blue-400 font-medium transition-colors py-2">
                Overview
              </a>
              <a href="#skills" className="text-gray-300 hover:text-blue-400 font-medium transition-colors py-2">
                Skills
              </a>
              <a href="#projects" className="text-gray-300 hover:text-blue-400 font-medium transition-colors py-2">
                Projects
              </a>
              <a href="#experience" className="text-gray-300 hover:text-blue-400 font-medium transition-colors py-2">
                Experience
              </a>
              <a href="#contact" className="text-gray-300 hover:text-blue-400 font-medium transition-colors py-2">
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
