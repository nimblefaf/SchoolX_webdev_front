'use client';

import Link from 'next/link';
import Image from 'next/image';

import styles from './Footer.module.scss';
import { text } from 'stream/consumers';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.wrapper}`}>
                <div className={styles.linksRow}>
                    <div className={styles.linksColumn}>
                        <h6 className={styles.headings}>Информация</h6>
                        
                        <Link href="#" className={styles.link}>Акции</Link>
                        <Link href="#" className={styles.link}>Кредит</Link>
                        <Link href="#" className={styles.link}>Оплата и доставка</Link>
                        <Link href="#" className={styles.link}>Гарантия</Link>
                        <Link href="#" className={styles.link}>Частые вопросы</Link>
                        <Link href="#" className={styles.link}>Новости</Link>
                        <Link href="#" className={styles.link}>Блог</Link>
                        <Link href="about" className={styles.link}>О нас</Link>
                        <Link href="#" className={styles.link}>Политика конфиденциальности</Link>
                        <Link href="#" className={styles.link}>Контакты</Link>
                    </div>
                    <div className={styles.linksColumn}>
                        <h6 className={styles.headings}>Услуги и сервисы</h6>
                        <Link href="#" className={styles.link}>Сервисный центр v-comp</Link>
                        <Link href="#" className={styles.link}>Магазин Б/У товара</Link>
                        <Link href="#" className={styles.link}>Скупка Б/У </Link>
                        <Link href="#" className={styles.link}>Ремонт ПК и оргтехники</Link>
                        <Link href="#" className={styles.link}>Компьютерная помощь</Link>
                        <Link href="#" className={styles.link}>Сотрудничество</Link>
                        <Link href="#" className={styles.link}>Главная</Link>
                    </div>
                    <div className={styles.linksColumn}>
                        <h6 className={styles.headings}>Контакты</h6>
                        <text>(000) 00-00-000 - Отдел продаж</text>
                        <text>(123) 456-78-90 - Отдел продаж</text>
                        <text>(123) 456-78-90 - Отдел продаж</text>
                        <text>Ростов-на-Дону, Шаповалова, 2а </text>
                        <text className={styles.contactsTextField}>Понедельник-Пятница 9:00-19:00 Суббота-Воскресенье: с 9:00-16:00</text>
                    </div>
                    <div className={styles.followAndSubscribe}>
                        <div>
                            <h6 className={styles.headings}>Следите за нами</h6>
                        </div>
                        <div>
                            <h6 className={styles.headings}>Подписывайтесь за скидки</h6>
                            <input></input>
                        </div>
                    </div>
                </div>
                <div className={styles.copyright}>
                    <hr></hr>
                    2024 Интернет магазин Kettle.shop Все права защищены.
                    <hr></hr>
                </div>
            </div>
        </footer>
    );
}