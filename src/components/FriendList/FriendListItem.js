import PropTypes from 'prop-types';
import defImg from '../../img/default.jpg';
import s from './FriendListItem.module.css';

function FriendListItem({
  avatar = defImg,
  name = 'unknown',
  isOnline = true,
  id,
}) {
  return (
    <li className={s.item} key={id}>
      <span className={isOnline ? `${s.isOnline}` : `${s.isOffline}`}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
  id: PropTypes.number.isRequired,
};

export default FriendListItem;
