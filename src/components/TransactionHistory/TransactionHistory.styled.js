import styled from '@emotion/styled';

export const Table = styled.table`
  margin-bottom: 100px;

  border-collapse: collapse;
  text-align: center;
  border-radius: 5px;
  overflow: hidden;

  font-size: 20px;
  background-color: #fff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);

  transition: color 1000ms linear;
`;

export const TableHeader = styled.th`
  background-color: #00bcd5;
  color: #fff;
  font-weight: 500;

  padding: 12px 100px;

  border-right: 1px solid #eaeaea;
  border-left: 1px solid #eaeaea;

  color: #ffff;
`;

export const TableItems = styled.td`
  padding: 12px 100px;

  border-right: 1px solid #eaeaea;
  border-left: 1px solid #eaeaea;

  color: #828385;

  :first-of-type {
    text-align: left;
  }
`;

export const TableRows = styled.tr`
  :not(:first-of-type):nth-of-type(2n) {
    background-color: #ecf1f4;
    z-index: 0;
  }

  :hover td {
    background-color: #bcedef;
    color: #fff;
  }
`;
