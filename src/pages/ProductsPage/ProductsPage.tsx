import { Card, Title } from '@/shared/ui';
import { ProductList } from '@/widgets';

import styles from './ProductsPage.module.css';

export function ProductsPage() {
  return (
    <>
      <Card>
        <Title tag='h2' size='xl' className={styles.pageTitle}>
          Продукция
        </Title>
        <ProductList />
      </Card>
    </>
  );
}
