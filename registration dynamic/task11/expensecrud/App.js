function getdetail(event){
    event.preventDefault();

    var money = event.target.money.value;
    var description = event.target.description.value;
    var category = event.target.category.value;

    var obj = {
        money: `${money}`,
        description: `${description}`,
        category: `${category}`
    }
    axios.post(`https://crudcrud.com/api/1694264cdf614be485791d024e7336be/expenses`,{obj})
    .then((response) => {
        showDetailsOnDisplay(response.data)
    })

}

window.addEventListener('DOMContentLoaded',(e) => {
    e.preventDefault()

    axios.get(`https://crudcrud.com/api/1694264cdf614be485791d024e7336be/expenses`)
    .then((response) => {
        console.log(response)
        let data = response.data;
        for(let i=0;i<data.length;i++){
            showDetailsOnDisplay(response.data[i])
        }
    })
})

function showDetailsOnDisplay(data) {
    axios.get(`https://crudcrud.com/api/1694264cdf614be485791d024e7336be/expenses/${data._id}`)
    .then((response) => {
        console.log(response)
        var parentNode = document.getElementById('resultContainer');
        var childNode = `<li id=${data._id}>${data.obj.money} Rupees for ${data.obj.description}-${data.obj.category}
                        <button id="editBtn" onclick="editData('${data._id}')">Edit</button>
                        <button id="deleteBtn" onclick="deleteData('${data._id}')">Delete</button>
                        </li>`
        parentNode.innerHTML += childNode;
        document.getElementById('money').value = ""
        document.getElementById("description").value = ""
        document.getElementById("category").value = ""
    })
}

function deleteData(userId){
    axios.delete(`https://crudcrud.com/api/1694264cdf614be485791d024e7336be/expenses/${userId}`)
    .then(() => {
        deleteDataFromDisplay(userId)
    })
    .catch((err)=>{
        console.log(err)
    })
}

function deleteDataFromDisplay(userId){
    let parentNode  = document.getElementById("resultContainer")
    let childNode = document.getElementById(userId)
    parentNode.removeChild(childNode)
}

function editData(userId){
    axios.get(`https://crudcrud.com/api/1694264cdf614be485791d024e7336be/expenses/${userId}`)
    .then((response) => {
        console.log(response)
        document.getElementById('money').value = response.data.obj.money;
        document.getElementById("description").value = response.data.obj.description;
        document.getElementById('category').value = response.data.obj.category;

        deleteData(userId)
    })
    
}