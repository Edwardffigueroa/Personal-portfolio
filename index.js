
window.sr = ScrollReveal();
sr.reveal('.textBanner_left', { delay: 100 });
sr.reveal('.textBanner');
sr.reveal('.line');
sr.reveal('.list_container');
sr.reveal('.titleportfolio');
sr.reveal('.titleabout');
sr.reveal('.networks',{delay:200});
sr.reveal('.imgmia',{delay:300});
sr.reveal('.skill',{delay:400});
sr.reveal('.contact_container',{delay:200});



// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];



// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
    
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
