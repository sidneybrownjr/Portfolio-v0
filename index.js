window.onload = () => {
  const mouseEvent = document.getElementById('header');

  // hi & low hold the DOM changes for the event listeners
  // added once opacity is lowered/raised
  function hiOpacity() {
    document.getElementById('header').style.opacity = '0.95';
  }

  function lowOpacity() {
    document.getElementById('header').style.opacity = '0.4';
  }

  // once the page is scrolled a certain # of pixels, the opacity is lowered
  function scrollFunction() {
    if (
      document.body.scrollTop > 70 ||
      document.documentElement.scrollTop > 70
    ) {
      document.getElementById('header').style.opacity = '0.4';

      mouseEvent.addEventListener('mouseenter', hiOpacity);
      mouseEvent.addEventListener('mouseleave', lowOpacity);
    } else {
      document.getElementById('header').style.opacity = '1';

      mouseEvent.removeEventListener('mouseenter', hiOpacity);
      mouseEvent.removeEventListener('mouseleave', lowOpacity);
    }
  }

  // function is called everytime the page is scrolled
  window.onscroll = () => {
    scrollFunction();
  };

  const toggleSwitch = document.querySelector(
    '.theme-switch input[type="checkbox"]'
  );
  const currentTheme = localStorage.getItem('theme');

  if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
      toggleSwitch.checked = true;
    }
  }

  function switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }

  toggleSwitch.addEventListener('change', switchTheme, false);
};
