import styles from "../style"
import { clients } from "../constants"


const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((cl)=>(
        <div key={cl.id} className={`${styles.flexCenter} flex-1 ss:min-w-[192px] min-w-[120px] `}>
          <img  src={cl.logo} alt="client" className="sm:w-[192px] w-[100px] object-contain client"/>
        </div>
        ))}
    </div>
  </section>
  )


export default Clients
