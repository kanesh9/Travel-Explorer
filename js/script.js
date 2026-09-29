// Destination Search

function searchDestinations() {

    let input =
        document
        .getElementById("searchBox")
        .value
        .toLowerCase();

    let destinations =
        document.querySelectorAll(".destination");


    destinations.forEach(function(destination) {

        let name =
            destination.innerText.toLowerCase();


        if (name.includes(input)) {

            destination.style.display = "block";

        } else {

            destination.style.display = "none";

        }

    });

}


// Package Booking

function bookPackage(packageName) {

    alert(
        "Thank you!\n\n" +
        "Selected Package: " +
        packageName
    );

}


// Contact Form

function submitForm(event) {

    event.preventDefault();

    alert(
        "Thank you!\n\n" +
        "Your travel enquiry has been submitted successfully."
    );

}
