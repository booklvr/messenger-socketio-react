import React, { useState } from 'react'
import { EnterRoomButton, HomeContainer, Input } from './styled'

const Home = () => {
  const [roomName, setRoomName] = useState('')

  const handleRoomChange = (e) => setRoomName(e.target.value)

  return (
    <HomeContainer>
      <Input
        type='text'
        placeholder='Room'
        value={roomName}
        onChange={handleRoomChange}
      />
      <EnterRoomButton to={`/${roomName}`}>Join room</EnterRoomButton>
    </HomeContainer>
  )
}

export default Home
