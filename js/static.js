//табы
let headerItemlink = document.querySelectorAll('.tabs__nav-itemlink')
let sectionActiveNode = document.querySelectorAll('.section')
for (let i = 0; i < headerItemlink.length; i++) {
   headerItemlink[i].addEventListener('click', function () {
      let index = this.dataset.id
      for (let t = 0; t < headerItemlink.length; t++) {
         headerItemlink[t].classList.remove('tabs__nav-itemlink--active')
      }
      this.classList.add('tabs__nav-itemlink--active')
      for (let b = 0; b < sectionActiveNode.length; b++) {
         sectionActiveNode[b].classList.remove('section--active')
      }
      sectionActiveNode[index].classList.add('section--active')
   })
}
//  tabs__nav-itemlink--active


// откытие меню фильтра при клике.
let openDrrop = document.querySelectorAll('.filter__drropdown')
openDrrop.forEach(function (e) {
   e.addEventListener('click', function () {
      openDrrop.forEach(function (e) {
         e.classList.remove('filter__drropdown--js-toggle-opn-drrop')
      })
      this.classList.add('filter__drropdown--js-toggle-opn-drrop')

   })
})


window.addEventListener('click', function (e) {
   openDrrop.forEach(function (item) {
      if (item.contains(e.target)) {
         item.classList.add('filter__drropdown--js-toggle-opn-drrop')
      } else {
         item.classList.remove('filter__drropdown--js-toggle-opn-drrop')
      }
   })
});


// открытие дропдауна в доске с иконками 
let drropdownListNode = document.querySelectorAll('.drropdown-btns-board')
let iconMore = document.querySelectorAll('.icon-more')
iconMore.forEach(elem => {
   elem.addEventListener('click', function () {
      iconMore.forEach(el => {
         el.classList.remove('icon-more--js-active')
      })
      this.classList.add('icon-more--js-active')

   })
})

let fiterCh = document.querySelector('.filter__checkbox-name-w')
document.querySelector('.filter__checkbox-name-w').addEventListener('click', funcApp)

function funcApp() {
   const cardsNode = Array.from(document.querySelectorAll('.cards__items'))
   const archiveNode = document.getElementById('archive')
   cardsNode.forEach(el => {
      if (el.querySelector('.checkbox').checked == true) {
         archiveNode.appendChild(el)
      }
   })
}