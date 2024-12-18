import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {

  const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context)

  return (
    <div className='main'>
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">

        {!showResult
          ?
          <>
            <div className="greet">
              <p><span>Hello, Anas.</span></p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>There are many variations of passages of Lorem Ipsum available</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>It is a long established fact that a reader will be distracted by</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>If you use this site regularly and would like to help keep the si</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
          :
          <div className='result'>
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading
                ?
                <div className='loader'>
                  <hr />
                  <hr />
                  <hr />
                </div>
                :
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              }
            </div>
          </div>
        }



        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') onSent()
              }}
              value={input} type="text" placeholder='Enter a prompt here' />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input ? <img onClick={() => onSent()} src={assets.send_icon} alt="" /> : null}
            </div>
          </div>
          <p className="bottom-info">
            In Google Messages, you can start a chat with Gemini, enter a prompt, and send a message.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Main
