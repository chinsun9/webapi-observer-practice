const targetElement = document.querySelector('.target');
const toggleButtonElement = document.querySelector('.toggleBtn');
const countElement = document.querySelector('.count');

toggleButtonElement.addEventListener('click', () => {
  targetElement.classList.toggle('hello');
});

const observer = new MutationObserver((mutationsList) => {
  mutationsList.forEach((item) => {
    console.log(item);
    if (item.target.classList.contains('hello')) {
      console.log('hello!');
      const count = parseInt(countElement.innerHTML);
      countElement.innerHTML = count + 1;
    }
  });
});

observer.observe(targetElement, {
  attributes: true,
});
