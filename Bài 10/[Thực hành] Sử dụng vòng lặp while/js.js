let number = parseFloat(prompt('Nhap vao mot so '));
let sum = 0;
while (number!=(-1)) {
    sum= sum + number;
    number = +prompt('Nhap vao mot so ');
}
document.write('Tong cac so da nhap la '+sum);
