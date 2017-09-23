window.onload = function() {

  // Создаем объект XMLHttpRequest, при помощи которого будем отправлять запрос
  var req = new XMLHttpRequest();
  var translate = document.querySelector('.translate');
  var inputWord = document.querySelector('#wordInput')
  var langSelect = document.querySelector('#langSelect');
  var translateBtn = document.querySelector('.translate-btn');
  var errorsObj = {
    noWord: 'Не верно введено слово, повторите попытку',
    incorrectApiKey: 'Ваш API KEY не был получен!',
    noLang: 'Не верно введен язык перевода!',
    noTranslate: 'К сожалению, перевод для данного слова не найден',
    serverError: 'Произошла ошибка при получении ответа от сервера'
  };
  var apiKeysObj = {
    key: '?key=',
    text: '&text=',
    lang: '&lang=',
    option: '&options='
  };
  var loadingText = 'Загрузка...';
  var brElem = '<br>';

  // Сохраняем ключ API, полученный со страницы https://tech.yandex.ru/keys/get/?service=trnsl
  // (с примером ниже работать не будет, нужно получить и вставить свой!)
  var API_KEY = 'trnsl.1.1.20170912T074217Z.1383365bee5772f8.e9b4fc75eafdb68c36174a45b35dba2191487a10';

  translateBtn.addEventListener('click', function(e) {
    var userWord = '';
    
    if (inputWord.value) {
      userWord = inputWord.value;  
    }
    
    var userLang = langSelect.value;
    // Сохраняем адрес API
    var url = 'https://translate.yandex.net/api/v1.5/tr.json/translate';
    
    var isApiKeyExist = (API_KEY !== undefined && API_KEY.length !== 0);
    var isUserWordExist = (userWord !== undefined && userWord !== null && userWord.length > 0);
    
    // Формируем полный адрес запроса:
    if (!isApiKeyExist) {
      console.error(errorsObj.incorrectApiKey);
      updateView(translate, errorsObj.incorrectApiKey);
    }
    
    url += apiKeysObj.key + API_KEY; // добавляем к запросу ключ API 
    
    if (!isUserWordExist) {
      console.error(errorsObj.noWord);
      updateView(translate, errorsObj.noWord);
    }
  
    url += apiKeysObj.text + userWord; // текст для перевода
    
    if (!userLang) {
      console.error(errorsObj.noLang);
      updateView(translate, errorsObj.noLang);
    }
    
    url += apiKeysObj.lang + userLang; // направление перевода: с русского на английский
    
    // url += apiKeysObj.option + '1';
    // Таким образом формируется строка вида:
    // https://translate.yandex.net/api/v1.5/tr.json/translate?key=example_api_key&text=кролики&lang=ru-en
  
    // Назначаем обработчик события load
    req.addEventListener('load', function () {
      // console.info(req.response); // отображаем в консоли текст ответа сервера
      var response = JSON.parse(req.response); // парсим его из JSON-строки в JavaScript-объект
      var isTranslateNotFound = '';
      var resultText = '';
      
      updateView(translate, loadingText);
      
      if (response &&  response.text) {
         isTranslateNotFound = response.text.length === 0;
      }
      
      // Проверяем статус-код, который прислал сервер
      // 200 — это ОК, остальные — ошибка или что-то другое
      if (response.code !== 200) {
        translate.innerHTML = errorsObj.serverError + '\n\n' + response.message;
        return;
      }
  
      // Проверяем, найден ли перевод для данного слова
      if (isTranslateNotFound) {
        updateView(translate, errorsObj.noTranslate)
        return;
      }
      
      resultText = response.text.join(brElem);
      // Если все в порядке, то отображаем перевод на странице
      updateView(translate, resultText);// вставляем его на страницу
    });
    
    function updateView(obj, text) {
      if (text && obj) {
        obj.innerHTML = text; 
      }
    }
    // Обработчик готов, можно отправлять запрос
    // Открываем соединение и отправляем
    req.open('get', url);
    req.send();
  });
}

 <div>
   <label for="wordInput">Введите слово</label>
   <input id="wordInput" type="text" placeholder="Введите слово">
 </div>
 <div>Выберите язык:</div>
  <div>
    <select name="lang" id="langSelect">
      <option value="ru-en" selected>ru-en</option>
      <option value="en-ru">en-ru</option>
    </select>
  </div>
  
  <button class="translate-btn">Перевести</button>
  
  <p class="translate-label">Ваш перевод:</p>
  <div class="translate"></div>
  
  @import 'https://fonts.googleapis.com/css?family=Ubuntu:400,500&subset=latin,cyrillic';

html, body {
  width: 100%; height: 100%;
}
body {
  color: #101820;
  font-family: 'Helvetica', serif; font-size: 22px;font-weight: normal;
  background: #fff;
}
.translate {
  display: block;
  font-size: 24px;
  line-height: 32px;
  color: rgb(242, 203, 51);
}
