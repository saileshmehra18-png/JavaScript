const myArray = JSON.parse(localStorage.getItem('storage_list')) || [];

rendermyArray();

function rendermyArray(){
    let myArrayHTML = ''

    for (let i = 0; i<myArray.length; i++){
        const todoObject = myArray[i];
        const name = todoObject.name;
        const due = todoObject.date;
        
        const html=
            `<div>${name}</div>
             <div>${due}</div>
            <button class="delete-todo-button" onclick="
                myArray.splice(${i},1);
                localStorage.setItem('storage_list', JSON.stringify(myArray));
                rendermyArray();
            ">Delete</button>`
        myArrayHTML += html
    }

    document.querySelector('.js-show-text').innerHTML= myArrayHTML;
    
}

function addArray() {
    const input = document.querySelector('.js-input');

    const dateElement = document.querySelector('.js-date-input');
    
    let name = input.value;
    let date = dateElement.value;

    myArray.push({
        // text: text,
        //  date:date,
        name,
        date
        //both the ways are correct this is shortcut
        }
    )

    input.value = '';
    localStorage.setItem('storage_list', JSON.stringify(myArray));
    rendermyArray();
}
