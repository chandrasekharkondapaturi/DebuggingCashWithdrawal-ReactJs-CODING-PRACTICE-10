import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

// FIX3: class should be declared with keyword class
class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  updateBalance = value => {
    // FIX4: setState spelling should be as mentioned below
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    // FIX5: The prop name here is denominationsList
    const {denominationsList} = this.props
    const {balance} = this.state
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)

    return (
      <div className="app-container">
        <div className="cash-withdrawal-container">
          <div className="user-details-container">
            <div className="initial-container">
              <p className="initial">{initial}</p>
            </div>
            <p className="name">{name}</p>
          </div>
          <div className="balance-container">
            <p className="your-balance">Your Balance</p>
            <p className="balance">
              {balance}
              <br />
              <span className="currency">In Rupees</span>
            </p>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denominations-list">
            {/* FIX6: The prop name here is denominationsList */}
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                key={eachDenomination.id}
                denominationDetails={eachDenomination}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
