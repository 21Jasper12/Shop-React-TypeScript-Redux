import { useAppDispatch, useAppSelector } from "../store/store"
import { ShoppingChangeStatus } from "../store/feature/shoppingStatus"
import styles from '../style/ProgressControl.module.scss'
import { useNavigate } from "react-router-dom"

interface props {
  onNext: Function
}

const ProgressControl = ({ onNext }: props) => {
  const statusNumber = useAppSelector((state) => state.shoppingStatus.status)
  const { totalCount } = useAppSelector((state) => state.userShopInfo)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  function handlePrevious():void {
    dispatch(ShoppingChangeStatus({ status: (statusNumber - 1) }))
  }

  function handleNext(): void {
    // console.log('statusNumber: ', (statusNumber + 1))
    const nextStatus = onNext()
    if ((statusNumber < 3) && nextStatus) {
      dispatch(ShoppingChangeStatus({ status: (statusNumber + 1) }))
    }
    else if ((statusNumber === 3) && nextStatus && (totalCount !== 0)){
      navigate('/orderInfo')
    }
    else if ((statusNumber === 3) && (totalCount === 0)){
      alert('購物籃不得空白')
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
            確認下單資料
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