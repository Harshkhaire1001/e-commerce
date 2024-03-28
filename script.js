const bar=document.getElementById('bar');
const nav=document.getElementById('navbar');
const cle=document.getElementById('close');


bar.addEventListener('click',()=>{
    nav.classList.add('active');
});


cle.addEventListener('click',()=>{
    nav.classList.remove('active');
});

