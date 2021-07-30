import React from 'react'
import { Form, Input, Button } from './styled'

const NewMessageForm = ({
  newMessage,
  handleNewMessageChange,
  handleStartTyping,
  handleStopTyping,
  handleSendMessage,
}) => {
  return (
    <Form>
      <Input
        type='text'
        value={newMessage}
        onChange={handleNewMessageChange}
        placeholder='Enter your new message here'
        onKeyPress={handleStartTyping}
        onKeyUp={handleStopTyping}
      />
      <Button type='submit' onClick={handleSendMessage}>
        Send
      </Button>
    </Form>
  )
}

export default NewMessageForm
