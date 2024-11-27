import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('');
    const [password, setPasword] = useState('');

    const submitHandler = (e) => {

        e.preventDefault();

        handleLogin(email, password)

        setEmail("");
        setPasword("");
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-emerald-600 p-20 rounded-xl'>

            <form onSubmit={(e) => {submitHandler(e)}} className='flex flex-col items-center justify-center gap-5'>
                <input 
                value={email} 
                onChange={(e) => {setEmail(e.target.value)}} 
                required 
                className='border-2 border-emerald-600 rounded-full text-xl py-3 text-white outline-none bg-transparent placeholder:text-gray-400 px-5' type='email' placeholder='Enter your email' />

                <input 
                value={password} 
                onChange={(e) => {setPasword(e.target.value)}} 
                required 
                className='border-2 border-emerald-600 rounded-full text-xl py-3 text-white outline-none bg-transparent placeholder:text-gray-400 px-5' type='password' placeholder='Enter your password' />

                <button  className='bg-emerald-500 hover:bg-emerald-600 transition-all duration-200 rounded-full text-xl py-3 px-5 text-white outline-none w-full font-semibold'>Log in</button>
            </form>

        </div>
        
    </div>
  )
}

export default Login