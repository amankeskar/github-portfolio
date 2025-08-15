import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I\'ll get back to you soon.')
    setFormData({
      name: '',
      email: '',
      company: '',
      projectType: '',
      message: ''
    })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <i className="ri-bar-chart-line text-white text-2xl"></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Let's Transform Your Data</h3>
                <p className="text-gray-400">Ready to drive growth through analytics</p>
              </div>
            </div>
            
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              I'm passionate about turning complex data into strategic business insights. 
              Whether you need advanced analytics, predictive modeling, or dashboard development, 
              let's discuss how data can accelerate your business goals.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                  <i className="ri-mail-line text-blue-400"></i>
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-gray-400">aman.keskar@email.com</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center">
                  <i className="ri-phone-line text-green-400"></i>
                </div>
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="text-gray-400">+1 (555) 123-4567</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center">
                  <i className="ri-linkedin-line text-purple-400"></i>
                </div>
                <div>
                  <div className="font-semibold">LinkedIn</div>
                  <div className="text-gray-400">linkedin.com/in/aman-keskar</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-8">
            <h4 className="text-xl font-bold mb-6">Quick Contact</h4>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none text-sm"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none text-sm"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none text-sm"
                  placeholder="Your company name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Project Type</label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none text-sm pr-8"
                >
                  <option value="">Select project type</option>
                  <option value="analytics">Data Analytics</option>
                  <option value="ml">Machine Learning</option>
                  <option value="dashboard">Dashboard Development</option>
                  <option value="consulting">Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  maxLength="500"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none text-sm resize-none"
                  placeholder="Tell me about your data challenges and goals..."
                  required
                ></textarea>
                <div className="text-right text-sm text-gray-400 mt-1">
                  Max 500 characters ({formData.message.length}/500)
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
              >
                <i className="ri-send-plane-line mr-2"></i>
                Send Message
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <a href="https://github.com/amankeskar" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                <i className="ri-github-line text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                <i className="ri-linkedin-line text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                <i className="ri-twitter-line text-xl"></i>
              </a>
              <a href="mailto:aman.keskar@email.com" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                <i className="ri-mail-line text-xl"></i>
              </a>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 Aman Keskar Analytics. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Contact
