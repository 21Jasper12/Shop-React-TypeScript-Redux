import styles from '../style/StepOneInfoPart.module.scss'
import InfoInput from './InfoInputComponents/InfoInput'
import { useState } from 'react'
import InfoSelect from './InfoInputComponents/InfoSelect'
import ProgressControl from './ProgressControl'

export interface arrayState {
  id: number,
  title: string
}

interface formState {
  userGender: number,
  userName: string,
  userTel: string,
  userEmail: string,
  userCity: number,
  userAdress: string
}

const gender: arrayState[] = [
  {
    id: 1,
    title: '先生'
  },
  {
    id: 2,
    title: '女士'
  }
]

const city: arrayState[] = [
  {
    id: 1,
    title: '台北'
  },
  {
    id: 2,
    title: '台中'
  },
  {
    id: 3,
    title: '高雄'
  }
]



const StepOneInfoPart = () => {
  const [userGender, setUserGender] = useState<number>(0)
  const [userName, setUserName] = useState<string>('')
  const [userTel, setUserTel] = useState<string>('')
  const [userEmail, setUserEmail] = useState<string>('')
  const [userCity, setUserCity] = useState<number>(0)
  const [userAdress, setUserAdress] = useState<string>('')

  function handleClick(): void {
    const formData: formState = {
      userGender,
      userName,
      userTel,
      userEmail,
      userCity,
      userAdress
    }

    console.log('formData', formData)
  }



  return (
    <div className={styles.stepOneInfoPaart}>
      <p className={styles.title}>寄送地址</p>

      <div className={styles.userInfo}>
        <div className={styles.userGender}>
          <InfoSelect
            title='稱謂'
            name='gender'
            defaultOptionTitle='請選擇稱謂'
            optionArray={gender}
            inputValue={userGender}
            onChange={(userGenderInputValue: number): void => setUserGender(userGenderInputValue)}
          />
        </div>

        <div className={styles.userName}>
          <InfoInput
            title='姓名'
            name='userName'
            placeholder='請輸入姓名'
            inputValue={userName}
            onChange={(userNameInputValue: string): void => setUserName(userNameInputValue)}
          />
        </div>

        <div className={styles.userTel}>
          <InfoInput
            title='電話'
            name='userTel'
            placeholder='請輸入電話'
            inputValue={userTel}
            onChange={(userTelInputValue: string): void => setUserTel(userTelInputValue)}
          />
        </div>

        <div className={styles.userEmail}>
          <InfoInput
            title='Email'
            name='userEmail'
            placeholder='請輸入電子郵件'
            inputValue={userEmail}
            onChange={(userEmailInputValue: string): void => setUserEmail(userEmailInputValue)}
          />
        </div>

        <div className={styles.userCity}>
          <InfoSelect
            title='縣市'
            name='city'
            defaultOptionTitle='請選擇縣市'
            optionArray={city}
            inputValue={userCity}
            onChange={(userCityInputValue: number): void => setUserCity(userCityInputValue)}
          />
        </div>

        <div className={styles.userAdress}>
          <InfoInput
            title='地址'
            name='userAdress'
            placeholder='請輸入地址'
            inputValue={userAdress}
            onChange={(userAdressInputValue: string): void => setUserAdress(userAdressInputValue)}
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

export default StepOneInfoPart