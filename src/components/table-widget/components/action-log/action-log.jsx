import React from 'react'

const ActionLog = ({ actions }) => {
  return (
    <div className="rounded-lg">
      <h2 className="text-gray-500 text-sm font-semibold mb-4">ACTION LOG</h2>
      <div className="relative">
        {/* Loop through the actions */}
        {actions.map((action, index) => (
          <div key={index} className="flex items-start space-x-3 last:mb-0">
            {/* bullet and line */}
            <div className="flex flex-col items-center">
              {/* bullet */}
              <div className='pt-1'>
                <div className="w-4 h-4 bg-white border-2 border-gray-400 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                </div>
              </div>

              {/* Improved Dashed Line */}
              {index < actions.length - 1 && (
                <div className="h-8 border-l-2 border-dashed border-gray-400 my-1"></div>
              )}
            </div>

            {/* Action details */}
            <div>
              <p className="text-gray-900 font-semibold">{action.title}</p>
              <p className="text-gray-500 text-sm">{action.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ActionLog