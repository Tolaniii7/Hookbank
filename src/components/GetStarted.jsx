import React from 'react'
import styles from '../style';
import {arrowUp} from '../assets'

const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient
       p-[2px] cursor-pointer`}>
        <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
          <div className={`${styles.flexStart} items-center`}>

            <p className='font-poppins font-medium text-[18px] leading-[32px] mr-2'>
              <span className='text-gradient'>Get</span>
            </p>

            <img src={arrowUp} alt='arrow' className='w-[23px] h-[23px] object-contain' />

          </div>

           <p className='font-poppins font-medium text-[18px] leading-[32px]'>
              <span className='text-gradient'>Started</span>
           </p>
        </div>
    </div>
  )
}

export default GetStarted
