import React from 'react'

const NewTask = ({task}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl p-5'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>{task.categories}</h3>
            <h4 className='text-sm'>{task.date}</h4>
        </div>

        <h2 className='mt-5 text-2xl font-semibold'>{task.title}</h2>
        <p className='text-sm mt-2'>{task.description}</p>

        <div className='flex justify-between mt-4'>
            <button className='bg-green-500 px-2 py-1 w-1/2 text-sm rounded'>Accept Task</button>
            <button className='bg-orange-300 px-2 py-1 w-2/5 text-sm rounded'>Ingore Task</button>
        </div>

    </div>
  )
}

export default NewTask