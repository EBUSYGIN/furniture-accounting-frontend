import { Outlet } from 'react-router';

import styles from './RootLayout.module.css';
import { Header } from '@/widgets';

export function RootLayout() {
  return (
    <div className={styles.wrapper}>
      <div>Sidebar</div>
      <div className={styles.mainContentWrapper}>
        <Header />
        <main>
          <Outlet />
        </main>
        <footer>footer</footer>
      </div>
    </div>
  );
}
