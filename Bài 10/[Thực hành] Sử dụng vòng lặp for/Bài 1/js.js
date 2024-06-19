function click () {
    let a = parseInt(document.getElementById('sonhapvao').value);
    let i = 0;
    let text =''
    for (i=0;i<a;i++) {
        text = "The number is " + i + "<br>";
        document.getElementById('out').innerHTML = +text;
    }
}