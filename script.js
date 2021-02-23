const body      = document.querySelector('BODY');
const main      = document.querySelector('MAIN');
const navbar    = document.querySelector('#primary-navbar');
const navicon   = navbar.querySelector('#navicon');
const menuBrand = navbar.querySelector('.navbar-collapse .navbar-brand');




function throttle(func, timeFrame){
  var lastTime = 0;
  return (
    function(){
      var now = new Date();
      if (now - lastTime >= timeFrame){
        func();
        lastTime = now;
      }
    }
  );
}




function removeTransitionsOnResize(element){
  element = element || document.getElementsByTagName('BODY')[0];
  element.classList.add('transition-none');
  setTimeout(function(){ element.classList.remove('transition-none'); }, 500);
}
const throttled_removeTransitionsOnResize = throttle(removeTransitionsOnResize, 500);




function toggleNavigation(){
  if (body.classList.contains('nav-open')){
    body.classList.remove("nav-open");
    setTimeout(function(){ if (menuBrand){ menuBrand.classList.remove('show'); }}, 250); // 250ms mirrors the CSS transition time.
  } else {
    body.classList.add("nav-open");
    menuBrand.classList.add('show');
  }
}




function closeNavigation(){
  if (body.classList.contains('nav-open')){
    body.classList.remove("nav-open");
    setTimeout(function(){ if (menuBrand){ menuBrand.classList.remove('show'); }}, 250); // 250ms mirrors the CSS transition time.
  }
}


/* =============================================================================
                            initialization
============================================================================= */


setTimeout(function(){
  console.log("CSS class '.transition-none' removed from body element.");
  document.body.classList.remove('transition-none');
}, 500);


main.addEventListener('click',    closeNavigation);
navicon.addEventListener("click", toggleNavigation);
window.onresize = function(){ throttled_removeTransitionsOnResize(); }
