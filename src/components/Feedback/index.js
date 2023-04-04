// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {resources: ''}

  render() {
    const {resources} = this.state

    emojisClick = () => {
      ;<div className="bg-emoji">
        <img className="em" src={loveEmojiUrl} />
        <p className="heading-emojis">Thank You! </p>
        <p className="sub-head-emoji">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    }

    return (
      <div className="bg">
        <div className="card">
          <h1 className="heading">
            How satisfied are you with our customer support performance?{' '}
          </h1>
          <div className="emojis">
            <img className="em" src={imageUrl} onClick={this.emojisClick} />
            <h1 className="name">{name}</h1>
          </div>
        </div>
      </div>
    )
  }
}
export default Feedback
