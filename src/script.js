

const chosNav = document.querySelectorAll('.navbtn');

  chosNav.forEach(nav => {
    nav.addEventListener('click', () => {
      chosNav.forEach(chosB => chosB.classList.remove('')); // Remove active from all
      nav.classList.add('bg-blue-500'); // Add active to clicked
    });
  });