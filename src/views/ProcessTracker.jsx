// ProcessTracker.js

import React from 'react';

const ProcessTracker = ({ status }) => {
  const steps = [
    { title: 'Employee Request', status: 'pending' },
    { title: 'Department Approval', status: 'pending' },
    { title: 'Procurement', status: 'pending' },
    { title: 'Delivery', status: 'pending' },
  ];

  // Update the status of completed steps
  steps.forEach((step, index) => {
    if (index < steps.length - 1) {
      step.status = index === 0 ? 'completed' : steps[index - 1].status === 'completed' ? 'in-progress' : 'pending';
    } else {
      step.status = status;
    }
  });

  return (
    <div className="flex space-x-4">
      {steps.map((step, index) => (
        <div key={index} className="flex-1 flex items-center">
          <div
            className={`rounded-full h-8 w-8 flex items-center justify-center ${
              step.status === 'completed' ? 'bg-green-500' : 'bg-gray-300'
            }`}
          >
            {step.status === 'completed' && <span className="text-white">&#10003;</span>}
          </div>
          <div
            className={`flex-1 ${
              index < steps.length - 1 ? 'border-b-2 border-gray-300' : ''
            } ml-2 text-sm text-gray-600`}
          >
            {step.title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProcessTracker;
