import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { URL_SERVER } from '../utils/URL_SERVER';
const SignUp = () => {
  
  const [data,setData] = useState({
    username:'',
    email:'',
    password:'',
  })
  const navigate = useNavigate() 
  const [error,setError] = useState('')
  const [loading,setLoading] = useState(false)


  const handleChange =  (e) =>{

    const {name,value} = e.target

    setData({...data,
      [name]:value
    })
  }
  
  const handleSubmit = async (e)=>{

    e.preventDefault();

    try {
     // setError("")
      setLoading(true)
      const response = await axios.post(`${URL_SERVER}/auth/signup`,data,{
        headers:{
          "Content-Type":"application/json"
        }
        
      })

      setData({
        username:'',
        email:'',
        password:''
      })

      setError('')

      navigate('/signin')



    } catch (error) {

      console.log(error);
      
      setError(error.response.data.message)
      setLoading(false)

     
      
    }


  } 
  
  return (
    <div className='mx-4'>
        <form className=' sm:w-1/4 mx-auto sm:mt-16 flex flex-col gap-4'>
        <h1 className=' text-center text-3xl font-semibold'>sign up</h1>

          <input type="text" placeholder=' nom' className=' outline-slate-500 border bg-slate-200 px-2 py-2 rounded-md shadow-md w-full'  name='username' value={data.username} onChange={handleChange} />
          <input type="email" placeholder='email' className='outline-slate-500 order bg-slate-200 px-2 py-2 rounded-md shadow-md w-full'  name='email' value={data.email} onChange={handleChange} />
          <input type="password" placeholder='mot de passe' className= ' outline-slate-500 border bg-slate-200 px-2 py-2 rounded-md shadow-md w-full'  name='password' value={data.password} onChange={handleChange} />
          {error &&<p className = ' text-red-500'>{error}</p>}
          <div className=' flex flex-col gap-2'>
          <input disabled={loading} onClick={handleSubmit} type="submit" value = {loading?'chargement...':'sign up'} className=' disabled:opacity-80 uppercase w-full text-white bg-slate-950 hover:opacity-95 rounded-lg py-2' />        
          <button  className=' w-full uppercase rounded-lg bg-red-600 py-2 text-white'>continue avec google</button>
          <Link to ='/signin' className='text-right cursor-pointer float-right text-sm font-thin hover:underline hover:text-slate-800'>connexion?</Link>
          </div>
        
        </form>
        
        
    </div>
  )
}

export default SignUp