import React ,{useState}from "react"
import { Link,useNavigate } from "react-router-dom"
import { UserAuth } from "../context/Authcontext"


const Login=()=>{

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [error,setError]=useState('')
    const {login}=UserAuth()
    const navigate=useNavigate()

    const handleSubmit=async(e)=>{
        
        e.preventDefault()
        try{
            setError('')

            await login(email,password)

            navigate('/')
        }catch(error){
            setError(error.message)
            console.log(error)
        }
    }

    return (
        <div className="w-full h-screen">
            <img  className="hidden sm:block absolute w-full h-full object-cover" src='https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg'></img>
            <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
            <div className="fixed w-full px-4 py-24 z-50">
                <div className="max-w-[450px] h-[600x] mx-auto bg-black/70 text-white"> 
                <div className="max-w-[320px] mx-auto py-16">
                    <h1 className="text-3xl font-bold ">Sign In</h1>
                    {error?<p className="">{error}</p>:null}
                    <form  onSubmit={handleSubmit} className="w-full flex flex-col py-4">
                        <input  onChange={(e)=>{setEmail(e.target.value)}} className='p-3 my-2  bg-gray-700 rounded' type="email" placeholder="email" autoComplete="email" />
                        <input 
                        onChange={(e)=>{setPassword(e.target.value)}}
                        className='p-3 my-2 bg-gray-700 rounded'
                        type="password"
                        placeholder="password"  
                        autoComplete="current-password">

                        </input>
                        <button className="bg-red-600 py-3 my-6 rounded font-bold">Sign In</button>
                        <div className="flex justify-between items-center text-sm text-gray-600">
                            <p><input className="mr-2" type='checkbox' />Remember me</p>
                            <p>Need Help?</p>
                         </div>
                         <p className="py-4">< span className="text-gray-600">New To Netfliex?</span> <Link to='/signup'>Sign Up</Link></p>
                    </form>
                </div>
                </div>

            </div>
        </div>
    )
}

export default Login