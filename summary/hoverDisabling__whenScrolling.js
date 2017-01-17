/**
 * Created by DEPyTAT on 18.01.2017.
 */
//  .disable-hover {
//      pointer-events: none;
//  }

//Просто добавляем этот класс к нашему body по началу скрола, и все – мышь «пролетает»!

var body = document.body,
    timer;

window.addEventListener('scroll', function() {
    clearTimeout(timer);
    if(!body.classList.contains('disable-hover')) {
        body.classList.add('disable-hover')
    }

    timer = setTimeout(function(){
        body.classList.remove('disable-hover')
    },500);
}, false);

//   Код, как видите, довольно простой. Вешаем обработчик на событие скрола, в котором сперва сбрасываем предыдущий таймер, проверяем наличие класса на нашем body, и, если его нет – добавляем. Затем просто добавляем новый таймер, который, через пол секунды после окончания скрола, сбросит наш класс. Все!
//
//    Почти
//
//   Если где-то в странице будут элементы со стилем pointer-events: auto, они перетрут глобальный класс, и будут все еще тормозить. Мы же не хотим этого, верно?
//
//  .disable-hover,
//  .disable-hover * {
//      pointer-events: none !important;
//  }
//
//  Как вы догадались, решение, так же, простое. Супер-селектором * с флагом !important мы научим наши элементы вести себя хорошо.