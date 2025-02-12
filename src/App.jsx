import Input from "./components/Input"
import { useState, useRef,useEffect } from "react"


const regUser=/^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const regEmail=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%&]).{8,24}$/;
function App() {
  const[username,setUsername]=useState('');
  const[validusername,setValidusername]=useState(false);


  const[fullname,setFullname]=useState('');
  const[validfullname, setValidfullname]=useState(false);
 

  const[email,setEmail]=useState('');
  const[validemail,setValidemail]=useState(false);
 

  const[password,setPassword]=useState('');
  const[validpassword,setValidpassword]=useState(false);
  

  const[errmsg,setErrmsg]=useState('');



  const handleSubmit=()=>{
    e.preventDefault();
    
  }
  


  

  return (
    <>
    <div className="grid justify-center p-5">
      <h4 className='text-gray-500 mb-5 text-center font-bold'>Sign up to connect with friends<br/>and see what's on their mind.</h4>
      <form onSubmit={handleSubmit}> 
        
        <Input required autoComplete='off' label='Username' id='username' type='text' placeholder='username' value={username} onFocus={()=>setUsernameFocus(true)} onBlur={()=> setUsernameFocus(false)} onChange={(e)=>setUsername(e.target.value)}/>
        <p>4 to 24 characters. Must begin with a letter. Letters, numbers, underscores, hypens allowed.</p>
        <Input required label='Full Name' autoComplete='off' id='full name' type='text' placeholder='full name' value={fullname} onFocus={()=>setFullnameFocus(true)} onBlur={()=> setFullnameFocus(false)} onChange={(e)=>setFullname(e.target.value)}/>
        <Input required label='Email' id='email' type='email' placeholder='email' value={email} onFocus={()=>setEmailFocus(true)} onBlur={()=> setEmailFocus(false)} onChange={(e)=>setEmail(e.target.value)}/>
        <Input required label='Password' id='password' type='password' placeholder='password' value={password} onFocus={()=>setPasswordFocus(true)} onBlur={()=> setPasswordFocus(false)} onChange={(e)=>setPassword(e.target.value)}/>
        
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
