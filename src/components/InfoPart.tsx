import styles from './../style/InfoPart.module.scss'
import ShoppingStatusPart from './ShoppingStatusPart'
import StepOneInfoPart from './StepOneInfoPart'

const InfoPart = () => {
  return(
    <div className={styles.infoPart}>
      <p className={styles.title}>結帳</p>

      <ShoppingStatusPart />
      <StepOneInfoPart />
    </div>
  )
}

export default InfoPart