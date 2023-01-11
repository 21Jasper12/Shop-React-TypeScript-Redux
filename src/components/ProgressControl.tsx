import { useAppDispatch, useAppSelector } from "../store/store"
import { ShoppingChangeStatus } from "../store/feature/shoppingStatus"
import styles from '../style/ProgressControl.module.scss'

interface props {
  onNext: Function
}

const ProgressControl = ({ onNext }: props) => {
  const statusNumber = useAppSelector((state) => state.shoppingStatus.status)
  const dispatch = useAppDispatch()

  function handlePrevious():void {
    dispatch(ShoppingChangeStatus({ status: (statusNumber - 1) }))
  }

  function handleNext(): void {
    // console.log('statusNumber: ', (statusNumber + 1))
    const nextStatus = onNext()
    if ((statusNumber < 3) && nextStatus) {
      dispatch(ShoppingChangeStatus({ status: (statusNumber + 1) }))
    }
  }

  return(
    <div className={styles.btn}>
      {
        statusNumber === 1 ? null : (<button className={styles.btnPrevious} onClick={handlePrevious}>← 上一步</button>)
      }
      {
        statusNumber === 3 ? (
          <button
            className={styles.btnNext}
            onClick={handleNext}
          >
            確認下單
          </button>
        ) :
          (
            <button
              className={styles.btnNext}
              onClick={handleNext}
            >
              下一步 →
            </button>
          )
      }
    </div>
  )
}

export default ProgressControl