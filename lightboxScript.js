// script.js


// Switch to lightbox when question is correct Q1
function displayQuestion1() {
    

    // Create a variable named 'featuredStudent' that is a handle to the element with the ID of 'featuredStudentPanel'
    var featuredStudent = document.getElementById('question1');

    // This is the arrays for featuredStudents. Note that you are to use. Note that it is an array of arrays.
    var featuredStudents = [
        ['Moody Blues'],
        ['John Bonham'  ],
        ['Dave Matthews'],
        ['Alice Cooper']
    ];

    
    var random = Math.floor(Math.random() * featuredStudents.length);

    var randomStudent = ['img/redCalif.jpg', 'img/redGetaway.jpg', 'img/redLive.jpg', 'img/redStadium.jpg'];

    q1.innerHTML = "<img class='studentpic' src=" + randomStudent[random] + ">";
}

// Switch to lightbox when question is correct Q2
function displayQuestion2() {
 


    var featuredStudent = document.getElementById('question2');
    
    var featuredStudents = [
        ['Moody Blues'],
        ['John Bonham'  ],
        ['Dave Matthews'],
        ['Alice Cooper']
    ];

    var random = Math.floor(Math.random() * featuredStudents.length);
    
    var randomStudent = ['img/bluesAmerica.jpg', 'img/bluesDefinitive.jpg', 'img/bluesSoul.jpg', 'img/bluesSoundtrack.jpg'];

    q2.innerHTML = "<img class='studentpic' src=" + randomStudent[random] + ">";
}


// Switch to lightbox when question is correct Q3
function displayQuestion3() {
    

    var featuredStudent = document.getElementById('question3');

  
    var featuredStudents = [
        ['Moody Blues'],
        ['John Bonham'  ],
        ['Dave Matthews'],
        ['Alice Cooper']
    ];
    
    var random = Math.floor(Math.random() * featuredStudents.length);

    var randomStudent = ['img/moodyDays.jpg', 'img/moodyChord.jpg', 'img/moodyEvery.jpg', 'img/moodyBalance.jpg'];

    q3.innerHTML = "<img class='studentpic' src=" + randomStudent[random] + ">";
}

// Switch to lightbox when question is correct Q4
function displayQuestion4() {
 
    var featuredStudent = document.getElementById('question4');

    var featuredStudents = [
        ['Moody Blues'],
        ['John Bonham'  ],
        ['Dave Matthews'],
        ['Alice Cooper']
    ];
   
    var random = Math.floor(Math.random() * featuredStudents.length);

    var randomStudent = ['img/green21st.jpg', 'img/greenDookie.jpg', 'img/greenIdiot.jpg', 'img/greenNimrod.jpg'];

    q4.innerHTML = "<img class='studentpic' src=" + randomStudent[random] + ">";
}

function clear(panelID) {
    // console.log('clear!');
    var panel = document.getElementById(panelID);
    panel.innerHTML = '';
}
// This is a test to fill the question area with the fillQuestion function
// function verse1(){
//     let output =`
    
//     <p>She... She screams in silence</p>
//     <p>A sullen riot penetrating through her mind</p>
//     <p>Waiting for a sign</p>
//     <p>To smash the silence with the brick of self-control</p>
//     <br>`
    

//     return output;
// }

// function fillQuestion(){
  
//     document.getElementById('q1').innerHTML = verse1();
// }



// Start the entire process here
// window.onload = function () {
//     // fillQuestion will actually come after the question is correct, not onload
//     fillQuestion();
//     // displayFeaturedStudentPanel();
//     // start();
// }

// Create a new timer using setInterval and assign it to the variable 'quotesTimer'. Have the timer fire off every 15 seconds

var featuredStudentTimer;

// This function takes two parameters that are handles to timers
function stopIntervals( featuredStudentTimer) {
    console.log('Stopping intervals...');
    // clearInterval(quotesTimer);
    clearInterval(featuredStudentTimer);
    console.log('All intervals have been stopped');
}

    
// This is the stop button for the lightbox, might not use it in final version

 function stopper () {
    stopIntervals(featuredStudentTimer1);
    stopIntervals (featuredStudentTimer2);
    stopIntervals (featuredStudentTimer3);
    stopIntervals (featuredStudentTimer4);
};

// This is the placeholder for the start of the lightbox functionality that will be called when user gets question right
function starter1() {
    featuredStudentTimer1 = setInterval(displayQuestion1, 1000);
//     featuredStudentTimer2 = setInterval(displayQuestion2, 1000);
//     featuredStudentTimer3 = setInterval(displayQuestion3, 1000);
//     featuredStudentTimer4 = setInterval(displayQuestion4, 1000);
};




