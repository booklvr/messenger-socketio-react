import React from 'react'
import UserAvatar from '../UserAvatar'
import {
  MessageAvatarContainer,
  MessageBody,
  MessageBodyContainer,
  MessageUserName,
  MyMessage,
  ReceivedMessage,
} from './styled'

const ChatMessage = ({ message }) => {
  return (
    <>
      {(message.ownedByCurrentUser && (
        <MyMessage>
          <MessageBodyContainer>
            <MessageBody>{message.body}</MessageBody>
          </MessageBodyContainer>
        </MyMessage>
      )) || (
        <ReceivedMessage>
          <MessageAvatarContainer>
            <UserAvatar user={message.user} />
          </MessageAvatarContainer>
          <MessageUserName>{message.user.name}</MessageUserName>
          <MessageBody>{message.body}</MessageBody>
        </ReceivedMessage>
      )}
    </>
  )
}

export default ChatMessage

// {
//   ;(message && message.ownedByCurrentUser && (
//     <MyMessage className='my-message'>{message.body}</MyMessage>
//   )) || (
//     <ReceivedMessage className='received-message'>
//       {message.body}
//     </ReceivedMessage>
//   )
// }
