import React from 'react'

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
  if (byUser) {
    buttonVal = "Back"
  } else {
    buttonVal = "Log out"
  }

  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello, <br /> <span className='text-3xl'>{props.data.firstname} 👋</span></h1>

        <button onClick={() => {logoutUser(buttonVal)}} className='bg-red-600 hover:bg-red-500 text-white px-5 py-2 rounded-sm text-lg font-medium'>{buttonVal}</button>
    </div>
  )
}

export default Header