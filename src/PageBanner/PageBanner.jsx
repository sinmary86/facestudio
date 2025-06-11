import styles from './PageBanner.module.scss';
import PropTypes from 'prop-types';

export const PageBanner = ({ background, title }) => {
  return (
    <div className={styles.banner} style={{ backgroundImage: `url(${background})` }}>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
};

PageBanner.propTypes = {
  background: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
