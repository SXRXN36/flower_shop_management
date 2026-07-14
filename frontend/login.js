function login() {

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("message");

    // Username และ Password ตัวอย่าง
    if (username === "admin" && password === "1234") {

        localStorage.setItem("login", "true");

        message.style.color = "green";
        message.innerHTML = "🌸 เข้าสู่ระบบสำเร็จ กำลังเข้าสู่หน้าหลัก...";

        setTimeout(() => {
            window.location.href = "index.html";
        }, 1000);

    } else {

        message.style.color = "red";
        message.innerHTML = "❌ Username หรือ Password ไม่ถูกต้อง";

    }

}