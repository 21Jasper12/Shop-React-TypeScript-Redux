import styles from '../style/StepThreeInfoPart.module.scss'
import InfoInput from './InfoInputComponents/InfoInput'
import { useState } from 'react'
import ProgressControl from './ProgressControl'
import { useAppDispatch, useAppSelector } from '../store/store'
import { stepThreeInfoChange } from '../store/feature/UserShopInfo'

export interface stepThreeformState {
  userName: string,
  cardNumber: string,
  cardDeadLine: string,
  cardCvc: string
}


const StepThreeInfoPart = () => {
  const {
    userName: stepThreeName,
    cardNumber: stepThreeCardNumber,
    cardDeadLine: stepThreeCardDeadLine,
    cardCvc: stepThreeCardCvc
  } = useAppSelector((state) => state.userShopInfo.stepThreeInfo)
  const dispatch = useAppDispatch()
  const [userName, setUserName] = useState<string>(stepThreeName)
  const [cardNumber, setCardNumber] = useState<string>(stepThreeCardNumber)
  const [cardDeadLine, setCardDeadLine] = useState<string>(stepThreeCardDeadLine)
  const [cardCvc, setCardCvc] = useState<string>(stepThreeCardCvc)
  

  function handleClick(): boolean {
    if (
      userName.trim().length === 0 ||
      cardNumber.trim().length === 0 ||
      cardDeadLine.trim().length === 0 ||
      cardCvc.trim().length === 0
    ) {
      alert('請將資料輸入完整')
      return false
    }

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

    return true
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