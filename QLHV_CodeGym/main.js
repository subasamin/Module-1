let arr = [];
let manage = new StudentManage(arr);
function addStudent() {
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let date = document.getElementById("date").value;
    let gender = document.getElementById("gender").value;
    let classroom = document.getElementById('classroom').value;
    let image = document.getElementById("image").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;
    let student = new Student(id,name,date,gender,classroom,image,phone,address);
    manage.addStudent(student);
    manage.listStudent();
    clear();
}

function clear() {
    document.getElementById("id").value="";
    document.getElementById("name").value="";
    document.getElementById("date").value="";
    document.getElementById("gender").value="";
    document.getElementById("classroom").value="";
    document.getElementById("image").value="";
    document.getElementById("phone").value="";
    document.getElementById("address").value="";
}

function deleteStudent(i) {
    manage.deleteStudent(i);
    manage.listStudent();
}
let studentId = 0;
function editStudent(i){
    let student = manage.findStudent(i);
    document.getElementById("id").value = student.id;
    document.getElementById("name").value = student.name;
    document.getElementById("date").value = student.date;
    document.getElementById("gender").value = student.gender;
    document.getElementById("classroom").value = student.classroom;
    document.getElementById("image").value = student.image;
    document.getElementById("phone").value = student.phone;
    document.getElementById("address").value = student.address;

    studentId = i;
}

function updateStudent(){

    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let date = document.getElementById("date").value;
    let gender = document.getElementById("gender").value;
    let classroom = document.getElementById("classroom").value;
    let image = document.getElementById("image").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;

    let student = manage.findStudent(studentId)
    manage.edit(student,id,name,date,gender,classroom, image, phone,address);
    manage.listStudent();
    clear();
}
manage.listStudent();