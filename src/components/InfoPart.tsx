import { useAppSelector } from '../store/store'
import styles from './../style/InfoPart.module.scss'
import ShoppingStatusPart from './ShoppingStatusPart'
import StepOneInfoPart from './StepOneInfoPart'
import StepThreeInfoPart from './StepThreeInfoPart'
import StepTwoInfoPart from './StepTwoInfoPart'

const InfoPart = () => {
  const statusNumber = useAppSelector((state) => state.shoppingStatus.status)
  return(
    <div className={styles.infoPart}>
      <p className={styles.title}>結帳</p>

      <ShoppingStatusPart />
      {(statusNumber === 1 ) &&<StepOneInfoPart />}
      {(statusNumber === 2) && <StepTwoInfoPart />}
      {(statusNumber === 3) && <StepThreeInfoPart />}
    </div>
  )
}

export default InfoPart