import TweetInput from "./TweetInput"
import "./TweetBox.css"

export default function TweetBox({setTweets, userProfile, tweets}) {
  

  const handleOnSubmit = () => {
    let newTweet = {
      'name' : userProfile.name,
      'handle' : userProfile.handle,
      'text' : '',
      'comments' : 0,
      'retweets' : 0,
      'likes' : 0,
      'id': tweets.length
    }

    setTweets([...tweets, newTweet])

    console.log(tweets)

  }

  return (
    <div className="tweet-box">
      <TweetInput />

      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount />
        <TweetSubmitButton handleOnSubmit={handleOnSubmit}/>
      </div>
    </div>
  )
}

export function TweetBoxIcons() {
  return (
    <div className="tweet-box-icons">
      <i className="fas fa-image"></i>
      <i className="icon-gif">GIF</i>
      <i className="far fa-chart-bar"></i>
      <i className="fas fa-map-marker-alt"></i>
    </div>
  )
}

export function TweetCharacterCount(props) {
  // ADD CODE HERE
  return <span></span>
}

export function TweetSubmitButton({handleOnSubmit}) {
  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button className="tweet-submit-button" onClick = {handleOnSubmit}>Tweet</button>
    </div>
  )
}
