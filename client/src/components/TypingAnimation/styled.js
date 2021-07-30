import styled, { keyframes } from 'styled-components'

const typing = keyframes`
  0% {
    transform: translateY(-3px);
    transition: all 0.3s ease-in-out;
  }

  50% {
    transform: translateY(3px);
    transition: all 0.3s ease-in-out;
  }

  100% {
    transform: translateY(-3px);
    transition: all 0.3s ease-in-out;
  }
`

export const TypingAnimationContainer = styled.div`
  width: 60px;
  height: 25px;
  background: #f2f2f2;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Dot = styled.span`
  width: 7px;
  height: 7px;
  background: #cacaca;
  border-radius: 50%;
  margin: 3px;
  transition: all 0.5s ease-in-out;
  animation: ${typing} 1s infinite;
`

export const Dot1 = styled(Dot)`
  animation-delay: 0.2s;
`

export const Dot2 = styled(Dot)`
  animation-delay: 0.5s;
`
export const Dot3 = styled(Dot)`
  animation-delay: 0.8s;
`
