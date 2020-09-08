//===============================================TASK 12====================================================================//
// Function used to alert user once page that has loaded fully, without adding function() to the HTML sheet.
let loadedPage = {};
loadedPage.alertUser = function(message) {
	alert("Good day, are you in need of new wheels? Allow our experts to help you find your suitable vehicle" + message);
	loadedPage.message = message;
}
loadedPage.alertUser(" Note that the page is fully loaded, click okay to continue.");

// Constructor function used as a blueprint with properties for the 5 "Car" objects below:
function Car(make, model, colour, regNumber, price, carPic) {
    this.make = make;
    this.model = model;
    this.colour = colour;
    this.regNumber = regNumber;
    this.price = price;
    this.imageSrc = carPic;
    // showMore() function and dialog created as per task request.
    this.showMore = function() {
        let x = document.createElement("DIALOG");
        let t = document.createTextNode( 
            this.make +
            " " +
            this.model +
            " is " +
            this.colour + 
            " and costs " +
            this.price +
            ", registration number is " +
            this.regNumber +
            ".");
        x.setAttribute("open", "open");
        x.appendChild(t);
        document.body.appendChild(x);
      }
}
// 5 "Car" objects added below:
let lineBreak = document.createElement("br");// Line "br" element created.
// All images below are from an external source and links are provided.
// first "Car" object.
let carLambo = new Car(
    "Lamborghini",
    "Veneno",
    "Scarlett Red",
    "CA 123-456 ",
    "$4.5 million",
    "https://car-images.bauersecure.com/pagefiles/13986/1040x0/lamborghini_veneno.jpg?scale=down"
);
lineBreak;
// Second "Car" object.
let carFerr = new Car(
    "Ferrari",
    "Italia",
    "Crimson Red",
    "ND 123-456",
    "$230 000",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSVrZwFuMCXTgDSwjVGr_1LmaEuOYLGeQJzLmZyoFv6QeupPMqy"
);
lineBreak;
// Third "Car" object.
let carPors = new Car(
    "Porche",
    "Cayman",
    "Metalic Black",
    "123-456 GP",
    "$81 000",
    "https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhM%254x7Jm8Uv1T1FH18uWgds6yJ5EiSRlW9ACv8cOdzj8iaqiTyOFmPQLRmVBbgT0VPKx7za7UlSRvyZnAYP51ZYSK%25D0PcfBDNEEjzs1Ssq4kdJ%25OuUSPvKQOubMbdk6gyx7Jh557CCLHnI8PXbsdgPi60c3eUWrzNjBIphMSGX6BqDP%2595W3FBvDTngY2lP4ikoE8n7"
);
lineBreak;
// Fourth "Car" object.
let carDodg = new Car(
    "Dodge",
    "Challenger",
    "Metalic Grey",
    "123-789 GP",
    "$30 000",
    "https://the-drive-3.imgix.net/https%3A%2F%2Fs3.amazonaws.com%2Fthe-drive-staging%2Fmessage-editor%252F1533179689909-dg019_036cldb48fqtpf3gmanrq85550q3mop.jpg?auto=compress%2Cformat&ixlib=js-1.4.1&s=a75759c42ac3b4cab3a4139616df4a4d"
);
lineBreak;
// Fifth "Car" object.
let carAsto = new Car(
    "Aston Martin",
    "Superleggera",
    "Maroon",
    "786-345 ND",
    "$305 000",
    "https://the-drive-2.imgix.net/https%3A%2F%2Fs3.amazonaws.com%2Fthe-drive-staging%2Fmessage-editor%252F1533180146615-dbs_superleggera.jpg?auto=compress%2Cformat&ixlib=js-1.4.1&s=54d4bb1858bfdd97c3cc828107e6f43b"
);
lineBreak;
// All above objects placed in an array below:
let carObjects = [carLambo, carFerr, carPors, carDodg, carAsto];

// Load objects to HTML Page.
let loaded = {};

loaded.addCars = function() {
    carObjects.forEach(function(vehicle) { 
        let div = document.getElementById("details");
        let imgProfile = document.createElement("img");
        imgProfile.src = vehicle.imageSrc;
        imgProfile.alt = vehicle.make + " " + vehicle.model + ".";
        imgProfile.style.height = "350px";
        imgProfile.style.width = "550px";

        // Button created to display dialog.
        let btnShow = document.createElement("button"); 
        btnShow.innerHTML = "Click to show a dialog of car details:";
        
        // Alert to inform user that dialog is displayed at the bottom of the web page.
        btnShow.addEventListener("click", function() {
            vehicle.showMore();
            alert("Scroll down to the bottom of page to for details of selected vehicle in dialog box.");
        });

        // Alert created to display car details.
        let btnBio = document.createElement("button");
        btnBio.innerHTML = "Click to show alert message of car details:";
        
        vehicle.bio = function() {
            alert(
                this.make +
                " " +
                this.model +
                " is " +
                this.colour + 
                " and costs " +
                this.price +
                ", registration number is " +
                this.regNumber +
                "."
            );
        };

        // Click event added to diplay car details when button is clicked.
        btnBio.addEventListener("click", function(e) {
            vehicle.bio();
        });
        // Click event that will display car details in a dialog box once a car image has been clicked.
        imgProfile.addEventListener("click", function() {
            vehicle.showMore();
            alert("Scroll down to the bottom of page to for details of selected vehicle in dialog box.");
        });

        lineBreak;
        // All elements created above are added to the HTML page.
        div.appendChild(imgProfile);
        div.appendChild(btnBio);
        div.appendChild(btnShow);
        div.appendChild(lineBreak);
    }); 
}; 

loaded.addCars();
//===============================================END TASK====================================================================//