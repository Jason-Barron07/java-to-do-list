// const addtoList = document.querySelector("#addtoList");
// const sortList = document.querySelector("#sortingList");
// const displayArea = document.querySelector(".displayArea")
// const listItems = []



// addtoList.addEventListener('click' )

document.querySelector('#add').onclick = function(){}
    document.querySelector('#add').onclick = function(){
        if(document.querySelector('#input').value.length === 0){}
        else{
            document.querySelector('#tasks').innerHTML += `
        <div class="task">
        <span id="sort-btn"></span>
        <span id="taskname">
        ${document.querySelector('#input').value}
        </span>
        <button class="delete">
        <i class="far fa-trash-alt">delete</i>
        </button>
        </div>
            `;
            let current_tasks = document.querySelectorAll(".delete");
            for(let i=0; i<current_tasks.length; i++){
                current_tasks[i].onclick = function(){
                    this.parentNode.remove();}
    }
        } };
    

        const obj={

            name:'Ryan',
            surname:'Barron',
           
}

console.log(obj)
let newObj=JSON.parse(JSON.stringify(obj))
newObj.firstname = 'Ryan'
newObj.lastname = 'Barron'


console.log(newObj)

localStorage.setItem('x','Ryan')

localStorage.getItem('x')

console.log(localStorage.getItem('x'));



