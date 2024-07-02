class Student {
    constructor(id, name, date, gender, classroom, image, phone, address) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.gender = gender;
        this.classroom = classroom;
        this.image = image;
        this.phone = phone;
        this.address = address;
    }
    getID (){
        return this.id;
    }
    getName(){
        return this.name;
    }
    getDate(){
        return this.date;
    }
    getGender(){
        return this.gender;
    }
    getClassroom(){
        return this.classroom;
    }
    getImage() {
        return this.image;
    }
    getPhone(){
        return this.phone;
    }
    getAddress(){
        return this.address;
    }
    setID(id){
        this.id = id;
    }
    setName(name){
        this.name = name;
    }
    setDate(date){
        this.date = date;
    }
    setGender(gender){
        this.gender = gender;
    }
    setClassroom(classroom){
        this.classroom = classroom;
    }
    setImage(image){
        this.image = image;
    }
    setPhone(phone){
        this.phone = phone;
    }
    setAddress(address){
        this.address = address
    }
    edit(id, name, date, gender, classroom, image, phone,address){
        this.id = id;
        this.name = name;
        this.date = date;
        this.gender = gender;
        this.classroom = classroom;
        this.image = image;
        this.phone = phone;
        this.address = address;
    }
}