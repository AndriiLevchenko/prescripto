import React, {useContext, useState} from 'react';
import {assets} from "../assets/assets.js";
import {AdminContext} from "../context/AdminContext.jsx";
import axios from "axios";
import {DoctorContext} from "../context/DoctorContext.jsx";
import { toast } from 'react-toastify'

const Login = () => {
    const [state, setState] = useState('Admin');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {setAToken, backendUrl} = useContext(AdminContext);
    const {setDToken} = useContext(DoctorContext);

    const onSubmitHandler = async (event) =>{
        event.preventDefault();
        try {
            if(state === 'Admin') {
                const {data} = await axios.post(backendUrl + '/api/admin/login', {email, password}, {headers:  { 'Content-Type': 'application/json'}});
                console.log("em. pass = ", email, password);
                if(data.success) {
                    console.log("token = ", data.token);
                    localStorage.setItem('aToken', data.token);
                    setAToken(data.token);
                } else {
                    toast.error(data.message);
                }
            } else {
                console.log("Doctor login !!!!!!   STSTE = ", state, "backendUrl = ", backendUrl );
                const {data} = await axios.post(backendUrl + '/api/doctor/login', {email, password});
                console.log("data in Login = ", data);
                if(data.success) {
                    console.log("token = ", data.token);
                    setDToken(data.token);
                    localStorage.setItem('dToken', data.token);
                } else {
                    toast.error(data.message);
                }
            }
        } catch (error) {

        }
    }
    return (
        <form onSubmit={onSubmitHandler} className='flex items-center min-h-[80vh] '>
            <div className='flex flex-col m-auto gap-3 items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-#5e5e5e text-sm shadow-lg  '>
            <p className='text-2xl font-semibold m-auto'><span className='text-primary'> {state} </span> Login </p>
                <div className='w-full'>
                    <p> Email </p>
                    <input onChange={(e)=>setEmail(e.target.value)} value={email} className='border border-[#dadada] rounded w-full p-2 mt-1' type='email' required />
                </div>
                <div className='w-full'>
                    <p> Password </p>
                    <input onChange={(e)=>setPassword(e.target.value)} value={password} className='border border-[#dadada] rounded w-full p-2 mt-1'  type='text' required />
                </div>
                <button className='bg-primary text-white w-full py-2 rounded-md text-base'>Login</button>
                {
                    state === 'Admin'
                    ? <p> Doctor Login? <span className='text-primary underline cursor-pointer' onClick={()=>setState('Doctor')}> Click here </span></p>
                    : <p> Admin Login? <span className='text-primary underline cursor-pointer'  onClick={()=>setState('Admin')}> Click here </span></p>
                }
            </div>
        </form>
    )
}
export default Login
