// script.js


// Using this to create the lightbox which will be repurposed
function displayFeaturedStudentPanel() {
    console.log('featured students')

    // Create a variable named 'featuredStudent' that is a handle to the element with the ID of 'featuredStudentPanel'
    var featuredStudent = document.getElementById('featuredStudentPanel');

    // This is the arrays for featuredStudents. Note that you are to use. Note that it is an array of arrays.
    var featuredStudents = [
        ['Moody Blues'],
        ['John Bonham'  ],
        ['Dave Matthews'],
        ['Alice Cooper']
    ];

    // Use this variable to build the output string that you will then use for the featured student info
    var random = Math.floor(Math.random() * featuredStudents.length);

    // Create a variable named 'randomStudent' and assign it a random number. This number will be used to index into the featuredStudents arr var img = document.getElementById('img');
    var randomStudent = ['img/moodyDays.jpg', 'img/moodyChord.jpg', 'img/moodyEvery.jpg', 'img/moodyBalance.jpg'];

    // Add the output to the featuredStudent element
    q1.innerHTML = "<img class='studentpic' src=" + randomStudent[random] + ">";
}


function clear(panelID) {
    // console.log('clear!');
    var panel = document.getElementById(panelID);
    panel.innerHTML = '';
}
// This is a test to fill the question area with the fillQuestion function
function verse1(){
    let output =`
    
    <p>She... She screams in silence</p>
    <p>A sullen riot penetrating through her mind</p>
    <p>Waiting for a sign</p>
    <p>To smash the silence with the brick of self-control</p>
    <br>`
    

    return output;
}

function fillQuestion(){
  
    document.getElementById('q1').innerHTML = verse1();
}



// Start the entire process here
window.onload = function () {
    // fillQuestion will actually come after the question is correct, not onload
    fillQuestion();
    // displayFeaturedStudentPanel();
    // start();
}

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

stopper.addEventListener("click", function () {
    stopIntervals(featuredStudentTimer)
});

// This is the placeholder for the start of the lightbox functionality that will be called when user gets question right
starter.addEventListener("click", function () {
    featuredStudentTimer = setInterval(displayFeaturedStudentPanel, 1000);
});




