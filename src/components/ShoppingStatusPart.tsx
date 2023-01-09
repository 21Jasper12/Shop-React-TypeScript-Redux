import styles from '../style/ShoppingStatusPart.module.scss'
import { useAppSelector } from '../store/store'

const ShoppingStatusPart = () => {
  const statusNumber = useAppSelector((state) => state.shoppingStatus.status)

  return(
    <div className={styles.checkedStepper}>
      <div 
        className={`
          ${styles.step} 
          ${(statusNumber === 1) && (styles.active)} 
          ${(statusNumber > 1) && (styles.checked)}
        `}
      >
        <div className={styles.circleContainer}></div>
        <div className={styles.labelContainer}>寄送地址</div>
      </div>
      <div 
        className={`
          ${styles.step} 
          ${(statusNumber === 2) && (styles.active)} 
          ${(statusNumber > 2) && (styles.checked)}
        `}
      >
        <div className={styles.circleContainer}></div>
        <span className={styles.connectLine}></span>
        <div className={styles.labelContainer}>運送方式</div>
      </div>
      <div 
        className={`
          ${styles.step} 
          ${(statusNumber === 3) && (styles.active)} 
          ${(statusNumber > 3) && (styles.checked)}
        `}
      >
        <div className={styles.circleContainer}></div>
        <span className={styles.connectLine}></span>
        <div className={styles.labelContainer}>付款資訊</div>
      </div>
    </div>
  )
}

export default ShoppingStatusPart