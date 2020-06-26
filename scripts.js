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

  const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
  }

  let x = ""

  const logTodos = () => {
    console.log(arrayOfTodos)
  }

  // let todolist = () =>{
  //   document.getElementById()
  // }

  const userNum = (num) => {
    x = parseInt (num)
    // console.log(num)
  }

  const populateAllTodos = () => {
    populateTodos(arrayOfTodos)
}
  let fontColor = ""

  const populateTodos = (arr) => { 
    let todolist = document.getElementById("todo-list")
    
    for (i=0; i < arr.length; i++) {  
      let todolisttag = document.createElement("LI")
      let useridtag = document.createElement("H2")
      let idtag = document.createElement("H2")
      let titletag = document.createElement("H3")
      let completedtag = document.createElement("H2")

      completedtag.style.color = fontColor

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


      if(arr[i].completed === true) {
        fontColor = "green"
      } else {
        fontColor = "red"
      }
        
    }   
}

  const userIdFilter = () => {
    let arrayOfUserTodos = arrayOfTodos.filter(function(useridfilter) {
        return useridfilter.userId === x
    })
    populateTodos(arrayOfUserTodos)
    console.log(arrayOfUserTodos)
  }
   

  const filterTodoByCompleted = () => {
  
    
  
    let arrayOfCompleted = arrayOfTodos.filter(function(todo){
      return todo.completed === true
    })
  
    populateTodos(arrayOfCompleted)
  
  
  }
  
  const filterTodoByIncomplete = () => {
  
    let arrayOfNotCompleted = arrayOfTodos.filter(function(todo){
    return todo.completed === false
  })
  
  populateTodos(arrayOfNotCompleted)
  
  
  }
  
  const resetTodos = () => {
    
    const arrayOfTodos = document.getElementsByTagName("OL")
    for (i=0; i < arrayOfTodos.length; i++)
    arrayOfTodos[i].innerHTML = null
  
    console.log(arrayOfTodos)
  }