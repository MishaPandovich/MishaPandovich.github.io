ymaps.ready(function(){var e=new ymaps.Map("map",{center:[59.938949,30.315155],zoom:16},{searchControlProvider:"yandex#search"}),t=ymaps.templateLayoutFactory.createClass('<div style="color: #000000; font-weight: bold;">$[properties.iconContent]</div>'),n=new ymaps.Placemark([59.938631,30.323055],{hintContent:"ул. Большая Конюшенная, д 19/8",balloonContent:"Чтобы посмотреть более подробный маршрут,<br> нажмите ссылку «Как добраться» в левом нижнем углу карты"},{iconLayout:"default#imageWithContent",iconImageHref:"img/pin-map.png",iconImageSize:[45,45],iconImageOffset:[-20,-45],iconContentOffset:[15,15],iconContentLayout:t});e.geoObjects.add(n)});