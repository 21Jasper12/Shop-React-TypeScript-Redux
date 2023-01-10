import styles from './InfoSelect.module.scss'
import { arrayState } from '../StepOneInfoPart'

interface props {
  title: string,
  name: string,
  defaultOptionTitle: string,
  optionArray: arrayState[],
  inputValue: number,
  onChange: Function
}

const InfoSelect = (
  {
    title,
    name,
    defaultOptionTitle,
    optionArray,
    inputValue,
    onChange
  }:props
) => {
  return(
    <div className={styles.infoSelect}>
      <label htmlFor="">{title}</label>
      <select
        name={name}
        value={inputValue}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>): void => onChange?.(event.target.value)}
        required
      >
        <option value={0} disabled>{defaultOptionTitle}</option>
        {
          optionArray.map((tag) => {
            return(
              <option key={tag.id} value={tag.id}>{tag.title}</option>
            )
          })
        }
      </select>
    </div>
  )
}

export default InfoSelect