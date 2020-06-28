let arrayOfTodos = [
    {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 20,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
  }]

  const handleInput = (userNum) => {
    userNum = document.getElementById("userId").value
    console.log(userNum)
    
  }

  let userNum = null  
  

  const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
  }

  const logTodos = () => {
    console.log(arrayOfTodos)
  }

  const populateAllTodos = () => {
    populateTodos(arrayOfTodos)
}

  const populateTodos = (arr) => { 
    let todolist = document.getElementById("todo-list")    
    let fontColor = ""    
    
    for (i=0; i < arr.length; i++) {
      if(arr[i].completed === true) {
        fontColor = "green"
      } else {
        fontColor = "red"
      }
      let todolisttag = document.createElement("LI")
      let useridtag = document.createElement("p")
      let idtag = document.createElement("p")
      let titletag = document.createElement("p")
      let completedtag = document.createElement("p")   

      let jsonresponsetitle = document.createTextNode(arr[i].title)
      titletag.appendChild(jsonresponsetitle)
      let jsonresponseuserid = document.createTextNode(arr[i].userId)
      useridtag.appendChild(jsonresponseuserid)
      let jsonresponseid = document.createTextNode(arr[i].id)
      idtag.appendChild(jsonresponseid)
      let jsonresponsecompleted = document.createTextNode(arr[i].completed)
      completedtag.appendChild(jsonresponsecompleted)

      todolist.appendChild(todolisttag)
      todolisttag.appendChild(useridtag)
      todolisttag.appendChild(idtag)
      todolisttag.appendChild(titletag)
      todolisttag.appendChild(completedtag)

      completedtag.style.color = fontColor
    }   
}

  const userIdFilter = () => {
    let element = document.getElementById("todo-list");
    while (element.firstChild) {
    element.removeChild(element.firstChild);
    }
    let arrayOfUserTodos = arrayOfTodos.filter(function(useridfilter) {
        return useridfilter.userId === userNum
    })
    populateTodos(arrayOfUserTodos)
  }  
   

  const filterTodoByCompleted = () => {    
    let element = document.getElementById("todo-list");
    while (element.firstChild) {
    element.removeChild(element.firstChild);
    }
    let arrayOfCompleted = arrayOfTodos.filter(function(todo){
      return (todo.completed === true && todo.userId === x)
    })  
    populateTodos(arrayOfCompleted)  
  }
  
  const filterTodoByIncomplete = () => {
    let element = document.getElementById("todo-list");
        while (element.firstChild) {
        element.removeChild(element.firstChild);
        }  
    let arrayOfNotCompleted = arrayOfTodos.filter(function(todo){
        return (todo.completed === false && todo.userId === x)
        })
    populateTodos(arrayOfNotCompleted)  
  }
  
  const resetTodos = () => {    
    const arrayOfTodos = document.getElementsByTagName("OL")
    
    for (i=0; i < arrayOfTodos.length; i++)
    
    arrayOfTodos[i].innerHTML = null
  
    console.log(arrayOfTodos)
  }