import React from 'react'

const TaskListNumber = ({data}) => {
    
  return (
    <div className='flex w-full gap-5 mt-5 bg-[#333333] py-5 px-5 justify-between rounded'>
        
        <div className='w-[45%] p-9 py-6 rounded-xl bg-sky-400'>
            <h2 className='text-2xl font-medium'>{data.taskCount.new}</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>

        <div className='w-[45%] p-9 py-6 rounded-xl bg-green-400'>
            <h2 className='text-2xl font-medium'>{data.taskCount.completed}</h2>
            <h3 className='text-xl font-medium'>Completed Task</h3>
        </div>

        <div className='w-[45%] p-9 py-6 rounded-xl bg-blue-400'>
            <h2 className='text-2xl font-medium'>{data.taskCount.active}</h2>
            <h3 className='text-xl font-medium'>Accepted Task</h3>
        </div>

        <div className='w-[45%] p-9 py-6 rounded-xl bg-red-400'>
            <h2 className='text-2xl font-medium'>{data.taskCount.failed}</h2>
            <h3 className='text-xl font-medium'>Failed Task</h3>
        </div>

        <div className='w-[45%] p-9 py-6 rounded-xl bg-orange-400'>
            <h2 className='text-2xl font-medium'>{data.taskCount.ignored}</h2>
            <h3 className='text-xl font-medium'>Ignored Task</h3>
        </div>
        
    </div>
  )
}

export default TaskListNumber