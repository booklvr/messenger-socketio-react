import styled from 'styled-components'
import UserAvatar from '../UserAvatar'

export const Message = styled.div`
  display: flex;
  margin: 8px auto;
`

export const MyMessage = styled(Message)`
  justify-content: flex-end;

  .my-message {
    background-color: rgb(0, 132, 255);
    color: white;
  }
`

export const ReceivedMessage = styled(Message)`
  justify-content: flex-end;

  .received-message {
    background-color: rgb(228, 230, 235);
    color: rgb(5, 5, 5);
  }
`

export const MessageUserName = styled.div`
  font-size: 0.75rem;
  padding-left: 12px;
  color: rgb(138, 141, 145);
`

export const MessageBodyContainer = styled.div`
  max-width: 60%;
`

export const MessageBody = styled.div`
  flex: 1;
  border-radius: 4px;
  padding: 8px 12px;
  word-break: break-word;
`
export const MessageAvatarContainer = styled.div`
  align-self: flex-end;
  margin: 0px 8px;
`

export const MessageAvatar = styled(UserAvatar)`
  vertical-align: middle;
  border-radius: 50%;

  height: 28px;
  width: 28px;
`
