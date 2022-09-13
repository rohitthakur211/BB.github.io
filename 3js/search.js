// search bar 

const searchInput1 = document.querySelector('.search-box1');
const searchBtn1 = document.querySelector('.search1');
let searchLink1 = "https://www.amazon.in/s?k=";

searchBtn1.addEventListener('click', () => {
    if (searchInput1.value.length) {
        location.href = searchLink1 + searchInput1.value;
    }
})