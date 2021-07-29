import styled from 'styled-components'

export const ChatroomContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  margin: 16px;
`

export const ChatroomTopBar = styled.div`
  display: flex;
  align-items: center;
`

export const ChatH1 = styled.h1`
  flex: 1;
`

export const MessagesContainer = styled.div`
  flex: 1;
  min-height: 100px;
  overflow: auto;
  border-radius: 7px 7px 0 0;
  margin-bottom: 8px;
`

export const MessageList = styled.ol`
  list-style: none;
  padding: 0;
`
