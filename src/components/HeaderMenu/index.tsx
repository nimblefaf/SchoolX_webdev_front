'use client';

import Link from 'next/link';

import styles from './HeaderMenu.module.scss';

export default function HeaderMenu() {
    return (
        <nav className={styles.nav}>
            <div className={styles.navList}>
                <div className={styles.navListItem}>
                    <Link href="#">Акции</Link>
                </div>
                <div className={styles.navListItem}>
                    <Link href="/#">Кредит</Link>
                </div>
                <div className={styles.navListItem}>
                    <Link href="#">Оплата и доставка</Link>
                </div>
                <div className={styles.navListItem}>
                    <Link href="#">Помощь</Link>
                </div>
                <div className={styles.navListItem}>
                    <Link href="#">Скупка Б/У</Link>
                </div>
                <div className={styles.navListItem}>
                    <Link href="#">Контакты</Link>
                </div>
            </div>
        </nav>
    );
}