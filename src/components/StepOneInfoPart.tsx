import styles from '../style/StepOneInfoPart.module.scss'
import InfoInput from './InfoInputComponents/InfoInput'
import { useState } from 'react'


const StepOneInfoPart = () => {
  const [userName, setUserName] = useState<string>('')


  return(
    <div className={styles.stepOneInfoPaart}>
      <p className={styles.title}>寄送地址</p>

      <InfoInput 
        title='姓名'
        placeholder='請輸入姓名'
        inputValue={userName}
        onChange={(userNameInputValue: string): void => setUserName(userNameInputValue)}
      />
    </div>
  )
}

export default StepOneInfoPart