var employees = [];
var nemployees = 0;

function add(id, name, surname, level, salary){
    console.log(id + name + surname + level + salary);
    if(id=='') id = nextid();
    if(getIndexByID(id) == -1) {employees.push([id, name, surname, level, salary]); nemployees+=1;}
    console.log(employees.length);
}

function nextid(){
    for(i=0; i<1000; i++){
        for(j=0;j<nemployees;j++){
            if(i!=employees[j][0]) return i;
        }
    }
}

function getIndexByID(id){
    for (i=0;i<nemployees;i++){
        if(employees[i][0]==id) return i;
    }
    return -1;
}

function infos(id){
    var index = getIndexByID(id);
    if (index != -1) return employees[getIndexByID(id)];
    else return -1;
}

exports.add = add;
exports.infos = infos;