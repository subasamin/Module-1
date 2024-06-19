let a = parseInt(prompt('Nhap vao so a'));
let b = parseInt(prompt('Nhap vao so b'));
let c = parseInt(prompt('Nhap vao so c'));

if (a - b <= 0) {
    if (a - b === 0) {
        if (a - c > 0) {
            alert('a va b la so lon nhat')
        } else if (a - c === 0) {
            alert('a,b,c bang nhau');
        } else alert('c la so lon nhat')
    } else {
        if (b - c <= 0) {
            if (b - c === 0) {
                alert('b va c la hai so lon nhat');
            } else alert('c la so lon nhat');
        } else {
            alert('b la so lon nhat');
        }
    }
} else {
    if (a - c > 0) {
        alert('a la so lon nhat');
    } else if (a - c === 0) {
        alert('c la so lon nhat');
    } else {
        alert('a va c la hai so lon nhat');
    }
}