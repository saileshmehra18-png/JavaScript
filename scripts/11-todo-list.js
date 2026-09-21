const myArray = ['make dinner',
                'wash dishes ',
                'watch youtune'];

rendermyArray();

function rendermyArray(){
    let myArrayHTML = ''

    for (let i = 0; i<myArray.length; i++){
        const todo = myArray[i];
        const html = `<p>${todo}</p>`
        myArrayHTML += html
    }

    document.querySelector('.show-text').innerHTML=
    myArrayHTML;
    
}

function addArray() {
    const input = document.querySelector('.js-input');
    let text = input.value;

    myArray.push(text)
    console.log(myArray);

    input.value = '';
    rendermyArray();
}
