"use client"
import React, { useEffect, useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import styles from './styles/card.module.css'
import Image from 'next/image'
import Footer from './components/Footer';

const PaymentForm = () => {
  const [cards, setCards] = useState([])
  const [btndisabled, setBtnDisabled] = useState(true)
  const [card , setCard] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;  
    setCard((prev) => ({ 
      ...prev,
       [name]: value 
      }));
  }

  useEffect(() => {
    const { number, expiry, cvc, name } = card
    const validate = number.length === 16 && expiry.length === 4 && cvc.length === 3 && name.length > 6 && typeof name === 'string'
    if (validate) {
      const btn = document.querySelector('button').style
      btn.backgroundColor = '#1A9C22';
      btn.color = '#fff';
      btn.cursor = 'pointer'
    }
    if (!validate) {
      const btn = document.querySelector('button').style
      btn.backgroundColor = '#ffffff';
      btn.color = '#686868';
      btn.cursor = 'default'
    }
    const storedCards = JSON.parse(localStorage.getItem('cards')) || []
    setCards(storedCards)
    setBtnDisabled(!validate);
  }, [card]);  
    
  const handleInputFocus = (evt) => {
    setCard((prev) => ({ 
      ...prev,
       focus: evt.target.name 
      }));
  }

  const createCard = () => {
    const newCards = [...cards, card]
    localStorage.setItem('cards', JSON.stringify(newCards));
    document.querySelector('#cardCreate').style.display = 'block'
    window.location.reload();
  }

  
  return (
    <div>
      <div className={styles.header}>
          <div className={styles.containerImg}>
            
              <h3 className={styles.sub}>CreditNext</h3>
              <Image src='/creditcard.png' width='50' height='50' alt='photo card'/>
          </div>
          <h1 className={styles.title}>Cadastre seu Cartão de Crédito</h1>
      </div>
      <div className={styles.container}>
      <form className={styles.form}>
      <div> 
       <h5 id='cardCreate' className={styles.sucess}>Cartao Gerado com Sucesso!</h5>

       <h4>Digite seu nome</h4>
            <input
              type="text"
              name="name"
              value={card.name}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              />

      </div>
      <div>
      <h4>Digite o número</h4>
      <input
              type="number"
              name="number"
              value={card.number}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              />
            
      </div>
      <div>
      <h4>Digite o código de verificação</h4>
      <input
              type="number"
              name="cvc"
              value={card.cvc}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              />
         
      </div>
      <div>
      <h4>Digite a data de validade</h4>
      <input
              type="number"
              name="expiry"
              value={card.expiry}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              />
            
      </div>
        <button disabled={btndisabled} type='button' onClick={ createCard }>
          Cadastre
        </button>
      </form>
      <Cards
        number={card.number}
        expiry={card.expiry}
        cvc={card.cvc}
        name={card.name}
        focused={card.focus}
      />
     </div>
          <Footer />
        </div>
  );
}

export default PaymentForm;