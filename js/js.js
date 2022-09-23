//task1
function validFunc() {
    //валідність ПІБ
    const reName = /([А-Яа-яёЁЇїІіЄєҐґ]) ([А-Яа-яёЁЇїІіЄєҐґ]{0,1})\.([А-Яа-яёЁЇїІіЄєҐґ]{0,1})\./;
    const name = document.getElementById("name").value;
    const validName =  reName.test(name);
    if(validName) {
        document.getElementById("name").style.border='solid green'
        document.getElementById('nameValid').innerHTML =`ПІБ: ${name}`;
    } else {
        document.getElementById("name").style.border='solid red'
        document.getElementById('nameValid').innerHTML = "Невірне ПІБ"
    }

     //валідність дати народження
     const reDate = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/;
     const date = document.getElementById("date").value;
     const validDate =  reDate .test(date);
     if(validDate) {
         document.getElementById("date").style.border='solid green'
         document.getElementById('dateValid').innerHTML = `Дата народження: ${date}`;
     }else{
         document.getElementById("date").style.border='solid red'
         document.getElementById('dateValid').innerHTML = "Невірна дата народження"
     }

     //валідність адресу
    const reAdress = /м.([А-Яа-яёЁЇїІіЄєҐґ]{1,15})/;
    const adress = document.getElementById('adress').value;
    const validAdress =  reAdress.test(adress);
    if (validAdress){
        document.getElementById("adress").style.border='solid green'
        document.getElementById('adressValid').innerHTML =`Адреса: ${adress}`;
    }
    else {
        document.getElementById("adress").style.border='solid red'
        document.getElementById('adressValid').innerHTML = "Невірна адреса"
    }

    //валідність пошти
const reEmail = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
const email = document.getElementById('email').value;
const validEmail = reEmail.test(email);
if (validEmail){
    document.getElementById("email").style.border='solid green'
    document.getElementById('emailValid').innerHTML = `Пошта: ${email}`;
}else {
    document.getElementById("email").style.border='solid red'
    document.getElementById('emailValid').innerHTML = "Невалідний адрес пошти";
}

    //валідність телеграму
    const reTeleg = /@([A-Za-z0-9_]{1,15})/;
    const teleg = document.getElementById("teleg").value;
    const validTeleg =  reTeleg.test(teleg);
    if(validTeleg) {
        document.getElementById("teleg").style.border='solid green'
        document.getElementById('telegValid').innerHTML = `Телеграм: ${teleg}`;
    }else{
        document.getElementById("teleg").style.border='solid red'
        document.getElementById('telegValid').innerHTML = "Невірний телеграм"
    }

}

//task2

const first = document.getElementById('sixth');
const colorInput = document.getElementById('colorInput');

//зміна рядка на рандомний колір при наведенні на першку клітинку
function getRandom(min, max){
  return Math.ceil(Math.random() * (max - min) + min);
};
 
first.addEventListener("mouseover", function() {
    sixth.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`;
});

first.addEventListener("click", function() {
    sixth.style.backgroundColor= colorInput.value;
});

//зміна коліра на обраний при кліці на першу клітинку
first.addEventListener("dblclick", function() {
    document.getElementById('fourth').style.backgroundColor = colorInput.value;
    document.getElementById('fifth').style.backgroundColor = colorInput.value;
    document.getElementById('sixth').style.backgroundColor = colorInput.value;
    document.getElementById('tenth').style.backgroundColor = colorInput.value;
    document.getElementById('eleventh').style.backgroundColor = colorInput.value;
    document.getElementById('twelfth').style.backgroundColor = colorInput.value;
});
