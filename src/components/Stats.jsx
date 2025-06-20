import React from 'react'
import { stats } from '../constants';
import styles from '../style';

const Stats = () => {
  return (
    <section className={`${styles.flexCenter}  flex-wrap sm:mb-20 mb-6`}>
        {stats.map((stat)=>(
          <div key={stat.id} className={`flex-1 flex  ${styles.flexCenter} max-xs:flex-col m-3`}>
            <h4 className='font-poppins font-semibold text-[40px] text-[30px] xs:leading-[53px]
             text-white leading-[43px]'>{stat.value}</h4>
            <p className='font-poppins xs:text-[20px] text-[15px] xs:leading-[26px]
             text-white leading-[21px] text-gradient uppercase ml-3'>{stat.title}</p>
          </div>
        ))}
    </section>
  )
}

export default Stats
