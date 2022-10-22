import styled from "@emotion/styled";
import { getRandomHexColor } from '../utils/randomColor';

export const Section = styled.section`
  width: 500px;
  margin-bottom: 100px;
  padding-top: 24px;

  text-align: center;
  border-radius: 12px;
  overflow: hidden;

  background-color: white;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`
export const Title = styled.h2`
  margin-bottom: 24px;

  font-size: 34px;
  font-weight: 500;
  color: #6d7178;
`
export const List = styled.ul`
  display: flex;
  border-top: 1px solid #d6d6d6;
`
export const ListItem = styled.li`
  width: 33.3333%;

  padding: 24px;
  text-align: center;
  background-color: ${getRandomHexColor};

  :not(:last-child) {
    border-right: 1px solid #d6d6d6;
  }
`

export const Label = styled.span`
  display: block;
  color: #fff;
  font-size: 22px;
`

export const Percentage = styled.span`
  display: block;
  color: #fff;
  margin-top: 12px;
  font-size: 36px;
`