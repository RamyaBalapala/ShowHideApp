import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {
    isFirstNameDisplayed: false,
    isLastNameDisplayed: false,
  }

  showFirstName = () => {
    this.setState(prevState => ({
      isFirstNameDisplayed: !prevState.isFirstNameDisplayed,
    }))
  }

  showLastName = () => {
    this.setState(prevState => ({
      isLastNameDisplayed: !prevState.isLastNameDisplayed,
    }))
  }

  render() {
    const {isFirstNameDisplayed, isLastNameDisplayed} = this.state
    return (
      <div className="main-bg-container">
        <h1 className="main-heading">Show/Hide</h1>
        <div className="buttons-main-container">
          <div className="names-container">
            <button
              type="button"
              className="button"
              onClick={this.showFirstName}
            >
              Show/Hide Firstname
            </button>
            {isFirstNameDisplayed ? <p className="name">Joe</p> : null}
          </div>
          <div className="names-container">
            <button
              type="button"
              className="button"
              onClick={this.showLastName}
            >
              Show/Hide Lastname
            </button>
            {isLastNameDisplayed ? <p className="name">Jonas</p> : null}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
