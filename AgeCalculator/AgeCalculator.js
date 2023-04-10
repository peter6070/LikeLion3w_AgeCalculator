let age = document.getElementById('age');
let result = document.getElementById('result');
let submit = document.getElementById('btn-submit');

const today = new Date();
function calculateAge(){
    let birth = new Date(age.value);
    let Age;
    if(today.getMonth() > birth.getMonth() || 
    (today.getMonth()==birth.getMonth() && today.getDate() >=birth.getDate())){
        Age = today.getFullYear() - birth.getFullYear();
    }
    else{
        Age = today.getFullYear() - birth.getFullYear() -1;
    }

    result.innerText = `만 나이 결과: ${Age}`;

    return Age;
}

submit.addEventListener('click', calculateAge);