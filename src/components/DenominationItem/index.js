import './index.css'

const DenominationItem = props => {
  // FIX7: props in functional component should not be accessed with this
  const {denominationDetails, updateBalance} = props
  const {value} = denominationDetails
  // FIX8: Variable declaration should consist of keyword const
  const onClickDenomination = () => {
    updateBalance(value)
  }

  return (
    <li className="denomination-item">
      <button
        type="button"
        className="denomination-button"
        // FIX9: Functions in functional components should not be accessed with this
        onClick={onClickDenomination}
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
