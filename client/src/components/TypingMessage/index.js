import React from 'react'
import TypingAnimation from '../TypingAnimation'
import { MessageAvatar, MessageAvatarContainer, MessageItem } from './styled'

const TypingMessage = ({ user }) => {
  return (
    <MessageItem>
      <MessageAvatarContainer>
        <MessageAvatar src={user.picture} alt={user.name} />
      </MessageAvatarContainer>
      <TypingAnimation />
    </MessageItem>
  )
}

export default TypingMessage
