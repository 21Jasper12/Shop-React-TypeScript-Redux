import { cartItems } from '../../store/feature/CartListInfo'
import styles from '../CartComponents/CartList.module.scss'

interface props {
  carts: cartItems[]
}

const OrderCart = (
  {
    carts,
  }: props
) => {
  return (
    <ul className={styles.cartList}>
      {
        carts.map(cart =>
          <li className={styles.listDetail} id={String(cart.id)} key={cart.id}>
            <img src={cart.img} alt={cart.name} className={styles.shoppingImg} />
            <h4 className={styles.commodityTitle}>{cart.name}</h4>
            <div className={styles.shoppingBtn}>
              {/* <button
                className={styles.reduceBtn}
                onClick={(): void => onReduce?.(cart.id)}
              >
                -
              </button> */}

              <span className={styles.orderCount}>數量：  {cart.quantity}</span>

              {/* <button
                className={styles.increaseBtn}
                onClick={(): void => onIncrease?.(cart.id)}
              >
                +
              </button> */}
            </div>
            <h5 className={styles.price}>${cart.price.toLocaleString()}</h5>
          </li>
        )
      }
    </ul>
  )
}

export default OrderCart