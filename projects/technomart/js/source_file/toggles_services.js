var list = document.querySelector('.services__list');
var listItem = document.querySelectorAll('.services__item');

function togglesList(listItem) {
  listItem.addEventListener('click', function(evt) {
    evt.preventDefault();
    /*убирается активный класс у предыдущего нажатаго элемента*/
    list.querySelector('.services__link--active').classList.remove('services__link--active');
    /*и добавляется только что нажатому элементу*/
    listItem.querySelector('.services__link').classList.add('services__link--active');

    /*происходит тоже самое, только с появляющимися блоками*/
    list.querySelector('.services-popup--active').classList.remove('services-popup--active');
    listItem.querySelector('.services-popup').classList.add('services-popup--active');
  });
}

for (var i = 0; i < listItem.length; i++) {
  togglesList(listItem[i]);
}
