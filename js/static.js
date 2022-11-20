//slider 
$(document).ready(function () {
   $(".card__slider").slick({
      arrows: false,
      dots: true,
      slidesToShow: 1,
      speed: 1000,
      autoplay: true,
      slidesToScroll: 1,
      infinite: false,
   });
});



//табы
let headerItemlink = document.querySelectorAll('.tabs__nav-itemlink')
let sectionActiveNode = document.querySelectorAll('.section')
let checkboxNode = document.querySelectorAll('.filter__checkbox')
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
// переход с активных публикаций в архив
//работа с архивом(публикация карты) + чекбоксы

// откытие меню фильтра при клике.
let openDrrop = document.querySelectorAll('.filter__drropdown')
openDrrop.forEach(function (e) {
   e.addEventListener('click', function (e) {
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
let iconMore = document.querySelectorAll('.icon-more')
iconMore.forEach(elem => {
   elem.addEventListener('click', function () {
      iconMore.forEach(el => {
         el.classList.remove('icon-more--js-active')
      })
      this.classList.add('icon-more--js-active')
   })
})
// добавление карты в архив + чекбоксы
document.querySelector('.filter__checkbox-name-w').addEventListener('click', funcApp)
function funcApp() {
   const cardsNode = Array.from(document.querySelectorAll('.card'))
   const archiveNode = document.getElementById('archive')
   const checkboxMain = document.querySelector('.checkbox-active')
   checkboxMain.addEventListener('click', function () {
      let arr = Array.from(activedNode)
      arr.forEach(e => {
         e.querySelector('.checkbox').checked = true
      })

      if (checkboxMain.checked == false) {
         cardsNode.forEach(el => {
            el.querySelector('.checkbox').checked = false
         })
      }
   })
   let activedNode = document.querySelector('.actived').children
   cardsNode.forEach(el => {
      if (el.querySelector('.checkbox').checked == true) {
         archiveNode.append(el)
         el.querySelector('.checkbox').checked = false
         amountFunc()
      }

   })
}
funcApp()

// добавление в архив карты при нажатий на соответствующюю кнопку в дорпдауне
let archiveItems = document.querySelectorAll('.add-archive')
archiveItems.forEach(el => {
   el.addEventListener('click', function () {
      const archiveNode = document.getElementById('archive')
      let card = el.closest('.card')
      archiveNode.append(card)
      amountFunc()
   })

})
// количество товаров 'Aктивные' 'Архив'
function amountFunc() {
   let activedNode = document.querySelector('.actived').children
   let amoutActivedCards = document.querySelector('.actived-amount')
   let amoutArchiveCards = document.querySelector('.archive-amount')
   const archiveNode = document.getElementById('archive')
   amoutActivedCards.innerText = activedNode.length
   amoutArchiveCards.innerText = archiveNode.children.length
}

// сортировка карты по цене
const itemInc = document.getElementById('item-increase').addEventListener('click', funcInc)
const itemDesc = document.getElementById('item-descending').addEventListener('click', funcDesc)
function funcDesc() {
   let activedNode = document.querySelector('#actived')
   let items = activedNode.childNodes;
   let itemsArr = [];
   for (let i in items) {
      if (items[i].nodeType == 1) {
         itemsArr.push(items[i]);
      }
   }
   itemsArr.sort(function (a, b) {
      return parseFloat(a.getAttribute('data-price')) == parseFloat(b.getAttribute('data-price')) ?
         0 :
         (parseFloat(a.getAttribute('data-price')) > parseFloat(b.getAttribute('data-price')) ? 1 : -1);
   });
   for (let i = 0; i < itemsArr.length; ++i) {
      activedNode.appendChild(itemsArr[i]);
   }
}

function funcInc() {
   let activedNode = document.querySelector('#actived')
   let items = activedNode.childNodes;
   let itemsArr = [];
   for (let i in items) {
      if (items[i].nodeType == 1) {
         itemsArr.push(items[i]);
      }
   }
   itemsArr.sort(function (a, b) {
      return parseFloat(a.getAttribute('data-price')) == parseFloat(b.getAttribute('data-price')) ?
         0 :
         (parseFloat(a.getAttribute('data-price')) < parseFloat(b.getAttribute('data-price')) ? 1 : -1);
   });
   for (let i = 0; i < itemsArr.length; ++i) {
      activedNode.appendChild(itemsArr[i]);
   }
}

