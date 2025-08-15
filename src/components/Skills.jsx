import React from 'react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming & Analytics',
      skills: [
        { name: 'Python', level: 95, color: 'bg-emerald-500' },
        { name: 'SQL', level: 92, color: 'bg-emerald-500' },
        { name: 'R', level: 88, color: 'bg-blue-500' },
        { name: 'JavaScript', level: 75, color: 'bg-yellow-500' }
      ]
    },
    {
      title: 'Machine Learning',
      skills: [
        { name: 'TensorFlow', level: 90, color: 'bg-emerald-500' },
        { name: 'Scikit-learn', level: 93, color: 'bg-emerald-500' },
        { name: 'PyTorch', level: 85, color: 'bg-blue-500' },
        { name: 'XGBoost', level: 87, color: 'bg-blue-500' }
      ]
    },
    {
      title: 'Visualization & BI',
      skills: [
        { name: 'Tableau', level: 96, color: 'bg-emerald-500' },
        { name: 'Power BI', level: 91, color: 'bg-emerald-500' },
        { name: 'D3.js', level: 78, color: 'bg-yellow-500' },
        { name: 'Plotly', level: 84, color: 'bg-blue-500' }
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      skills: [
        { name: 'AWS', level: 89, color: 'bg-blue-500' },
        { name: 'Azure', level: 82, color: 'bg-blue-500' },
        { name: 'Snowflake', level: 86, color: 'bg-blue-500' },
        { name: 'Docker', level: 73, color: 'bg-yellow-500' }
      ]
    }
  ]

  return (
    <div id="skills" className="bg-gray-800 border border-gray-700 rounded-xl p-8 shadow-sm">
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mr-3">
          <i className="ri-code-s-slash-line text-indigo-600 text-xl"></i>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white">Skills Matrix</h3>
          <p className="text-gray-400">Technical proficiency overview</p>
        </div>
      </div>

      <div className="space-y-8">
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <h4 className="text-lg font-semibold text-gray-200 mb-4">{category.title}</h4>
            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 min-w-0 flex-1">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-32 bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-1000 ${skill.color}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-semibold text-gray-400 w-10 text-right">
                      {skill.level}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-gray-700">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
              <span className="text-gray-400">Expert (90%+)</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-gray-400">Advanced (80%+)</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span className="text-gray-400">Intermediate (70%+)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
