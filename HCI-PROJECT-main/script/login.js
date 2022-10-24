const form = document.getElementById("LoginForm")
const errorMessage = document.getElementById("errorMessage")

function handleSubmit(e) {
    const formData = new FormData(form)

    const name = formData.get('nameTxt')
    const email = formData.get('emailTxt')
    const password = formData.get('passwordTxt')
    const confPass = formData.get('confPassTxt')
    const tos = formData.get('Tos')
    let error = []

    if (!name) {
        error.push("Name must be filled!!!")
    }

    if (name.length <= 4) {
        error.push("Name must be greater than 4 letter!!")
    }

    if (!email) {
        error.push("Email must be filled!!!")
    }

    if (!password) {
        error.push("Password must be filled!!!")
    }

    if (password.length <= 5) {
        error.push("Password must be greater than 5!!!")
    }

    if (confPass != password) {
        error.push("Confirmation Password must be the same as Password!!!")
    }

    if (error.length > 0) {
        alert(error.join("\n"))
        errorMessage.innerHTML = error.join("</br> </br>")
        e.preventDefault()
    } else {
        if (!confirm("Are you sure?")) {
            e.preventDefault()
        }
    }
}

form.addEventListener('submit', handleSubmit)