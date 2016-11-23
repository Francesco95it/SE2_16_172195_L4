var employees = [];
var nemployees = 0;

function add(id, name, surname, level, salary){
    console.log(id + name + surname + level + salary);
    if(id=='') id = nextid();
    if(getbyID(id) == -1) {console.log("pusho"); employees.push([id, name, surname, level, salary]); nemployees+=1;}
    console.log(employees.length);
}

function nextid(){
    return nemployees;
}

function getbyID(id){
    for (i=0;i<nemployees;i++){
        if(employees[i][0]==id) return i;
    }
    return -1;
}

exports.add = add;