 //табы
 let headerItemlink = document.querySelectorAll('.tabs__nav-itemlink')
 let sectionActiveNode = document.querySelectorAll('.section')
 for (let i = 0; i < headerItemlink.length; i++) {
     headerItemlink[i].addEventListener('click', function() {
         let inde = this.dataset.id
         for (let t = 0; t < headerItemlink.length; t++) {
             headerItemlink[t].classList.remove('tabs__nav-itemlink--active')
         }
         this.classList.add('tabs__nav-itemlink--active')
         for (let b = 0; b < sectionActiveNode.length; b++) {
             sectionActiveNode[b].classList.remove('section--active')
         }
         sectionActiveNode[inde].classList.add('section--active')
     })
 }
 //  tabs__nav-itemlink--active


 // откытие меню фильтра при клике.
 let openDrrop = document.querySelectorAll('.filter__drropdown')
 let drropNode = document.querySelectorAll('.drropdown')
 openDrrop.forEach(function(e) {
     e.addEventListener('click', function() {
         openDrrop.forEach(function(e) {
             e.classList.remove('filter__drropdown--js-toggle-opn-drrop')
         })
         this.classList.add('filter__drropdown--js-toggle-opn-drrop')

     })
 })


 window.addEventListener('click', function(e) {
     openDrrop.forEach(function(item) {
         if (item.contains(e.target)) {
             item.classList.add('filter__drropdown--js-toggle-opn-drrop')
         } else {
             item.classList.remove('filter__drropdown--js-toggle-opn-drrop')
         }
     })
 });