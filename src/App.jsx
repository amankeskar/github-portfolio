import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <Hero />
      <Stats />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto px-6 py-8">
        <Skills />
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                <i className="ri-line-chart-line text-blue-600 text-xl"></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Performance Analytics</h3>
                <p className="text-gray-400">Project impact over time</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-400">Revenue Impact ($K)</span>
              </div>
            </div>
          </div>
          
          <div className="h-80 bg-gray-700 rounded-lg flex items-center justify-center mb-6">
            <div className="text-center">
              <i className="ri-line-chart-line text-blue-400 text-4xl mb-4"></i>
              <p className="text-gray-400">Performance Chart Placeholder</p>
              <p className="text-sm text-gray-500">Revenue impact visualization</p>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-700">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">$1.6M</div>
              <div className="text-sm text-gray-400">Total Revenue Impact</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">62</div>
              <div className="text-sm text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">98%</div>
              <div className="text-sm text-gray-400">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
      <Projects />
      <Experience />
      <Contact />
    </div>
  )
}

export default App
