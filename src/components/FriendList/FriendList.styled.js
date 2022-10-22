import styled from "@emotion/styled";

export const List = styled.ul`
  width: 500px;
  margin-bottom: 100px;
`

export const ListItem = styled.li`
  padding: 16px 16px;
  background-color: white;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;

  margin-bottom: 50px;

  :not(:last-child) {
    margin-bottom: 20px;
  }
`

export const ListItemStatus = styled.span`
  width: 24px;
  height: 24px;
  margin-right: 16px;

  background-color: ${friend => {
    return friend.online.isOnline ? 'green' : 'red';
  }};
  border-radius: 50%;
`
export const Image = styled.img`
  margin-right: 16px;
  background-color: #6d7178;
  border-radius: 8px;
`

export const ListName = styled.p`
  font-size: 32px;
`