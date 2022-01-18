// red-line

function clear() {
  let out = '';
  let elem = document.querySelectorAll('.experience-menu-text-item');
  for (let i = 0; i < elem.length; i++) {
    out += elem[i].style.borderRight = '4px solid #E6E6F0';
  }
}

function borderNone() {
  let mediaSize = window.screen.width;
  let elem = document.querySelectorAll('.experience-menu-text-item');
  let out = '';
  if (mediaSize < 1023) {
    for (let i = 0; i < elem.length; i++) {
      out += elem[i].style.borderRight = 'none';
    }
  }
  return out;
}

borderNone();

document.querySelector('.b-1').addEventListener('click', function () {
  clear();
  document.querySelector('.exp-1').style.borderRight = '4px solid #F0145A';
  borderNone()
});

document.querySelector('.b-2').addEventListener('click', function () {
  clear();
  document.querySelector('.exp-2').style.borderColor = '#F0145A';
  borderNone()
});

document.querySelector('.b-3').addEventListener('click', function () {
  clear();
  document.querySelector('.exp-3').style.borderRight = '4px solid #F0145A';
  borderNone()
});

document.querySelector('.b-4').addEventListener('click', function () {
  clear();
  document.querySelector('.exp-4').style.borderRight = '4px solid #F0145A';
  borderNone()
});



