import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// import the styles and components you're going to use
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css"
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from "@chatscope/chat-ui-kit-react"

function App() {
  // Messages State will go here
  const [messages, setMessages] = useState([{
    message: "Hello, I am ChatGPT!",
    sender: "ChatGPT"
  }
  ])

  return (
    <div className='App'>
      <div style={{ position: "relative", height: "800px", width: "700px" }} >
        <MainContainer>
          <ChatContainer></ChatContainer>
          <MessageList>
            {message.map((message, index)=>{
              <Message key={index} model={message}></Message>
            })}
          </MessageList>
          <MessageInput placeholder=''></MessageInput>
        </MainContainer>

      </div>
    </div>
  )
}

export default App
