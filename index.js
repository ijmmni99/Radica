//initialize array and id
var users = [];
var id = 1;

//add user function
function addUser() {
    
    username = document.getElementById('userName');
    userOcc = document.getElementById('userOccupation');

    //add into array object
    users.push({userid: id, userName: username.value, userOccupation: userOcc.value});
    
    //auto increment id
    document.getElementById('userID').value = ++id;
    
    //reset value
    username.value = "";
    userOcc.value = "";

    //reset table
    document.getElementById("userTable").innerHTML = "";

    //populate data
    populateTable();
}

//sorting array function
function sortingarray() {

    //get selected value
    let selectedVal = document.getElementById('category').value;

    //sorting condition
    if(selectedVal == 'UserID')
        users.sort((a, b) => (a.userid > b.userid) ? 1 : -1);
    else if(selectedVal == 'UserName')
        users.sort((a, b) => (a.userName > b.userName) ? 1 : -1);
    else
        users.sort((a, b) => (a.userOccupation > b.userOccupation) ? 1 : -1); 

    //reset table
    document.getElementById("userTable").innerHTML = "";
    
    //populate data
    populateTable();
}

//populate table function
function populateTable() {

    //initialize value
    var t = "";

    //for loop to populate data
    for (var i = 0; i < users.length; i++){
        var tr = "<tr>";
        tr += "<td>"+users[i].userid+"</td>";
        tr += "<td>"+users[i].userName+"</td>";
        tr += "<td>"+users[i].userOccupation+"</td>";
        tr += "</tr>";
        t += tr;
    }

    //insert data
    document.getElementById("userTable").innerHTML += t;
}