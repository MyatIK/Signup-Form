import Input from "./components/Input"
import { useState } from "react"

function App() {

  const[user,setUser]=useState('');
  const[pwd,setpwd]=useState();
  

  return (
    <>
    <div className="grid justify-center p-5">
      <h4 className='text-gray-500 mb-5 text-center font-bold'>Sign up to connect with friends<br/>and see what's on their mind.</h4>
      <form> 
        <Input label='username' id='username' type='text' placeholder='username'/>
        <Input label='full name' id='full name' type='text' placeholder='full name'/>
        <Input label='email' id='email' type='email' placeholder='email'/>
        <Input label='password' id='password' type='password' placeholder='password'/>
        
        <button type='button' className="bg-indigo-400 p-3 rounded-md block mt-5 w-full text-center">Sign Up</button>
        
      </form>
      <div className="mt-3 flex">
        <h4>Already have an account?</h4>
        <h4 className="underline underline-offset-2 text-indigo-500 ml-2">Sign In</h4>
      </div>

    </div>
      
    </>
  )
}

export default App
