// клонирую массив goods
var goodsOrder = [];

for (var i = 0; i < goods.length; i++) {
  let clone = Object.assign({}, goods[i]);
  goodsOrder.push(clone);
}

// поиск шаблона
var cardsOrderTemplate = document.querySelector('#card-order').content.querySelector('.card-order');

// создание карточки товара по по шаблону
var createСardsOrder = function(goodsorder) {
  var card = cardsOrderTemplate.cloneNode(true);

  card.querySelector('.card-order__title').textContent = goodsorder.name;
  card.querySelector('.card-order__img').src = 'img/' + goodsorder.picture;
  card.querySelector('.card-order__img').alt = goodsorder.name;
  card.querySelector('.card-order__price').textContent = goodsorder.price + ' ₽';
  card.querySelector('.card-order__count').value = 1;

  return card;
}

var cardButton = document.querySelectorAll('.card__btn'),
    countAddCards = [], // массив для отслеживания нажатых кнокпок
    parentCard = document.querySelector('.catalog-card-order');

/*-----------------------------------------!!!!!!----------------------------------------*/
// при нажатии на кнопку добавляется товар
var addCardsInOrderHandler = function(element, evt) {
  element.addEventListener('click', function(evt) {

    evt.preventDefault();
    var index = buttonsIndex.indexOf(evt.target), //показывает индекс карточки и её нажатой кнопки
    numberAddCard = countAddCards.indexOf(index); // показывает порядок добавления элементов

    if (numberAddCard == -1) {
      countAddCards.push(index); // добавляется в массив использованных кнопок
      parentCard.appendChild(createСardsOrder(goodsOrder[index], 1));
    } else {
        incCountGoods(index, numberAddCard);
    }

    // кнопки увеличить и уменьшить
    var addedCard = document.querySelectorAll('.card-order');
    numberAddCard = countAddCards.indexOf(index);

    addedCard[numberAddCard].addEventListener("click", function (evt) {
      if (evt.target.classList.contains("card-order__btn--increase")) {
        incCountGoods(index, numberAddCard);
      }

      if (evt.target.classList.contains("card-order__btn--decrease")) {
        decCountGoods(index, numberAddCard);
      }
      /*пробовала убрать блок с увеличением и уменьшением кол товаров из обработчика addCardsInOrderHandler, но тогда будет писаться ошибка,
      что невозможно найти addedCard, так как карточка появляется после нажатия на кнопку добавить, а поиск переменной
      происходит раньше */
    });
  });
};

function incCountGoods(index, numberAddCard) {
  var countGoods = document.querySelectorAll('.card-order__count'),
  priceGoods = document.querySelectorAll('.card-order__price'),
  valueCountGoods = Number(countGoods[numberAddCard].value);

  if (goodsOrder[index].amount > valueCountGoods) {
    valueCountGoods += 1;
    priceGoods[numberAddCard].textContent = goodsOrder[index].price * valueCountGoods;
  }

  return countGoods[numberAddCard].value = valueCountGoods;
}

function decCountGoods(index, numberAddCard) {
  var addedCard = document.querySelectorAll('.card-order'),
  countGoods = document.querySelectorAll('.card-order__count'),
  priceGoods = document.querySelectorAll('.card-order__price'),
  valueCountGoods = Number(countGoods[numberAddCard].value);

  valueCountGoods -= 1;
  priceGoods[numberAddCard].textContent = goodsOrder[index].price * valueCountGoods;

  return countGoods[numberAddCard].value = valueCountGoods;
}

var buttonsIndex = []; // массив для отслеживания индекса нажатой кнопки
for (var i = 0; i <= cardButton.length-1; i++) {
  addCardsInOrderHandler(cardButton[i]);
  buttonsIndex.push(cardButton[i]);
}