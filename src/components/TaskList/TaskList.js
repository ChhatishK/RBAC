import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import IgnoredTask from './IgnoredTask'

const TaskList = ({data}) => {
    
  return (
    <div id='taskList' className='h-[55%] px-4 py-5 bg-[#2c2c2c] flex flex-nowrap mt-10 gap-5 w-full overflow-x-scroll rounded'>
        {data.tasks.map((task, index) => {
            if (task.new) {
                return <NewTask key={index} task={task} />
            }
        })}
        {data.tasks.map((task, index) => {
            if (task.active) {
                return <AcceptTask key={index} task={task} />
            }
        })}
        {data.tasks.map((task, index) => {
            if (task.completed) {
                return <CompleteTask key={index} task={task} />
            }
        })}
        {data.tasks.map((task, index) => {
            if (task.failed) {
                return <FailedTask key={index} task={task} />
            }
        })}
        {data.tasks.map((task, index) => {
            if (task.ignored) {
                return <IgnoredTask key={index} task={task} />
            }
        })}
        
    </div>
  )
}

export default TaskList