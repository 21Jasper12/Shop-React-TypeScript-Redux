import styles from '../style/StepThreeInfoPart.module.scss'
import InfoInput from './InfoInputComponents/InfoInput'
import { useState } from 'react'
import ProgressControl from './ProgressControl'
import { useAppDispatch } from '../store/store'
import { stepThreeInfoChange } from '../store/feature/UserShopInfo'

export interface stepThreeformState {
  userName: string,
  cardNumber: string,
  cardDeadLine: string,
  cardCvc: string
}


const StepThreeInfoPart = () => {
  const [userName, setUserName] = useState<string>('')
  const [cardNumber, setCardNumber] = useState<string>('')
  const [cardDeadLine, setCardDeadLine] = useState<string>('')
  const [cardCvc, setCardCvc] = useState<string>('')
  const dispatch = useAppDispatch()

  function handleClick(): void {
    const formData: stepThreeformState = {
      userName,
      cardNumber,
      cardDeadLine,
      cardCvc
    }

    console.log('formData', formData)

    dispatch(stepThreeInfoChange({
      formData
    }))
  }



  return (
    <div className={styles.stepThreeInfoPaart}>
      <p className={styles.title}>付款資訊</p>

      <div className={styles.userInfo}>
        <div className={styles.userName}>
          <InfoInput
            title='持卡人姓名'
            name='userName'
            placeholder='John Doe'
            inputValue={userName}
            onChange={(userNameInputValue: string): void => setUserName(userNameInputValue)}
          />
        </div>

        <div className={styles.cardNumber}>
          <InfoInput
            title='卡號'
            name='cardNumber'
            placeholder='1111 2222 3333 4444'
            inputValue={cardNumber}
            onChange={(cardNumberInputValue: string): void => setCardNumber(cardNumberInputValue)}
          />
        </div>

        <div className={styles.cardDeadLine}>
          <InfoInput
            title='有效期限'
            name='cardDeadLine'
            placeholder='MM/YY'
            inputValue={cardDeadLine}
            onChange={(cardDeadLineInputValue: string): void => setCardDeadLine(cardDeadLineInputValue)}
          />
        </div>

        <div className={styles.cardCvc}>
          <InfoInput
            title='CVC / CCV '
            name='cardCvc'
            placeholder='123'
            inputValue={cardCvc}
            onChange={(cardCvcInputValue: string): void => setCardCvc(cardCvcInputValue)}
          />
        </div>


      </div>

      <div className={styles.footerLine}></div>

      <div className={styles.buttonGroup}>
        <ProgressControl
          onNext={handleClick}
        />
      </div>


    </div>
  )
}

export default StepThreeInfoPart