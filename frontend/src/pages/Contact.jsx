import React from 'react';
import {assets} from "../assets/assets.js";

const Contact = () => {
    return (
        <div>
            <div className='text-center text-2xl pt-10 text-gray-500'>
                <p>CONTACT US</p>
            </div>
            <div className='flex flex-col my-10 justify-center md:flex-row gap-10 mb-28 text-sm'>
                <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt=''/>
                <div className='flex flex-col  justify-center items-start gap-6 '>
                    <p className='font-semibold'>Our office</p>
                    <p>Landstrasse 54, Frankfurt-a-M, Germany</p>
                    <p>Tel: +49-223322223 <br /> E-mail: ukc-new@mail.de</p>
                    <p>Кар'єра в УКЦ</p>
                    <p className='font-semibold'>Дізнайся більше про нашу команду </p>
                    <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore jobs</button>
                </div>
            </div>

        </div>
    )
}
export default Contact
