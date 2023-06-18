const option1DocumentElement = document.getElementById('option-1');
const option2DocumentElement = document.getElementById('option-2');
const option3DocumentElement = document.getElementById('option-3');

let currentlySelectedElement;

const removeSelectedClassFromAllOptions = () => {
  option1DocumentElement.classList.remove('selected');
  option2DocumentElement.classList.remove('selected');
  option3DocumentElement.classList.remove('selected');
};

const setOptionAsActive = (option) => {
  removeSelectedClassFromAllOptions();
  currentlySelectedElement = option;
  option.classList.add('selected');
};

const logSelectedElement = () => {
  console.log('selected element', currentlySelectedElement);
};

option1DocumentElement.addEventListener('click', () => {
  setOptionAsActive(option1DocumentElement);
  logSelectedElement();
});

option2DocumentElement.addEventListener('click', () => {
  setOptionAsActive(option2DocumentElement);
  logSelectedElement();
});

option3DocumentElement.addEventListener('click', () => {
  setOptionAsActive(option3DocumentElement);
  logSelectedElement();
});
