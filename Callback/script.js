function ask(question, yes, no) {
    if (confirm(question)) {
        yes()
    }

    else {
        no()
    }
    }
    function showOk() {
    alert( "You agreed." );
    }
    function showCancel() {
    alert( "You canceled the execution." );
    }
    // usage: functions showOk, showCancel are passed as arguments to ask

    ask("Do you agree?", showOk, showCancel);
    

// Function declaration vs Function expression

// let age = prompt("What is your age?", 18);
// // conditionally declare a function
//     if (age < 18) {
//         function welcome() {
//         alert("Hello!");
// }
// } 
// else {
// function welcome() {
// alert("Greetings!");
// }
// }
// // ...use it later
// welcome(); // Error: welcome is not defined

// let age = prompt("What is your age?", 18);
    
//     let welcome;
//         if (age < 18) {
//             welcome = function() {
//             alert("Hello!");
// };
// } 

//         else {
//             welcome = function() {
//             alert("Greetings!");
// };
// }
// welcome(); // ok now

// let age = prompt("What is your age?", 22);
// let welcome = (age < 18) ? function() { alert("Hello!"); } : function() { alert("Greetings!"); };
// welcome(); // ok now