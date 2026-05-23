const generateBtn = document.querySelector('.generate-btn');

const cardsContainer = document.querySelector('.cards');

generateBtn.addEventListener('click', function () {

    const name = document.getElementById('student-name').value;

    const cnic = document.getElementById('cnic').value;

    const course = document.getElementById('course').value;

    const dob = document.getElementById('date-of-birth').value;

    const image = document.getElementById('student-image').files[0];



    /* VALIDATION */

    if (!name || !cnic || !course || !dob || !image) {

        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please fill in all the fields and select an image.",
        });

        return;

    }

    if (name.length < 3) {

        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Student name must be at least 3 characters long.",
        });

        return;

    }

    if (cnic.length !== 13 || !/^\d+$/.test(cnic)) {

        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "CNIC must be exactly 13 digits long and contain only numbers.",
        });

        return;

    }



    /* ROLL NUMBER GENERATE */

    const randomNum = Math.floor(Math.random() * 900000) + 100000;

    const generatedRollNum = `SMIT-${randomNum}`;



    /* IMAGE URL */

    const imgURL = URL.createObjectURL(image);



    /* CARD REFERENCES */

    const frontCard = document.getElementById('front-card');



    /* UPDATE CARD VALUES */

    frontCard.querySelector('.student-name').textContent = name;

    frontCard.querySelector('.cnic').textContent = cnic;

    frontCard.querySelector('.course').textContent = course;

    frontCard.querySelector('.dob').textContent = dob;

    frontCard.querySelector('#display-image').src = imgURL;

    frontCard.querySelector('#rollnum').textContent = generatedRollNum;



    /* SHOW CARDS */

    cardsContainer.style.display = 'flex';



    /* SUCCESS ALERT */

    Swal.fire({
        icon: "success",
        title: "Success!",
        text: "ID card generated successfully.",
    }).then(() => {

        /* AUTO SCROLL */

        window.scrollTo({
            top: cardsContainer.offsetTop,
            behavior: "smooth"
        });

    });

});