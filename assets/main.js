// Menu mobile
document.addEventListener('click',function(e){
  var t=e.target.closest('[data-menu]');
  if(t){document.getElementById('navlinks').classList.toggle('open');}
  else if(!e.target.closest('#navlinks')){
    var n=document.getElementById('navlinks');
    if(n)n.classList.remove('open');
  }
});
// Ann\u00e9e du footer
document.addEventListener('DOMContentLoaded',function(){
  var y=document.getElementById('year');
  if(y)y.textContent=new Date().getFullYear();
});
