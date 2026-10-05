document.addEventListener("DOMContentLoaded", () => {
    const raw = localStorage.getItem("lmp_user");
    const navList = document.querySelector("#navigation ul");
    if (!raw || !navList) return; 

    let user;
    try {
        user = JSON.parse(raw);
    } catch (e) {
        return;
    }


    const loginLink = navList.querySelector('a[href="login.html"]');
    const registerLink = navList.querySelector('a[href="register.html"]');
    if (loginLink) loginLink.closest("li")?.remove();
    if (registerLink) registerLink.closest("li")?.remove();


    if (!document.getElementById("nav-auth-style")) {
        const style = document.createElement("style");
        style.id = "nav-auth-style";
        style.textContent = `
            .profile-menu { position: relative; list-style: none; }
            .profile-btn {
                background: #fff; border: 2px solid #2196f3; color: #2196f3;
                padding: 6px 14px; border-radius: 20px; cursor: pointer;
                font-weight: 600; display: flex; align-items: center; gap: 6px;
            }
            .profile-dropdown {
                display: none; position: absolute; right: 0; top: 110%;
                background: #fff; border: 1px solid #ddd; border-radius: 8px;
                min-width: 160px; box-shadow: 0 4px 12px rgba(0,0,0,0.12);
                overflow: hidden; z-index: 50;
            }
            .profile-menu.open .profile-dropdown { display: block; }
            .profile-dropdown a {
                display: block; padding: 10px 14px; color: #333;
                text-decoration: none; font-size: 14px;
            }
            .profile-dropdown a:hover { background: #f2f2f2; }
        `;
        document.head.appendChild(style);
    }

    const firstName = (user.full_name || "Account").split(" ")[0];

    const profileLi = document.createElement("li");
    profileLi.className = "profile-menu";
    profileLi.innerHTML = `
        <button type="button" class="profile-btn"> ${firstName}</button>
        <div class="profile-dropdown">
            <a href="#" id="navLogoutBtn">Logout</a>
        </div>
    `;
    navList.appendChild(profileLi);

    profileLi.querySelector(".profile-btn").addEventListener("click", () => {
        profileLi.classList.toggle("open");
    });

  
    document.addEventListener("click", (e) => {
        if (!profileLi.contains(e.target)) {
            profileLi.classList.remove("open");
        }
    });

    document.getElementById("navLogoutBtn").addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.removeItem("lmp_user");
        window.location.href = "index.html";
    });
});