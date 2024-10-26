import React, {useContext, useEffect, useState} from 'react'
import {AppContext} from "../context/AppContext.jsx";
import axios from "axios";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [state, setState] = useState('Sign Up');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const {token, setToken, backendUrl} = useContext(AppContext);

    const onSubmitHandler = async (event)=>{
        event.preventDefault();
        try {
            if(state === 'Sign Up') {
                const {data} = await axios.post(backendUrl + '/api/user/register', {name, password, email});
                if(data.success) {
                    //console.log("data in Signup = ", data);
                    localStorage.setItem('token', data.token );
                    setToken(data.token);
                    toast.success(" Register Successfull");
                } else {
                    toast.error(data.message);
                }
            } else {
                const {data} = await axios.post(backendUrl + '/api/user/login', {email, password});
                if(data.success) {
                    //console.log("data in Login = ", data);
                    localStorage.setItem('token', data.token );
                    setToken(data.token);
                    toast.success(" Login Successfull");
                    //console.log("token in Login = ", data.token);
                } else {
                    toast.error(data.message);
                }
            }
        } catch (error) {
            toast.error(error.message);
        }
    }
    useEffect(()=>{
        if(token) {
            navigate('/');
        }
    }, [token])
    return (
        <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center '>
            <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg '>
                <p className='text-2xl font-semibold'>{state === 'Sign Up' ? 'Create Account' : 'Login' }</p>
                <p>Please {state === 'Sign Up' ? 'create Account' : 'log in' } to book appointment</p>
                {state === 'Sign Up'
                    ?   <div className='w-full'>
                            <p>Full name</p>
                            <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" onChange={(e)=>setName(e.target.value)} value={name} required />
                        </div>
                    : null
                }
                <div className='w-full'>
                    <p>E-mail</p>
                    <input className='border border-zinc-300 rounded w-full p-2 mt-1'  type="email" onChange={(e)=>setEmail(e.target.value)} value={email} required />
                </div>
                <div className='w-full'>
                    <p>Password</p>
                    <input className='border border-zinc-300 rounded w-full p-2 mt-1'  type="password" onChange={(e)=>setPassword(e.target.value)} value={password} required />
                </div>
                <button type='submit' className='bg-primary text-white w-full py-2 rounded-md text-base' >{state === 'Sign Up' ? 'create Account' : 'log in' }</button>
                {state === 'Sign Up'
                    ? <p>Already have an account? <span onClick={()=>setState('Login')} className='text-primary underline cursor-pointer font-bold'>Login here</span></p>
                    : <p>Create a new account? <span onClick={()=>setState('Sign Up')}  className='text-primary underline cursor-pointer font-bold'>Click here</span></p>
                }
            </div>

        </form>
    )
}
export default Login
