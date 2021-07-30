import React from 'react'
import { Avatar } from './styled'

const UserAvatar = ({ user }) => {
  return (
    <>
      {user && <Avatar src={user.picture} alt={user.name} title={user.name} />}
    </>
  )
}

export default UserAvatar
