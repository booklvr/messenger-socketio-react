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
        placeholder='Aa'
        onKeyPress={handleStartTyping}
        onKeyUp={handleStopTyping}
      />
      <Button
        type='submit'
        onClick={handleSendMessage}
        className='send-message-button'
      >
        Send
      </Button>
    </Form>
  )
}

export default NewMessageForm
