import Image from 'next/image';
import { useState } from 'react';

import ItemPlaceholderImage from '@/app/assets/images/AngrySparrow.png'
import styles from './CatalogCard.module.scss';

export default function CatalogCard() {

    return (
        <div className={styles.card}>
            <div className={styles.cardImage}>
                <Image
                    fill
                    src={ItemPlaceholderImage}
                    alt="ItemPicture"
                />
            </div>

            <div className={styles.cardDesc}>
                <span className={styles.cardDescName}>Название</span>
                <span className={styles.cardDescText}>Описание</span>

                <div>
                    <span className={styles.cardDescPrice}>3500 руб.</span>
                    <button className={styles.cardDescBuyBtn}>КУПИТЬ</button>
                </div>

                

            </div>
        </div>
    );
}