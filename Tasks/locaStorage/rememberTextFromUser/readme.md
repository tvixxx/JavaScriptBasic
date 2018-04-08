## Разработайте простой текстовый редактор с возможностью сохранения контента в LocalStorage.

### Страница должна состоять из:
- Блока с текстом
- Кнопки «Редактировать»
- Кнопок «Сохранить» и «Отмена» (по умолчанию неактивных — disabled)

#### Механика работы страницы:
- При первой загрузке страницы в блоке с текстом отображается текст по умолчанию (любой)
- При нажатии на кнопку «Редактировать» блок с текстом становится редактируемым (contenteditable=true), кнопки «Сохранить» и «Отмена» становятся активными, а сама кнопка «Редактировать» — неактивной.  
- При нажатии на кнопку «Сохранить» содержимое блока с текстом сохраняется в LocalStorage, а режим редактирования отключается (кнопки возвращаются в исходное состояние)  
- При нажатии на кнопку «Отмена» содержимое блока с текстом заменяется на последний сохраненный вариант изLocalStorage, режим редактирования отключается  
- При следующих перезагрузках страницы содержимое блока с текстом автоматически подтягивается из LocalStorage (последний сохраненный вариант)  