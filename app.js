const generateBtn = document.querySelector('.generate-btn');

const cardsContainer = document.querySelector('.cards');


generateBtn.addEventListener('click', function() {
     const name = document.getElementById('student-name').value;
    //  console.log(name);
    const cnic = document.getElementById('cnic').value;
    // console.log(cnic);
    const course = document.getElementById('course').value;
    // console.log(course);
    const dob = document.getElementById('date-of-birth').value;
    // console.log(dob);
    const image = document.getElementById('student-image').files[0];
    // console.log(image);

    // Validate the form inputs
    if (!name || !cnic || !course || !dob || !image) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
           text: "Please fill in all the fields and select an image.",
        });
        return;
    }else if (name.length < 3) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Student name must be at least 3 characters long.",
        });
        return;
    }else if (cnic.length !== 13 || !/^\d+$/.test(cnic)) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "CNIC must be exactly 13  digits long and contain only numbers.",
        });
        return;
    }else {
        Swal.fire({
            icon: "success",
            title: "Success!",
            text: "ID card generated successfully.",
        });
    }


    // Display the ID card

    const frontendCard = document.getElementById('front-card');
    const backCard = document.getElementById('back-card');
    
    frontendCard.querySelector('.student-name').textContent = name;
    frontendCard.querySelector('.cnic').textContent = cnic;
    frontendCard.querySelector('.course').textContent = course;
    frontendCard.querySelector('.dob').textContent = dob;
    frontendCard.querySelector('#display-image').src = URL.createObjectURL(image);
    cardsContainer.style.display = 'flex';
    
   setTimeout(() => {
    if(cardsContainer){
         window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
 });
}
}, 100);

const rollNum = document.getElementById('rollnum');
const randomNum = Math.floor(Math.random() * 900000) + 1000000; // Generate a random number between 1 and the current year  
const generatedRollNum = `SMIT -${randomNum}`;
roll



});





