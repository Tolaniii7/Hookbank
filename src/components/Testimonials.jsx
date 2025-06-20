import { feedback } from "../constants";
import styles from "../style";
import FeedBackCard from "./FeedBackCard";


const Testimonial = () =>  (
    <section className={`${styles.paddingX} mt-20 ${styles.flexCenter} flex-col relative`}>
      <div className="absolute z-[0] -right-[50%] rounded-full blue__gradient w-[60%] h-[60%]" />

      <div className="w-full flex justify-between items-center md:flex-row flex-col
        sm:mb-16 mb-6 relative z-[1]">
          <h1 className={styles.heading2}>
            what people are <br className="sm:block hidden" /> saying about us
          </h1>

          <div className="w-full md:mt-0 mt-6">
            <p className={`${styles.paragraph} text-left max-w-[450px]`}>
              Everything you need to accept card payments and 
              grow your business anywhwere in the world</p>
          </div>
      </div>


      <div className="flex flex-wrap sm:justify-start justify-center w-full 
      feedback-container relativez-[1]">
        {feedback.map((card)=>(
          <FeedBackCard key={card.id} {...card}/>
          ))}

      </div>
    </section>
    
  )


export default Testimonial
