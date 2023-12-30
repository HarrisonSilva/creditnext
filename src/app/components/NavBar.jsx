import React from 'react'
import styles from '../styles/navbar.module.css'
import Link from 'next/link'

export default function NavBar() {
  return (
    <nav className={styles.nav}>
        <ul className={styles.container}>
            <li> <Link href='/' >Home</Link></li>
            <li> <Link href='/cards' >Meus Cartões</Link></li>
        </ul>
    </nav>
  )
}
