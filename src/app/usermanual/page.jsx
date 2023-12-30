import React from 'react'
import Footer from '../components/Footer'
import styles from '../styles/card.module.css'

export default function page() {
  return (
    <div>
        
        <header className={styles.header}>
        <h1 className={styles.myCardsTitle}>Manual do Usuario</h1>
        </header>
        <div className={styles.section}>
            <h4 className={styles.bank}>Digitos de Bancos</h4>
            <div className={styles.containerBank}>
                <div>
                    <p>MasterCard</p>
                    <p>5100</p>
                </div>
                <div>
                    <p>Visa</p>
                    <p>4100</p>
                </div>
                <div>
                    <p>JCB</p>
                    <p>3569</p>
                </div>
                <div>
                    <p>American Express</p>
                    <p>3700</p>
                </div>
                <div>
                    <p>Diners</p>
                    <p>3600</p>
                </div>
                <div>
                    <p>Discover</p>
                    <p>6011</p>
                </div>
                <div>
                    <p>Maestro</p>
                    <p>6731</p>
                </div>
                <div>
                    <p>Dankort</p>
                    <p>5019</p>
                </div>
                <div>
                    <p>China Union Pay</p>
                    <p>6243</p>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}
