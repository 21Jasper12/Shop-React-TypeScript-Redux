import { useAppSelector } from '../../store/store'
import styles from '../../style/Cart.module.scss'
import OrderCart from './OrderCart'

const CartTotalCount = () => {
  const { stepTwoInfo, totalCount } = useAppSelector((state) => state.userShopInfo)
  const cartList = useAppSelector((state) => state.cartListInfo)

  return(
    <div className={styles.shoppingContainer}>

      <div className={styles.shoppingTitle}>
        <h3>購物籃</h3>
      </div>

      <OrderCart 
        carts={cartList}
      />

      <div className={styles.transportationFee}>
        <p className={styles.feeTitle}>
          運費
          <span className={styles.feePrice}>{(stepTwoInfo.cost === 0) ? '免費' : `$${stepTwoInfo.cost}`}</span>
        </p>
      </div>

      <div className={styles.shoppingTotal}>
        <p className={styles.totalTitle}>
          小計
          <span className={styles.total}>
            $
            <span
              className={styles.totalPrice}
            >
              {(totalCount + stepTwoInfo.cost).toLocaleString()}
            </span>
          </span>
        </p>
      </div>
    </div>
  )
}

export default CartTotalCount