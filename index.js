let globalTaskData = [];
taskContents = document.getElementById("taskContentsrow");

const addCard = () => {
    const newTaskDetails = {
        id: `${Date.now()}`,
        url: document.getElementById("imageURL").value,
        title: document.getElementById("taskTitle").value,
        type: document.getElementById("taskType").value,
        description: document.getElementById("taskDescription").value,
    };

    taskContents.insertAdjacentHTML("beforeend", generateTaskCard(newTaskDetails));

    globalTaskData.push(newTaskDetails);
    saveToLocalStorge();
}

const generateTaskCard = ({ id, url, title, type, description }) => {
    return `<div class="col-md-6 col-lg-4 mt-3" id=${id} key=${id}>
        <div class="card">
            <div class="card-header">
                <div class="d-flex justify-content-end">
                    <button type="button" class="btn btn-outline-info" name=${id} onclick="editTask(this)">
                        <i class="fas fa-pencil-alt" name=${id} onclick="editTask(this)"> </i>
                    </button> &nbsp;&nbsp;
                    <button type="button" class="btn btn-outline-danger" name=${id} onclick="deleteTask(this)">
                        <i class="far fa-trash-alt" name=${id} onclick="deleteTask(this)"> </i>
                    </button>
                </div>
            </div>
            <img src=${url} class="card-img-top" alt="image"/>
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${description}</p>
                <span class="badge bg-primary">${type}</span>
            </div>
            <div class="card-footer">
                <button class="btn btn-outline-primary float-end"> OPEN TASK </button>
            </div>
        </div>
    </div>`
};

const saveToLocalStorge = () => {
    localStorage.setItem("tasky", JSON.stringify({ tasks: globalTaskData }));
}

const reloadTaskCard = () => {
    const localStorageCopy = JSON.parse(localStorage.getItem("tasky"));
    console.log(localStorageCopy);
    if (localStorageCopy) {
        globalTaskData = localStorageCopy["tasks"];

    }
    globalTaskData.map((cardData) => {
        taskContents.insertAdjacentHTML('beforeend', generateTaskCard(cardData));

    })
}

const deleteTask = (e) => {
    const targetID = e.getAttribute("name");
    globalTaskData = globalTaskData.filter((id) => id.id !== targetID);
    saveToLocalStorge();
    window.location.reload();
}

const editTask = (e) => {
    const targetID = e.getAttribute("name");
    console.log(e)
    console.log(e.parentNode)
    console.log(e.parentNode.parentNode.parentNode.childNodes)
    console.log(e.parentNode.parentNode.parentNode.childNodes[5].childNodes[1])
    console.log(e.parentNode.parentNode.parentNode.childNodes[5].childNodes[3])
    console.log(e.parentNode.parentNode.parentNode.childNodes[5].childNodes[5])

    e.parentNode.parentNode.parentNode.childNodes[5].childNodes[1].setAttribute("contenteditable", "true")
    e.parentNode.parentNode.parentNode.childNodes[5].childNodes[3].setAttribute("contenteditable", "true")
    e.parentNode.parentNode.parentNode.childNodes[5].childNodes[5].setAttribute("contenteditable", "true")

    console.log(e.parentNode.parentNode.parentNode.childNodes[7].childNodes[1])
    e.parentNode.parentNode.parentNode.childNodes[7].childNodes[1].style.setProperty("border", "1px solid red")
    e.parentNode.parentNode.parentNode.childNodes[7].childNodes[1].style.setProperty("background", "blue")
    e.parentNode.parentNode.parentNode.childNodes[7].childNodes[1].setAttribute("onclick", "saveEditTask(this)")
    e.parentNode.parentNode.parentNode.childNodes[7].childNodes[1].innerHTML = "SAVE CHANGES"
}

const saveEditTask = (e) => {
    const targetID = e.getAttribute("name");
    console.log(e)
    console.log(e.parentNode)
    console.log(e.parentNode.parentNode.parentNode.childNodes)
    console.log(e.parentNode.parentNode.parentNode.childNodes[5].childNodes[1])
    console.log(e.parentNode.parentNode.parentNode.childNodes[5].childNodes[3])
    console.log(e.parentNode.parentNode.parentNode.childNodes[5].childNodes[5])

    e.parentNode.parentNode.parentNode.childNodes[5].childNodes[1].setAttribute("saveEditTask", "true")
    e.parentNode.parentNode.parentNode.childNodes[5].childNodes[3].setAttribute("saveEditTask", "true")
    e.parentNode.parentNode.parentNode.childNodes[5].childNodes[5].setAttribute("saveEditTask", "true")

    console.log(e.parentNode.parentNode.parentNode.childNodes[7].childNodes[1])
    e.parentNode.parentNode.parentNode.childNodes[7].childNodes[1].style.setProperty("border", "1px solid red")
    e.parentNode.parentNode.parentNode.childNodes[7].childNodes[1].style.setProperty("background", "blue")
    e.parentNode.parentNode.parentNode.childNodes[7].childNodes[1].setAttribute("onclick", "Savecontent(this)")
    e.parentNode.parentNode.parentNode.childNodes[7].childNodes[1].innerHTML = "SAVE CHANGES"

}

