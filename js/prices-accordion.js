const btnAccourdion = document.querySelector('.accourdion-btn');

function handleAccourdion (){
    const pricesAccourdion = document.querySelector('.prices__accourdion');
    const pricesItem = document.querySelector('.prices__item')

    pricesAccourdion.classList.toggle('prices__accourdion-active');     
    pricesItem.classList.toggle('prices__item-active')
}

btnAccourdion.addEventListener('click', handleAccourdion);