import React from 'react'

const Stats = () => {
  const stats = [
    {
      icon: 'ri-money-dollar-circle-line',
      value: '$2.1M',
      label: 'Revenue Generated',
      description: 'Direct business impact from data projects',
      change: '+23%',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      icon: 'ri-folder-chart-line',
      value: '47',
      label: 'Projects Delivered',
      description: 'Successfully completed analytics initiatives',
      change: '+12%',
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      icon: 'ri-save-line',
      value: '$850K',
      label: 'Cost Savings',
      description: 'Operational efficiency improvements',
      change: '+18%',
      gradient: 'from-purple-500 to-indigo-600'
    },
    {
      icon: 'ri-target-line',
      value: '94.2%',
      label: 'Model Accuracy',
      description: 'Average ML model performance',
      change: '+5.3%',
      gradient: 'from-orange-500 to-red-600'
    }
  ]

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.gradient} rounded-lg flex items-center justify-center`}>
                  <i className={`${stat.icon} text-white text-2xl`}></i>
                </div>
                <div className="flex items-center space-x-1 text-sm font-medium text-green-400">
                  <i className="ri-arrow-up-line"></i>
                  <span>{stat.change}</span>
                </div>
              </div>
              
              <div className="mb-2">
                <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
                <h4 className="text-lg font-semibold text-gray-300">{stat.label}</h4>
              </div>
              
              <p className="text-gray-400 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
