import React from 'react'
import UserAvatar from '../UserAvatar'
import { UserBox, UserList } from './styled'

const Users = ({ users }) => {
  return users.length > 0 ? (
    <div>
      <h2>Also in this room:</h2>
      <UserList>
        {users.map((user, index) => (
          <UserBox key={index}>
            <span>{user.name}</span>
            <UserAvatar user={user}></UserAvatar>
          </UserBox>
        ))}
      </UserList>
    </div>
  ) : (
    <div>There is no one else in this room</div>
  )
}

export default Users
