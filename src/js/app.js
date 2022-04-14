import * as flsFunctions from './modules/functions.js'

flsFunctions.isWebp()

import Swiper, { Navigation, Pagination } from 'swiper'

const swiper = new Swiper()

// =========================================================
const partnerTabs = document.getElementById('partnerTabs');
const partnerTabsContent = document.querySelectorAll('.partner-tabs__body');
// console.log(partnerTabs);
// console.log(partnerTabsContent);

const changeClass = el => {
  console.log(el);
  for(let i = 0; i < partnerTabs.children.length; i ++ ){
    partnerTabs.children[i].classList.remove('--active');
  }
  
  el.classList.add('--active');
}

partnerTabs.addEventListener('click', e => {
  const currTab = e.target.dataset.btn;
  changeClass(e.target);
})