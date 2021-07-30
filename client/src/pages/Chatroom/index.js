import React, { useEffect, useState } from 'react'
import {
  ChatroomContainer,
  ChatroomTopBar,
  MessagesContainer,
  ChatH1,
  MessageList,
} from './styled'

import useChat from '../../useChat'
import ChatMessage from '../../components/ChatMessage'
import useTyping from '../../useTyping'
import NewMessageForm from '../../components/NewMessageForm'
import TypingMessage from '../../components/TypingMessage'
import Users from '../../components/Users'
import UserAvatar from '../../components/UserAvatar'

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

  const [newMessage, setNewMessage] = useState('')

  const { isTyping, startTyping, stopTyping, cancelTyping } = useTyping()

  const handleNewMessageChange = (e) => {
    setNewMessage(e.target.value)
  }

  const handleSendMessage = (e) => {
    e.preventDefault()
    cancelTyping()
    sendMessage(newMessage)
    setNewMessage('')
  }

  useEffect(() => {
    console.log(messages)
  }, [messages])

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
          {messages.map((message, i) => (
            <li key={i}>
              <ChatMessage message={message}></ChatMessage>
            </li>
          ))}
          {typingUsers.map((user, i) => (
            <li key={messages.length + i}>
              <TypingMessage user={user}></TypingMessage>
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

// {messages &&
//   messages.length &&
//   messages.map((message, i) => (
//     <li key={i}>
//       <ChatMessage message={message}></ChatMessage>
//     </li>
//   ))}
// {typingUsers &&
//   typingUsers.length &&
//   typingUsers.map((user, i) => (
//     <li key={messages.length + i}>
//       <TypingMessage user={user} />
//     </li>
//   ))}
