import React from 'react'
import { MyMessage, ReceivedMessage } from './styled'

const ChatMessage = ({ message }) => {
  return (
    <>
      {(message && message.ownedByCurrentUser && (
        <MyMessage className='my-message'>{message.body}</MyMessage>
      )) || (
        <RecievedMessage className='received-message'>
          {message.body}
        </RecievedMessage>
      )}
    </>
  )
}

export default ChatMessage
