import React from 'react'
import {assets} from "../assets/assets.js";

const About = () => {
    return (
        <div>
            <div className='text-center text-2xl pt-10 text-gray-500'>
                <p className='text-gray-700 font-medium'> ABOUT <span> US</span></p>
            </div>
            <div className='flex flex-col my-10 md:flex-row gap-12 '>
                <img className='w-full md:max-w-[360px]' src={assets.about_image} alt=''/>
                <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
                    <p>Вітаємо в Українському координаційному центрі. Тут ви можете отримати певну допомошу та взяти участь в активному житті української спільноти</p>
                    <p>Наші чемні співробітники допоможуть вам вирішити ваші питання</p>
                    <b className='text-gray-600'>Наше бачення </b>
                    <p>Ми приацюємо для вас</p>
                </div>
            </div>
            <div className='text-xl my-4'>
                <p className='text-gray-700 semi-bold'>ЧОМУ ВАМ ТРЕБА ДО НАС ЗВЕРНУТИСЬ</p>
            </div>
            <div className='flex flex-col md:flex-row mb-20'>
                <div className=' flex flex-col border px-10 md:px-16 py-8 sm:py-16 gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer '>
                    <b>Ефективність</b>
                    <p>Ми дуже еффективні в нашій роботі і наші спаціалісти завзяті</p>
                </div>
                <div className=' flex flex-col border px-10 md:px-16 py-8 sm:py-16 gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer '>
                    <b>Зручність</b>
                    <p>Вам зручно нас відвідати оскільки ми є  в центрі міста</p>
                </div>
                <div className=' flex flex-col border px-10 md:px-16 py-8 sm:py-16 gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer '>
                    <b>Індивідуальний підхід</b>
                    <p>Наші спаціалісти здійснюють індивідуальний підхід</p>
                </div>
            </div>

        </div>
    )
}
export default About
