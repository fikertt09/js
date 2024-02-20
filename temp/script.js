
document.getElementById('output').style.visibility='hidden';
document.getElementById('deginput').addEventListener('input',
 function(e){
    document.getElementById('output').style.visibility = 'visible';
    let degree = e.target.value;
    document.getElementById('froutput').innerHTML=1.8* degree + 32;
    document.getElementById('keloutput').innerHTML= 1* degree + 273;


})
