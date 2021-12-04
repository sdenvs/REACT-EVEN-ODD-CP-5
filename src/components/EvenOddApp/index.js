// Write your code here
import './index.css'
import {Component} from 'react'

class EvenOddApp extends Component {
  state = {count: 0}

  typeOfNum = () => {
    const countN = Math.floor(Math.random() * 100 + 1)
    this.setState(prevObj => ({count: prevObj.count + countN}))
  }

  render() {
    const {count} = this.state
    const type = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="card">
        <div className="bgContainer">
          <h1 className="heading">Count {count}</h1>
          <p className="paragraph">Count is {type}</p>
          <button onClick={this.typeOfNum} className="button">
            Increment
          </button>
          <p>*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
