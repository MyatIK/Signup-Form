import Input from "./components/Input"
import { useState } from "react"

function App() {
  const[username,setUsername]=useState('');
  const[validusername,setValidusername]=useState('');

  const[fullname,setFullname]=useState('');
  const[validfullname, setValidfullname]=useState('');

  const[email,setEmail]=useState('');
  const[validemail,setValidemail]=useState('');

  const[password,setPassword]=useState('');
  const[validpassword,setValidpassword]=useState('');

  const[errmsg,validErrmsg]=useState('');
  const handleSubmit=()=>{
    e.preventDefault();
    
  }
  

  return (
    <>
    <div className="grid justify-center p-5">
      <h4 className='text-gray-500 mb-5 text-center font-bold'>Sign up to connect with friends<br/>and see what's on their mind.</h4>
      <form onSubmit={handleSubmit}> 
        <Input label='Username' id='username' type='text' placeholder='username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
        <Input label='Full Name' id='full name' type='text' placeholder='full name' value={fullname} onChange={(e)=>setFullname(e.target.value)}/>
        <Input label='Email' id='email' type='email' placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <Input label='Password' id='password' type='password' placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        
        <button type='submit' className="bg-indigo-400 p-3 rounded-md block mt-5 w-full text-center">Sign Up</button>
        
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
