import React from 'react'
import Header from '../Common/Header'
import CreateTask from '../Common/CreateTask'
import TotalTask from '../Common/TotalTask'

const AdminDashboard = (props) => {
  return (
    <div className='h-screen w-full p-10'>

      <Header changeUser={props.changeUser} data={props.data} />

      <CreateTask />

      <TotalTask setUser={props.setUser} />
    </div>
  )
}

export default AdminDashboard