import './index.css'

const DenominationItem = props => {
  const {itemDetails, updateBalance} = props
  const {value} = itemDetails

  const onClickButton = () => {
    updateBalance(value)
  }

  return (
    <li className="buttons-container">
      <button type="button" className="button-style" onClick={onClickButton}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
