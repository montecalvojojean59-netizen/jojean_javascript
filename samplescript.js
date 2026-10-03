const buttonname = document.getElementById('changeName');
const studentname = document.getElementById('studentName');

buttonname.addEventListener("click", function(){
    studentname.textContent = "Maria Santos";
}

)

const buttonbackground = document.getElementById('changeBackground');
const profile = document.getElementById('profile');

buttonbackground.addEventListener("mouseenter", function() {

    profile.style.backgroundColor = "#96eedf";

});

buttonbackground.addEventListener("mouseleave", function() {

    profile.style.backgroundColor = "white";

});

const toggleDetails = document.getElementById('toggleDetails');
const details = document.getElementById('details');

toggleDetails.addEventListener("click", function() {
    details.classList.toggle("hidden");
});

