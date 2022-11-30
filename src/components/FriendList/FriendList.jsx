import PropTypes from 'prop-types';
import {
  List,
  ListItem,
  ListItemStatus,
  Image,
  ListName,
} from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(({ id, isOnline, avatar, name }) => {
        return (
          <ListItem key={id}>
            <ListItemStatus online={isOnline}></ListItemStatus>
            <Image src={avatar} alt={name} width="100" />
            <ListName>{name}</ListName>
          </ListItem>
        );
      })}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
