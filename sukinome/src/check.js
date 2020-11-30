

window.addEventListener("load", function () {
    let input = document.querySelector("#inputEmail");
    
    let emailForm = document.querySelector("#emailForm");
    console.log('hello');
    if(emailForm!==null){
    emailForm.addEventListener('submit',(e)=>{

        e.preventDefault();
        
        const email = input.value;

        const api = `https://disposable.debounce.io/?email=${email}`;
        
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
                    modalTextContent.textContent = 'This is a Temporary Email (You will not be able to use this Email)';
                    let tag = document.createElement('p');
                    tag.textContent = 'Bad';
                    tag.classList.add('tag');
                    tag.classList.add('ml-3');
                    tag.classList.add('is-danger');
                    modalTextContent.appendChild(tag);
                    modal.classList.add('is-active');
                }
                else if(answer ==='false'){
                    
                    modalTextContent.textContent = 'This is not a Temporary Email (You can use this Email)';
                    let tag = document.createElement('p');
                    tag.textContent = 'Good';
                    tag.classList.add('tag');
                    tag.classList.add('ml-3');
                    tag.classList.add('is-success');
                    modalTextContent.appendChild(tag);
                    modal.classList.add('is-active');
                }
            });
    })

}
    

    let modalCloseBtn = document.getElementById('modalCloseBtn');
    if(modalCloseBtn!==null){
    modalCloseBtn.addEventListener('click',(e)=>{
        let modal = document.querySelector('.modal');
        modal.classList.remove('is-active');
    });
}
});
