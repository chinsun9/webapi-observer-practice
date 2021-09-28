const targetElement = document.querySelector('.target');
const toggleButtonElement = document.querySelector('.toggleBtn');

toggleButtonElement.addEventListener('click', () => {
  targetElement.classList.toggle('hello');
});

const observer = new MutationObserver((mutationsList) => {
  mutationsList.forEach((item) => {
    console.log(item);
    if (item.target.classList.contains('hello')) console.log('hello!');
  });
});

observer.observe(targetElement, {
  attributes: true,
});
