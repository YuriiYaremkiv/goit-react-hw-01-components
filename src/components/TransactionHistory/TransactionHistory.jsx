import PropTypes from 'prop-types';
import {
  Table,
  TableHeader,
  TableItems,
  TableRows,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <Table>
      <thead>
        <TableRows>
          <TableHeader>Type</TableHeader>
          <TableHeader>Amount</TableHeader>
          <TableHeader>Currency</TableHeader>
        </TableRows>
      </thead>
      <tbody>
        {transactions.map(transactions => {
          return (
            <TableRows key={transactions.id}>
              <TableItems>{transactions.type}</TableItems>
              <TableItems>{transactions.amount}</TableItems>
              <TableItems>{transactions.currency}</TableItems>
            </TableRows>
          );
        })}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object).isRequired,
};
