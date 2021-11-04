const res = document.querySelector('.resHeader');
const bars = document.querySelector('.ham');


bars.addEventListener('click', () => {
    if (res.classList.contains('hide')) {
        res.classList.remove('hide')
    } else {
        res.classList.add('hide')
    }
});
