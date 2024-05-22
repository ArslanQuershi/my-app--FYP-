
import React, { useState } from 'react'
import Model from 'react-modal'
function Chatbot() {
    const[chat, setchat]=useState(false)
  return (
    <>
    <div id='bot'>
    <button id='Chatbot' onClick={()=>setchat(true)}><i class="fa-solid fa-message"></i></button>
    
    <Model className='Chat' isOpen={chat}>
      <iframe  width="350" height="430" allow="microphone;"  src="https://console.dialogflow.com/api-client/demo/embedded/4564bdc1-b0f7-4d38-8e2a-29bf926d9d57"></iframe>
       <button id='cross' onClick={()=>setchat(false)}>X</button> 
      </Model>
      </div>

    </>
  )
}

export default Chatbot
