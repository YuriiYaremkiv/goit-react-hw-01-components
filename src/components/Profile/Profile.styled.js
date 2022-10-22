import styled from '@emotion/styled'

export const Card = styled.div`
  width: 450px;
  margin-bottom: 100px;

  border-radius: 12px;
  overflow: hidden;
  background-color: white;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 32px;
`

export const Image = styled.img`
  display: block;
  width: 100%;
  max-width: 250px;
  margin-bottom: 32px;

  background-color: #f4f0f0;
  background-size: 50%;

  border-radius: 50%;
`

export const ProfilName = styled.p`
  margin-bottom: 16px;

  font-size: 32px;
  font-weight: 700;
`

export const ProfilText = styled.p`
  margin-bottom: 16px;

  font-size: 24px;
  color: #6d7178;
`

export const List = styled.ul`
  display: flex;
  justify-content: center;

  border-top: 1px solid #d6d6d6;
  background-color: #f4f0f0;
`

export const ListItem = styled.ul`
  width: 33.333%;
  padding: 24px;

  text-align: center;

  :not(:last-child) {
    border-right: 1px solid #d6d6d6;
`

export const ListLabel = styled.ul`
  display: block;

  font-size: 22px;
  color: #6d7178;
`

export const ListQuantity = styled.ul`
  display: block;
  color: #6d7178;
  margin-top: 12px;

  font-size: 22px;
  font-weight: 700;
  color: black;
`