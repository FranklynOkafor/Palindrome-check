const input = document.getElementById('wordInput')


function reverseString(str){
    let spread = str.split('')
    return spread.reverse().join('')
}


function check(){
    const value = input.value;
    if (value == reverseString(value)) {
        alert('P A L I N D R O M E')
    } else {
        alert('Not today!')
    }
    input.value = ''
}
