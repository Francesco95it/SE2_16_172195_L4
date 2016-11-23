var employees = [];
var nemployees = 0;

function add(id, name, surname, level, salary){
    if(id=='not defined') id = nextid();
    if(getbyID(id) != -1) employees.push([id, name, surname, level, salary]);
}

function nextid(){
    return nemployees;
}

function getbyID(id){
    for (i=0;i<nemployees;i++){
        if(employees[i][0]==id) return employees[i];
    }
    return -1;
}

exports.add = add;
