import styles from './PageBanner.module.scss';
import classNames from 'classnames';

export const PageBanner = ({ background, title, size = 'default' }) => {

  const bannerClass = classNames(styles.banner, {
    [styles['banner--small']]: size === 'small',
  });

  return (
    <div className={bannerClass} style={{ backgroundImage: `url(${background})` }}>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
};