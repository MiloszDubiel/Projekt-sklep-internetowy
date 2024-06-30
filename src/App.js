import React, { Component }  from "react";
import Menu from './Menu/Menu'
import Main from './Main/Main'
import axios from 'axios';
import ResponsData from "./Menu/ResponseData/ResponsData";

class App extends Component{
  constructor(props) {
    super(props);
    this.state = { 
      basket: ' ',
      suma: ' ',
      data: ''
    };
  }

setBasket = (basket1) =>{
  if (JSON.stringify(this.state.basket) !== JSON.stringify(basket1)) {
    this.setState({
      basket: basket1
    });
  }
}
setStateBasket = (basket) =>{
  if(this.state.suma != basket){
    this.setState({
      suma: basket
    })
  }
  
}
sendBasket = async () => {
  try {
    let emial1, payment, paymentMetod
    emial1 = document.querySelector('#email1').value;
    payment = [...document.querySelectorAll('.paymentMetod1')]
    for(let i = 0; i < payment.length; i++){
      if(payment[i].checked)
        paymentMetod = payment[i].value
    }
      const response = await axios.post('http://localhost:3001/addBasket', {
          basket: this.state.basket,
          email: emial1,
          payment: paymentMetod
      });
  } catch (error) {
      if (error.response) {
      alert('Błąd: ' +  error.response.data);
  }
}
}
sendDataAndBasket = async () => {
  try {
    let emial, name, surname, street, flat, code, city, payment, paymentMetod, phone
    emial = document.querySelector('#email').value;
    name = document.querySelector('#name').value;
    surname = document.querySelector('#surname').value;
    street = document.querySelector('#street').value;
    flat = document.querySelector('#flat').value;
    code = document.querySelector('#code').value
    city = document.querySelector('#city').value
    phone = document.querySelector('#phone').value
    payment = [...document.querySelectorAll('.paymentMetod')]
    for(let i = 0; i < payment.length; i++){
      if(payment[i].checked)
        paymentMetod = payment[i].value
    }
    
    if(!/^\d{2}-\d{3}$/.test(code)){
      return alert('Został podany niepoprawny kod miasta');
    }
    if(phone.length > 9 || isNaN(phone)){
      return alert('Został podany niepoprawny numer telefonu');
    }
      const response = await axios.post('http://localhost:3001/addClient', {
          email: emial,
          name: name,
          surname: surname,
          street: street,
          flat: flat,
          code: code,
          city: city,
          phone: phone,
      });
      const response1 = await axios.post('http://localhost:3001/addBasket', {
        basket: this.state.basket,
        email: emial,
        payment: paymentMetod
      });
  } catch (error) {
      if (error.response) {
      // Serwer odpowiedział kodem statusu, który jest poza zakresem 2xx
      alert('Błąd: ' +  error.response.data);
  }
}
}

showPrevious = () => { 
  try {
    let email, date
    email = document.querySelector('#email2').value;
    date = document.querySelector('#date').value;
      const response = axios.post('http://localhost:3001/showPrevious', {
          email: email,
          date: date
      });
      response.then(response=>{
        let data = response.data.map(element=>{
          return <ResponsData picture={element.zdjecie} name={element.nazwa} quantity={element.ilosc} price={element.cena_jednostkowa} date={String(element.data_zakupu).substring(0,10)}/>
        })
        this.setState({
          data: data
        })

      })
  } catch (error) {
      if (error.response) {
      alert('Błąd: ' +  error.response.data);
  }
}

}
showPreviousByDate = () =>{
  try {
    let email, date
    email = document.querySelector('#email2').value;
    date = document.querySelector('#date').value;
      const response = axios.post('http://localhost:3001/showPreviousByDate', {
          email: email,
          date: date
      }).then(res =>{
        document.getElementById('total').innerHTML = res.data.map(el=>{
          return `Data zakupów: ${String(el.data_zakupu).substring(0,10)}, Całkowita cena: ${el.price}zł`
        })
      })
  } catch (error) {
      if (error.response) {
      alert('Błąd: ' +  error.response.data);
  }
  }
}

render(){
      return(
        <React.Fragment>
          <Menu basket={this.state.basket} suma={this.state.suma} sendData={this.sendDataAndBasket} sendBasket={this.sendBasket} showPrevious={this.showPrevious} dataBasket={this.state.data} showPreviousByDate={this.showPreviousByDate}/>
          <Main  basket={this.setBasket} sendBasket={this.setStateBasket}/>
        </React.Fragment>
      );
  }
}
export default App;
