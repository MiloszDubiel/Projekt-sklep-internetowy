import React,{ Component } from "react";
import styles from './Main.module.css'
//Kategorie
import mieso from '../img/Main/Categories/mieso.png'
import wedliny from '../img/Main/Categories/wedliny.png'
import nabial from '../img/Main/Categories/nabial.png'
import warzywniak from '../img/Main/Categories/warzywniak.png'
import ryby from '../img/Main/Categories/ryby.png'
import pieczywo from '../img/Main/Categories/pieczywo.png'
import slodycze from '../img/Main/Categories/slodycze.png'
import basket from '../img/basket.png'
//Mieso
import boczek from '../img/Main/Products/Mieso/boczek.png'
import cwiartka from '../img/Main/Products/Mieso/cwiartka.png'
import filetzi from '../img/Main/Products/Mieso/filetzi.png'
import filetzk from '../img/Main/Products/Mieso/filetzk.png'
import gulasz from '../img/Main/Products/Mieso/gulasz.png'
import kurczak from '../img/Main/Products/Mieso/kurczak.png'
import lopatka from '../img/Main/Products/Mieso/lopatka.png'
import polwiep from '../img/Main/Products/Mieso/polwiep.png'
import schab from '../img/Main/Products/Mieso/schab.png'
import szynka from '../img/Main/Products/Mieso/szynka.png'
import watrobaindyk from '../img/Main/Products/Mieso/watrobaindyk.png'
import zeberka from '../img/Main/Products/Mieso/zeberka.png'
//Wedliny
import konserwowa from '../img/Main/Products/Wedliny/konserwowa.png'
import pollos from '../img/Main/Products/Wedliny/pollosos.png'
import polzindyka from '../img/Main/Products/Wedliny/polzindyka.png'
import polwis from '../img/Main/Products/Wedliny/polwisniowa.png'
import schabpiecz from '../img/Main/Products/Wedliny/schabpiecz.png'
import schabpowiejsku from '../img/Main/Products/Wedliny/schabpowiejsku.png'
import szynkabukwa from '../img/Main/Products/Wedliny/szynkabukwa.png'
import pieczona from '../img/Main/Products/Wedliny/szynkapieczona.png'
import wisniowa from '../img/Main/Products/Wedliny/szynkwisniowa.png'
import zbzczki from '../img/Main/Products/Wedliny/szynkzbeczki.png'
import szynkawis from '../img/Main/Products/Wedliny/szynkwisniowa.png'
//Nabial
import kefir1l from '../img/Main/Products/Nabial/Kefir1l.webp'
import jaja10 from '../img/Main/Products/Nabial/jaja10.webp'
import jaja30 from '../img/Main/Products/Nabial/jaja30.webp'
import maslanka from '../img/Main/Products/Nabial/maslanka.webp'
import maslo from '../img/Main/Products/Nabial/maslo.webp'
import mleko2 from '../img/Main/Products/Nabial/mleko2.webp'
import mleko32 from '../img/Main/Products/Nabial/mleko32.webp'
import smietana12 from '../img/Main/Products/Nabial/smietana12.webp'
import smietana18 from '../img/Main/Products/Nabial/smietana18.webp'
import zsiadle from '../img/Main/Products/Nabial/zsiadlemleko.webp'
//Warzywniak
import banan from '../img/Main/Products/Warzywniak/banan.webp'
import brokul from '../img/Main/Products/Warzywniak/brokul.webp'
import burak from '../img/Main/Products/Warzywniak/burak.webp'
import cebula from '../img/Main/Products/Warzywniak/cebula.webp'
import cukinia from '../img/Main/Products/Warzywniak/cukinia.webp'
import jablka from '../img/Main/Products/Warzywniak/jablka.webp'
import kalafior from '../img/Main/Products/Warzywniak/kalafior.webp'
import kiwi from '../img/Main/Products/Warzywniak/kiwi.webp'
import kokos from '../img/Main/Products/Warzywniak/kokos.webp'
import pomarancza from '../img/Main/Products/Warzywniak/pomarancza.webp'
//Ryby
import byczki from '../img/Main/Products/Ryby/byczkiwsosie.webp'
import dorszfil from '../img/Main/Products/Ryby/dorszfilet.webp'
import filetyzsledz from '../img/Main/Products/Ryby/filetyzsledzia.webp'
import filzmakwol from '../img/Main/Products/Ryby/filzmakwol.webp'
import filezmakwpom from '../img/Main/Products/Ryby/filzmakwsospom.webp'
import kawiorcz from '../img/Main/Products/Ryby/kawiorczarny.webp'
import paluszki from '../img/Main/Products/Ryby/paluszkirybne.webp'
import poledwdorsz from '../img/Main/Products/Ryby/poledwicadorsz.webp'
import sledzpowiejsk from '../img/Main/Products/Ryby/sledzpowiejsku.webp'
import sledzwpom from '../img/Main/Products/Ryby/sledzwsosiepom.webp'
//Pieczywo
import siednzairn from '../img/Main/Products/Pieczywo/7ziaren.webp'
import bagietka from '../img/Main/Products/Pieczywo/bagietka.webp'
import graham from '../img/Main/Products/Pieczywo/graham.webp'
import grahamka from '../img/Main/Products/Pieczywo/grahamka.webp'
import kajzerka from '../img/Main/Products/Pieczywo/kajzerka.webp'
import mieszany from '../img/Main/Products/Pieczywo/mieszany.webp'
import polbag from '../img/Main/Products/Pieczywo/polbagietka.webp'
import pytlowy from '../img/Main/Products/Pieczywo/pytlowy.webp'
import mazowiecki from '../img/Main/Products/Pieczywo/mazowiecki.webp'
import trojkatfintess from '../img/Main/Products/Pieczywo/trojkatfintess.webp'
//Slodycze
import biszkopty from '../img/Main/Products/Slodycze/biszkopty.webp'
import biszkzgal from '../img/Main/Products/Slodycze/biszkzgal.webp'
import ciastkkruch from '../img/Main/Products/Slodycze/ciastkkruch.webp'
import owsiane from '../img/Main/Products/Slodycze/ciastkowsia.webp'
import gofry from '../img/Main/Products/Slodycze/gofry.webp'
import herbat from '../img/Main/Products/Slodycze/herba.webp'
import ciastkazboz from '../img/Main/Products/Slodycze/cistkazbozowe.webp'
import markizy from '../img/Main/Products/Slodycze/markizy.webp'
import wafelki from '../img/Main/Products/Slodycze/wafelki.webp'
import waflekako from '../img/Main/Products/Slodycze/waflekakao.webp'

import Product from '../Menu/Product/Product'
class Main extends Component{

constructor(props) {
    super(props);
    this.state = { 
        width: 0, 
        height: 0,
        showHiddenMenu: false,
        basket: [],
        index: " "
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
}
/* Ustala pixele szerokosci okna i wysokosci */      
componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
}     
componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
}     
updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    //Jesli width > 740px schowaj menu
    if(this.state.width > 740){
        this.setState({
            showHiddenMenu: false
        })
    }
}

/*Krontroluje widocznoscia menu  */
showHiddenMenu = () =>{
    let current = this.state.showHiddenMenu
    this.setState({
       showHiddenMenu: !current
    })
}
/*Kontrola gramatury ilosci towaru*/
/*Dla sztuk*/
increase = (e)=>{
    let value = new Number(e.target.previousSibling.textContent)
    value++;
    e.target.previousSibling.textContent = value
}
decrease = (e) =>{
    let value = new Number(e.target.nextSibling.textContent)
    value--;
    e.target.nextSibling.textContent = value < 0 ? 0 : value
}
/*Dla gramatury*/

increase1 = (e)=>{
    let value = new Number(e.target.previousSibling.textContent)
    value += 0.1
    e.target.previousSibling.textContent = value.toFixed(1)
}
decrease1 = (e) =>{
    let value = new Number(e.target.nextSibling.textContent)
    value -= 0.1
    e.target.nextSibling.textContent = value < 0.1 ? 0.1 : value.toFixed(1)
}

componentDidUpdate() {   
    let basket1 = this.state.basket.map((element, index) =>{
        return(
            <Product name={element.name} price={element.cena} ilosc={element.ilosc} index={index} key={index} delete={this.deleteProduct} picture={element.picture}/>
        )
    })
    this.props.basket(basket1)
    this.props.sendBasket(this.state.basket)
}
deleteProduct = index => {
    this.setState(prevState => {
      const updatedBasket = [...prevState.basket];
      updatedBasket.splice(index, 1);
      return { 
        basket: updatedBasket,
        lastRemovedIndex: index
      };
    })
  };
    render(){
        return(
            <main className={styles.main}>
                <div className={styles.categoriesMenu}>
                   <div className={styles.hiddenMenu}>
                        <button onClick={this.showHiddenMenu}>Pokaż</button>
                        <table id="table2" className={`${styles.table2} ${this.state.showHiddenMenu ? styles.showHiddenMenu : ""}`} >
                            <tbody>
                                <tr>
                                    <td>
                                        <a href="#mieso" >
                                            <div className={styles.categoriesMenuTdTable}>
                                                <img src={mieso} className={styles.categoriesIcon}/>  
                                                <span>Mięso</span>    
                                            </div>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="#wedliny">
                                        <div className={styles.categoriesMenuTdTable}>
                                            <img src={wedliny} className={styles.categoriesIcon}/>
                                            <span>Wędliny</span> 
                                        </div>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="#nabial">
                                        <div className={styles.categoriesMenuTdTable}>
                                                <img src={nabial} className={styles.categoriesIcon}/>
                                                <span>Nabiał</span> 
                                        </div>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="#warzywniak" >
                                        <div className={styles.categoriesMenuTdTable}>
                                            <img src={warzywniak} className={styles.categoriesIcon}/>
                                            <span>Warzywniak</span> 
                                        </div>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="#ryby" >
                                        <div className={styles.categoriesMenuTdTable}>
                                            <img src={ryby} className={styles.categoriesIcon} />
                                            <span>Ryby</span> 
                                        </div>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="#pieczywo">
                                        <div className={styles.categoriesMenuTdTable}>
                                            <img src={pieczywo} className={styles.categoriesIcon} />
                                            <span>Pieczywo</span> 
                                        </div>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                <td>
                                        <a href="#slodycze">
                                        <div className={styles.categoriesMenuTdTable}>
                                            <img src={slodycze} className={styles.categoriesIcon} />
                                            <span>Słodycze</span> 
                                        </div>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                   </div>
                <table className={styles.table1}>
                        <tbody>
                            <tr>
                                <td>
                                    <a href="#mieso" >
                                        <div className={styles.categoriesMenuTdTable}>
                                            <img src={mieso} className={styles.categoriesIcon}/>  
                                            <span>Mięso</span>    
                                        </div>
                                    </a>
                                </td>
                                <td>
                                    <a href="#wedliny">
                                    <div className={styles.categoriesMenuTdTable}>
                                        <img src={wedliny} className={styles.categoriesIcon}/>
                                        <span>Wędliny</span> 
                                    </div>
                                    </a>
                                </td>
                                <td>
                                    <a href="#nabial">
                                    <div className={styles.categoriesMenuTdTable}>
                                            <img src={nabial} className={styles.categoriesIcon}/>
                                            <span>Nabiał</span> 
                                    </div>
                                    </a>
                                </td>
                                <td>
                                    <a href="#warzywniak" >
                                    <div className={styles.categoriesMenuTdTable}>
                                        <img src={warzywniak} className={styles.categoriesIcon}/>
                                        <span>Warzywniak</span> 
                                    </div>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="#ryby" >
                                    <div className={styles.categoriesMenuTdTable}>
                                        <img src={ryby} className={styles.categoriesIcon} />
                                        <span>Ryby</span> 
                                    </div>
                                    </a>
                                </td>
                                <td>
                                    <a href="#pieczywo">
                                    <div className={styles.categoriesMenuTdTable}>
                                        <img src={pieczywo} className={styles.categoriesIcon} />
                                        <span>Pieczywo</span> 
                                    </div>
                                    </a>
                                </td>
                                <td>
                                    <a href="#slodycze">
                                    <div className={styles.categoriesMenuTdTable}>
                                        <img src={slodycze} className={styles.categoriesIcon} />
                                        <span>Słodycze</span> 
                                    </div>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={styles.miesoDiv} id="mieso">
                    <div className={styles.categories}>
                        <img src={mieso} className={styles.categoriesIcon}/>  
                        <span>Mięso</span> 
                    </div>
                    <div className={styles.container}>
                        <div className={styles.productsDiv}>
                            <div className={styles.productInfo}>
                                <img src={szynka} />
                                <p className={styles.productName}>Szynka bez kości</p>
                                <span>22.90 zł/kg</span>  
                            </div>
                            <div className={styles.addToBasket}>
                                <div className={styles.ilosc}>
                                    <button onClick={(e)=> this.decrease1(e)}>-</button>
                                    <span>0.1</span>
                                    <button onClick={(e)=>{this.increase1(e)}}>+</button>
                                </div>
                                <button className={styles.add} onClick={(e)=> {
                                    let array = this.state.basket;
                                    let ilosc = Number(document.querySelectorAll(`.${styles.ilosc} span`)[0].textContent)
                                    let productInfo = {name: 'Szynka bez kości', ilosc: ilosc, cena: (ilosc * 22.90).toFixed(2), picture: szynka}
                                    let newArray = [...array]
                                    newArray.push(productInfo)
                                    this.setState({
                                        basket: newArray
                                    })
                                }}>
                                    <span>+</span>
                                    <img src={basket}></img>
                                </button>
                            </div>
                        </div>
                        <div className={styles.productsDiv}>
                            <div className={styles.productInfo}>
                                <img src={boczek} />
                                <p className={styles.productName}>Boczek surowy</p>
                                <span>25.00 zł/kg</span>  
                            </div>
                            <div className={styles.addToBasket}>
                                <div className={styles.ilosc}>
                                    <button onClick={(e)=> this.decrease1(e)}>-</button>
                                    <span>0.1</span>
                                    <button onClick={(e)=>{this.increase1(e)}}>+</button>
                                </div>
                                <button className={styles.add} onClick={(e)=> {
                                    let array = this.state.basket;
                                    let ilosc = Number(document.querySelectorAll(`.${styles.ilosc} span`)[1].textContent)
                                    let productInfo = {name: 'Boczek surowy', ilosc: ilosc, cena: (ilosc * 25.00).toFixed(2), picture: boczek, id:2}
                                    let newArray = [...array]
                                    newArray.push(productInfo)
                                    this.setState({
                                        basket: newArray
                                    })
                                }}>
                                    <span>+</span>
                                    <img src={basket}></img>
                                </button>
                            </div>
                        </div>
                        <div className={styles.productsDiv}>
                            <div className={styles.productInfo}>
                                <img src={filetzi} />
                                <p className={styles.productName}>Filet z indyka</p>
                                <span>26.00 zł/kg</span>  
                            </div>
                            <div className={styles.addToBasket}>
                                <div className={styles.ilosc}>
                                    <button onClick={(e)=> this.decrease1(e)}>-</button>
                                    <span>0.1</span>
                                    <button onClick={(e)=>{this.increase1(e)}}>+</button>
                                </div>
                                <button className={styles.add} onClick={(e)=> {
                                    let array = this.state.basket;
                                    let ilosc = Number(document.querySelectorAll(`.${styles.ilosc} span`)[2].textContent)
                                    let productInfo = {name: 'Filet z indyka', ilosc: ilosc, cena: (ilosc * 26.00).toFixed(2), picture: filetzk, id:3}
                                    let newArray = [...array]
                                    newArray.push(productInfo)
                                    this.setState({
                                        basket: newArray
                                    })
                                }}>
                                    <span>+</span>
                                    <img src={basket}></img>
                                </button>
                            </div>
                        </div>
                        <div className={styles.productsDiv}>
                            <div className={styles.productInfo}>
                                <img src={filetzk} />
                                <p className={styles.productName}>Filet z kurczaka</p>
                                <span>22.90 zł/kg</span>  
                            </div>
                            <div className={styles.addToBasket}>
                                <div className={styles.ilosc}>
                                <button onClick={(e)=> this.decrease1(e)}>-</button>
                                    <span>0.1</span>
                                    <button onClick={(e)=>{this.increase1(e)}}>+</button>
                                </div>
                                <button className={styles.add} onClick={(e)=> {
                                    let array = this.state.basket;
                                    let ilosc = Number(document.querySelectorAll(`.${styles.ilosc} span`)[3].textContent)
                                    let productInfo = {name: 'Filet z kurczaka', ilosc: ilosc, cena: (ilosc * 22.90).toFixed(2), picture: filetzk, id:4}
                                    let newArray = [...array]
                                    newArray.push(productInfo)
                                    this.setState({
                                        basket: newArray
                                    })
                                }}>
                                    <span>+</span>
                                    <img src={basket}></img>
                                </button>
                            </div>
                        </div>
                        <div className={styles.productsDiv}>
                            <div className={styles.productInfo}>
                                <img src={gulasz} />
                                <p className={styles.productName}>Mięso gulaszowe</p>
                                <span>20.00 zł/kg</span>  
                            </div>
                            <div className={styles.addToBasket}>
                                <div className={styles.ilosc}>
                                <button onClick={(e)=> this.decrease1(e)}>-</button>
                                    <span>0.1</span>
                                    <button onClick={(e)=>{this.increase1(e)}}>+</button>
                                </div>
                                <button className={styles.add} onClick={(e)=> {
                                    let array = this.state.basket;
                                    let ilosc = Number(document.querySelectorAll(`.${styles.ilosc} span`)[4].textContent)
                                    let productInfo = {name: 'Mięso gulaszowe', ilosc: ilosc, cena: (ilosc * 20.00).toFixed(2), picture: gulasz, id:5}
                                    let newArray = [...array]
                                    newArray.push(productInfo)
                                    this.setState({
                                        basket: newArray
                                    })
                                }}>
                                    <span>+</span>
                                    <img src={basket}></img>
                                </button>
                            </div>
                        </div>
                        <div className={styles.productsDiv}>
                            <div className={styles.productInfo}>
                                <img src={kurczak} />
                                <p className={styles.productName}>Kurczak świeży</p>
                                <span>10.00 zł/kg</span>  
                            </div>
                            <div className={styles.addToBasket}>
                                <div className={styles.ilosc}>
                                <button onClick={(e)=> this.decrease1(e)}>-</button>
                                    <span>0.1</span>
                                    <button onClick={(e)=>{this.increase1(e)}}>+</button>
                                </div>
                                <button className={styles.add} onClick={(e)=> {
                                    let array = this.state.basket;
                                    let ilosc = Number(document.querySelectorAll(`.${styles.ilosc} span`)[5].textContent)
                                    let productInfo = {name: 'Kurczak świeży', ilosc: ilosc, cena: (ilosc * 10.00).toFixed(2), picture: kurczak, id:6}
                                    let newArray = [...array]
                                    newArray.push(productInfo)
                                    this.setState({
                                        basket: newArray
                                    })
                                }}>
                                    <span>+</span>
                                    <img src={basket}></img>
                                </button>
                            </div>
                        </div>
                        <div className={styles.productsDiv}>
                            <div className={styles.productInfo}>
                                <img src={lopatka} />
                                <p className={styles.productName}>Łopatka wieprzowa</p>
                                <span>25.00 zł/kg</span>  
                            </div>
                            <div className={styles.addToBasket}>
                                <div className={styles.ilosc}>
                                <button onClick={(e)=> this.decrease1(e)}>-</button>
                                    <span>0.1</span>
                                    <button onClick={(e)=>{this.increase1(e)}}>+</button>
                                </div>
                                <button className={styles.add} onClick={(e)=> {
                                    let array = this.state.basket;
                                    let ilosc = Number(document.querySelectorAll(`.${styles.ilosc} span`)[6].textContent)
                                    let productInfo = {name: 'Łopatka wieprzowa', ilosc: ilosc, cena: (ilosc * 25.00).toFixed(2), picture: lopatka, id:7}
                                    let newArray = [...array]
                                    newArray.push(productInfo)
                                    this.setState({
                                        basket: newArray
                                    })
                                }}>
                                    <span>+</span>
                                    <img src={basket}></img>
                                </button>
                            </div>
                        </div>
                        <div className={styles.productsDiv}>
                            <div className={styles.productInfo}>
                                <img src={polwiep} />
                                <p className={styles.productName}>Polędwica wieprzowa</p>
                                <span>35.00 zł/kg</span>  
                            </div>
                            <div className={styles.addToBasket}>
                                <div className={styles.ilosc}>
                                <button onClick={(e)=> this.decrease1(e)}>-</button>
                                    <span>0.1</span>
                                    <button onClick={(e)=>{this.increase1(e)}}>+</button>
                                </div>
                                <button className={styles.add} onClick={(e)=> {
                                    let array = this.state.basket;
                                    let ilosc = Number(document.querySelectorAll(`.${styles.ilosc} span`)[7].textContent)
                                    let productInfo = {name: 'Polędwica wieprzowa', ilosc: ilosc, cena: (ilosc * 35.00).toFixed(2), picture: polwiep, id:8}
                                    let newArray = [...array]
                                    newArray.push(productInfo)
                                    this.setState({
                                        basket: newArray
                                    })
                                }}>
                                    <span>+</span>
                                    <img src={basket}></img>
                                </button>
                            </div>
                        </div>
                        <div className={styles.productsDiv}>
                            <div className={styles.productInfo}>
                                <img src={schab} />
                                <p className={styles.productName}>Schab wieprzowy</p>
                                <span>22.00 zł/kg</span>  
                            </div>
                            <div className={styles.addToBasket}>
                                <div className={styles.ilosc}>
                                <button onClick={(e)=> this.decrease1(e)}>-</button>
                                    <span>0.1</span>
                                    <button onClick={(e)=>{this.increase1(e)}}>+</button>
                                </div>
                                <button className={styles.add} onClick={(e)=> {
                                    let array = this.state.basket;
                                    let ilosc = Number(document.querySelectorAll(`.${styles.ilosc} span`)[8].textContent)
                                    let productInfo = {name: 'Schab wieprzowy', ilosc: ilosc, cena: (ilosc * 22.00).toFixed(2), picture: schab, id:9}
                                    let newArray = [...array]
                                    newArray.push(productInfo)
                                    this.setState({
                                        basket: newArray
                                    })
                                }}>
                                    <span>+</span>
                                    <img src={basket}></img>
                                </button>
                            </div>
                        </div>
                        <div className={styles.productsDiv}>
                            <div className={styles.productInfo}>
                                <img src={watrobaindyk} />
                                <p className={styles.productName}>Wątróbka z indyka</p>
                                <span>17.00 zł/kg</span>  
                            </div>
                            <div className={styles.addToBasket}>
                                <div className={styles.ilosc}>
                                <button onClick={(e)=> this.decrease1(e)}>-</button>
                                    <span>0.1</span>
                                    <button onClick={(e)=>{this.increase1(e)}}>+</button>
                                </div>
                                <button className={styles.add} onClick={(e)=> {
                                    let array = this.state.basket;
                                    let ilosc = Number(document.querySelectorAll(`.${styles.ilosc} span`)[9].textContent)
                                    let productInfo = {name: 'Wątróbka z indyka', ilosc: ilosc, cena: (ilosc * 17.00 ).toFixed(2), picture: watrobaindyk, id:10}
                                    let newArray = [...array]
                                    newArray.push(productInfo)
                                    this.setState({
                                        basket: newArray
                                    })
                                }}>
                                    <span>+</span>
                                    <img src={basket}></img>
                                </button>
                            </div>
                        </div>
                        <div className={styles.productsDiv}>
                            <div className={styles.productInfo}>
                                <img src={zeberka} />
                                <p className={styles.productName}>Żeberka paski</p>
                                <span>25.00 zł/kg</span>  
                            </div>
                            <div className={styles.addToBasket}>
                                <div className={styles.ilosc}>
                                <button onClick={(e)=> this.decrease1(e)}>-</button>
                                    <span>0.1</span>
                                    <button onClick={(e)=>{this.increase1(e)}}>+</button>
                                </div>
                                <button className={styles.add} onClick={(e)=> {
                                    let array = this.state.basket;
                                    let ilosc = Number(document.querySelectorAll(`.${styles.ilosc} span`)[10].textContent)
                                    let productInfo = {name: 'Żeberka paski', ilosc: ilosc, cena: (ilosc * 25.00).toFixed(2), picture: zeberka, id:11}
                                    let newArray = [...array]
                                    newArray.push(productInfo)
                                    this.setState({
                                        basket: newArray
                                    })
                                }}>
                                    <span>+</span>
                                    <img src={basket}></img>
                                </button>
                            </div>
                        </div>
                        <div className={styles.productsDiv}>
                            <div className={styles.productInfo}>
                                <img src={cwiartka} />
                                <p className={styles.productName}>Ćwiartka z kurczaka</p>
                                <span>15.90 zł/kg</span>  
                            </div>
                            <div className={styles.addToBasket}>
                                <div className={styles.ilosc}>
                                <button onClick={(e)=> this.decrease1(e)}>-</button>
                                    <span>0.1</span>
                                    <button onClick={(e)=>{this.increase1(e)}}>+</button>
                                </div>
                                <button className={styles.add} onClick={(e)=> {
                                    let array = this.state.basket;
                                    let ilosc = Number(document.querySelectorAll(`.${styles.ilosc} span`)[11].textContent)
                                    let productInfo = {name: 'Ćwiartka z kurczaka', ilosc: ilosc, cena: (ilosc * 15.90 ).toFixed(2), picture:cwiartka, id:12}
                                    let newArray = [...array]
                                    newArray.push(productInfo)
                                    this.setState({
                                        basket: newArray
                                    })
                                }}>
                                    <span>+</span>
                                    <img src={basket}></img>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.wedlinyDiv} id="wedliny">
                    <div className={styles.categories}>
                        <img src={wedliny} className={styles.categoriesIcon}/>
                        <span>Wędliny</span> 
                    </div>
                    <div className={styles.container}>
                        <div className={styles.productsDiv}>
                            <div className={styles.productInfo}>
                                <img src={konserwowa} />
                                <p className={styles.productName}>Szynka konserwowa</p>
                                <span>23.90 zł/kg</span>  
                            </div>
                            <div className={styles.addToBasket}>
                                <div className={styles.ilosc}>
                                <button onClick={(e)=> this.decrease1(e)}>-</button>
                                    <span>0.1</span>
                                    <button onClick={(e)=>{this.increase1(e)}}>+</button>
                                </div>
                                <button className={styles.add} onClick={(e)=> {
                                    let array = this.state.basket;
                                    let ilosc = Number(document.querySelectorAll(`.${styles.ilosc} span`)[12].textContent)
                                    let productInfo = {name: 'Szynka konserwowa', ilosc: ilosc, cena: (ilosc * 23.90).toFixed(2), picture: konserwowa, id:13}
                                    let newArray = [...array]
                                    newArray.push(productInfo)
                                    this.setState({
                                        basket: newArray
                                    })
                                }}>
                                    <span>+</span>
                                    <img src={basket}></img>
                                </button>
                            </div>
                        </div>
                        <div className={styles.productsDiv}>
                            <div className={styles.productInfo}>
                                <img src={pollos} />
                                <p className={styles.productName}>Polędwica łososiowa</p>
                                <span>35.00 zł/kg</span>  
                            </div>
                            <div className={styles.addToBasket}>
                                <div className={styles.ilosc}>
                                <button onClick={(e)=> this.decrease1(e)}>-</button>
                                    <span>0.1</span>
                                    <button onClick={(e)=>{this.increase1(e)}}>+</button>
                                </div>
                                <button className={styles.add} onClick={(e)=> {
                                    let array = this.state.basket;
                                    let ilosc = Number(document.querySelectorAll(`.${styles.ilosc} span`)[13].textContent)
                                    let productInfo = {name: 'Polędwica łososiowa', ilosc: ilosc, cena: (ilosc * 35.00).toFixed(2), picture:pollos, id:14}
                                    let newArray = [...array]
                                    newArray.push(productInfo)
                                    this.setState({
                                        basket: newArray
                                    })
                                }}>
                                    <span>+</span>
                                    <img src={basket}></img>
                                </button>
                            </div>
                        </div>
                        <div className={styles.productsDiv}>
                            <div className={styles.productInfo}>
                                <img src={polwis} />
                                <p className={styles.productName}>Polędwica wiśniowa</p>
                                <span>33.00 zł/kg</span>  
                            </div>
                            <div className={styles.addToBasket}>
                                <div className={styles.ilosc}>
                                <button onClick={(e)=> this.decrease1(e)}>-</button>
                                    <span>0.1</span>
                                    <button onClick={(e)=>{this.increase1(e)}}>+</button>
                                </div>
                                <button className={styles.add} onClick={(e)=> {
                                    let array = this.state.basket;
                                    let ilosc = Number(document.querySelectorAll(`.${styles.ilosc} span`)[14].textContent)
                                    let productInfo = {name: 'Polędwica łososiowa', ilosc: ilosc, cena: (ilosc * 35.00).toFixed(2), picture:polwis, id:15}
                                    let newArray = [...array]
                                    newArray.push(productInfo)
                                    this.setState({
                                        basket: newArray
                                    })
                                }}>
                                    <span>+</span>
                                    <img src={basket}></img>
                                </button>
                            </div>
                        </div>
                        <div className={styles.productsDiv}>
                            <div className={styles.productInfo}>
                                <img src={schabpiecz} />
                                <p className={styles.productName}>Schab pieczony</p>
                                <span>29.90 zł/kg</span>  
                            </div>
                            <div className={styles.addToBasket}>
                                <div className={styles.ilosc}>
                                <button onClick={(e)=> this.decrease1(e)}>-</button>
                                    <span>0.1</span>
                                    <button onClick={(e)=>{this.increase1(e)}}>+</button>
                                </div>
                                <button className={styles.add} onClick={(e)=> {
                                    let array = this.state.basket;
                                    let ilosc = Number(document.querySelectorAll(`.${styles.ilosc} span`)[15].textContent)
                                    let productInfo = {name: 'Schab pieczony', ilosc: ilosc, cena: (ilosc * 29.90).toFixed(2), picture: schabpiecz, id:16}
                                    let newArray = [...array]
                                    newArray.push(productInfo)
                                    this.setState({
                                        basket: newArray
                                    })
                                }}>
                                    <span>+</span>
                                    <img src={basket}></img>
                                </button>
                            </div>
                        </div>
                        <div className={styles.productsDiv}>
                            <div className={styles.productInfo}>
                                <img src={schabpowiejsku} />
                                <p className={styles.productName}>Schab po wiejsku</p>
                                <span>31.90 zł/kg</span>  
                            </div>
                            <div className={styles.addToBasket}>
                                <div className={styles.ilosc}>
                                <button onClick={(e)=> this.decrease1(e)}>-</button>
                                    <span>0.1</span>
                                    <button onClick={(e)=>{this.increase1(e)}}>+</button>
                                </div>
                                <button className={styles.add} onClick={(e)=> {
                                    let array = this.state.basket;
                                    let ilosc = Number(document.querySelectorAll(`.${styles.ilosc} span`)[16].textContent)
                                    let productInfo = {name: 'Schab po wiejsku', ilosc: ilosc, cena: (ilosc * 31.90).toFixed(2), picture:schabpowiejsku, id:17}
                                    let newArray = [...array]
                                    newArray.push(productInfo)
                                    this.setState({
                                        basket: newArray
                                    })
                                }}>
                                    <span>+</span>
                                    <img src={basket}></img>
                                </button>
                            </div>
                        </div>
                        <div className={styles.productsDiv}>
                            <div className={styles.productInfo}>
                                <img src={szynkabukwa} />
                                <p className={styles.productName}>Szynka bukowa</p>
                                <span>25.00 zł/kg</span>  
                            </div>
                            <div className={styles.addToBasket}>
                                <div className={styles.ilosc}>
                                <button onClick={(e)=> this.decrease1(e)}>-</button>
                                    <span>0.1</span>
                                    <button onClick={(e)=>{this.increase1(e)}}>+</button>
                                </div>
                                <button className={styles.add} onClick={(e)=> {
                                    let array = this.state.basket;
                                    let ilosc = Number(document.querySelectorAll(`.${styles.ilosc} span`)[17].textContent)
                                    let productInfo = {name: 'Szynka bukowa', ilosc: ilosc, cena: (ilosc * 25.00).toFixed(2), picture: szynkabukwa, id:18}
                                    let newArray = [...array]
                                    newArray.push(productInfo)
                                    this.setState({
                                        basket: newArray
                                    })
                                }}>
                                    <span>+</span>
                                    <img src={basket}></img>
                                </button>
                            </div>
                        </div>
                        <div className={styles.productsDiv}>
                            <div className={styles.productInfo}>
                                <img src={pieczona} />
                                <p className={styles.productName}>Szynka pieczona</p>
                                <span>25.00 zł/kg</span>  
                            </div>
                            <div className={styles.addToBasket}>
                                <div className={styles.ilosc}>
                                <button onClick={(e)=> this.decrease1(e)}>-</button>
                                    <span>0.1</span>
                                    <button onClick={(e)=>{this.increase1(e)}}>+</button>
                                </div>
                                <button className={styles.add} onClick={(e)=> {
                                    let array = this.state.basket;
                                    let ilosc = Number(document.querySelectorAll(`.${styles.ilosc} span`)[18].textContent)
                                    let productInfo = {name: 'Szynka pieczona', ilosc: ilosc, cena: (ilosc * 25.00).toFixed(2), picture: pieczona, id:19}
                                    let newArray = [...array]
                                    newArray.push(productInfo)
                                    this.setState({
                                        basket: newArray
                                    })
                                }}>
                                    <span>+</span>
                                    <img src={basket}></img>
                                </button>
                            </div>
                        </div>
                        <div className={styles.productsDiv}>
                            <div className={styles.productInfo}>
                                <img src={szynkawis} />
                                <p className={styles.productName}>Szynka wiśniowa</p>
                                <span>35.00 zł/kg</span>  
                            </div>
                            <div className={styles.addToBasket}>
                                <div className={styles.ilosc}>
                                <button onClick={(e)=> this.decrease1(e)}>-</button>
                                    <span>0.1</span>
                                    <button onClick={(e)=>{this.increase1(e)}}>+</button>
                                </div>
                                <button className={styles.add} onClick={(e)=> {
                                    let array = this.state.basket;
                                    let ilosc = Number(document.querySelectorAll(`.${styles.ilosc} span`)[19].textContent)
                                    let productInfo = {name: 'Szynka wiśniowa', ilosc: ilosc, cena: (ilosc * 35.00).toFixed(2), picture: szynkawis, id: 20}
                                    let newArray = [...array]
                                    newArray.push(productInfo)
                                    this.setState({
                                        basket: newArray
                                    })
                                }}>
                                    <span>+</span>
                                    <img src={basket}></img>
                                </button>
                            </div>
                        </div>
                        <div className={styles.productsDiv}>
                            <div className={styles.productInfo}>
                                <img src={zbzczki} />
                                <p className={styles.productName}>Szynka z beczki</p>
                                <span>22.00 zł/kg</span>  
                            </div>
                            <div className={styles.addToBasket}>
                                <div className={styles.ilosc}>
                                <button onClick={(e)=> this.decrease1(e)}>-</button>
                                    <span>0.1</span>
                                    <button onClick={(e)=>{this.increase1(e)}}>+</button>
                                </div>
                                <button className={styles.add} onClick={(e)=> {
                                    let array = this.state.basket;
                                    let ilosc = Number(document.querySelectorAll(`.${styles.ilosc} span`)[20].textContent)
                                    let productInfo = {name: 'Szynka z beczki', ilosc: ilosc, cena: (ilosc * 22.00).toFixed(2), picture: zbzczki, id: 21}
                                    let newArray = [...array]
                                    newArray.push(productInfo)
                                    this.setState({
                                        basket: newArray
                                    })
                                }}>
                                    <span>+</span>
                                    <img src={basket}></img>
                                </button>
                            </div>
                        </div>
                        <div className={styles.productsDiv}>
                            <div className={styles.productInfo}>
                                <img src={polzindyka} />
                                <p className={styles.productName}>Polędwica z indyka</p>
                                <span>33.00 zł/kg</span>  
                            </div>
                            <div className={styles.addToBasket}>
                                <div className={styles.ilosc}>
                                <button onClick={(e)=> this.decrease1(e)}>-</button>
                                    <span>0.1</span>
                                    <button onClick={(e)=>{this.increase1(e)}}>+</button>
                                </div>
                                <button className={styles.add} onClick={(e)=> {
                                    let array = this.state.basket;
                                    let ilosc = Number(document.querySelectorAll(`.${styles.ilosc} span`)[21].textContent)
                                    let productInfo = {name: 'Polędwica z indyka', ilosc: ilosc, cena: (ilosc * 33.00).toFixed(2), picture: polzindyka }
                                    let newArray = [...array]
                                    newArray.push(productInfo)
                                    this.setState({
                                        basket: newArray
                                    })
                                }}>
                                    <span>+</span>
                                    <img src={basket}></img>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.nabialDiv} id="nabial">
                    <div className={styles.categories}>
                        <img src={nabial} className={styles.categoriesIcon}/>
                        <span>Nabiał</span> 
                    </div>
                    <div className={styles.container}>
                        <div className={styles.productsDiv}>
                            <div className={styles.productInfo}>
                                <img src={jaja10} />
                                <p className={styles.productName}>Jaja 10szt.</p>
                                <span>9.90 zł/opak.</span>  
                            </div>
                            <div className={styles.addToBasket}>
                                <div className={styles.ilosc}>
                                    <button onClick={(e)=>{this.decrease(e)}}>-</button>
                                    <span>1</span>
                                    <button onClick={(e)=>{this.increase(e)}}>+</button>
                                </div>
                                <button className={styles.add} onClick={(e)=> {
                                    let array = this.state.basket;
                                    let ilosc = Number(document.querySelectorAll(`.${styles.ilosc} span`)[22].textContent)
                                    let productInfo = {name: 'Jaja 10szt.', ilosc: ilosc, cena: (ilosc * 9.90).toFixed(2), picture: jaja10}
                                    let newArray = [...array]
                                    newArray.push(productInfo)
                                    this.setState({
                                        basket: newArray
                                    })
                                }}>
                                    <span>+</span>
                                    <img src={basket}></img>
                                </button>
                            </div>
                        </div>
                        <div className={styles.productsDiv}>
                            <div className={styles.productInfo}>
                                <img src={jaja30} />
                                <p className={styles.productName}>Jaja 30szt.</p>
                                <span>25.00 zł/opak.</span>  
                            </div>
                            <div className={styles.addToBasket}>
                                <div className={styles.ilosc}>
                                <button onClick={(e)=>{this.decrease(e)}}>-</button>
                                    <span>1</span>
                                    <button onClick={(e)=>{this.increase(e)}}>+</button>
                                </div>
                                <button className={styles.add} onClick={(e)=> {
                                    let array = this.state.basket;
                                    let ilosc = Number(document.querySelectorAll(`.${styles.ilosc} span`)[23].textContent)
                                    let productInfo = {name: 'Jaja 30szt.', ilosc: ilosc, cena: (ilosc * 25.00).toFixed(2), picture: jaja30}
                                    let newArray = [...array]
                                    newArray.push(productInfo)
                                    this.setState({
                                        basket: newArray
                                    })
                                }}>
                                    <span>+</span>
                                    <img src={basket}></img>
                                </button>
                            </div>
                        </div>
                        <div className={styles.productsDiv}>
                            <div className={styles.productInfo}>
                                <img src={kefir1l} />
                                <p className={styles.productName}>Kefir 1L</p>
                                <span>3.50 zł/l</span>  
                            </div>
                            <div className={styles.addToBasket}>
                                <div className={styles.ilosc}>
                                <button onClick={(e)=>{this.decrease(e)}}>-</button>
                                    <span>1</span>
                                    <button onClick={(e)=>{this.increase(e)}}>+</button>
                                </div>
                                <button className={styles.add} onClick={(e)=> {
                                    let array = this.state.basket;
                                    let ilosc = Number(document.querySelectorAll(`.${styles.ilosc} span`)[24].textContent)
                                    let productInfo = {name: 'Kefir 1L', ilosc: ilosc, cena: (ilosc * 3.50).toFixed(2), picture: kefir1l, id:23}
                                    let newArray = [...array]
                                    newArray.push(productInfo)
                                    this.setState({
                                        basket: newArray
                                    })
                                }}>
                                    <span>+</span>
                                    <img src={basket}></img>
                                </button>
                            </div>
                        </div>
                        <div className={styles.productsDiv}>
                            <div className={styles.productInfo}>
                                <img src={maslanka} />
                                <p className={styles.productName}>Maślanka 1L</p>
                                <span>2.90 zł/l</span>  
                            </div>
                            <div className={styles.addToBasket}>
                                <div className={styles.ilosc}>
                                <button onClick={(e)=>{this.decrease(e)}}>-</button>
                                    <span>1</span>
                                    <button onClick={(e)=>{this.increase(e)}}>+</button>
                                </div>
                                <button className={styles.add} onClick={(e)=> {
                                    let array = this.state.basket;
                                    let ilosc = Number(document.querySelectorAll(`.${styles.ilosc} span`)[25].textContent)
                                    let productInfo = {name: 'Maślanka 1L', ilosc: ilosc, cena: (ilosc * 2.90).toFixed(2), picture: maslanka, id:24}
                                    let newArray = [...array]
                                    newArray.push(productInfo)
                                    this.setState({
                                        basket: newArray
                                    })
                                }}>
                                    <span>+</span>
                                    <img src={basket}></img>
                                </button>
                            </div>
                        </div>
                        <div className={styles.productsDiv}>
                            <div className={styles.productInfo}>
                                <img src={maslo} />
                                <p className={styles.productName}>Masło</p>
                                <span>7.70 zł/szt.</span>  
                            </div>
                            <div className={styles.addToBasket}>
                                <div className={styles.ilosc}>
                                <button onClick={(e)=>{this.decrease(e)}}>-</button>
                                    <span>1</span>
                                    <button onClick={(e)=>{this.increase(e)}}>+</button>
                                </div>
                                <button className={styles.add} onClick={(e)=> {
                                    let array = this.state.basket;
                                    let ilosc = Number(document.querySelectorAll(`.${styles.ilosc} span`)[26].textContent)
                                    let productInfo = {name: 'Masło', ilosc: ilosc, cena: (ilosc * 7.70).toFixed(2), picture: maslo, id:25}
                                    let newArray = [...array]
                                    newArray.push(productInfo)
                                    this.setState({
                                        basket: newArray
                                    })
                                }}>
                                    <span>+</span>
                                    <img src={basket}></img>
                                </button>
                            </div>
                        </div>
                        <div className={styles.productsDiv}>
                            <div className={styles.productInfo}>
                                <img src={mleko2} />
                                <p className={styles.productName}>Mleko 2%</p>
                                <span>3.50 zł/l</span>  
                            </div>
                            <div className={styles.addToBasket}>
                                <div className={styles.ilosc}>
                                <button onClick={(e)=>{this.decrease(e)}}>-</button>
                                    <span>1</span>
                                    <button onClick={(e)=>{this.increase(e)}}>+</button>
                                </div>
                                <button className={styles.add} onClick={(e)=> {
                                    let array = this.state.basket;
                                    let ilosc = Number(document.querySelectorAll(`.${styles.ilosc} span`)[27].textContent)
                                    let productInfo = {name: 'Mleko 2%', ilosc: ilosc, cena: (ilosc * 3.50).toFixed(2), picture: mleko2, id:26}
                                    let newArray = [...array]
                                    newArray.push(productInfo)
                                    this.setState({
                                        basket: newArray
                                    })
                                }}>
                                    <span>+</span>
                                    <img src={basket}></img>
                                </button>
                            </div>
                        </div>
                        <div className={styles.productsDiv}>
                            <div className={styles.productInfo}>
                                <img src={mleko32} />
                                <p className={styles.productName}>Mleko 3.2%</p>
                                <span>4.00 zł/l</span>  
                            </div>
                            <div className={styles.addToBasket}>
                                <div className={styles.ilosc}>
                                <button onClick={(e)=>{this.decrease(e)}}>-</button>
                                    <span>1</span>
                                    <button onClick={(e)=>{this.increase(e)}}>+</button>
                                </div>
                                <button className={styles.add} onClick={(e)=> {
                                    let array = this.state.basket;
                                    let ilosc = Number(document.querySelectorAll(`.${styles.ilosc} span`)[28].textContent)
                                    let productInfo = {name: 'Mleko 3.2%', ilosc: ilosc, cena: (ilosc * 4.00).toFixed(2), picture: mleko32, id:27}
                                    let newArray = [...array]
                                    newArray.push(productInfo)
                                    this.setState({
                                        basket: newArray
                                    })
                                }}>
                                    <span>+</span>
                                    <img src={basket}></img>
                                </button>
                            </div>
                        </div>
                        <div className={styles.productsDiv}>
                            <div className={styles.productInfo}>
                                <img src={smietana12} />
                                <p className={styles.productName}>Śmietana 12%</p>
                                <span>3.50 zł/szt.</span>  
                            </div>
                            <div className={styles.addToBasket}>
                                <div className={styles.ilosc}>
                                <button onClick={(e)=>{this.decrease(e)}}>-</button>
                                    <span>1</span>
                                    <button onClick={(e)=>{this.increase(e)}}>+</button>
                                </div>
                                <button className={styles.add} onClick={(e)=> {
                                    let array = this.state.basket;
                                    let ilosc = Number(document.querySelectorAll(`.${styles.ilosc} span`)[29].textContent)
                                    let productInfo = {name: 'Śmietana 12%', ilosc: ilosc, cena: (ilosc * 3.50).toFixed(2), picture: smietana12, id:28}
                                    let newArray = [...array]
                                    newArray.push(productInfo)
                                    this.setState({
                                        basket: newArray
                                    })
                                }}>
                                    <span>+</span>
                                    <img src={basket}></img>
                                </button>
                            </div>
                        </div>
                        <div className={styles.productsDiv}>
                            <div className={styles.productInfo}>
                                <img src={smietana18} />
                                <p className={styles.productName}>Śmietana 18%</p>
                                <span>4.00 zł/szt</span>  
                            </div>
                            <div className={styles.addToBasket}>
                                <div className={styles.ilosc}>
                                <button onClick={(e)=>{this.decrease(e)}}>-</button>
                                    <span>1</span>
                                    <button onClick={(e)=>{this.increase(e)}}>+</button>
                                </div>
                                <button className={styles.add} onClick={(e)=> {
                                    let array = this.state.basket;
                                    let ilosc = Number(document.querySelectorAll(`.${styles.ilosc} span`)[30].textContent)
                                    let productInfo = {name: 'Śmietana 18%', ilosc: ilosc, cena: (ilosc * 3.50).toFixed(2), picture: smietana18, id:29}
                                    let newArray = [...array]
                                    newArray.push(productInfo)
                                    this.setState({
                                        basket: newArray
                                    })
                                }}>
                                    <span>+</span>
                                    <img src={basket}></img>
                                </button>
                            </div>
                        </div>
                        <div className={styles.productsDiv}>
                            <div className={styles.productInfo}>
                                <img src={zsiadle} />
                                <p className={styles.productName}>Zsiadłe mleko</p>
                                <span>3.30 zł/szt</span>  
                            </div>
                            <div className={styles.addToBasket}>
                                <div className={styles.ilosc}>
                                <button onClick={(e)=>{this.decrease(e)}}>-</button>
                                    <span>1</span>
                                    <button onClick={(e)=>{this.increase(e)}}>+</button>
                                </div>
                                <button className={styles.add} onClick={(e)=> {
                                    let array = this.state.basket;
                                    let ilosc = Number(document.querySelectorAll(`.${styles.ilosc} span`)[31].textContent)
                                    let productInfo = {name: 'Zsiadłe mleko', ilosc: ilosc, cena: (ilosc * 3.30).toFixed(2), picture: zsiadle, id:30}
                                    let newArray = [...array]
                                    newArray.push(productInfo)
                                    this.setState({
                                        basket: newArray
                                    })
                                }}>
                                    <span>+</span>
                                    <img src={basket}></img>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.warzywniakDiv} id="warzywniak">
                    <div className={styles.categories}>
                        <img src={warzywniak} className={styles.categoriesIcon}/>
                        <span>Warzywniak</span> 
                    </div>
                    <div className={styles.container}>
                        <div className={styles.productsDiv}>
                            <div className={styles.productInfo}>
                                <img src={banan} />
                                <p className={styles.productName}>Banany</p>
                                <span>5.50 zł/kg</span>  
                            </div>
                            <div className={styles.addToBasket}>
                                <div className={styles.ilosc}>
                                <button onClick={(e)=> this.decrease1(e)}>-</button>
                                    <span>0.1</span>
                                    <button onClick={(e)=>{this.increase1(e)}}>+</button>
                                </div>
                                <button className={styles.add} onClick={(e)=> {
                                    let array = this.state.basket;
                                    let ilosc = Number(document.querySelectorAll(`.${styles.ilosc} span`)[32].textContent)
                                    let productInfo = {name: 'Banany', ilosc: ilosc, cena: (ilosc * 5.50).toFixed(2), picture: banan, id:31}
                                    let newArray = [...array]
                                    newArray.push(productInfo)
                                    this.setState({
                                        basket: newArray
                                    })
                                }}>
                                    <span>+</span>
                                    <img src={basket}></img>
                                </button>
                            </div>
                        </div>
                        <div className={styles.productsDiv}>
                            <div className={styles.productInfo}>
                                <img src={brokul} />
                                <p className={styles.productName}>Brokuł szt.</p>
                                <span>9.00 zł/szt.</span>  
                            </div>
                            <div className={styles.addToBasket}>
                                <div className={styles.ilosc}>
                                <button onClick={(e)=>{this.decrease(e)}}>-</button>
                                    <span>1</span>
                                    <button onClick={(e)=>{this.increase(e)}}>+</button>
                                </div>
                                <button className={styles.add} onClick={(e)=> {
                                    let array = this.state.basket;
                                    let ilosc = Number(document.querySelectorAll(`.${styles.ilosc} span`)[33].textContent)
                                    let productInfo = {name: 'Brokuł szt.', ilosc: ilosc, cena: (ilosc * 9.00).toFixed(2), picture: brokul, id:32}
                                    let newArray = [...array]
                                    newArray.push(productInfo)
                                    this.setState({
                                        basket: newArray
                                    })
                                }}>
                                    <span>+</span>
                                    <img src={basket}></img>
                                </button>
                            </div>
                        </div>
                        <div className={styles.productsDiv}>
                            <div className={styles.productInfo}>
                                <img src={burak} />
                                <p className={styles.productName}>Buraki</p>
                                <span>3.50 zł/kg</span>  
                            </div>
                            <div className={styles.addToBasket}>
                                <div className={styles.ilosc}>
                                <button onClick={(e)=> this.decrease1(e)}>-</button>
                                    <span>0.1</span>
                                    <button onClick={(e)=>{this.increase1(e)}}>+</button>
                                </div>
                                <button className={styles.add} onClick={(e)=> {
                                    let array = this.state.basket;
                                    let ilosc = Number(document.querySelectorAll(`.${styles.ilosc} span`)[34].textContent)
                                    let productInfo = {name: 'Buraki', ilosc: ilosc, cena: (ilosc * 3.50).toFixed(2), picture: burak, id:33}
                                    let newArray = [...array]
                                    newArray.push(productInfo)
                                    this.setState({
                                        basket: newArray
                                    })
                                }}>
                                    <span>+</span>
                                    <img src={basket}></img>
                                </button>
                            </div>
                        </div>
                        <div className={styles.productsDiv}>
                            <div className={styles.productInfo}>
                                <img src={cebula} />
                                <p className={styles.productName}>Cebula</p>
                                <span>3.90 zł/kg</span>  
                            </div>
                            <div className={styles.addToBasket}>
                                <div className={styles.ilosc}>
                                <button onClick={(e)=> this.decrease1(e)}>-</button>
                                    <span>0.1</span>
                                    <button onClick={(e)=>{this.increase1(e)}}>+</button>
                                </div>
                                <button className={styles.add} onClick={(e)=> {
                                    let array = this.state.basket;
                                    let ilosc = Number(document.querySelectorAll(`.${styles.ilosc} span`)[35].textContent)
                                    let productInfo = {name: 'Cebula', ilosc: ilosc, cena: (ilosc * 3.90).toFixed(2), picture: cebula, id:34}
                                    let newArray = [...array]
                                    newArray.push(productInfo)
                                    this.setState({
                                        basket: newArray
                                    })
                                }}>
                                    <span>+</span>
                                    <img src={basket}></img>
                                </button>
                            </div>
                        </div>
                        <div className={styles.productsDiv}>
                            <div className={styles.productInfo}>
                                <img src={cukinia} />
                                <p className={styles.productName}>Cukinia</p>
                                <span>7.70 zł/kg</span>  
                            </div>
                            <div className={styles.addToBasket}>
                                <div className={styles.ilosc}>
                                <button onClick={(e)=> this.decrease1(e)}>-</button>
                                    <span>0.1</span>
                                    <button onClick={(e)=>{this.increase1(e)}}>+</button>
                                </div>
                                <button className={styles.add} onClick={(e)=> {
                                    let array = this.state.basket;
                                    let ilosc = Number(document.querySelectorAll(`.${styles.ilosc} span`)[36].textContent)
                                    let productInfo = {name: 'Cukinia', ilosc: ilosc, cena: (ilosc * 7.70).toFixed(2), picture: cukinia, id:35}
                                    let newArray = [...array]
                                    newArray.push(productInfo)
                                    this.setState({
                                        basket: newArray
                                    })
                                }}>
                                    <span>+</span>
                                    <img src={basket}></img>
                                </button>
                            </div>
                        </div>
                        <div className={styles.productsDiv}>
                            <div className={styles.productInfo}>
                                <img src={jablka} />
                                <p className={styles.productName}>Jabłko</p>
                                <span>3.50 zł/kg</span>  
                            </div>
                            <div className={styles.addToBasket}>
                                <div className={styles.ilosc}>
                                <button onClick={(e)=> this.decrease1(e)}>-</button>
                                    <span>0.1</span>
                                    <button onClick={(e)=>{this.increase1(e)}}>+</button>
                                </div>
                                <button className={styles.add} onClick={(e)=> {
                                    let array = this.state.basket;
                                    let ilosc = Number(document.querySelectorAll(`.${styles.ilosc} span`)[37].textContent)
                                    let productInfo = {name: 'Jabłko', ilosc: ilosc, cena: (ilosc * 3.50).toFixed(2), picture: jablka, id:36}
                                    let newArray = [...array]
                                    newArray.push(productInfo)
                                    this.setState({
                                        basket: newArray
                                    })
                                }}>
                                    <span>+</span>
                                    <img src={basket}></img>
                                </button>
                            </div>
                        </div>
                        <div className={styles.productsDiv}>
                            <div className={styles.productInfo}>
                                <img src={kalafior} />
                                <p className={styles.productName}>Kalafior szt.</p>
                                <span>9.00 zł/szt.</span>  
                            </div>
                            <div className={styles.addToBasket}>
                                <div className={styles.ilosc}>
                                <button onClick={(e)=>{this.decrease(e)}}>-</button>
                                    <span>1</span>
                                    <button onClick={(e)=>{this.increase(e)}}>+</button>
                                </div>
                                <button className={styles.add} onClick={(e)=> {
                                    let array = this.state.basket;
                                    let ilosc = Number(document.querySelectorAll(`.${styles.ilosc} span`)[38].textContent)
                                    let productInfo = {name: 'Kalafior szt.', ilosc: ilosc, cena: (ilosc * 9.00).toFixed(2), picture: kalafior, id:37}
                                    let newArray = [...array]
                                    newArray.push(productInfo)
                                    this.setState({
                                        basket: newArray
                                    })
                                }}>
                                    <span>+</span>
                                    <img src={basket}></img>
                                </button>
                            </div>
                        </div>
                        <div className={styles.productsDiv}>
                            <div className={styles.productInfo}>
                                <img src={kiwi} />
                                <p className={styles.productName}>Kiwi</p>
                                <span>10.50 zł/kg</span>  
                            </div>
                            <div className={styles.addToBasket}>
                                <div className={styles.ilosc}>
                                <button onClick={(e)=> this.decrease1(e)}>-</button>
                                    <span>0.1</span>
                                    <button onClick={(e)=>{this.increase1(e)}}>+</button>
                                </div>
                                <button className={styles.add} onClick={(e)=> {
                                    let array = this.state.basket;
                                    let ilosc = Number(document.querySelectorAll(`.${styles.ilosc} span`)[39].textContent)
                                    let productInfo = {name: 'Kiwi', ilosc: ilosc, cena: (ilosc * 10.50).toFixed(2), picture: kiwi, id:38}
                                    let newArray = [...array]
                                    newArray.push(productInfo)
                                    this.setState({
                                        basket: newArray
                                    })
                                }}>
                                    <span>+</span>
                                    <img src={basket}></img>
                                </button>
                            </div>
                        </div>
                        <div className={styles.productsDiv}>
                            <div className={styles.productInfo}>
                                <img src={kokos} />
                                <p className={styles.productName}>Kokos</p>
                                <span>8.00 zł/szt.</span>  
                            </div>
                            <div className={styles.addToBasket}>
                                <div className={styles.ilosc}>
                                <button onClick={(e)=>{this.decrease(e)}}>-</button>
                                    <span>1</span>
                                    <button onClick={(e)=>{this.increase(e)}}>+</button>
                                </div>
                                <button className={styles.add} onClick={(e)=> {
                                    let array = this.state.basket;
                                    let ilosc = Number(document.querySelectorAll(`.${styles.ilosc} span`)[40].textContent)
                                    let productInfo = {name: 'Kokos', ilosc: ilosc, cena: (ilosc * 8.00).toFixed(2), picture: kokos, id:39}
                                    let newArray = [...array]
                                    newArray.push(productInfo)
                                    this.setState({
                                        basket: newArray
                                    })
                                }}>
                                    <span>+</span>
                                    <img src={basket}></img>
                                </button>
                            </div>
                        </div>
                        <div className={styles.productsDiv}>
                            <div className={styles.productInfo}>
                                <img src={pomarancza} />
                                <p className={styles.productName}>Pomarańcza</p>
                                <span>4.30 zł/kg</span>  
                            </div>
                            <div className={styles.addToBasket}>
                                <div className={styles.ilosc}>
                                <button onClick={(e)=> this.decrease1(e)}>-</button>
                                    <span>0.1</span>
                                    <button onClick={(e)=>{this.increase1(e)}}>+</button>
                                </div>
                                <button className={styles.add} onClick={(e)=> {
                                    let array = this.state.basket;
                                    let ilosc = Number(document.querySelectorAll(`.${styles.ilosc} span`)[41].textContent)
                                    let productInfo = {name: 'Pomarańcza', ilosc: ilosc, cena: (ilosc * 4.30).toFixed(2), picture: pomarancza, id:40}
                                    let newArray = [...array]
                                    newArray.push(productInfo)
                                    this.setState({
                                        basket: newArray
                                    })
                                }}>
                                    <span>+</span>
                                    <img src={basket}></img>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.rybyDiv} id="ryby">
                    <div className={styles.categories}>
                        <img src={ryby} className={styles.categoriesIcon} />
                        <span>Ryby</span> 
                    </div>
                    <div className={styles.container}>
                        <div className={styles.productsDiv}>
                            <div className={styles.productInfo}>
                                <img src={byczki} />
                                <p className={styles.productName}>Byczki w sosie pomidorowym</p>
                                <span>6.50 zł/szt.</span>  
                            </div>
                            <div className={styles.addToBasket}>
                                <div className={styles.ilosc}>
                                <button onClick={(e)=>{this.decrease(e)}}>-</button>
                                    <span>1</span>
                                    <button onClick={(e)=>{this.increase(e)}}>+</button>
                                </div>
                                <button className={styles.add} onClick={(e)=> {
                                    let array = this.state.basket;
                                    let ilosc = Number(document.querySelectorAll(`.${styles.ilosc} span`)[42].textContent)
                                    let productInfo = {name: 'Byczki w sosie pomidorowym', ilosc: ilosc, cena: (ilosc * 6.50).toFixed(2), picture: byczki}
                                    let newArray = [...array]
                                    newArray.push(productInfo)
                                    this.setState({
                                        basket: newArray
                                    })
                                }}>
                                    <span>+</span>
                                    <img src={basket}></img>
                                </button>
                            </div>
                        </div>
                        <div className={styles.productsDiv}>
                            <div className={styles.productInfo}>
                                <img src={dorszfil} />
                                <p className={styles.productName}>Filet z dorsza</p>
                                <span>35.00 zł/kg</span>  
                            </div>
                            <div className={styles.addToBasket}>
                                <div className={styles.ilosc}>
                                <button onClick={(e)=> this.decrease1(e)}>-</button>
                                    <span>0.1</span>
                                    <button onClick={(e)=>{this.increase1(e)}}>+</button>
                                </div>
                                <button className={styles.add} onClick={(e)=> {
                                    let array = this.state.basket;
                                    let ilosc = Number(document.querySelectorAll(`.${styles.ilosc} span`)[43].textContent)
                                    let productInfo = {name: 'Filet z dorsza', ilosc: ilosc, cena: (ilosc * 35.00).toFixed(2), picture: dorszfil}
                                    let newArray = [...array]
                                    newArray.push(productInfo)
                                    this.setState({
                                        basket: newArray
                                    })
                                }}>
                                    <span>+</span>
                                    <img src={basket}></img>
                                </button>
                            </div>
                        </div>
                        <div className={styles.productsDiv}>
                            <div className={styles.productInfo}>
                                <img src={filetyzsledz} />
                                <p className={styles.productName}>Filety z śledzia</p>
                                <span>17.50 zł/opak.</span>  
                            </div>
                            <div className={styles.addToBasket}>
                                <div className={styles.ilosc}>
                                <button onClick={(e)=>{this.decrease(e)}}>-</button>
                                    <span>1</span>
                                    <button onClick={(e)=>{this.increase(e)}}>+</button>
                                </div>
                                <button className={styles.add} onClick={(e)=> {
                                    let array = this.state.basket;
                                    let ilosc = Number(document.querySelectorAll(`.${styles.ilosc} span`)[44].textContent)
                                    let productInfo = {name: 'Filety z śledzia', ilosc: ilosc, cena: (ilosc * 17.50).toFixed(2), picture: filetyzsledz}
                                    let newArray = [...array]
                                    newArray.push(productInfo)
                                    this.setState({
                                        basket: newArray
                                    })
                                }}>
                                    <span>+</span>
                                    <img src={basket}></img>
                                </button>
                            </div>
                        </div>
                        <div className={styles.productsDiv}>
                            <div className={styles.productInfo}>
                                <img src={filzmakwol} />
                                <p className={styles.productName}>Filety z makreli w oleju</p>
                                <span>7.90 zł/opak.</span>  
                            </div>
                            <div className={styles.addToBasket}>
                                <div className={styles.ilosc}>
                                <button onClick={(e)=>{this.decrease(e)}}>-</button>
                                    <span>1</span>
                                    <button onClick={(e)=>{this.increase(e)}}>+</button>
                                </div>
                                <button className={styles.add} onClick={(e)=> {
                                    let array = this.state.basket;
                                    let ilosc = Number(document.querySelectorAll(`.${styles.ilosc} span`)[45].textContent)
                                    let productInfo = {name: 'Filety z makreli w oleju', ilosc: ilosc, cena: (ilosc * 7.90).toFixed(2), picture: filzmakwol}
                                    let newArray = [...array]
                                    newArray.push(productInfo)
                                    this.setState({
                                        basket: newArray
                                    })
                                }}>
                                    <span>+</span>
                                    <img src={basket}></img>
                                </button>
                            </div>
                        </div>
                        <div className={styles.productsDiv}>
                            <div className={styles.productInfo}>
                                <img src={filezmakwpom} />
                                <p className={styles.productName}>Filety z makreli w sosie pomidorowym</p>
                                <span>7.70 zł/opak.</span>  
                            </div>
                            <div className={styles.addToBasket}>
                                <div className={styles.ilosc}>
                                <button onClick={(e)=>{this.decrease(e)}}>-</button>
                                    <span>1</span>
                                    <button onClick={(e)=>{this.increase(e)}}>+</button>
                                </div>
                                <button className={styles.add} onClick={(e)=> {
                                    let array = this.state.basket;
                                    let ilosc = Number(document.querySelectorAll(`.${styles.ilosc} span`)[46].textContent)
                                    let productInfo = {name: 'Filety z makreli w sosie pomidorowym', ilosc: ilosc, cena: (ilosc * 7.70).toFixed(2), picture: filezmakwpom}
                                    let newArray = [...array]
                                    newArray.push(productInfo)
                                    this.setState({
                                        basket: newArray
                                    })
                                }}>
                                    <span>+</span>
                                    <img src={basket}></img>
                                </button>
                            </div>
                        </div>
                        <div className={styles.productsDiv}>
                            <div className={styles.productInfo}>
                                <img src={kawiorcz} />
                                <p className={styles.productName}>Kawior czarny</p>
                                <span>15.50 zł/opak.</span>  
                            </div>
                            <div className={styles.addToBasket}>
                                <div className={styles.ilosc}>
                                <button onClick={(e)=>{this.decrease(e)}}>-</button>
                                    <span>1</span>
                                    <button onClick={(e)=>{this.increase(e)}}>+</button>
                                </div>
                                <button className={styles.add} onClick={(e)=> {
                                    let array = this.state.basket;
                                    let ilosc = Number(document.querySelectorAll(`.${styles.ilosc} span`)[47].textContent)
                                    let productInfo = {name: 'Kawior czarny', ilosc: ilosc, cena: (ilosc * 15.50).toFixed(2), picture: kawiorcz}
                                    let newArray = [...array]
                                    newArray.push(productInfo)
                                    this.setState({
                                        basket: newArray
                                    })
                                }}>
                                    <span>+</span>
                                    <img src={basket}></img>
                                </button>
                            </div>
                        </div>
                        <div className={styles.productsDiv}>
                            <div className={styles.productInfo}>
                                <img src={paluszki} />
                                <p className={styles.productName}>Paluszki rybne</p>
                                <span>9.00 zł/opak.</span>  
                            </div>
                            <div className={styles.addToBasket}>
                                <div className={styles.ilosc}>
                                <button onClick={(e)=>{this.decrease(e)}}>-</button>
                                    <span>1</span>
                                    <button onClick={(e)=>{this.increase(e)}}>+</button>
                                </div>
                                <button className={styles.add} onClick={(e)=> {
                                    let array = this.state.basket;
                                    let ilosc = Number(document.querySelectorAll(`.${styles.ilosc} span`)[48].textContent)
                                    let productInfo = {name: 'Paluszki rybne', ilosc: ilosc, cena: (ilosc * 9.00).toFixed(2), picture: paluszki}
                                    let newArray = [...array]
                                    newArray.push(productInfo)
                                    this.setState({
                                        basket: newArray
                                    })
                                }}>
                                    <span>+</span>
                                    <img src={basket}></img>
                                </button>
                            </div>
                        </div>
                        <div className={styles.productsDiv}>
                            <div className={styles.productInfo}>
                                <img src={poledwdorsz} />
                                <p className={styles.productName}>Polędwica z dorsza</p>
                                <span>35.50 zł/kg</span>  
                            </div>
                            <div className={styles.addToBasket}>
                                <div className={styles.ilosc}>
                                <button onClick={(e)=> this.decrease1(e)}>-</button>
                                    <span>0.1</span>
                                    <button onClick={(e)=>{this.increase1(e)}}>+</button>
                                </div>
                                <button className={styles.add} onClick={(e)=> {
                                    let array = this.state.basket;
                                    let ilosc = Number(document.querySelectorAll(`.${styles.ilosc} span`)[49].textContent)
                                    let productInfo = {name: 'Polędwica z dorsza', ilosc: ilosc, cena: (ilosc * 35.50).toFixed(2), picture: poledwdorsz}
                                    let newArray = [...array]
                                    newArray.push(productInfo)
                                    this.setState({
                                        basket: newArray
                                    })
                                }}>
                                    <span>+</span>
                                    <img src={basket}></img>
                                </button>
                            </div>
                        </div>
                        <div className={styles.productsDiv}>
                            <div className={styles.productInfo}>
                                <img src={sledzpowiejsk} />
                                <p className={styles.productName}>Śledzie po wiejsku</p>
                                <span>17.00 zł/opak.</span>  
                            </div>
                            <div className={styles.addToBasket}>
                                <div className={styles.ilosc}>
                                <button onClick={(e)=>{this.decrease(e)}}>-</button>
                                    <span>1</span>
                                    <button onClick={(e)=>{this.increase(e)}}>+</button>
                                </div>
                                <button className={styles.add} onClick={(e)=> {
                                    let array = this.state.basket;
                                    let ilosc = Number(document.querySelectorAll(`.${styles.ilosc} span`)[50].textContent)
                                    let productInfo = {name: 'Śledzie po wiejsku', ilosc: ilosc, cena: (ilosc * 17.00).toFixed(2), picture: sledzpowiejsk}
                                    let newArray = [...array]
                                    newArray.push(productInfo)
                                    this.setState({
                                        basket: newArray
                                    })
                                }}>
                                    <span>+</span>
                                    <img src={basket}></img>
                                </button>
                            </div>
                        </div>
                        <div className={styles.productsDiv}>
                            <div className={styles.productInfo}>
                                <img src={sledzwpom} />
                                <p className={styles.productName}>Śledzie w sosie pomidorowym</p>
                                <span>7.30 zł/opak.</span>  
                            </div>
                            <div className={styles.addToBasket}>
                                <div className={styles.ilosc}>
                                <button onClick={(e)=>{this.decrease(e)}}>-</button>
                                    <span>1</span>
                                    <button onClick={(e)=>{this.increase(e)}}>+</button>
                                </div>
                                <button className={styles.add} onClick={(e)=> {
                                    let array = this.state.basket;
                                    let ilosc = Number(document.querySelectorAll(`.${styles.ilosc} span`)[51].textContent)
                                    let productInfo = {name: 'Śledzie w sosie pomidorowym', ilosc: ilosc, cena: (ilosc * 7.30).toFixed(2), picture: sledzwpom}
                                    let newArray = [...array]
                                    newArray.push(productInfo)
                                    this.setState({
                                        basket: newArray
                                    })
                                }}>
                                    <span>+</span>
                                    <img src={basket}></img>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.pieczywoDiv} id="pieczywo">
                    <div className={styles.categories}>
                        <img src={pieczywo} className={styles.categoriesIcon} />
                        <span>Pieczywo</span> 
                    </div>
                    <div className={styles.container}>
                        <div className={styles.productsDiv}>
                            <div className={styles.productInfo}>
                                <img src={siednzairn} />
                                <p className={styles.productName}>Chleb 7 ziaren</p>
                                <span>6.50 zł/szt.</span>  
                            </div>
                            <div className={styles.addToBasket}>
                                <div className={styles.ilosc}>
                                <button onClick={(e)=>{this.decrease(e)}}>-</button>
                                    <span>1</span>
                                    <button onClick={(e)=>{this.increase(e)}}>+</button>
                                </div>
                                <button className={styles.add} onClick={(e)=> {
                                    let array = this.state.basket;
                                    let ilosc = Number(document.querySelectorAll(`.${styles.ilosc} span`)[52].textContent)
                                    let productInfo = {name: 'Chleb 7 ziaren', ilosc: ilosc, cena: (ilosc * 6.50).toFixed(2), picture: siednzairn, id:41}
                                    let newArray = [...array]
                                    newArray.push(productInfo)
                                    this.setState({
                                        basket: newArray
                                    })
                                }}>
                                    <span>+</span>
                                    <img src={basket}></img>
                                </button>
                            </div>
                        </div>
                        <div className={styles.productsDiv}>
                            <div className={styles.productInfo}>
                                <img src={bagietka} />
                                <p className={styles.productName}>Bagietka</p>
                                <span>3.50 zł/szt.</span>  
                            </div>
                            <div className={styles.addToBasket}>
                                <div className={styles.ilosc}>
                                <button onClick={(e)=>{this.decrease(e)}}>-</button>
                                    <span>1</span>
                                    <button onClick={(e)=>{this.increase(e)}}>+</button>
                                </div>
                                <button className={styles.add} onClick={(e)=> {
                                    let array = this.state.basket;
                                    let ilosc = Number(document.querySelectorAll(`.${styles.ilosc} span`)[53].textContent)
                                    let productInfo = {name: 'Bagietka', ilosc: ilosc, cena: (ilosc * 3.50).toFixed(2), picture: bagietka, id:42}
                                    let newArray = [...array]
                                    newArray.push(productInfo)
                                    this.setState({
                                        basket: newArray
                                    })
                                }}>
                                    <span>+</span>
                                    <img src={basket}></img>
                                </button>
                            </div>
                        </div>
                        <div className={styles.productsDiv}>
                            <div className={styles.productInfo}>
                                <img src={graham} />
                                <p className={styles.productName}>Chleb graham</p>
                                <span>6.50 zł/szt.</span>  
                            </div>
                            <div className={styles.addToBasket}>
                                <div className={styles.ilosc}>
                                <button onClick={(e)=>{this.decrease(e)}}>-</button>
                                    <span>1</span>
                                    <button onClick={(e)=>{this.increase(e)}}>+</button>
                                </div>
                                <button className={styles.add} onClick={(e)=> {
                                    let array = this.state.basket;
                                    let ilosc = Number(document.querySelectorAll(`.${styles.ilosc} span`)[54].textContent)
                                    let productInfo = {name: 'Chleb graham', ilosc: ilosc, cena: (ilosc * 6.50).toFixed(2), picture: graham, id:43}
                                    let newArray = [...array]
                                    newArray.push(productInfo)
                                    this.setState({
                                        basket: newArray
                                    })
                                }}>
                                    <span>+</span>
                                    <img src={basket}></img>
                                </button>
                            </div>
                        </div>
                        <div className={styles.productsDiv}>
                            <div className={styles.productInfo}>
                                <img src={grahamka} />
                                <p className={styles.productName}>Bułka grahamka</p>
                                <span>0.90 zł/szt.</span>  
                            </div>
                            <div className={styles.addToBasket}>
                                <div className={styles.ilosc}>
                                <button onClick={(e)=>{this.decrease(e)}}>-</button>
                                    <span>1</span>
                                    <button onClick={(e)=>{this.increase(e)}}>+</button>
                                </div>
                                <button className={styles.add} onClick={(e)=> {
                                    let array = this.state.basket;
                                    let ilosc = Number(document.querySelectorAll(`.${styles.ilosc} span`)[55].textContent)
                                    let productInfo = {name: 'Bułka grahamka', ilosc: ilosc, cena: (ilosc * 0.90).toFixed(2), picture: grahamka, id:44}
                                    let newArray = [...array]
                                    newArray.push(productInfo)
                                    this.setState({
                                        basket: newArray
                                    })
                                }}>
                                    <span>+</span>
                                    <img src={basket}></img>
                                </button>
                            </div>
                        </div>
                        <div className={styles.productsDiv}>
                            <div className={styles.productInfo}>
                                <img src={kajzerka} />
                                <p className={styles.productName}>Bułka kajzerka</p>
                                <span>0.70 zł/szt.</span>  
                            </div>
                            <div className={styles.addToBasket}>
                                <div className={styles.ilosc}>
                                <button onClick={(e)=>{this.decrease(e)}}>-</button>
                                    <span>1</span>
                                    <button onClick={(e)=>{this.increase(e)}}>+</button>
                                </div>
                                <button className={styles.add} onClick={(e)=> {
                                    let array = this.state.basket;
                                    let ilosc = Number(document.querySelectorAll(`.${styles.ilosc} span`)[56].textContent)
                                    let productInfo = {name: 'Bułka kajzerka', ilosc: ilosc, cena: (ilosc * 0.70).toFixed(2), picture: kajzerka, id:45}
                                    let newArray = [...array]
                                    newArray.push(productInfo)
                                    this.setState({
                                        basket: newArray
                                    })
                                }}>
                                    <span>+</span>
                                    <img src={basket}></img>
                                </button>
                            </div>
                        </div>
                        <div className={styles.productsDiv}>
                            <div className={styles.productInfo}>
                                <img src={mazowiecki} />
                                <p className={styles.productName}>Chleb mazowiecki</p>
                                <span>5.50 zł/szt.</span>  
                            </div>
                            <div className={styles.addToBasket}>
                                <div className={styles.ilosc}>
                                <button onClick={(e)=>{this.decrease(e)}}>-</button>
                                    <span>1</span>
                                    <button onClick={(e)=>{this.increase(e)}}>+</button>
                                </div>
                                <button className={styles.add} onClick={(e)=> {
                                    let array = this.state.basket;
                                    let ilosc = Number(document.querySelectorAll(`.${styles.ilosc} span`)[57].textContent)
                                    let productInfo = {name: 'Chleb mazowiecki', ilosc: ilosc, cena: (ilosc * 5.50).toFixed(2), picture: mazowiecki, id:46}
                                    let newArray = [...array]
                                    newArray.push(productInfo)
                                    this.setState({
                                        basket: newArray
                                    })
                                }}>
                                    <span>+</span>
                                    <img src={basket}></img>
                                </button>
                            </div>
                        </div>
                        <div className={styles.productsDiv}>
                            <div className={styles.productInfo}>
                                <img src={mieszany} />
                                <p className={styles.productName}>Chleb mieszany</p>
                                <span>5.00 zł/szt.</span>  
                            </div>
                            <div className={styles.addToBasket}>
                                <div className={styles.ilosc}>
                                <button onClick={(e)=>{this.decrease(e)}}>-</button>
                                    <span>1</span>
                                    <button onClick={(e)=>{this.increase(e)}}>+</button>
                                </div>
                                <button className={styles.add} onClick={(e)=> {
                                    let array = this.state.basket;
                                    let ilosc = Number(document.querySelectorAll(`.${styles.ilosc} span`)[58].textContent)
                                    let productInfo = {name: 'Chleb mieszany', ilosc: ilosc, cena: (ilosc * 5.00).toFixed(2), picture: mieszany, id:47}
                                    let newArray = [...array]
                                    newArray.push(productInfo)
                                    this.setState({
                                        basket: newArray
                                    })
                                }}>
                                    <span>+</span>
                                    <img src={basket}></img>
                                </button>
                            </div>
                        </div>
                        <div className={styles.productsDiv}>
                            <div className={styles.productInfo}>
                                <img src={polbag} />
                                <p className={styles.productName}>Półbagietka</p>
                                <span>1.50 zł/szt.</span>  
                            </div>
                            <div className={styles.addToBasket}>
                                <div className={styles.ilosc}>
                                <button onClick={(e)=>{this.decrease(e)}}>-</button>
                                    <span>1</span>
                                    <button onClick={(e)=>{this.increase(e)}}>+</button>
                                </div>
                                <button className={styles.add} onClick={(e)=> {
                                    let array = this.state.basket;
                                    let ilosc = Number(document.querySelectorAll(`.${styles.ilosc} span`)[59].textContent)
                                    let productInfo = {name: 'Półbagietka', ilosc: ilosc, cena: (ilosc * 1.50).toFixed(2), picture: polbag, id:48}
                                    let newArray = [...array]
                                    newArray.push(productInfo)
                                    this.setState({
                                        basket: newArray
                                    })
                                }}>
                                    <span>+</span>
                                    <img src={basket}></img>
                                </button>
                            </div>
                        </div>
                        <div className={styles.productsDiv}>
                            <div className={styles.productInfo}>
                                <img src={pytlowy} />
                                <p className={styles.productName}>Chleb pytlowy</p>
                                <span>6.00 zł/szt.</span>  
                            </div>
                            <div className={styles.addToBasket}>
                                <div className={styles.ilosc}>
                                <button onClick={(e)=>{this.decrease(e)}}>-</button>
                                    <span>1</span>
                                    <button onClick={(e)=>{this.increase(e)}}>+</button>
                                </div>
                                <button className={styles.add} onClick={(e)=> {
                                    let array = this.state.basket;
                                    let ilosc = Number(document.querySelectorAll(`.${styles.ilosc} span`)[60].textContent)
                                    let productInfo = {name: 'Chleb pytlowy', ilosc: ilosc, cena: (ilosc * 6.00).toFixed(2), picture: pytlowy, id: 1}
                                    let newArray = [...array]
                                    newArray.push(productInfo)
                                    this.setState({
                                        basket: newArray
                                    })
                                }}>
                                    <span>+</span>
                                    <img src={basket}></img>
                                </button>
                            </div>
                        </div>
                        <div className={styles.productsDiv}>
                            <div className={styles.productInfo}>
                                <img src={trojkatfintess} />
                                <p className={styles.productName}>Bułka trójkąt fitness</p>
                                <span>1.30 zł/szt.</span>  
                            </div>
                            <div className={styles.addToBasket}>
                                <div className={styles.ilosc}>
                                <button onClick={(e)=>{this.decrease(e)}}>-</button>
                                    <span>1</span>
                                    <button onClick={(e)=>{this.increase(e)}}>+</button>
                                </div>
                                <button className={styles.add} onClick={(e)=> {
                                    let array = this.state.basket;
                                    let ilosc = Number(document.querySelectorAll(`.${styles.ilosc} span`)[61].textContent)
                                    let productInfo = {name: 'Bułka trójkąt fitness', ilosc: ilosc, cena: (ilosc * 1.30).toFixed(2), picture: trojkatfintess, id:49}
                                    let newArray = [...array]
                                    newArray.push(productInfo)
                                    this.setState({
                                        basket: newArray
                                    })
                                }}>
                                    <span>+</span>
                                    <img src={basket}></img>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.slodyczeDiv} id="slodycze">
                    <div className={styles.categories}>
                        <img src={slodycze} className={styles.categoriesIcon} />
                        <span>Słodycze</span> 
                    </div>
                    <div className={styles.container}>
                        <div className={styles.productsDiv}>
                            <div className={styles.productInfo}>
                                <img src={biszkopty} />
                                <p className={styles.productName}>Biszkopty</p>
                                <span>6.50 zł/opak.</span>  
                            </div>
                            <div className={styles.addToBasket}>
                                <div className={styles.ilosc}>
                                <button onClick={(e)=>{this.decrease(e)}}>-</button>
                                    <span>1</span>
                                    <button onClick={(e)=>{this.increase(e)}}>+</button>
                                </div>
                                <button className={styles.add} onClick={(e)=> {
                                    let array = this.state.basket;
                                    let ilosc = Number(document.querySelectorAll(`.${styles.ilosc} span`)[62].textContent)
                                    let productInfo = {name: 'Biszkopty', ilosc: ilosc, cena: (ilosc * 6.50).toFixed(2), picture: biszkopty, id:50}
                                    let newArray = [...array]
                                    newArray.push(productInfo)
                                    this.setState({
                                        basket: newArray
                                    })
                                }}>
                                    <span>+</span>
                                    <img src={basket}></img>
                                </button>
                            </div>
                        </div>
                        <div className={styles.productsDiv}>
                            <div className={styles.productInfo}>
                                <img src={biszkzgal} />
                                <p className={styles.productName}>Biszkopty z galaretką</p>
                                <span>3.50 zł/opak.</span>  
                            </div>
                            <div className={styles.addToBasket}>
                                <div className={styles.ilosc}>
                                <button onClick={(e)=>{this.decrease(e)}}>-</button>
                                    <span>1</span>
                                    <button onClick={(e)=>{this.increase(e)}}>+</button>
                                </div>
                                <button className={styles.add} onClick={(e)=> {
                                    let array = this.state.basket;
                                    let ilosc = Number(document.querySelectorAll(`.${styles.ilosc} span`)[63].textContent)
                                    let productInfo = {name: 'Biszkopty z galaretką', ilosc: ilosc, cena: (ilosc * 3.50).toFixed(2), picture: biszkzgal, id:51}
                                    let newArray = [...array]
                                    newArray.push(productInfo)
                                    this.setState({
                                        basket: newArray
                                    })
                                }}>
                                    <span>+</span>
                                    <img src={basket}></img>
                                </button>
                            </div>
                        </div>
                        <div className={styles.productsDiv}>
                            <div className={styles.productInfo}>
                                <img src={ciastkkruch} />
                                <p className={styles.productName}>Ciastka kruche</p>
                                <span>5.50 zł/opak.</span>  
                            </div>
                            <div className={styles.addToBasket}>
                                <div className={styles.ilosc}>
                                <button onClick={(e)=>{this.decrease(e)}}>-</button>
                                    <span>1</span>
                                    <button onClick={(e)=>{this.increase(e)}}>+</button>
                                </div>
                                <button className={styles.add} onClick={(e)=> {
                                    let array = this.state.basket;
                                    let ilosc = Number(document.querySelectorAll(`.${styles.ilosc} span`)[64].textContent)
                                    let productInfo = {name: 'Ciastka kruche', ilosc: ilosc, cena: (ilosc * 5.50).toFixed(2), picture: ciastkkruch, id:52}
                                    let newArray = [...array]
                                    newArray.push(productInfo)
                                    this.setState({
                                        basket: newArray
                                    })
                                }}>
                                    <span>+</span>
                                    <img src={basket}></img>
                                </button>
                            </div>
                        </div>
                        <div className={styles.productsDiv}>
                            <div className={styles.productInfo}>
                                <img src={owsiane} />
                                <p className={styles.productName}>Ciastka owsiane</p>
                                <span>7.90 zł/opak.</span>  
                            </div>
                            <div className={styles.addToBasket}>
                                <div className={styles.ilosc}>
                                <button onClick={(e)=>{this.decrease(e)}}>-</button>
                                    <span>1</span>
                                    <button onClick={(e)=>{this.increase(e)}}>+</button>
                                </div>
                                <button className={styles.add} onClick={(e)=> {
                                    let array = this.state.basket;
                                    let ilosc = Number(document.querySelectorAll(`.${styles.ilosc} span`)[65].textContent)
                                    let productInfo = {name: 'Ciastka owsiane', ilosc: ilosc, cena: (ilosc * 7.90).toFixed(2), picture: owsiane, id:53}
                                    let newArray = [...array]
                                    newArray.push(productInfo)
                                    this.setState({
                                        basket: newArray
                                    })
                                }}>
                                    <span>+</span>
                                    <img src={basket}></img>
                                </button>
                            </div>
                        </div>
                        <div className={styles.productsDiv}>
                            <div className={styles.productInfo}>
                                <img src={gofry} />
                                <p className={styles.productName}>Gofry</p>
                                <span>9.70 zł/opak.</span>  
                            </div>
                            <div className={styles.addToBasket}>
                                <div className={styles.ilosc}>
                                <button onClick={(e)=>{this.decrease(e)}}>-</button>
                                    <span>1</span>
                                    <button onClick={(e)=>{this.increase(e)}}>+</button>
                                </div>
                                <button className={styles.add} onClick={(e)=> {
                                    let array = this.state.basket;
                                    let ilosc = Number(document.querySelectorAll(`.${styles.ilosc} span`)[66].textContent)
                                    let productInfo = {name: 'Gofry', ilosc: ilosc, cena: (ilosc * 9.70).toFixed(2), picture: gofry, id:54}
                                    let newArray = [...array]
                                    newArray.push(productInfo)
                                    this.setState({
                                        basket: newArray
                                    })
                                }}>
                                    <span>+</span>
                                    <img src={basket}></img>
                                </button>
                            </div>
                        </div>
                        <div className={styles.productsDiv}>
                            <div className={styles.productInfo}>
                                <img src={herbat} />
                                <p className={styles.productName}>Herbatniki</p>
                                <span>6.50 zł/opak.</span>  
                            </div>
                            <div className={styles.addToBasket}>
                                <div className={styles.ilosc}>
                                <button onClick={(e)=>{this.decrease(e)}}>-</button>
                                    <span>1</span>
                                    <button onClick={(e)=>{this.increase(e)}}>+</button>
                                </div>
                                <button className={styles.add} onClick={(e)=> {
                                    let array = this.state.basket;
                                    let ilosc = Number(document.querySelectorAll(`.${styles.ilosc} span`)[67].textContent)
                                    let productInfo = {name: 'Herbatniki', ilosc: ilosc, cena: (ilosc * 6.50).toFixed(2), picture: herbat, id:55}
                                    let newArray = [...array]
                                    newArray.push(productInfo)
                                    this.setState({
                                        basket: newArray
                                    })
                                }}>
                                    <span>+</span>
                                    <img src={basket}></img>
                                </button>
                            </div>
                        </div>
                        <div className={styles.productsDiv}>
                            <div className={styles.productInfo}>
                                <img src={markizy} />
                                <p className={styles.productName}>Markizy</p>
                                <span>7.00 zł/opak.</span>  
                            </div>
                            <div className={styles.addToBasket}>
                                <div className={styles.ilosc}>
                                <button onClick={(e)=>{this.decrease(e)}}>-</button>
                                    <span>1</span>
                                    <button onClick={(e)=>{this.increase(e)}}>+</button>
                                </div>
                                <button className={styles.add} onClick={(e)=> {
                                    let array = this.state.basket;
                                    let ilosc = Number(document.querySelectorAll(`.${styles.ilosc} span`)[68].textContent)
                                    let productInfo = {name: 'Markizy', ilosc: ilosc, cena: (ilosc * 7.00).toFixed(2), picture: markizy, id:56}
                                    let newArray = [...array]
                                    newArray.push(productInfo)
                                    this.setState({
                                        basket: newArray
                                    })
                                }}>
                                    <span>+</span>
                                    <img src={basket}></img>
                                </button>
                            </div>
                        </div>
                        <div className={styles.productsDiv}>
                            <div className={styles.productInfo}>
                                <img src={wafelki} />
                                <p className={styles.productName}>Wafelki w polewie czekoladowej</p>
                                <span>7.50 zł/opak.</span>  
                            </div>
                            <div className={styles.addToBasket}>
                                <div className={styles.ilosc}>
                                <button onClick={(e)=>{this.decrease(e)}}>-</button>
                                    <span>1</span>
                                    <button onClick={(e)=>{this.increase(e)}}>+</button>
                                </div>
                                <button className={styles.add} onClick={(e)=> {
                                    let array = this.state.basket;
                                    let ilosc = Number(document.querySelectorAll(`.${styles.ilosc} span`)[69].textContent)
                                    let productInfo = {name: 'Wafelki w polewie czekoladowej', ilosc: ilosc, cena: (ilosc * 7.50).toFixed(2), picture: wafelki, id:57}
                                    let newArray = [...array]
                                    newArray.push(productInfo)
                                    this.setState({
                                        basket: newArray
                                    })
                                }}>
                                    <span>+</span>
                                    <img src={basket}></img>
                                </button>
                            </div>
                        </div>
                        <div className={styles.productsDiv}>
                            <div className={styles.productInfo}>
                                <img src={waflekako} />
                                <p className={styles.productName}>Wafle kakaowe</p>
                                <span>9.50 zł/opak.</span>  
                            </div>
                            <div className={styles.addToBasket}>
                                <div className={styles.ilosc}>
                                <button onClick={(e)=>{this.decrease(e)}}>-</button>
                                    <span>1</span>
                                    <button onClick={(e)=>{this.increase(e)}}>+</button>
                                </div>
                                <button className={styles.add} onClick={(e)=> {
                                    let array = this.state.basket;
                                    let ilosc = Number(document.querySelectorAll(`.${styles.ilosc} span`)[70].textContent)
                                    let productInfo = {name: 'Wafle kakaowe', ilosc: ilosc, cena: (ilosc * 9.50).toFixed(2), picture: waflekako, id:58}
                                    let newArray = [...array]
                                    newArray.push(productInfo)
                                    this.setState({
                                        basket: newArray
                                    })
                                }}>
                                    <span>+</span>
                                    <img src={basket}></img>
                                </button>
                            </div>
                        </div>
                        <div className={styles.productsDiv}>
                            <div className={styles.productInfo}>
                                <img src={ciastkazboz} />
                                <p className={styles.productName}>Ciastka zbożowe</p>
                                <span>8.30 zł/opak.</span>  
                            </div>
                            <div className={styles.addToBasket}>
                                <div className={styles.ilosc}>
                                <button onClick={(e)=>{this.decrease(e)}}>-</button>
                                    <span>1</span>
                                    <button onClick={(e)=>{this.increase(e)}}>+</button>
                                </div>
                                <button className={styles.add} onClick={(e)=> {
                                    let array = this.state.basket;
                                    let ilosc = Number(document.querySelectorAll(`.${styles.ilosc} span`)[71].textContent)
                                    let productInfo = {name: 'Ciastka zbożowe', ilosc: ilosc, cena: (ilosc * 8.30).toFixed(2), picture: ciastkazboz, id:59}
                                    let newArray = [...array]
                                    newArray.push(productInfo)
                                    this.setState({
                                        basket: newArray
                                    })
                                }}>
                                    <span>+</span>
                                    <img src={basket}></img>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}
export default Main;