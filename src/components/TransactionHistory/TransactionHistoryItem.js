import PropTypes from 'prop-types';
import s from './TransactionHistoryItem.module.css';

function TransactionHistoryItem({ id, type, amount, currency }) {
  return (
    <tr key={id} className={s.row}>
      <td className={s.cell}>{type}</td>
      <td className={s.cell}>{amount}</td>
      <td className={s.cell}>{currency}</td>
    </tr>
  );
}

TransactionHistoryItem.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
  id: PropTypes.number.isRequired,
};

export default TransactionHistoryItem;
