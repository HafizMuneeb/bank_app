import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full min-w-[120px]`}>
      {clients.map((client) =>(
        <div key={client.id} className={`flex-1 ${styles.flexCenter} min-w-[192px]`}>
          <img src={client.logo} alt="client" className="sm:w-[192px] w-[100px] object-contain"/>
        </div>
      ))}
    </div>
  </section>
)

export default Clients