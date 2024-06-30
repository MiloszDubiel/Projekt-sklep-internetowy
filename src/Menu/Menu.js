import React from "react";
import styles from './Menu.module.css';
import basket from '../img/basket.png';

class Menu extends React.Component {
  state = {
    showMenu: false,
    showBasketMenu: false,
  }

  render() {
    let suma = 0.00;
    for (let i = 0; i < this.props.suma.length; i++) {
      suma += parseFloat(this.props.suma[i].cena);
    }

    return (
      <React.Fragment>
        <nav>
          <div className={styles.navDiv}>
            <ol>
              <li onClick={()=>{
                 document.querySelector(`.${styles.clientDataResponse}`).style.display = 'flex';
              }}>Profil</li>
            </ol>
          </div>
          <div className={styles.navDivBasket}>
            <div className={styles.buttonBasket} onClick={() => {
              let currentState = this.state.showBasketMenu;
              this.setState({
                showBasketMenu: !currentState
              });
            }}>
              <span>Koszyk</span>
              <img src={basket} className={styles.basketIcon} alt="Koszyk" />
            </div>
            <div className={`${styles.basketMenu} ${this.state.showBasketMenu ? styles.basketMenuShow : styles.basketMenuClose}`}>
              <div className={styles.basketHeader}>
                <h3>Twój koszyk</h3>
              </div>
              <div className={styles.basketContent}>
                {this.props.basket}
                <div className={styles.BasketSum}>
                  <h2>Do zapłaty: {suma.toFixed(2)} zł</h2>
                </div>
                <div className={styles.basketButtons}>
                  <input type="button" value="Przejdź do podsumowania" onClick={() => {
                    document.querySelector(`.${styles.summary}`).style.display = 'flex';
                  }} />
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className={styles.info}>
            <div className={styles.msgbox} id="msgbox">
              <div className={styles.msgButton}>
                <button onClick={() => {
                  document.querySelector(`.${styles.info}`).style.display = 'none';
                  if(document.querySelector(`.${styles.info}`).classList.contains('added'))
                    window.location.reload();
                }}>
                  X
                </button>
              </div>
              <div className={styles.msgboxInfo} id="msgBoxInfo">
              </div>
            </div>
        </div>
        <div className={styles.clientDataResponse}>
          <div className={styles.clientDataResponseDetails}>
            <div className={styles.clientDataResponseButton}>
              <button onClick={() => {
                document.querySelector(`.${styles.clientDataResponse}`).style.display = 'none';
              }}>
                X
              </button>
            </div>
            <div>
            <div className={styles.clientData}>
              <form onSubmit={(e)=>{
                this.props.showPrevious()
                e.preventDefault()
                this.props.showPreviousByDate()
                e.preventDefault()
              }} >
                <h2 style={{textAlign: 'center'}}>Historia zakupów</h2>
                <div className={styles.clientDataDivs}>
                  <input type="email" id="email2" name="emial2" placeholder="Emial" required/>
                </div>
                <div className={styles.clientDataDivs}>
                  <input type="date" id="date" name="date" placeholder="Data zakupów - niewymagany"/>
                  <p style={{ fontSize: '15px', fontWeight: 'bold' }}>Data jest wymagana tylko wtedy, gdy chcesz wyświetlic historie z konkretnego dnia </p>
                </div>
                <div className={styles.clientDataDivs}>
                  <p style={{ fontSize: '15px', fontWeight: 'bold' }}>W innym przypadku podaj tylko adres E-mail, aby wysietlić historie zakupów </p>
                </div>
                <div className={styles.clientDataDivs + " " + styles.submitDiv }>
                 <input type="submit" value="Zatwierdź"/>
                </div>

              </form>
              <br />
              <div className={styles.basketContent} id="dane_pobrane">
                {this.props.dataBasket}
                <div id="total"></div>
              </div>
            </div>
            </div>
          </div>
          </div>
        <div className={styles.summary}>
          <div className={styles.summaryDetails}>
            <div className={styles.summaryDetailsButton}>
              <button onClick={() => {
                document.querySelector(`.${styles.summary}`).style.display = 'none';
              }}>
                X
              </button>
            </div>
            <div className={styles.summaryDetails2}>
              <h2 className={styles.summaryDetailsh2}>Podsumowanie</h2>
            </div>
            <h2 style={{ textAlign: 'center' }}>Do zapłaty: {suma.toFixed(2)}zł</h2>
            <div className={styles.clientData}>
              <form onSubmit={(e)=>{
                  e.preventDefault();
                  if(suma.toFixed(0) <= 0 ){
                    document.querySelector(`.${styles.info}`).style.display = 'flex';
                    document.querySelector(`#msgBoxInfo`).innerHTML = '<p> Nie dodano żadnych produktów do koszyka </p>'
                  }
                  else{
                    this.props.sendBasket();
                    document.querySelector(`.${styles.info}`).style.display = 'flex';
                    document.querySelector(`#msgBoxInfo`).innerHTML = '<p> Twoje zamowienie zostało złożone </p>'
                    document.querySelector(`.${styles.info}`).classList.add('added')
                  }
                  }} >
                <h2 style={{textAlign: 'center'}}>Mam już konto</h2>
                <div className={styles.clientDataDivs}>
                  <input type="email" id="email1" name="emial1" placeholder="Emial" required/>
                </div>
                <div className={styles.clientDataDivs}>
                  <p style={{ fontSize: '15px', fontWeight: 'bold' }}>Adres e-mail jest potrzebny do zapisania historii twoich zakupów</p>
                </div>
                <div className={styles.clientDataDivs}>
                    <p style={{ fontSize: '15px', fontWeight: 'bold' }}>Metoda płatności</p>
                    <table>
                      <tbody>
                        <tr>
                          <td><input type="radio"  className="paymentMetod1" name="payment" value="Karta" checked/></td>
                          <td>Karta (przy odbioerze)</td>
                        </tr>
                        <tr>
                          <td> <input type="radio" className="paymentMetod1" name="payment"  value="Gotówka"/></td>
                          <td>Gotówka (przy odbioerze)</td>
                        </tr>
                      </tbody>
                    </table>
                </div>
                <div className={styles.clientDataDivs + " " + styles.submitDiv }>
                 <input type="submit" value="Zatwierdź"/>
                </div>
              </form>
              <br />
            </div>
            <div className={styles.clientData}>
              <form onSubmit={(e)=>{
                  e.preventDefault();
                  if(suma.toFixed(0) <= 0 ){
                    document.querySelector(`.${styles.info}`).style.display = 'flex';
                    document.querySelector(`#msgBoxInfo`).innerHTML = '<p> Nie dodano żadnych produktów do koszyka </p>'
                  }
                  else{
                    this.props.sendData();
                    document.querySelector(`.${styles.info}`).style.display = 'flex';
                    document.querySelector(`#msgBoxInfo`).innerHTML = '<p> Twoje zamowienie zostało złożone </p>'
                    document.querySelector(`.${styles.info}`).classList.add('added')
                  }
                  }} 
                  >
                <h2 style={{textAlign: 'center'}}>Jestem tu pierszy raz</h2>
                <div className={styles.clientDataDivs}>
                  <p style={{ fontSize: '15px', textAlign: 'center', fontWeight: 'bold' }}>Podaj dane dostawy</p>
                  <br />
                  <input type="text" id="name" name="name" placeholder="Imie" required/>
                </div>
                <div className={styles.clientDataDivs}>
                  <input type="text" id="surname" name="surname" placeholder="Nazwisko" required/>
                </div>
                <div className={styles.clientDataDivs}>
                  <input type="text" id="street" name="street" placeholder="Ulica" required style={{width: '50%'}}/>
                  <input type="text" id="flat" name="flat" placeholder="Numer domu" required style={{width: '25%', textAlign: 'center' }}/>
                  <input type="text" id="code" name="code" placeholder="Kod pocztowy" required style={{width: '25%', textAlign: 'center' }}/>
                </div>

                <div className={styles.clientDataDivs}>
                  <input type="text" id="city" name="city" placeholder="Miasto" defaultValue="Rzeszów" required/>
                </div>
                <div className={styles.clientDataDivs}>
                  <input type="email" id="email" name="email" placeholder="Email" required/>
                </div>
                <div className={styles.clientDataDivs}>
                  <input type="tel" id="phone" name="phone" placeholder="Telefon" required/>
                  <p style={{ fontSize: '15px', fontWeight: 'bold' }}>Adres e-mail i numer telefon potrzebne są do zapisania historii twoich zakupów</p>
                </div>
                <div className={styles.clientDataDivs}>
                    <p style={{ fontSize: '15px', fontWeight: 'bold' }}>Metoda płatności</p>
                    <table>
                      <tbody>
                        <tr>
                          <td><input type="radio"  className="paymentMetod" name="payment" value="Karta" defaultChecked/></td>
                          <td>Karta (przy odbioerze)</td>
                        </tr>
                        <tr>
                          <td> <input type="radio" className="paymentMetod" name="payment"  value="Gotówka"/></td>
                          <td>Gotówka (przy odbioerze)</td>
                        </tr>
                      </tbody>
                    </table>
                </div>
                <div className={styles.clientDataDivs + " " + styles.submitDiv }>
                 <input type="submit" value="Zatwierdź"/>
                </div>
              </form>
              <br />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Menu;
