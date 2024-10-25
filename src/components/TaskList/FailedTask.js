import React from 'react'

const FailedTask = ({task}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl p-5'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>{task.categories[0]}</h3>
            <h4 className='text-sm'>{task.date}</h4>
        </div>

        <h2 className='mt-5 text-2xl font-semibold'>{task.title}</h2>
        <p className='text-sm mt-2'>{task.description}</p>

        <div className='mt-4'>
            <button className='bg-red-300 px-2 py-1 text-sm rounded w-full'>Failed</button>
        </div>

    </div>
  )
}

export default FailedTask