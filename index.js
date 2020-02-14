document.getElementById("form_").addEventListener("submit", (event) => {
    event.preventDefault();
    
    var formData = new FormData(event.target);
    var days = formData.get("days");
    var amount = formData.get("amount");

    console.log(event.target);
    fetch(`http://192.168.43.119:3000/affordable?amount=${amount}&days=${days}`)
    .then(res => res.json())
    .then(obj => {
        console.log(obj)
        if (obj.affordable === true){
            document.getElementById("response").innerText = "Yes, you can afford that.";
        } else {
            document.getElementById("response").innerText = "No, you can't afford that.";
        }
    })
})

