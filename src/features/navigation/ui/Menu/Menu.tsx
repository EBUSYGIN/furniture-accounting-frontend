import { NavLink } from 'react-router';
import cn from 'classnames';

import styles from './Menu.module.css';
import { Icon } from '@/shared/ui/Icon/Icon';

export function Menu() {
  return (
    <nav className={styles.menu}>
      <div className={styles.title}>Главное меню</div>
      <ul className={styles.list}>
        <NavLink
          className={({ isActive }) =>
            cn(styles.link, { [styles.active]: isActive })
          }
          to='/'
        >
          <Icon.ProductsList />
          Главная
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            cn(styles.link, { [styles.active]: isActive })
          }
          to='/workshops'
        >
          <Icon.Workshop />
          Цеха
        </NavLink>
      </ul>
    </nav>
  );
}
