import styles from '../style/StepTwoInfoPart.module.scss'
import { useState } from 'react'
import ProgressControl from './ProgressControl'
import ShippingMethod from './InfoInputComponents/ShippingMethod'



const StepTwoInfoPart = () => {
  const [shipMethod, setshipMethod] = useState<string>('')
  

  function handleClick(): void {
    console.log('ShipMethod: ', shipMethod)
  }



  return(
    <div className={styles.stepTwoInfoPaart}>
      <p className={styles.title}>運送方式</p>

      <div className={styles.shipMethod}>
        <ShippingMethod 
          inputValue='free'
          fast={false}
          tagTitle='標準運送'
          tagDescription='約3~7個工作天'
          tagCosts='免費'
          onChange={(shipMethodInputValue: string) => setshipMethod(shipMethodInputValue)}
        />
        
        <ShippingMethod
          inputValue='cost'
          fast={true}
          tagTitle='DHL 貨運'
          tagDescription='48小時內送達'
          tagCosts='$500'
          onChange={(shipMethodInputValue: string) => setshipMethod(shipMethodInputValue)}
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