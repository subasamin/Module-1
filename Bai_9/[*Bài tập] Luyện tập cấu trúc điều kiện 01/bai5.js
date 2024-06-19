let a = parseInt(prompt('nhap diem bai kiem tra'));
let b = parseInt(prompt('nhap diem thi giua ki'));
let c = parseInt(prompt('nhap diem thi cuoi ki'));
let s = (a + b + c)/3;
if(s>=8){
   alert('Hoc luc gioi');
}
else if (5<=s<8){
    alert('Hoc luc kha');
}
else if (0<=s<5){
    alert("Hoc luc yeu")
}
