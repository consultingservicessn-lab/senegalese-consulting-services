const menu=document.querySelector('.menu');
const nav=document.querySelector('.nav');
if(menu&&nav){
  const setOpen=(open)=>{nav.classList.toggle('open',open);menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?(document.documentElement.lang==='en'?'Close menu':'Fermer le menu'):(document.documentElement.lang==='en'?'Open menu':'Ouvrir le menu'));};
  menu.addEventListener('click',()=>setOpen(menu.getAttribute('aria-expanded')!=='true'));
  nav.addEventListener('click',(event)=>{if(event.target.closest('a'))setOpen(false);});
  document.addEventListener('keydown',(event)=>{if(event.key==='Escape'&&menu.getAttribute('aria-expanded')==='true'){setOpen(false);menu.focus();}});
  window.addEventListener('resize',()=>{if(window.innerWidth>1020)setOpen(false);});
}
const year=document.querySelector('#year');if(year)year.textContent=new Date().getFullYear();
