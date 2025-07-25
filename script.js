
// changing the active button


const activeClasses = 'px-3 py-1.5 w-38 text-white rounded-md bg-gradient-to-r from-blue-700 to-violet-700';
const chosNav = document.querySelectorAll('.navbtn');

const content = document.querySelectorAll('.content');

chosNav.forEach(nav => {
  nav.addEventListener('click', () => {
    chosNav.forEach(otherBtn => otherBtn.className = 'navbtn px-3 py-1.5 w-38');
    nav.className = `navbtn ${activeClasses}`;

    content.forEach(cont => cont.classList.add('hidden'));


    const targetId = nav.getAttribute('data-target');
    const targetContent = document.getElementById(targetId);

    if (targetContent) {
      targetContent.classList.remove('hidden');
    }


  });
});


const fromValue = document.getElementById('fromValue');
const fromUnit = document.getElementById('fromUnit');
const toUnit = document.getElementById('toUnit');
const toValue = document.getElementById('toValue');


class Converter {
  constructor() {
    this.factors = {
      length: {
        km: 1000,
        m: 1,
        cm: 0.01,
        mi: 1609.34,
        ft: 0.3048,
        in: 0.0254
      },
      weight: {
        kg: 1,
        g: 0.001,
        lb: 0.453592,
        oz: 0.0283495
      },
      time: {
        day: 86400,
        hr: 3600,
        min: 60,
        sec: 1
      }
    };
  }
}



convertTemperature = (value, from, to) => {
  let celsius;
  switch (from) {
    case 'C': celsius = value; break;
    case 'F': celsius = (value - 32) * 5 / 9; break;
    case 'K': celsius = value - 273.15; break;
    default: return null;
  }

  switch (to) {
    case 'C': return celsius;
    case 'F': return (celsius * 9 / 5) + 32;
    case 'K': return celsius + 273.15;
    default: return null;
  }
};


