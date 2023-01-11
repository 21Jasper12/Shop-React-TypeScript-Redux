import { useAppDispatch, useAppSelector } from '../store/store'
import { cartItems, increaseItem, reduceItem } from '../store/feature/CartListInfo'
import styles from '../style/Cart.module.scss'
import CartList from './CartComponents/CartList'
import { useState } from 'react'


const Cart = () => {
  const carts = useAppSelector((state) => state.cartListInfo)
  const dispatch = useAppDispatch()
  const [cartsData, setCartsData] = useState<cartItems[]>(carts)

  function handleIncrease(id: number): void {
    console.log('increase', id)
    setCartsData(cartsData.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1
        }
      }
      else {
        return item
      }
    })
    )
    dispatch(increaseItem({ id }))
    console.log('cartsData: ', carts)
  }

  function handleReduce(id: number): void {
    console.log('reduce', id)
    setCartsData(cartsData.map((item) => {
      if ((item.id === id) && (item.quantity > 0)) {
        return {
          ...item,
          quantity: item.quantity + 1
        }
      }
      else {
        return item
      }
    }))
    dispatch(reduceItem({ id }))
    console.log('cartsData: ', carts)
  }

  return(
    <div className={styles.shoppingContainer}>

      <div className={styles.shoppingTitle}>
        <h3>購物籃</h3>
      </div>

      <CartList 
        carts={cartsData}
        onIncrease={handleIncrease}
        onReduce={handleReduce}
      />

      <div className={styles.transportationFee}>
        <p className={styles.feeTitle}>
          運費
          <span className={styles.feePrice}>免費</span>
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
              0
            </span>
          </span>
        </p>
      </div>
    </div>
  )
}

export default Cart