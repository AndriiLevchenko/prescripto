import React, {useContext, useEffect, useState} from 'react'
import {AppContext} from "../context/AppContext.jsx";
import {toast} from "react-toastify";
import axios from "axios";

const MyAppointments = () => {
    const {backendUrl, token} = useContext(AppContext);
    const [appointments, setAppointments] = useState([]);
    
    const getUserAppointments = async ()=>{
        try {
           const {data} = await axios.get(backendUrl + '/api/user/appointments', {headers: {token}});
           if(data.success) {
               setAppointments(data.appointments.reverse());
               console.log('appointments in success = ', data.appointments);
           }
        } catch (error) {
            toast.error(error.message);
        }
    }
    useEffect(()=>{
        if(token) {
            getUserAppointments();
        }
    }, [token])
    return (
        <div>
            <p className='pb-3 mt-14 font-medium text-zinc-700 border-b'>My Appointments</p>
            <div>
                {
                    appointments.map((item, index)=>(
                        <div className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b' key={index}>
                            <div>
                                <img className='w-32 bg-indigo-50' src={item.docData.image} alt='' />
                            </div>
                            <div className='flex-1 text-sm text-zinc-600 '>
                                <p className='text-neutral-800 font-semibold'>{item.docData.name}</p>
                                <p>{item.docData.speciality}</p>
                                <p className='text-zinc-700 font-medium mt-1'>Address</p>
                                <p className='text-xs'>{item.docData.address.line1}</p>
                                <p className='text-xs'>{item.docData.address.line2}</p>
                                <p className='text-xs mt-1'><span className='text-sm text-neutral-700 font-medium'>Date & Time:</span>{item.slotDate} | {item.slotTime}</p>
                            </div>
                            <div></div>
                            <div className='flex flex-col gap-2 justify-end'>
                                <button className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-primary hover:text-white transition-all duration-300'>Pay online</button>
                                <button className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-300'>Cancel Appointment</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default MyAppointments
