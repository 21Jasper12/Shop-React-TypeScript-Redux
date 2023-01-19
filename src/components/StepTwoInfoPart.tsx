import styles from '../style/StepTwoInfoPart.module.scss'
import { useState } from 'react'
import ProgressControl from './ProgressControl'
import ShippingMethod from './InfoInputComponents/ShippingMethod'
import { useAppDispatch, useAppSelector } from '../store/store'
import { stepTwoInfoChange } from '../store/feature/UserShopInfo'

export interface shipFeeStatus {
  id: number,
  fast: boolean,
  title: string,
  description: string,
  cost: number
}

const shipFee: shipFeeStatus[] = [
  {
    id: 0,
    fast: false,
    title: '標準運送',
    description: '約3~7個工作天',
    cost: 0
  },
  {
    id: 1,
    fast: true,
    title: 'DHL 貨運',
    description: '48小時內送達',
    cost: 500
  }
]



const StepTwoInfoPart = () => {
  const stepTwoInfo = useAppSelector((state) => state.userShopInfo.stepTwoInfo)
  const [shipMethod, setshipMethod] = useState<number>(stepTwoInfo.id)
  const dispatch = useAppDispatch()
  
  function handleClick(): boolean {
    const stepTwoInfoData = shipFee.filter((item) => item.id === shipMethod)

    // console.log('formData: ', stepTwoInfoData)
    dispatch(stepTwoInfoChange({
      formData: stepTwoInfoData[0]
    }))
    return true
  }



  return(
    <div className={styles.stepTwoInfoPaart}>
      <p className={styles.title}>運送方式</p>

      <div className={styles.shipMethod}>
        {
          shipFee.map((item) => (
            <ShippingMethod
              key={item.id} 
              inputValue={item.id}
              fast={item.fast}
              tagTitle={item.title}
              tagDescription={item.description}
              tagCosts={item.cost}
              method={shipMethod}
              onChange={(shipMethodInputValue: number) => { setshipMethod(shipMethodInputValue) }}
            />
          ))
        }
        
        
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