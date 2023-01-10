import styles from './InfoInput.module.scss'

interface props {
  title: string,
  name: string,
  placeholder: string,
  inputValue: string,
  onChange: Function
}

const InfoInput = (
  {
    title,
    name,
    placeholder,
    inputValue,
    onChange
  }: props
) => {
  return(
    <div className={styles.infoInput}>
      <label htmlFor="">{title}</label>
      <input 
        type="text"
        name={name}
        placeholder={placeholder}
        value={inputValue}
        onChange={(event: React.ChangeEvent<HTMLInputElement>): void => onChange?.(event.target.value)}
      />
    </div>
  )
}

export default InfoInput