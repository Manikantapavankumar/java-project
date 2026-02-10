function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({username, password})
    })
    .then(res => res.json())
    .then(data => {
        if (data.success) {
            localStorage.setItem("user", username);
            window.location.href = "dashboard.html";
        } else {
            document.getElementById("msg").innerText = "❌ Invalid Login";
        }
    });
}
