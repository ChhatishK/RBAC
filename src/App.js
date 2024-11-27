import React, { useState, useEffect, useContext } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'

import { AuthContext } from './contexts/AuthProvider'

const App = () => {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData, setUserData] = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  },[])

  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({role: 'admin', data: userData.admin}))
      setLoggedInUserData(userData.admin)
    } else if (userData) {
      const employee = userData.employees.find((e) => email === e.email && e.password === password);

      if (employee) {
        setUser("employee")
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({role: 'employee', data: employee}))
      }
    }
    else {
      alert("Invalid Credentials...")
    }
  }

  return (
    <>
      {!user? <Login handleLogin={handleLogin} />: ""}

      {user === 'admin'? <AdminDashboard setUser={setUser} data={loggedInUserData} changeUser={setUser} /> : (user === 'employee' ? <EmployeeDashboard data={loggedInUserData} changeUser={setUser} /> : null)}
    </>
  )
}

export default App