import styles from './ShippingMethod.module.scss'

interface props {
  inputValue: number,
  fast: boolean, 
  tagTitle: string, 
  tagDescription: string, 
  tagCosts: string,
  method: number,
  onChange: Function
}

const ShippingMethod = (
  { 
    inputValue, 
    fast, 
    tagTitle, 
    tagDescription, 
    tagCosts,
    method,
    onChange 
  }: props
  ) => {
  return(
    <div className={styles.formRow}>
      <input
        type='radio' 
        value={inputValue}
        checked={inputValue === method}
        onChange={(event: React.ChangeEvent<HTMLInputElement>):void => onChange?.(Number(event.target.value))}
      />
      <p className={`${styles.tagTitle} ${(fast && styles.fast)}`}>{tagTitle}</p>
      <p className={styles.tagDescription}>{tagDescription}</p>
      <p className={styles.tagCosts}>{tagCosts}</p>
    </div>
  )
}

export default ShippingMethod