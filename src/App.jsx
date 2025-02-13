import Input from "./components/Input"
import { useState, useEffect } from "react"


const regUser=/^[A-Za-z][A-Za-z0-9-_]{3,23}$/
const regPwd=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%&]).{8,24}$/;
const regEmail=/^(?=.*[a-z])(?=.*@)/;
const regFullname=/[A-Za-z0-9]+/;

function App() {
  const[username,setUsername]=useState('');
  const[validusername,setValidusername]=useState(false);


  const[fullname,setFullname]=useState('');
  const[validfullname, setValidfullname]=useState(false);
 

  const[email,setEmail]=useState('');
  const[validemail,setValidemail]=useState(false);
 

  const[password,setPassword]=useState('');
  const[validpassword,setValidpassword]=useState(false);

  const[errMsg,setErrMsg]= useState('');

  

  const handleSubmit= async(e)=>{
    e.preventDefault();
    const v1= regUser.test(username);
    const v2= regPwd.test(password);

    if (!v1 || !v2){
      return;
    }


  }
    
  
  
  useEffect(()=>{
    const result=regUser.test(username);
    console.log(result);
    setValidusername(result);

  },[username])

  useEffect(()=>{
    const result=regPwd.test(password);
    setValidpassword(result);
  

  },[password])

  useEffect(()=>{
    const result=regFullname.test(fullname);
    setValidfullname(result);
  },[fullname])


  

  return (
    <>
    <p>{errMsg}</p>
    <div className="h-screen flex items-center justify-center">
      <div className="p-5 w-full md:w-1/3">
        <h4 className='text-gray-500 mb-5 text-center font-bold'>Sign up to connect with friends<br/>and see what's on their mind.</h4>
        <form onSubmit={handleSubmit} > 
    
          <Input required autoComplete='off' label='Username' id='username' type='text' placeholder='username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
          <p className={username && !validusername ? 'text-xs text-indigo-700' : 'hidden'}>Must begin with a letter. Letters, numbers, underscores, hypens allowed.</p>
          <Input required label='Full Name' autoComplete='off' id='full name' type='text' placeholder='full name' value={fullname} onChange={(e)=>setFullname(e.target.value)}/>
          <p className={fullname && !validfullname ? 'text-xs text-indigo-700' : 'hidden'}>Full name cannot contain special characters.</p>
          <Input required label='Email' id='email' type='email' placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <Input required label='Password' id='password' type='password' placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <p className={password && !validpassword ? 'text-xs text-indigo-700' : 'hidden'}>11 to 27 characters. Must contain at least one lower case, one upper case, a number and a special character.</p>
          
          <button disabled={!validusername || !validpassword || !validfullname} type='submit' className="disabled:opacity-50 bg-indigo-400 p-3 rounded-md block mt-5 w-full text-center">Sign Up</button>
          
        </form>
        <div className="mt-3 flex">
          <h4>Already have an account?</h4>
          <h4 className="underline underline-offset-2 text-indigo-500 ml-2">Sign In</h4>
        </div>

      </div>

    </div>
    
      
    </>
  )
}

export default App
