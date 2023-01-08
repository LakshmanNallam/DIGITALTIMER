import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {settedMinutes: 25, start: false, seconds: 0, countOver: false}

  minusBtnClicked = () => {
    this.setState(prevState => ({
      settedMinutes: parseInt(parseInt(prevState.settedMinutes) - 1),
      seconds: 0,
      countOver: false,
      start: false,
    }))
  }

  plusBtnClicked = () => {
    this.setState(prevState => ({
      settedMinutes: parseInt(parseInt(prevState.settedMinutes) + 1),
      seconds: 0,
      countOver: false,
      start: false,
    }))
  }

  incrementTimeElapsedInSecond = () => {
    const {seconds} = this.state
    this.setState({seconds: seconds + 1})
  }

  toggleStart = () => {
    const {start, seconds} = this.state
    console.log('vachindhi')
    if (!start) {
      this.timerId = setInterval(this.incrementTimeElapsedInSecond, 1000)
    } else {
      clearInterval(this.timerId)
    }
    this.setState(prevState => ({start: !prevState.start}))
  }

  getminutesandSeconds = (seconds, settedMinutes) => {
    const remseconds = settedMinutes * 60 - seconds
    const minutes = Math.floor(remseconds / 60)
    const secondstoBeDisplayed = Math.floor(remseconds % 60)
    if (minutes < 1 && secondstoBeDisplayed < 1) {
      console.log('vacinhdi')
      clearInterval(this.timerId)
      this.setState({start: false, seconds: 0, countOver: true})
    }
    const modifiedMin = minutes < 10 ? `0${minutes}` : minutes
    const modifiedSec =
      secondstoBeDisplayed < 10
        ? `0${secondstoBeDisplayed}`
        : secondstoBeDisplayed
    return `${modifiedMin}:${modifiedSec}`
  }

  restartTimer = async () => {
    await clearInterval(this.timerId)
    this.setState({seconds: 0, start: false, countOver: false})
  }

  timerStared = () => {
    console.log('succes1')
    const {settedMinutes, seconds, countOver} = this.state
    console.log(seconds)
    this.getminutesandSeconds(seconds, settedMinutes)

    return (
      <div className="gameCon">
        <div className="imageCon">
          <div className="roundedCon">
            {countOver ? (
              <h1>00:00</h1>
            ) : (
              <h1>{this.getminutesandSeconds(seconds, settedMinutes)}</h1>
            )}
            <p>Running</p>
          </div>
        </div>
        <div className="desCon">
          <div className="rightFirstCon">
            <button
              className="dsfjCon"
              type="button"
              onClick={this.toggleStart}
            >
              <div className="btn">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/pause-icon-img.png"
                  className="aspect1"
                  alt="pause icon"
                />
              </div>
              <p>Pause</p>
            </button>
            <button
              className="dsfjCon"
              type="button"
              onClick={this.restartTimer}
            >
              <div className="btn">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                  className="aspect1"
                  alt="reset icon"
                />
              </div>
              <p>Resart</p>
            </button>
          </div>
          <p>Set Timer limit</p>
          <div className="lowerCon">
            <button
              className="btn"
              type="button"
              onClick={this.minusBtnClicked}
            >
              <p>-</p>
            </button>
            <button className="btn2" type="button">
              <h1>{settedMinutes}</h1>
            </button>
            <button className="btn" type="button" onClick={this.plusBtnClicked}>
              <p>+</p>
            </button>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const {settedMinutes, start, seconds, countOver} = this.state
    console.log(seconds)

    return (
      <div className="mainDiv">
        <h1>Digital Timer</h1>
        {start ? (
          this.timerStared()
        ) : (
          <div className="gameCon">
            <div className="imageCon">
              <div className="roundedCon">
                {countOver ? (
                  <h1>00:00</h1>
                ) : (
                  <h1>{this.getminutesandSeconds(seconds, settedMinutes)}</h1>
                )}
                <p>Paused</p>
              </div>
            </div>
            <div className="desCon">
              <div className="rightFirstCon">
                <button
                  className="dsfjCon"
                  type="button"
                  onClick={this.toggleStart}
                >
                  <div className="btn">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
                      className="aspect1"
                      alt="play icon"
                    />
                  </div>
                  <p>Start</p>
                </button>
                <button
                  className="dsfjCon"
                  type="button"
                  onClick={this.restartTimer}
                >
                  <div className="btn">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                      className="aspect1"
                      alt="reset icon"
                    />
                  </div>
                  <p>Resart</p>
                </button>
              </div>
              <p>Set Timer limit</p>
              <div className="lowerCon">
                <button
                  className="btn"
                  type="button"
                  onClick={this.minusBtnClicked}
                >
                  <p>-</p>
                </button>
                <button className="btn2" type="button">
                  <p>{settedMinutes}</p>
                </button>
                <button
                  className="btn"
                  type="button"
                  onClick={this.plusBtnClicked}
                >
                  <p>+</p>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}
export default DigitalTimer
