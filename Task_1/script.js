//Is "else" required?

function checkAge(age) {
    (age > 18) ? true : confirm('Did parents allow you?');
}

let finding = checkAge(13);
console.log(finding);


//&&

function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
}

//There is no difference between the both of them
    