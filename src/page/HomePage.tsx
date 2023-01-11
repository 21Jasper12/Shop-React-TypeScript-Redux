import styles from '../style/HomePage.module.scss'
import InfoPart from "../components/InfoPart"
import Cart from '../components/Cart'

const HomePage = () => {
  return(
    <div className={styles.homePage}>
      <div className={styles.infoPart}>
        <InfoPart />
      </div>
      <div className={styles.cart}>
        <Cart />
      </div>
    </div>
  )
}

export default HomePage