import CartTotalCount from "../components/OrderInfoComponents/CartTotalCount"
import styles from '../style/OrderInfoPage.module.scss'
import { city } from "../components/StepOneInfoPart"
import { useAppDispatch, useAppSelector } from "../store/store"
import { useNavigate } from "react-router-dom"
import { ShoppingChangeStatus } from "../store/feature/shoppingStatus"
import { resetUserShopInfo } from "../store/feature/UserShopInfo"
import { resetCartListInfo } from "../store/feature/CartListInfo"

const OrderInfoPage = () => {
  const { stepOneInfo, stepTwoInfo, stepThreeInfo } = useAppSelector((state) => state.userShopInfo)
  const dispatch = useAppDispatch()
  const cityshow = city.filter((item) => item.id === stepOneInfo.userCity)
  const navigate = useNavigate()

  // console.log('訂單已送出')
  // console.log('stepOneInfo', stepOneInfo)
  // console.log('stepTwoInfo', stepTwoInfo)
  // console.log('stepThreeInfo', stepThreeInfo)
  // console.log('totalCount', totalCount)

  function handleSend(): void {
    alert('訂單送出')
    dispatch(ShoppingChangeStatus({ status: 1}))
    dispatch(resetUserShopInfo())
    dispatch(resetCartListInfo())
    navigate('/home')
  }

  function handleCancel(): void {
    navigate('/home')
  }

  return(
    <div className={styles.orderInfo}>
      <div className={styles.orderMain}>
        <h1>訂單內容</h1>

        <div>
          <h2>寄送地址</h2>
          <ul>
            <li>姓名：{stepOneInfo.userName}</li>
            <li>電話：{stepOneInfo.userTel}</li>
            <li>Email： {stepOneInfo.userEmail}</li>
            <li>地址： {cityshow[0].title}  {stepOneInfo.userAdress}</li>
          </ul>
        </div>

        <div>
          <h2>運送方式</h2>
          <ul>
            <li>{stepTwoInfo.title} {stepTwoInfo.description}</li>
          </ul>
        </div>

        <div>
          <h2>付款資訊</h2>
          <ul>
            <li>持卡人姓名：{stepThreeInfo.userName}</li>
            <li>卡號： {stepThreeInfo.cardNumber}</li>
            <li>有效期限： {stepThreeInfo.cardDeadLine}</li>
            <li>CVC / CCV： {stepThreeInfo.cardCvc}</li>
          </ul>
        </div>

        <div className={styles.btnGroup}>
          <button className={styles.btnPrevious} onClick={handleCancel}>取消</button>
          <button className={styles.btnNext} onClick={handleSend}>送出訂單</button>
        </div>
      </div>

      <div className={styles.orderCart}>
        <CartTotalCount />
      </div>

    </div>
  )
}

export default OrderInfoPage