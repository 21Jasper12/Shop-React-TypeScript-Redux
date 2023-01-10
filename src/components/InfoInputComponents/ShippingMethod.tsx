import styles from './ShippingMethod.module.scss'

interface props {
  inputValue: string,
  fast: boolean, 
  tagTitle: string, 
  tagDescription: string, 
  tagCosts: string,
  onChange: Function
}

const ShippingMethod = (
  { 
    inputValue, 
    fast, 
    tagTitle, 
    tagDescription, 
    tagCosts,
    onChange 
  }: props
  ) => {
  return(
    <div className={styles.formRow}>
      <input 
        name='ta-method' 
        type='radio' 
        value={inputValue} 
        onChange={(event: React.ChangeEvent<HTMLInputElement>):void => onChange?.(event.target.value)}
      />
      <p className={`${styles.tagTitle} ${(fast && styles.fast)}`}>{tagTitle}</p>
      <p className={styles.tagDescription}>{tagDescription}</p>
      <p className={styles.tagCosts}>{tagCosts}</p>
    </div>
  )
}

export default ShippingMethod