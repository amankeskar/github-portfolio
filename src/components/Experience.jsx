import React from 'react'

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Data Scientist',
      company: 'TechFlow Analytics',
      period: '2022 - Present',
      location: 'San Francisco, CA',
      description: 'Leading data science initiatives for Fortune 500 clients, developing ML models that increased operational efficiency by 40% and reduced costs by $1.2M annually.',
      achievements: [
        'Built customer lifetime value prediction model increasing retention by 35%',
        'Led team of 6 analysts in cross-functional product development',
        'Implemented automated reporting system saving 20 hours/week'
      ],
      technologies: ['Python', 'TensorFlow', 'AWS', 'Snowflake', 'Tableau'],
      dotColor: 'bg-blue-500'
    },
    {
      title: 'Data Analyst',
      company: 'Tata Consultancy Services (TCS)',
      period: 'Jul 2022 – Jul 2023',
      location: 'Pune, India',
      description: 'Designed enterprise-grade BI solutions and optimized data infrastructure, delivering significant performance improvements and cost savings through advanced analytics and governance frameworks.',
      achievements: [
        'Designed governed Power BI semantic model cutting query time from 14s to 2s',
        'Enabled 5 departments to build 30+ self-serve reports, reducing ad-hoc requests by 60%',
        'Investigated anomalies surfacing $1.2M revenue leakage and implemented recovery solutions',
        'Reduced refresh incidents by 70% through KPI codification and data contracts'
      ],
      technologies: ['Power BI', 'T-SQL', 'DAX', 'Star Schema', 'RLS', 'Data Governance'],
      dotColor: 'bg-indigo-500'
    },
    {
      title: 'Business Intelligence Analyst',
      company: 'DataDriven Solutions',
      period: '2020 - 2022',
      location: 'New York, NY',
      description: 'Specialized in creating executive dashboards and performing advanced analytics to drive strategic business decisions across multiple verticals.',
      achievements: [
        'Developed sales forecasting model with 94% accuracy rate',
        'Created 25+ interactive dashboards for C-level executives',
        'Reduced report generation time by 75% through automation'
      ],
      technologies: ['SQL', 'Power BI', 'R', 'Excel VBA', 'Azure'],
      dotColor: 'bg-green-500'
    },
    {
      title: 'Data Analyst',
      company: 'StartupMetrics Inc',
      period: '2019 - 2020',
      location: 'Austin, TX',
      description: 'Analyzed user behavior and product metrics for early-stage startups, providing insights that guided product development and market expansion strategies.',
      achievements: [
        'Identified key user segments leading to 60% increase in conversion',
        'Built A/B testing framework adopted across 12 product teams',
        'Created cohort analysis revealing $500K revenue opportunity'
      ],
      technologies: ['Python', 'Google Analytics', 'Mixpanel', 'PostgreSQL'],
      dotColor: 'bg-purple-500'
    }
  ]

  return (
    <section id="experience" className="bg-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
              <i className="ri-briefcase-line text-orange-600 text-2xl"></i>
            </div>
            <h2 className="text-4xl font-bold text-white">Professional Experience</h2>
          </div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A track record of delivering data-driven solutions and leading high-impact projects 
            across diverse industries.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-600"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start">
                <div className={`absolute left-6 w-4 h-4 ${exp.dotColor} rounded-full border-4 border-gray-800 shadow-sm`}></div>
                
                <div className="ml-20 bg-gray-900 border border-gray-700 rounded-xl p-8 shadow-sm w-full">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="mb-4 lg:mb-0">
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                      <div className="flex items-center text-lg font-semibold text-indigo-400 mb-2">
                        <i className="ri-building-line mr-2"></i>
                        {exp.company}
                      </div>
                      <div className="flex items-center text-gray-400 space-x-4">
                        <div className="flex items-center">
                          <i className="ri-calendar-line mr-2"></i>
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <i className="ri-map-pin-line mr-2"></i>
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-white mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start">
                          <i className="ri-check-line text-green-400 mr-3 mt-0.5 flex-shrink-0"></i>
                          <span className="text-gray-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
