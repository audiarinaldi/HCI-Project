const form = document.getElementById("PurchaseForm");
const errorMessage = document.getElementById("errorMessage");

function handleSubmit(e) {
    const formData = new FormData(form);

    const name = formData.get("nameTxt");
    const phonenumber = formData.get("phoneTxt");
    const email = formData.get("emailTxt");
    const gender = formData.get("genderTxt");
    const age = formData.get("ageTxt");
    const district = formData.get("districtTxt");
    const address = formData.get("addressTxt");
    const postalcode = formData.get("postalTxt");

    let error = [];

    if (!name) {
        error.push("Name must be filled!!!");
    }

    if (name.length <= 4) {
        error.push("Name must be greater than 4 letter!!");
    }

    if (!phonenumber) {
        error.push("Email must be filled!!!");
    }

    if (phonenumber.length < 10) {
        error.push("Please input the correct Phone number");
    }

    if (!email) {
        error.push("Email must be filled!!!");
    }

    if (!age) {
        error.push("Age must be filled!!!");
    }

    if (!district) {
        error.push("District must be filled!!!");
    }

    if (!address) {
        error.push("Address must be filled!!!");
    }

    if (!postalcode || postalcode.length <= 4) {
        error.push("Please input the correct postal code");
    }
    if (gender == "") {
        error.push("Gender must be choosen");
    }
    if (error.length > 0) {
        alert(error.join("\n"));
        errorMessage.innerHTML = error.join("</br> </br>");
        e.preventDefault();
    } else {
        if (!confirm("Are you sure?")) {
            e.preventDefault();
        }
    }
}

form.addEventListener("submit", handleSubmit);