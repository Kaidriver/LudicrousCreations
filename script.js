const carousel = document.querySelector('.carousel');

function changeTable () {
  const id = carousel.Carousel.getActiveIndex();
  const th1 = document.querySelectorAll('td')[0];
  const th2 = document.querySelectorAll('td')[1];
  const buy = document.querySelector('#buy');
  if (id === 0) {
    th1.innerHTML = "2 <sup>7</sup>&frasl;<sub>8</sub> x 3 inches";
    th2.innerHTML = "4 <sup>3</sup>&frasl;<sub>4</sub> inches";
    buy.href = "https://www.etsy.com/listing/598164951/adjustable-easel-phone-stand-phone-stand?ref=shop_home_active_2&crt=1";
  }
  else {
    th1.innerHTML = "2 <sup>1</sup>&frasl;<sub>4</sub> x <sup>11</sup>&frasl;<sub>16</sub> inches";
    th2.innerHTML = "4 <sup>1</sup>&frasl;<sub>4</sub> inches";
    buy.href = "https://www.etsy.com/listing/589904283/high-heels-phone-stand-gift-for-her?ref=shop_home_active_7";
  }
}
carousel.addEventListener('slide.bs.carousel', changeTable);
