window.addEventListener('load', function() {

  let description = document.querySelector('.js-description');
  let editButton = document.querySelector('.js-btn-edit');
  let saveButton = document.querySelector('.js-btn-save');
  let cancelButton = document.querySelector('.js-btn-cancel');
  const EDITABLE_CLASS = 'editable';
  let descriptionText = '';
  let defaultDescriptionText =
    `Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including version.`;

  if (isDescriptionExistInStorage()) {
    descriptionText = JSON.parse(localStorage.getItem('postDescription'));
    description.textContent = descriptionText.postDescription;
  }

  if (!isDescriptionExistInStorage()) {
    description.textContent = defaultDescriptionText;
  }

  editButton.addEventListener('click', editHandler);
  cancelButton.addEventListener('click', cancelHandler);
  saveButton.addEventListener('click', saveHandler);

  function editHandler() {
    setClass(description, EDITABLE_CLASS);
    setEditableModeOn();
    enableButtons(saveButton, cancelButton);
    disableButtons(editButton);
  }

  function cancelHandler() {
    if (isDescriptionExistInStorage()) {
      descriptionText = JSON.parse(localStorage.getItem('postDescription'));
      description.textContent = descriptionText.postDescription;
    }

    removeClass(description, EDITABLE_CLASS);
    disableButtons(saveButton, cancelButton);
    enableButtons(editButton);
    setEditableModeOff();
  }

  function saveHandler() {
    let obj = {
      postDescription: description.textContent
    };
    let stringifyObj = JSON.stringify(obj);

    if (obj.postDescription !== descriptionText.postDescription) {
      try {
        localStorage.setItem('postDescription', stringifyObj);
      } catch (e) {
        if (e == QUOTA_EXCEEDED_ERR) {
          alert('Превышен лимит допустимого хранилища!');
        }
      }
    }

    removeClass(description, EDITABLE_CLASS);
    disableButtons(saveButton, cancelButton);
    enableButtons(editButton);
    setEditableModeOff();
  }

  function setClass(elem, className) {
    elem.classList.add(className);
  }

  function removeClass(elem, className) {
    elem.classList.remove(className);
  }

  function setEditableModeOn() {
    description.setAttribute('contenteditable', 'true');
  }

  function setEditableModeOff() {
    description.setAttribute('contenteditable', 'false');
  }

  function disableButtons(...btns) {
    btns.forEach((item) => item.setAttribute('disabled', true));
  }

  function enableButtons(...btns) {
    btns.forEach((item) => item.removeAttribute('disabled'));
  }

  function isDescriptionExistInStorage() {
    let item = JSON.parse(localStorage.getItem('postDescription'));

    return item ? true : false;
  }
});
