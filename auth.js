const REGISTER_WEBHOOK_URL = "https://n8n-d5pc.srv1980546.hstgr.cloud/webhook/register";
const LOGIN_WEBHOOK_URL    = "https://n8n-d5pc.srv1980546.hstgr.cloud/webhook/login";

function showAuthError(form, message) {
    let errorBox = form.querySelector(".auth-error");
    if (!errorBox) {
        errorBox = document.createElement("p");
        errorBox.className = "auth-error";
        errorBox.style.color = "#c0392b";
        errorBox.style.marginTop = "8px";
        form.appendChild(errorBox);
    }
    errorBox.textContent = message;
}

function clearAuthError(form) {
    const errorBox = form.querySelector(".auth-error");
    if (errorBox) errorBox.textContent = "";
}


document.addEventListener("DOMContentLoaded", () => {


const registerForm = document.querySelector(".auth-page form");

if (registerForm && document.getElementById("confirm")) {
    registerForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        clearAuthError(registerForm);

        const password = document.getElementById("password").value;
        const confirm  = document.getElementById("confirm").value;

        if (password !== confirm) {
            showAuthError(registerForm, "Password ar Confirm Password mile nai.");
            return;
        }

        const payload = {
            name: document.getElementById("name").value,
            phone: document.getElementById("phone").value,
            email: document.getElementById("email").value,
            district: document.getElementById("district").value,
            role: document.getElementById("role").value,
            password: password
        };

        const submitBtn = registerForm.querySelector(".auth-button");
        submitBtn.disabled = true;
        submitBtn.textContent = "Please wait...";

        try {
            const res = await fetch(REGISTER_WEBHOOK_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });

            const data = await res.json();

            if (res.ok && data.success) {
                alert("Registration successful! Ekhon login korun.");
                window.location.href = "login.html";
            } else {
                showAuthError(registerForm, data.message || "Registration failed. Abar try korun.");
            }
        } catch (err) {
            showAuthError(registerForm, "Server e problem hocche. Pore try korun.");
            console.error(err);
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = "Register";
        }
    });
}


const loginForm = document.querySelector(".auth-page form");

if (loginForm && !document.getElementById("confirm") && document.getElementById("phone")) {
    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        clearAuthError(loginForm);

        const payload = {
            phone: document.getElementById("phone").value,
            password: document.getElementById("password").value
        };

        const submitBtn = loginForm.querySelector(".auth-button");
        submitBtn.disabled = true;
        submitBtn.textContent = "Please wait...";

        try {
            const res = await fetch(LOGIN_WEBHOOK_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });

            const data = await res.json();

            if (res.ok && data.success) {
                // Simple client side session - production e proper token/JWT use korben
                localStorage.setItem("lmp_user", JSON.stringify(data.user));
                window.location.href = "index.html";
            } else {
                showAuthError(loginForm, data.message || "Phone ba Password vul.");
            }
        } catch (err) {
            showAuthError(loginForm, "Server e problem hocche. Pore try korun.");
            console.error(err);
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = "Login";
        }
    });
}

}); 