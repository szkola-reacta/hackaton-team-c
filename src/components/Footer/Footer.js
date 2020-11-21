import React from 'react';
import './style.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTwitter } from '@fortawesome/free-solid-svg-icons'

// const element = <FontAwesomeIcon icon={faTwitter} />

const Footer = () => {
    return (
       <footer className='wrapper'>
           <div className='footer-top'>
               <div className='footer-top-left'>
                <div className='footer-top-left-firstSection'>
                   <ul>
                       <li><a href="">Karty upominkowe</a></li>
                       <li><a href=""> Znajdz sklep</a></li>
                       <li><a href="">Subskrypcja wiadomości email</a></li>
                       <li><a href="">Zostań członkiem klubu</a></li>
                       <li><a href="">Prześlij opinie</a></li>
                   </ul>

               </div>
               <div className='footer-top-left-secondSection'>
                    <ul>
                       <li><a href="">UZYSKAJ POMOC</a></li>
                       <li><a href=""> Status zamówienia</a></li>
                       <li><a href="">Wysyłka i dostawa</a></li>
                       <li><a href="">Zwroty</a></li>
                       <li><a href="">Opcje płatności</a></li>
                       <li><a href="">Skontaktuj się z nami</a></li>
                   </ul>
                </div>
               <div className='footer-top-left-thirdSection'>
                    <ul>
                    <li><a href="">O NAS</a></li>
                       <li><a href="">Aktualności</a></li>
                       <li><a href=""> Praca</a></li>
                       <li><a href="">Inwestorzy</a></li>
                       <li><a href="">Ochrona środowiska</a></li>
                   </ul>

               </div>
            </div> 
            <div className='footer-top-right'>
               
                    <div><p><i class="fa fa-twitter"></i></p></div>
                    <div><p><i class="fa fa-facebook"></i></p></div>
                    <div><p><i class="fa fa-youtube-play"></i></p></div>
                    <div><p><i class="fa fa-instagram"></i></p></div>
            </div>
           </div>

           <div className="footer-down">
                <div></div>
                
           </div>
 
       </footer>
    );
}

export default Footer;