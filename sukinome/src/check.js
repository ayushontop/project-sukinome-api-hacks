import Email from './email';
import Button from './btn';

window.addEventListener("load", function () {
    let input = document.querySelector('#inputEmail');
    let btn = document.querySelector('.btn');

    btn.addEventListener('click', function () {
        const email = input.value;
        const api = `https://disposable.debounce.io/?email=${email}`;
        console.log(api);

        fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                
                const answer = data.disposable;
                console.log(answer);

                if(answer === 'true'){
                    alert("This is disposable Email!");
                }
                else{
                    alert("This is not disposable Email!");
                }
            });

    });
});
