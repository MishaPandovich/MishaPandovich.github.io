var goods = [
  {
    "name": "Чернющий мистер чеснок",
    "picture": "gum-cedar.jpg",
    "amount": 12,
    "price": 40
  },
  {
    "name": "Кедровая липучка",
    "picture": "ice-eggplant.jpg",
    "amount": 2,
    "price": 90
  },
  {
    "name": "Кукурузное утро",
    "picture": "marmalade-corn.jpg",
    "amount": 8,
    "price": 70
  }
];

//поиск шаблона
var parentCards = document.querySelector('.catalog-card');
var cardTemplate = document.querySelector('#card').content.querySelector('.catalog__card');

//создание карточки по шаблону
var createCard = function(goods) {
  var card= cardTemplate.cloneNode(true);

  card.querySelector('.card__title').textContent = goods.name;
  card.querySelector('.card__img').src = 'img/' + goods.picture;
  card.querySelector('.card__img').alt = goods.name;

  card.querySelector('.card__price').textContent = goods.price + ' ₽';  

  return card;
}

/*создаем фрагмент*/
var fragment = document.createDocumentFragment();
for (var i = 0; i < goods.length; i++) {
  fragment.appendChild(createCard(goods[i]));
}

parentCards.appendChild(fragment);