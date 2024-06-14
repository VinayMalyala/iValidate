let result = {
    "tag": "",
    "free": true,
    "role": false,
    "user": "nikithabhavani966",
    "email": "nikithabhavani966@gmail.com",
    "score": 0.64,
    "state": "deliverable",
    "domain": "gmail.com",
    "reason": "valid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": true,
    "did_you_mean": "",
    "format_valid": true
}

submitButton.addEventListener("click", async(e) => {
    e.preventDefault()
    // console.log("Submit Button Clicked!")
    resultContainer.innerHTML = `<img class="loading" src="loading.svg" alt=""></img>`
    let key = "ema_live_NeK2GYKglxRKkcPMb1dpUiF6DECG1BBCJnBG5lF1"
    let email = document.getElementById("username").value
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`

    let data = await fetch(url)
    let result = await data.json()

    let str = ``

    for (key of Object.keys(result)) {
        if(result[key] !== "" && result[key] !== " "){
            str += `<div>${key}: ${result[key]}</div>`
        }
    }

    console.log(str)
    resultContainer.innerHTML = str
})



