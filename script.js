var start=0;
var end=0;
function getSelectValue() {
    var selectedValue = document.getElementById("education").value;
    console.log(selectedValue);
    if (selectedValue=="Undergraduate") {
        start=100*1.5;
        console.log(start);
    }
    else if (selectedValue=="College") {
        start=100*1.2;
        console.log(start);
    }
    else if (selectedValue=="High") {
        start=100*1.05;
        console.log(start);
    }
    else if (selectedValue=="Middle") {
        start=100*0.9;
        console.log(start);
    }
}

function getSelectValue2() {
    var selectedValue = document.getElementById("networth").value;
    console.log(selectedValue);
    if (selectedValue=="Ten") {
        end=start*2;
        console.log(end);
    }
    else if (selectedValue=="fiveten") {
        end=start*1.5
        console.log(end);
    }
    else if (selectedValue=="lessfive") {
        end=start*1.2;
        console.log(end);
    }
}

var end2=0;
function getSelectValue3() {
    var selectedValue = document.getElementById("caste").value;
    console.log(selectedValue);
    if (selectedValue=="Brahmin") {
        end2=end+100;
        console.log(end2);
    }
    else if (selectedValue=="Kshatriya") {
        end2=end+50;
        console.log(end2);
    }
    else if (selectedValue=="Vaishya") {
        end2=end+20;
        console.log(end2);
    }
    else if (selectedValue=="Shudra") {
        end2=end+10;
        console.log(end2);
    }
    else if (selectedValue=="Varna") {
        end2=end-50;
        console.log(end2);
    }
}
document.querySelector('.first').addEventListener('click', ()=> {
    let data=document.querySelector('.first').value;
    if (document.querySelector('.first').checked) {
        console.log(document.querySelector('.first').innerHTML=data);
        end2=end2+10;
        console.log(end2);
    } 
    else {
        console.log(document.querySelector('.first').innerHTML='off');
        end2=end2-10;
        console.log(end2);
    }
})

document.querySelector('.second').addEventListener('click', ()=> {
    let data=document.querySelector('.second').value;
    if (document.querySelector('.second').checked) {
        console.log(document.querySelector('.second').innerHTML=data);
        end2=end2+20;
        console.log(end2);
    } 
    else {
        console.log(document.querySelector('.second').innerHTML='off');
        end2=end2-20;
        console.log(end2);
    }
})

document.querySelector('.third').addEventListener('click', ()=> {
    let data=document.querySelector('.third').value;
    if (document.querySelector('.third').checked) {
        console.log(document.querySelector('.third').innerHTML=data);
        end2=end2+15;
        console.log(end2);
    } 
    else {
        console.log(document.querySelector('.third').innerHTML='off');
        end2=end2-15;
        console.log(end2);
    }
})

document.querySelector('.forth').addEventListener('click', ()=> {
    let data=document.querySelector('.forth').value;
    if (document.querySelector('.forth').checked) {
        console.log(document.querySelector('.forth').innerHTML=data);
        end2=end2+10;
        console.log(end2);
    } 
    else {
        console.log(document.querySelector('.forth').innerHTML='off');
        end2=end2-10;
        console.log(end2);
    }
})
var end3=0;
document.querySelector('.radio').addEventListener('click', ()=> {
    let data=document.querySelector('.radio').value;
    if (document.querySelector('.radio').checked) {
        console.log(document.querySelector('.radio').innerHTML=data);
        end3=end2*1.5;
        console.log(end3);
    } 
})
document.querySelector('.radio2').addEventListener('click', ()=> {
    let data=document.querySelector('.radio2').value;
    if (document.querySelector('.radio2').checked) {
        console.log(document.querySelector('.radio2').innerHTML=data);
        end3=end2*1.2;
        console.log(end3);
    } 
})
document.querySelector('.radio3').addEventListener('click', ()=> {
    let data=document.querySelector('.radio3').value;
    if (document.querySelector('.radio3').checked) {
        console.log(document.querySelector('.radio3').innerHTML=data);
        end3=end2*0.95;
        console.log(end3);
    } 
})

document.querySelector('.first1').addEventListener('click', ()=> {
    let data=document.querySelector('.first1').value;
    if (document.querySelector('.first1').checked) {
        console.log(document.querySelector('.first1').innerHTML=data);
        end3=end3*0.85;
        console.log(end3);
    } 
    else {
        console.log(document.querySelector('.first1').innerHTML='off');
        end3=end3/0.85;
        console.log(end3);
    }
})

document.querySelector('.second2').addEventListener('click', ()=> {
    let data=document.querySelector('.second2').value;
    if (document.querySelector('.second2').checked) {
        console.log(document.querySelector('.second2').innerHTML=data);
        end3=end3*0.9;
        console.log(end3);
    } 
    else {
        console.log(document.querySelector('.second2').innerHTML='off');
        end3=end3/0.9;
        console.log(end3);
    }
})

document.querySelector('.third3').addEventListener('click', ()=> {
    let data=document.querySelector('.third3').value;
    if (document.querySelector('.third3').checked) {
        console.log(document.querySelector('.third3').innerHTML=data);
        end3=end3-20;
        console.log(end3);
    } 
    else {
        console.log(document.querySelector('.third3').innerHTML='off');
        end3=end3+20;
        console.log(end3);
    }
})

document.querySelector('.button').addEventListener('click', ()=> {
    document.querySelector('.out-1').innerHTML=end3+'$';
})





