import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HomeContainer = styled.div`
  position: fixed;
  left: 10%;
  right: 10%;
  top: 50%;
  transform: translate(0, -50%);
  display: flex;
  flex-direction: column;
`

export const Input = styled.input`
  padding: 24px 12px;
  border-radius: 7px;
  font-size: 24px;

  &:focus {
    outline: none;
  }
`

export const EnterRoomButton = styled(Link)`
  margin-top: 20px;
  padding: 24px 12px;
  font-size: 28px;
  background-color: rgb(0, 132, 255);
  color: white;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  border-radius: 7px;
`
