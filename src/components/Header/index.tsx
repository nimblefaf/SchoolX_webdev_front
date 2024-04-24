'use client';

import Image from 'next/image';
import Link from 'next/link';

import HeaderMenu from '../HeaderMenu';
import styles from './Header.module.scss';

function Header() {

    return (
        <header className={styles.header}>
            <div className={`container ${styles.wrapper}`}>
                <Link href="/" className={styles.logo}>
                    <Image fill src="/assets/icons/logo.svg" alt="logo" />
                </Link>
                
                <HeaderMenu />

                <a href="tel:+79184326587" className={styles.phone}>
                    <div className={styles.phoneWrapImage}>
                        <Image fill src="/assets/icons/telephone.svg" alt="logo" />
                    </div>
                </a>

                <div className={styles.cart}>
                    <div className={styles.cartIcon}>
                        <div className={styles.cartWrapImage}>
                            <Image fill src="/assets/icons/cart.svg" alt="logo" />
                        </div>
                        <div className={styles.cartIconBadge}>0</div>
                    </div>
                </div>

                <Link href="#" className={styles.language}>
                    <span>EN</span>
                </Link>

            </div>
        </header>
    );
}

export default Header;