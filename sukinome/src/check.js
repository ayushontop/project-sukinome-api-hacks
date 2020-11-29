import Email from './email';

window.addEventListener("load", function () {
    let input = document.querySelector("#inputEmail");
    
    let emailForm = document.querySelector("#emailForm");
    console.log('hello');
    emailForm.addEventListener('submit',(e)=>{
        e.preventDefault();
        const email = input.value;

        const api = `https://disposable.debounce.io/?email=${email}`;
        console.log(api);
        let modal = document.querySelector('.modal');
        let modalTextContent = document.getElementById('alert-content');
        fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                
                const answer = data.disposable;
                console.log(answer);

                if(answer === 'true'){
                    modalTextContent.textContent = 'This is a disposable Email';
                    modal.classList.add('is-active');
                }
                else{
                    modal.classList.add('is-active');
                    modalTextContent.textContent = 'This is not a disposable Email';
                }
            });
    })
    
    let modalCloseBtn = document.getElementById('modalCloseBtn');
    modalCloseBtn.addEventListener('click',(e)=>{
        let modal = document.querySelector('.modal');
        modal.classList.remove('is-active');
    });
});
