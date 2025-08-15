import React from 'react'

const Hero = () => {
  return (
    <section 
      id="overview" 
      className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.9), rgba(109, 40, 217, 0.7)), url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/70"></div>
      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
              <i className="ri-user-3-line text-white text-2xl"></i>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Aman Keskar</h2>
              <p className="text-blue-200">Business Intelligence Specialist</p>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Transforming Data Into
            <span className="text-yellow-400"> Strategic Insights</span>
          </h1>
          
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Experienced data professional with 5+ years driving business growth through 
            advanced analytics, machine learning, and strategic data visualization. 
            Specialized in turning complex datasets into actionable business intelligence.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <i className="ri-trophy-line text-yellow-400"></i>
              <span>5+ Years Experience</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <i className="ri-team-line text-green-400"></i>
              <span>15+ Projects Delivered</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <i className="ri-bar-chart-fill text-blue-400"></i>
              <span>$2M+ Revenue Impact</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors whitespace-nowrap cursor-pointer">
              <i className="ri-download-line mr-2"></i>
              Download Resume
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer">
              <i className="ri-mail-line mr-2"></i>
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
