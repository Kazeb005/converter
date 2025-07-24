
// changing the active button


const activeClasses = 'px-4 py-2 w-30 text-white rounded-md bg-gradient-to-r from-blue-700 to-violet-700';
const chosNav = document.querySelectorAll('.navbtn');

const content = document.querySelectorAll('.content');

chosNav.forEach(nav => {
  nav.addEventListener('click', () => {
    chosNav.forEach(otherBtn => otherBtn.className = 'navbtn');
    nav.className = `navbtn ${activeClasses}`;

    content.forEach(cont => cont.classList.add('hidden'));


    const targetId = nav.getAttribute('data-target');
    const targetContent = document.getElementById(targetId);
    
      if (targetContent) {
      targetContent.classList.remove('hidden');
      }

    
  });
});
