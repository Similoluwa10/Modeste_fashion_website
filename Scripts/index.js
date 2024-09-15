
let emailInput = document.getElementById("email-input")
let submitButtonInput = document.getElementById("submit-button-input")

submitButtonInput.addEventListener("click", function () {
	if (emailInput !== '') {
		localStorage.setItem("New Email", [emailInput.value])
		alert('Subscription successful!!')
	}

})

