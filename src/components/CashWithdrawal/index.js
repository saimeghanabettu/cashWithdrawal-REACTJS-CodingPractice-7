import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {
    balanceCount: 2000,
  }

  updateBalance = value => {
    this.setState(prevState => ({balanceCount: prevState.balanceCount - value}))
  }

  render() {
    const {balanceCount} = this.state
    const {denominationsList} = this.props
    const name = 'Sarah Williams'
    const firstLetter = name.slice(0, 1)

    return (
      <div className="bg-container">
        <div className="Card-container">
          <div className="profile-container">
            <div className="profile-letter-text">
              <p className="profile-letter">{firstLetter}</p>
            </div>
            <h1 className="profile-name">{name}</h1>
          </div>
          <div className="balance-container">
            <p className="your-balance">Your Balance</p>
            <div className="rupees-container">
              <p className="balance-amount">{balanceCount}</p>
              <p className="rupees-text">In Rupees</p>
            </div>
          </div>
          <p className="heading">Withdraw</p>
          <p className="paragraph">CHOOSE SUM (IN RUPEES)</p>
          <ul className="list-container">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                key={eachDenomination.id}
                itemDetails={eachDenomination}
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
