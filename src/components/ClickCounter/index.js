import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onClickIncreaseCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <h1 className="counter-head">
          The Button Has been Clicked <span className="count">{count}</span>{' '}
          times
        </h1>
        <p className="counter-para ">Click the Button to Increase The count</p>
        <button
          onClick={this.onClickIncreaseCount}
          className="counter-btn"
          type="button"
        >
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
