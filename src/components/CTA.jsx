import styles from "../style"
import Button from "./Button"


const CTA = () =>  (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} ${styles.marginX}
  sm:flex-row flex-col bg-black-gradient-2 rounded-[28px] box-shadow `}>

    <div className="flex flex-1 flex-col">
      <h3 className={styles.heading2}>Let's try our service now !</h3>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Everything you need to accept card payment
         and grow your business anywhere on the planet
      </p>
    </div>
    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
  )


export default CTA
