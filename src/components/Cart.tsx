import { useAppDispatch, useAppSelector } from '../store/store'
import { increaseItem, reduceItem } from '../store/feature/CartListInfo'
import { totalCountChange } from '../store/feature/UserShopInfo'
import styles from '../style/Cart.module.scss'
import CartList from './CartComponents/CartList'
import { useEffect } from 'react'


const Cart = () => {
  const carts = useAppSelector((state) => state.cartListInfo)
  const { cost } = useAppSelector((state) => state.userShopInfo.stepTwoInfo)
  const dispatch = useAppDispatch()

  let totalCost: number = 0
  for(let i = 0; i < carts.length; i++){
    totalCost += carts[i].quantity * carts[i].price
  }
  totalCost += cost
  


  function handleIncrease(id: number): void {
    // console.log('increase', id)
    
    dispatch(increaseItem({ id }))
  }

  function handleReduce(id: number): void {
    // console.log('reduce', id)
    
    dispatch(reduceItem({ id }))
  }

  useEffect(() => {
    dispatch(totalCountChange({ totalCount: totalCost }))
    
  }, [dispatch, totalCost])

  return(
    <div className={styles.shoppingContainer}>

      <div className={styles.shoppingTitle}>
        <h3>購物籃</h3>
      </div>

      <CartList 
        carts={carts}
        onIncrease={handleIncrease}
        onReduce={handleReduce}
      />

      <div className={styles.transportationFee}>
        <p className={styles.feeTitle}>
          運費
          <span className={styles.feePrice}>{(cost === 0) ? '免費' : `$${cost}`}</span>
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
              {totalCost.toLocaleString()}
            </span>
          </span>
        </p>
      </div>
    </div>
  )
}

export default Cart