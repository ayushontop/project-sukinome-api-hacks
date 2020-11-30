
import './email-for-bulk';
import './Bulk-Modal';
window.addEventListener("load", function () {

let emailFormTwo = document.querySelector("#emailFormTwo");
let input = document.querySelector("#inputEmail");
if(emailFormTwo!==null){
emailFormTwo.addEventListener('submit',(e)=>{
        e.preventDefault();
        console.log('yes');
        const allEmails = input.value;
// let oldRe = /(\s+)/;
var re = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/g;
// let array = allEmails.split(oldRe).filter( function(e) { return e.trim().length > 0; } );
let array = allEmails.match(re);

let bulkDiv = document.getElementById('bulkDiv');
if(bulkDiv.textContent !== ''){
    bulkDiv.textContent = '';
}

async function temp(){
for(let i=0; i<array.length; i++ ){
	let api =  `https://disposable.debounce.io/?email=${array[i]}`;
  
 let response =  await fetch(api);
 let data = await response.json();
//  console.log(array[i] + data.disposable);

let element = document.createElement('button');
element.classList.add('button');
element.classList.add('m-3');
let tag = document.createElement('p');
element.textContent = array[i];

tag.classList.add('tag');
if(data.disposable==='true'){
tag.textContent = 'Temp';
tag.style.backgroundColor = '#dc3545';
tag.style.color = 'white';
}
else{
tag.textContent = 'Perma';
tag.classList.add('is-success');
}
tag.classList.add('ml-3');
element.appendChild(tag);

bulkDiv.appendChild(element);

            
}

}
temp();

})
}


})




