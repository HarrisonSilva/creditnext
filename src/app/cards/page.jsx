"use client"
import React from 'react'
import styles from '../styles/card.module.css'
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import Footer from '../components/Footer';

export default function page() {
    const isLocalStorageAvailable = typeof localStorage !== 'undefined';
    let storedCards;
if (isLocalStorageAvailable) {
  storedCards = JSON.parse(localStorage.getItem('cards'));
  
}
    const deleteCard = (event) => {
        const nameCard = event.target.parentNode.firstChild.firstChild.firstChild.children[4].innerText;
    
        const indexOfCard = storedCards.findIndex((card) => card.name.toUpperCase() === nameCard);
        
        if (indexOfCard !== -1) {
            storedCards.splice(indexOfCard, 1);
            localStorage.setItem('cards', JSON.stringify(storedCards));
            window.location.reload();
        }
    }
    
  return (
    <div>
        <header className={styles.header}>
            <h1 className={styles.myCardsTitle}>Meus Cartões</h1>
        </header>
        <div className={styles.containerCard}>
    {storedCards && storedCards.map((card, index) => (
      <div className={styles.containerCards} key={index}>
      <Cards
      number={card.number}
      expiry={card.expiry}
      cvc={card.cvc}
      name={card.name}
      focused={card.focus}
      />
    <button type='button' onClick={deleteCard}>Deletar Cartão</button>
      </div>
      ))}
    </div>
    <Footer />
    </div>
  )
}
