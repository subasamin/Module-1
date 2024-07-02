class StudentManage {
    constructor(arr) {
        this.student = arr;
    }
    listStudent() {
        let table = "";
        for (let i = 0; i < this.student.length; i++) {
            table += '<tr>';
            table += '<td>';
            table += this.student[i].id;
            table += '</td>';

            table += '<td>';
            table += this.student[i].name;
            table += '</td>';

            table += '<td>';
            table += this.student[i].date;
            table += '</td>';

            table += '<td>';
            table += this.student[i].gender;
            table += '</td>';

            table += '<td>';
            table += this.student[i].classroom;
            table += '</td>';

            table += '<td>';
            table += '<img width="100px" height="100px" src=" '+this.student[i].image+'">';
            table += '</td>';

            table += '<td>';
            table += this.student[i].phone;
            table += '</td>';

            table += '<td>';
            table += this.student[i].address;
            table += '</td>';

            table += '<td>' +
                '<button onclick="deleteStudent('+i+')">Delete</button> ' +
                ' <button onclick="editStudent('+i+')">Edit</button>' +
                '</td>';
            table += '</tr>';

        }
        document.getElementById("list_student").innerHTML = table;
    }
    addStudent(student) {
        this.student.push(student);
    }
    deleteStudent(i) {
        this.student.splice(i,1);
    }
    findStudent(i) {
        return this.student[i];
    }
    edit( student, id, name, date, gender, classroom, image,phone, address) {
        student.edit(id, name, date, gender, classroom, image, phone, address)
    }
}