import React, { useState } from 'react'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All Projects')
  
  const projects = [
    {
      id: 1,
      title: 'InsightIQ — AI Document Intelligence (RAG)',
      duration: '2 months',
      year: '2025',
      description: 'Architected end-to-end local RAG system for enterprise PDFs with token-aware semantic chunking, FAISS indexing, and traceable citations for grounded answers.',
      impact: 'Zero-cost Inference',
      technologies: ['Python', 'LangChain', 'FAISS', 'HuggingFace', 'Ollama', 'Streamlit'],
      category: 'Machine Learning',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      demoUrl: 'https://github.com/amankeskar/InsightIQ',
      buttonText: 'GitHub',
      buttonIcon: 'ri-github-line'
    },
    {
      id: 2,
      title: 'AutoAdvisor — Personal Finance & Investment Dashboard',
      duration: '1 month',
      year: '2025',
      description: 'Built interactive Streamlit dashboard unifying cash-flow and portfolio views with 10 at-a-glance KPIs, dual-layer insight engine, and production-ready deployment reaching 28 unique reviewers.',
      impact: '85% Less Manual Prep',
      technologies: ['Python', 'Streamlit', 'pandas', 'YAML', 'Git/GitHub'],
      category: 'Analytics',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      demoUrl: '#',
      buttonText: 'Live Demo',
      buttonIcon: 'ri-external-link-line'
    },
    {
      id: 3,
      title: 'Flight Delay Prediction and Analysis',
      duration: '2 months',
      year: '2025',
      description: 'Orchestrated end-to-end ingestion of 116K flight records with NOAA weather data, built gradient-boosting classifier achieving 87% accuracy, and published Tableau dashboard cutting analysis turnaround by 35%.',
      impact: '87% Prediction Accuracy',
      technologies: ['Python', 'REST APIs', 'Tableau', 'NOAA Weather API', 'Gradient Boosting'],
      category: 'Machine Learning',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      demoUrl: '#',
      buttonText: 'Details',
      buttonIcon: 'ri-external-link-line'
    },
    {
      id: 4,
      title: 'Energy Usage Forecasting',
      duration: '2 months',
      year: '2025',
      description: 'Automated nightly ETL for 2.5M smart-meter records, performed advanced feature engineering, and trained gradient-boosting models achieving 91% forecast accuracy with projected 6% annual energy spend reduction.',
      impact: '91% Forecast Accuracy',
      technologies: ['Python', 'R', 'SQL Server', 'AWS S3', 'Git', 'Tableau'],
      category: 'Machine Learning',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      demoUrl: '#',
      buttonText: 'Details',
      buttonIcon: 'ri-external-link-line'
    },
    {
      id: 5,
      title: 'Real-time Sales Dashboard',
      duration: '2 months',
      year: '2024',
      description: 'Created executive dashboard providing real-time sales insights across 15 regions, reducing decision-making time by 60%.',
      impact: '60% Faster Decisions',
      technologies: ['Tableau', 'SQL', 'AWS Redshift'],
      category: 'Visualization',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      demoUrl: '#',
      buttonText: 'Details',
      buttonIcon: 'ri-external-link-line'
    },
    {
      id: 6,
      title: 'Supply Chain Optimization',
      duration: '4 months',
      year: '2023',
      description: 'Analyzed supply chain inefficiencies and implemented optimization strategies that reduced operational costs by $320K annually.',
      impact: '$320K Cost Savings',
      technologies: ['R', 'Power BI', 'Azure'],
      category: 'Analytics',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      demoUrl: '#',
      buttonText: 'Details',
      buttonIcon: 'ri-external-link-line'
    },
    {
      id: 7,
      title: 'Fraud Detection System',
      duration: '5 months',
      year: '2023',
      description: 'Developed ML-based fraud detection system with 97% accuracy, preventing $1.2M in fraudulent transactions.',
      impact: '$1.2M Prevented Loss',
      technologies: ['Python', 'Scikit-learn', 'PostgreSQL'],
      category: 'Machine Learning',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      demoUrl: '#',
      buttonText: 'Details',
      buttonIcon: 'ri-external-link-line'
    },
    {
      id: 8,
      title: 'Marketing Attribution Model',
      duration: '3 months',
      year: '2023',
      description: 'Built multi-touch attribution model that optimized marketing spend allocation, improving ROI by 35%.',
      impact: '35% ROI Improvement',
      technologies: ['Python', 'Google Analytics', 'BigQuery'],
      category: 'Machine Learning',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      demoUrl: '#',
      buttonText: 'Details',
      buttonIcon: 'ri-external-link-line'
    },
    {
      id: 9,
      title: 'Inventory Forecasting Platform',
      duration: '4 months',
      year: '2022',
      description: 'Created automated inventory forecasting system reducing stockouts by 45% and excess inventory by 30%.',
      impact: '45% Fewer Stockouts',
      technologies: ['Python', 'TensorFlow', 'Snowflake'],
      category: 'Machine Learning',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      demoUrl: '#',
      buttonText: 'Details',
      buttonIcon: 'ri-external-link-line'
    }
  ]

  const filters = ['All Projects', 'Machine Learning', 'Analytics', 'Visualization']
  
  const getProjectCount = (filter) => {
    if (filter === 'All Projects') return projects.length
    return projects.filter(project => project.category === filter).length
  }
  
  const filteredProjects = activeFilter === 'All Projects' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
              <i className="ri-folder-chart-line text-blue-600 text-2xl"></i>
            </div>
            <h2 className="text-4xl font-bold text-white">Featured Projects</h2>
          </div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Showcasing data science projects that delivered measurable business impact and 
            drove strategic decision-making.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === filter
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-300'
              }`}
            >
              {filter} ({getProjectCount(filter)})
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-medium">
                    {project.year}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <div className="flex items-center text-gray-400 text-sm">
                    <i className="ri-time-line mr-1"></i>
                    {project.duration}
                  </div>
                </div>
                
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 text-green-400 font-semibold">
                    <i className="ri-arrow-up-line"></i>
                    <span>{project.impact}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <a 
                    href={project.demoUrl}
                    className={`flex-1 font-semibold py-2 px-4 rounded-lg transition-colors whitespace-nowrap cursor-pointer text-center ${
                      project.buttonText === 'GitHub' 
                        ? 'bg-gray-700 hover:bg-gray-600 text-white'
                        : project.buttonText === 'Live Demo'
                        ? 'bg-green-600 hover:bg-green-700 text-white'
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                    }`}
                  >
                    <i className={`${project.buttonIcon} mr-2`}></i>
                    {project.buttonText}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
