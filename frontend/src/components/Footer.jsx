import React from 'react'
import {assets} from "../assets/assets.js";

const Footer = () => {
    return (
        <div className='md:mx-10 '>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                <div>
                    <img className='mb-5 w-40 ' src={assets.logo} alt=''/>
                    <p className='w-full md:w-2/3 text-gray-600 leading-6 '>Lore Українськиий координаційний центр Українськиий координаційний центр  Українськиий координаційний центр Українськиий координаційний центр </p>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>УКЦ</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li> Home </li>
                        <li> About us </li>
                        <li> Contact us </li>
                        <li> Privacy policy </li>
                    </ul>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>+49 2233222233321</li>
                        <li> ukc@mail.ua</li>
                    </ul>
                </div>
            </div>
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2024@ УКЦ - All rights reserved</p>
            </div>
        </div>
    )
}
export default Footer
