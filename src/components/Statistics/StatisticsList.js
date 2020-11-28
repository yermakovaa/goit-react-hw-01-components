import PropTypes from 'prop-types';
import RGB from './getRandomColor';
import s from './StatisticsList.module.css';

function StatisticsList({ stats }) {
  return (
    <ul className={s.list}>
      {stats.map(({ id, label, percentage }) => (
        <li className={s.item} key={id} style={{ backgroundColor: `${RGB()}` }}>
          <span className={s.label}>{label}</span>
          <span className={s.percentage}>{percentage}%</span>
        </li>
      ))}
    </ul>
  );
}

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default StatisticsList;
