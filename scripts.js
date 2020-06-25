// We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

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

  const logTodos = () => {
    console.log(arrayOfTodos)
  }

  const populateTodos = () => {    
    let todolist = document.getElementById("todo-list")
    let fontColor = ""
    
    for (i = 0; i < arrayOfTodos.length; i++) {   
            
      if(arrayOfTodos[i].completed === true) {
        fontColor = "green"
      } else {
        fontColor = "red"
      }

      let todolisttag = document.createElement("LI")
      let useridtag = document.createElement("H2")
      let idtag = document.createElement("H2")
      let titletag = document.createElement("H3")
      let completedtag = document.createElement("H2")
      // createdLI.appendChild(todolist)

      let jsonresponsetitle = document.createTextNode(arrayOfTodos[i].title)
      titletag.appendChild(jsonresponsetitle)
      let jsonresponseuserid = document.createTextNode(arrayOfTodos[i].userId)
      useridtag.appendChild(jsonresponseuserid)
      let jsonresponseid = document.createTextNode(arrayOfTodos[i].id)
      idtag.appendChild(jsonresponseid)
      let jsonresponsecompleted = document.createTextNode(arrayOfTodos[i].completed)
      completedtag.appendChild(jsonresponsecompleted)

      todolist.appendChild(todolisttag)
      todolisttag.appendChild(useridtag)
      todolisttag.appendChild(idtag)
      todolisttag.appendChild(titletag)
      todolisttag.appendChild(completedtag)

      
      completedtag.style.color = fontColor
      
       
      // createdLI.appendChild(jsonresponsetitle)

    }   
  }

  // const completed = () => {
    
  // }