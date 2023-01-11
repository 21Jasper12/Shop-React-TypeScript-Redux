import styles from '../style/StepTwoInfoPart.module.scss'
import { useState } from 'react'
import ProgressControl from './ProgressControl'
import ShippingMethod from './InfoInputComponents/ShippingMethod'
import { useAppDispatch, useAppSelector } from '../store/store'
import { stepTwoInfoChange } from '../store/feature/UserShopInfo'



const StepTwoInfoPart = () => {
  const stepTwoInfo = useAppSelector((state) => state.userShopInfo.stepTwoInfo)
  const [shipMethod, setshipMethod] = useState<number>(stepTwoInfo)
  const dispatch = useAppDispatch()
  
  function handleClick(): boolean {
    console.log('ShipMethod: ', shipMethod)

    dispatch(stepTwoInfoChange({
      formData: shipMethod
    }))
    return true
  }



  return(
    <div className={styles.stepTwoInfoPaart}>
      <p className={styles.title}>運送方式</p>

      <div className={styles.shipMethod}>
        <ShippingMethod 
          inputValue={0}
          fast={false}
          tagTitle='標準運送'
          tagDescription='約3~7個工作天'
          tagCosts='免費'
          method={shipMethod}
          onChange={(shipMethodInputValue: number) => {setshipMethod(shipMethodInputValue)}}
        />
        
        <ShippingMethod
          inputValue={1}
          fast={true}
          tagTitle='DHL 貨運'
          tagDescription='48小時內送達'
          tagCosts='$500'
          method={shipMethod}
          onChange={(shipMethodInputValue: number) => setshipMethod(shipMethodInputValue)}
        />

        
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

export default StepTwoInfoPart