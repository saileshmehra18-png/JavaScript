const myArray = JSON.parse(localStorage.getItem('storage_list')) || [];

rendermyArray();

function rendermyArray(){
    let myArrayHTML = ''
    
    myArray.forEach(function(todoObject,index){
        const {name, date} = todoObject;

        const html =
            `<div>${name}</div>
             <div>${date}</div>
            <button class="delete-todo-button" onclick="
                myArray.splice(${index},1);
                localStorage.setItem('storage_list', JSON.stringify(myArray));
                rendermyArray();
            ">Delete</button>`
        myArrayHTML += html
    })

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
