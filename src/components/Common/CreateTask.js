import React, { useRef, useState } from 'react'
import { setLocalStorage } from '../../utils/LocalStorage';
const CreateTask = () => {

  const employee = JSON.parse(localStorage.getItem('employee'));

  const [task, setTask] = useState({
    title : '',
    date : '',
    assignTo: '',
    categories: '',
    description: '',
    active: false, new: true, failed: false, completed: false, ignored: false

  })

  const changeHandler = (e) => {
    const {value, name} = e.target;

    setTask(prevData => {
      return {...prevData, [name] : value}
    })
  }

  const submitHandler = (e) => {
    e.preventDefault();

    const employees = JSON.parse(localStorage.getItem('employee'))

    if (task.title === '') {
      alert("Title is mandatory!")
      return;
    } else if (task.date === '' || new Date(task.date) < new Date()) {
      alert("Date should be assigned properly!")
      return;
    } else if (task.assignTo === '') {

      console.log(new Date(task.date))
      console.log(new Date())

      console.log(new Date(task.date) > new Date())
      alert('Choose employee!')
      return;
    } else if (task.categories === '') {
      alert("Write categories of task!")
      return;
    } else if (task.description === '') {
      alert("Write description!")
      return;
    } else {
      console.log("Task Created!")

      
      employees.forEach((emp) => {
        if (emp.firstname === task.assignTo) {
          emp.tasks.push(task)
          console.log(emp)
        }
      });
    }

    localStorage.setItem('employee', JSON.stringify(employees));
    setLocalStorage()

    setTask({date: '', title:'', assignTo: '', description: '', categories: ''})
  }

  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
    <form onSubmit={(e) => {submitHandler(e)}} className='flex items-start justify-between flex-wrap w-full'>

      <div className='w-1/2'>
        <div>
          <h3 className='text-xm text-gray-300 mb-0.5'>Task Title</h3>
          <input 
          type='text' 
          name='title'
          placeholder='Make a UI design' 
          value={task.title}
          onChange={changeHandler}
          className='text-xm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' />
        </div>

        <div className='flex flex-col'>
          <h3 className='text-xm text-gray-300 mb-0.5 mt-3'>Date</h3>
          <input 
          name='date'
          value={task.date}
          onChange={changeHandler}
          type='date' 
          onFocus={(e) => e.target.showPicker()}
          
          className='appearance-none text-xm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] mb-4' 
          />
        </div>

        <div>
          <h3 className='text-xm text-gray-300 mb-0.5'>Assign to</h3>

          <select 
          name='assignTo'
          value={task.assignTo}
          onChange={changeHandler}
          className='text-xm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'>
            <option className='bg-[#1c1c1c]'>Select employee</option>
            {employee.map((emp, index) => {
              return <option className='bg-[#1c1c1c]' key={index}>{emp.firstname}</option>
            })}
          </select>
        </div>
        <div>
          <h3 className='text-xm text-gray-300 mb-0.5'>Category</h3>
          <input 
          type='text' 
          name='categories'
          placeholder='Design, Dev, etc' 
          value={task.categories}
          onChange={changeHandler}
          className='text-xm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' />
        </div>

      </div>

      <div className='w-2/5 flex flex-col items-start'>
        <h3 className='text-xm text-gray-300 mb-0.5'>Description</h3>
        <textarea 
        rows={10} 
        cols={30}  
        name='description'
        value={task.description}
        onChange={changeHandler}
        className='w-full h-44 text-xm py-4 px-2 w[4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 text-xl'>
        </textarea>

        <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full transition-all duration-200 font-semibold'>Create Task</button>
      </div>

    </form>
  </div>
  )
}

export default CreateTask