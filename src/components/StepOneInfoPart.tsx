import styles from '../style/StepOneInfoPart.module.scss'
import InfoInput from './InfoInputComponents/InfoInput'
import { useState } from 'react'
import InfoSelect from './InfoInputComponents/InfoSelect'
import ProgressControl from './ProgressControl'
import { useAppDispatch, useAppSelector } from '../store/store'
import { stepOneInfoChange } from '../store/feature/UserShopInfo'

export interface arrayState {
  id: number,
  title: string
}

export interface stepOneformState {
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

export const city: arrayState[] = [
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
  const dispatch = useAppDispatch()
  const stepOneInfo = useAppSelector((state) => state.userShopInfo.stepOneInfo)
  const {
    userGender: stepOneGender,
    userName: stepOneName,
    userTel: stepOneTel,
    userEmail: stepOneEmail,
    userCity: stepOneCity,
    userAdress: stepOneAdress
  } = stepOneInfo
  const { gender: initialGender, city: initialCity } = useAppSelector((state) => state.initialData)
  const [userGender, setUserGender] = useState<number>(stepOneGender)
  const [userName, setUserName] = useState<string>(stepOneName)
  const [userTel, setUserTel] = useState<string>(stepOneTel)
  const [userEmail, setUserEmail] = useState<string>(stepOneEmail)
  const [userCity, setUserCity] = useState<number>(stepOneCity)
  const [userAdress, setUserAdress] = useState<string>(stepOneAdress)

  // console.log('stepOneInfo: ', stepOneInfo)
  

  function handleClick(): boolean {
    if(
      userGender === 0 ||
      userName.trim().length === 0 ||
      userTel.trim().length === 0 ||
      userEmail.trim().length === 0 ||
      userCity === 0 ||
      userAdress.trim().length === 0 
    ){
      alert('請將資料輸入完整')
      return false
    }

    const formData: stepOneformState = {
      userGender,
      userName,
      userTel,
      userEmail,
      userCity,
      userAdress
    }

    // console.log('formData', formData)
    dispatch(stepOneInfoChange({ formData }))
    return true
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