import * as flsFunctions from './modules/functions.js'

flsFunctions.isWebp()

import Swiper, { Navigation, Pagination } from 'swiper'

const swiper = new Swiper()

// =========================================================
const partnerTabs = document.getElementById('partnerTabs');
const partnerTabsContent = document.querySelectorAll('.partner-tabs__body');


const changeClass = el => {
  console.log(el);
  for(let i = 0; i < partnerTabs.children.length; i++ ){
    partnerTabs.children[i].classList.remove('--active');
  }
  el.classList.add('--active');
}
// console.log(partnerTabsContent);

partnerTabs.addEventListener('click', e => {
  const currTab = e.target.dataset.btn;
  changeClass(e.target);
  for(let i = 0; i < partnerTabsContent.length; i++){
    partnerTabsContent[i].classList.remove('--active');
    // console.log(partnerTabsContent[i].dataset.content);
    if(partnerTabsContent[i].dataset.content == currTab){
      partnerTabsContent[i].classList.add('--active')
    }
  }
  
})
// ==========для футера================
const btnOpen = document.getElementById('popupOpen');
const footer_btnOpen = document.getElementById('footer_popupOpen');
// ==========/для футера================
const modal = document.getElementById('popup');
// const footer_modal = document.getElementById('popup');
const overlay = document.getElementById('popup__wrapper');
const btnClose = document.getElementById('popup__close');

btnOpen.addEventListener('click',() =>{
    modal.classList.add('--active');
});
footer_btnOpen.addEventListener('click',() =>{
    modal.classList.add('--active');
});



overlay.addEventListener('click', () => {
  modal.classList.remove('--active');
});
btnClose.addEventListener('click', () => {
  modal.classList.remove('--active');
});
