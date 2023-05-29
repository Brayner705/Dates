const card = document.querySelector('.card');
const btn = document.getElementById('btn');
const title = document.getElementById('title');
const modal = document.querySelector('.modalContainer');
const cerrar = document.getElementById('cerrar');
const password = document.querySelector('.password');
const btnAcep = document.getElementById('aceptar');
const modalItem = document.querySelector('.modalItem');
const accounts = document.querySelector('.account');
const cerrarC = document.getElementById('cerrarC');
const p = document.querySelector('.p');

const text = document.createElement('H4');

btn.addEventListener('click', ()=>{
    modal.style.display = 'flex';
    text.textContent = '';
    password.value = '';
});

cerrar.addEventListener('click', ()=>{
    modal.style.display = 'none';
});

btnAcep.addEventListener('click', ()=>{
    let pass = 'Dani';
    
    if(password.value == pass){
        modal.style.display = 'none';
        password.value = '';
        card.classList.toggle('rotar');
        accounts.style.display = 'flex';
        btn.style.display = 'none';
        p.style.display = 'none';
    }else{
        text.textContent = 'Contraseña invalida';
        text.style.color = '#a02';
        modalItem.appendChild(text);
    }
});

cerrarC.addEventListener('click',()=>{
    card.classList.toggle('rotar');
    accounts.style.display = 'none';
    btn.style.display = 'block';
    p.style.display = 'block';
})