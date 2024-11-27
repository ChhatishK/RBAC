import React from 'react'

const TotalTask = () => {

  const userData = JSON.parse(localStorage.getItem('employee'))

  const employeeDetails = (emp) => {
    localStorage.setItem('loggedInUser', JSON.stringify({role: 'employee', data: emp}))
    localStorage.setItem('byUser', JSON.stringify({role: 'admin'}))
    window.location.reload();
  }

  return (
    <div className='bg-[#1c1c1c] p-5 mt-5 rounded flex flex-col gap-2'>

        <div className='bg-red-400 py-2 px-4 flex justify-between rounded font-medium'>
            <h2 className='w-1/5'>Employee Name</h2>
            <h3 className='w-1/5'>New Task</h3>
            <h5 className='w-1/5'>Active Task</h5>
            <h5 className='w-1/5'>Completed Task</h5>
            <h5 className='w-1/5'>Failed Task</h5>
        </div>

        <div className=''>
            {userData.map((emp, idx) => {
                return <div onClick={() => {employeeDetails(emp)}} key={idx} className='cursor-pointer border-2 border-emerald-400 py-2 px-4 flex justify-between rounded mb-2'>
                    <h2 className='text-lg font-medium w-1/5 '>{emp.firstname}</h2>
                    <h5 className='text-lg font-medium w-1/5 text-blue-600'>{emp.taskCount.new}</h5>
                    <h5 className='text-lg font-medium w-1/5 text-yellow-400'>{emp.taskCount.active}</h5>
                    <h5 className='text-lg font-medium w-1/5 text-white-600'>{emp.taskCount.completed}</h5>
                    <h5 className='text-lg font-medium w-1/5 text-red-600'>{emp.taskCount.failed}</h5>
                  </div>
            })}
        </div>
        
    </div>
  )
}

export default TotalTask