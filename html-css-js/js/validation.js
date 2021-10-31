/*
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    AKAI Frontend Task - Javascript

    W tym zadaniu postaraj się zaimplementować metody, które sprawdzą, czy dane wprowadzone
    do formularza są poprawne. Przykładowo: czy imię i nazwisko zostało wprowadzone.
    Możesz rozwinąć walidację danych tak bardzo, jak tylko zapragniesz.

    Powodzenia!
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

const $form = document.querySelector('form');
const $recruitName = document.querySelector('#first-name');
const $recruitSurrname = document.querySelector('#last-name');
const $recruitEmail = document.querySelector('#email');
const $checkboxes = document.querySelectorAll('.checkbox-grid input[type="checkbox"]');
let $result = "";
let $errResult = "";

const checkBoxes = () => {
    let checkedArr = [];
    let i=0;
    $checkboxes.forEach((el)=>{
        if(el.checked){
            checkedArr[i] = el;
            i+=1;
        }
    });
    if(checkedArr.length!==0){
        return checkedArr;
    }
}

const checkField = (el) =>{
    if(el.target.value.length == 0){
        el.target.style.border = "inset 1px red";
        el.target.nextElementSibling.classList.remove('hidden');
        el.target.style.marginBottom = '0px';
    }
    else{
        el.target.style.border = "none";
        el.target.nextElementSibling.classList.add('hidden');
        el.target.style.marginBottom = '10px';
    }
}

const checkEmail = () =>{
    const regex = /[a-z]{3,}@[a-z0-9]{2,}\.[\.a-z]{2,}/;
    if($recruitEmail.value.length!=0){
        if(!regex.test($recruitEmail.value)){
            $recruitEmail.style.border = "inset 1px red";
            document.querySelector('.email-error').classList.remove('hidden');
            $recruitEmail.style.marginBottom = '0px';
        }
        else{
            $recruitEmail.style.border = "none";
            document.querySelector('.email-error').classList.add('hidden');
            $recruitEmail.style.marginBottom = '10px';
        }
    }
}

$recruitName.addEventListener('focusout', checkField);
$recruitSurrname.addEventListener('focusout', checkField);
$recruitEmail.addEventListener('focusout', checkField);
$recruitEmail.addEventListener('focusout', checkEmail);

$form.addEventListener('submit', function (){
    event.preventDefault();
    let boxes = checkBoxes();
    if(!boxes){
        document.querySelector('.checkboxes .error').classList.remove('hidden');
        return;  
    }
    else{
        document.querySelector('.checkboxes .error').classList.add('hidden'); 
    }
    if($recruitEmail.value==""||$recruitName.value==""||$recruitSurrname==""){
        alert('uzupełnij pola tekstowe!');
        return;
    }
    if(!document.querySelector('.email-error').classList.contains('hidden')){
        return;
    }
    alert('przeszło!');
    $form.submit();
});