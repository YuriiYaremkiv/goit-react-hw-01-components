import PropTypes from 'prop-types';
import css from './Profile.module.scss';

export const Profile = ({
  user: { username, tag, location, avatar, stats },
}) => {
  return (
    <div className={css.card}>
      <div className={css.card__container}>
        <img className={css.carg__img} src={avatar} alt={username} />
        <p className={css.card__name}>{username}</p>
        <p className={css.card__text}>{tag}</p>
        <p className={css.card__text}>{location}</p>
      </div>

      <ul className={css.card__list}>
        <ul className={css.card__item}>
          <li className={css.card__itemName}>Followers</li>
          <li className={css.card__itemValue}>{stats.followers}</li>
        </ul>
        <ul className={css.card__item}>
          <li className={css.card__itemName}>Views</li>
          <li className={css.card__itemValue}>{stats.views}</li>
        </ul>
        <ul className={css.card__item}>
          <li className={css.card__itemName}>Likes</li>
          <li className={css.card__itemValue}>{stats.likes}</li>
        </ul>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
