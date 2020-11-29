
import './email-for-bulk';
import './Bulk-Modal';
window.addEventListener("load", function () {

let emailFormTwo = document.querySelector("#emailFormTwo");
let input = document.querySelector("#inputEmail");
if(emailFormTwo!==null){
emailFormTwo.addEventListener('submit',(e)=>{
        e.preventDefault();
        const allEmails = input.value;
let array = allEmails.split(/(\s+)/).filter( function(e) { return e.trim().length > 0; } );

let bulkDiv = document.getElementById('bulkDiv');
bulkDiv.textContent = '';

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




