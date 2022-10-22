import { Card, Image, Container, ProfilName, ProfilText, List, ListItem, ListLabel, ListQuantity } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Card>
      <Container>
        <Image
          src={avatar}
          alt={username} />
        <ProfilName>{username}</ProfilName>
        <ProfilText>{tag}</ProfilText>
        <ProfilText>{location}</ProfilText>
      </Container>

      <List>
        <ListItem>
          <ListLabel>Followers</ListLabel>
          <ListQuantity>{stats.followers}</ListQuantity>
        </ListItem>
        <ListItem>
          <ListLabel>Views</ListLabel>
          <ListQuantity>{stats.views}</ListQuantity>
        </ListItem>
        <ListItem>
          <ListLabel>Likes</ListLabel>
          <ListQuantity>{stats.likes}</ListQuantity>
        </ListItem>
      </List>
    </Card>
  );
};