import React, { useEffect, useState } from 'react'
import {
  ChatroomContainer,
  ChatroomTopBar,
  MessagesContainer,
  ChatH1,
  MessageList,
} from './styled'

import useChat from '../../useChat'
import useTyping from '../../useTyping'
import UserAvatar from '../../components/UserAvatar'
import Users from '../../components/Users'
import ChatMessage from '../../components/ChatMessage'
import TypingMessage from '../../components/TypingMessage'
import NewMessageForm from '../../components/NewMessageForm'

const Chatroom = (props) => {
  const { roomId } = props.match.params
  const {
    messages,
    user,
    users,
    typingUsers,
    sendMessage,
    startTypingMessage,
    stopTypingMessage,
  } = useChat(roomId)
  console.log('messages', messages)
  console.log('user', user)
  console.log('users', users)
  console.log('typingUsers', typingUsers)

  const [newMessage, setNewMessage] = useState('')

  const { isTyping, startTyping, stopTyping, cancelTyping } = useTyping()

  const handleNewMessageChange = (e) => setNewMessage(e.target.value)

  const handleSendMessage = (e) => {
    e.preventDefault()
    cancelTyping()
    sendMessage()
    setNewMessage('')
  }

  useEffect(() => {
    if (isTyping) startTypingMessage()
    else stopTypingMessage()
  }, [isTyping])

  return (
    <ChatroomContainer>
      <ChatroomTopBar>
        <ChatH1>Room {roomId}</ChatH1>
        {user && <UserAvatar user={user} />}
        <UserAvatar />
      </ChatroomTopBar>
      <Users users={users} />
      <MessagesContainer>
        <MessageList>
          {messages &&
            messages.length &&
            messages.map((message, i) => (
              <li key={i}>
                <ChatMessage message={message}></ChatMessage>
              </li>
            ))}
          {typingUsers &&
            typingUsers.length &&
            typingUsers.map((user, i) => (
              <li key={messages.length + i}>
                <TypingMessage user={user} />
              </li>
            ))}
        </MessageList>
      </MessagesContainer>
      <NewMessageForm
        newMessage={newMessage}
        handleNewMessageChange={handleNewMessageChange}
        handleStartTyping={startTyping}
        handleStopTyping={stopTyping}
        handleSendMessage={handleSendMessage}
      />
    </ChatroomContainer>
  )
}

export default Chatroom
