import {List,ListItem,ListItemStatus,Image,ListName} from './FriendList.styled'

export const FriendList = ({ friends }) => {
  return (
    <List>

      {friends.map((friend) => {
        return (
          <ListItem key={friend.id}>
            <ListItemStatus online={friend}></ListItemStatus>
            <Image
              src={friend.avatar}
              alt={friend.name} width="100" />
            <ListName>{friend.name}</ListName>
          </ListItem>
        )
      })}

    </List>
  )
}