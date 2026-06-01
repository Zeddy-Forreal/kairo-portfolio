const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cursor.style.left=mx+'px';cursor.style.top=my+'px';});
function animateRing(){rx+=(mx-rx)*0.12;ry+=(my-ry)*0.12;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(animateRing);}
animateRing();
document.querySelectorAll('a,button').forEach(el=>{
  el.addEventListener('mouseenter',()=>{cursor.style.width='6px';cursor.style.height='6px';ring.style.width='52px';ring.style.height='52px';});
  el.addEventListener('mouseleave',()=>{cursor.style.width='10px';cursor.style.height='10px';ring.style.width='36px';ring.style.height='36px';});
});
const nav = document.getElementById('mainNav');
window.addEventListener('scroll',()=>{nav.classList.toggle('scrolled',window.scrollY>60);});
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click',()=>{navLinks.classList.toggle('open');});
navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      entry.target.querySelectorAll('.skill-bar').forEach(bar=>{
        bar.style.width = bar.dataset.value + '%';
      });
    }
  });
},{threshold:0.15});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const skillObserver = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.querySelectorAll('.skill-bar').forEach(bar=>{
        setTimeout(()=>{bar.style.width = bar.dataset.value + '%';},200);
      });
    }
  });
},{threshold:0.3});
document.querySelectorAll('.skills-grid > div').forEach(el=>skillObserver.observe(el));