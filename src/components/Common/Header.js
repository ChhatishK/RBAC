import React from 'react'
import { setLocalStorage } from '../../utils/LocalStorage';

const Header = (props) => {


  const logoutUser = (buttonVal) => {
    if (buttonVal == "Log out") {
      localStorage.setItem('loggedInUser','');
      props.changeUser('');
    } else {
      const admin = JSON.parse(localStorage.getItem('admin'))
      localStorage.setItem('loggedInUser', JSON.stringify({role: 'admin', data: admin}))
      localStorage.setItem('byUser', '')
      window.location.reload()
    }
  }

  const byUser = localStorage.getItem('byUser');
  let buttonVal;
  let openByAdmin = false;
  if (byUser) {
    buttonVal = "Back"
    openByAdmin = true
  } else {
    buttonVal = "Log out"
  }

  const deleteUser = () => {
    let employee = JSON.parse(localStorage.getItem('employee'))
    const loggedIn = JSON.parse(localStorage.getItem('loggedInUser'))

    console.log(employee[0].id)
    console.log(loggedIn.data.id)

    employee.filter((emp) => emp.id != loggedIn.data.id)
    setLocalStorage('employee', JSON.stringify(employee))
  }

  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello, <br /> <span className='text-3xl'>{props.data.firstname} 👋</span></h1>

        <div className='flex gap-5'>
          {<button onClick={deleteUser} className='bg-red-600 hover:bg-red-500 text-white px-5 py-2 rounded-sm text-lg font-medium'>Add</button>}

          <button onClick={() => {logoutUser(buttonVal)}} className='bg-red-600 hover:bg-red-500 text-white px-5 py-2 rounded-sm text-lg font-medium'>{buttonVal}</button>


          {openByAdmin && <button onClick={deleteUser} className='bg-red-600 hover:bg-red-500 text-white px-5 py-2 rounded-sm text-lg font-medium'>Add</button>}
          
        </div>
    </div>
  )
}

export default Header