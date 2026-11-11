var supabaseUrl = "https://tfyrkqehvcpgcxnjbzzp.supabase.co";
var supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRmeXJrcWVodmNwZ2N4bmpienpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE1NDE5MDMsImV4cCI6MjEwNzExNzkwM30.O6IOKNOXxXXsOGv0crQjPA3026ytBnsKCyMbO018e7o";

var db = supabase.createClient(supabaseUrl, supabaseKey);

var voiceHook = "https://n8n-d5pc.srv1980546.hstgr.cloud/webhook/voice";
var nidHook = "https://n8n-d5pc.srv1980546.hstgr.cloud/webhook/nid";

var homePage = {
    worker: "worker-dashboard.html",
    client: "client-dashboard.html",
    admin: "admin-panel.html"
};

var autoApprove = true;

function newJobStatus() {
    return autoApprove ? "open" : "pending";
}

var tradeList = [
    "Mason", "Helper", "Electrician", "Plumber", "Carpenter",
    "Painter", "Cleaner", "Cook", "Loader", "Driver"
];

var districtList = [
    "Bagerhat", "Bandarban", "Barguna", "Barisal", "Bhola",
    "Bogura", "Brahmanbaria", "Chandpur", "Chapainawabganj", "Chattogram",
    "Chuadanga", "Comilla", "Coxsbazar", "Dhaka", "Dinajpur",
    "Faridpur", "Feni", "Gaibandha", "Gazipur", "Gopalganj",
    "Habiganj", "Jamalpur", "Jashore", "Jhalakathi", "Jhenaidah",
    "Joypurhat", "Khagrachhari", "Khulna", "Kishoreganj", "Kurigram",
    "Kushtia", "Lakshmipur", "Lalmonirhat", "Madaripur", "Magura",
    "Manikganj", "Meherpur", "Moulvibazar", "Munshiganj", "Mymensingh",
    "Naogaon", "Narail", "Narayanganj", "Narsingdi", "Natore",
    "Netrokona", "Nilphamari", "Noakhali", "Pabna", "Panchagarh",
    "Patuakhali", "Pirojpur", "Rajbari", "Rajshahi", "Rangamati",
    "Rangpur", "Satkhira", "Shariatpur", "Sherpur", "Sirajganj",
    "Sunamganj", "Sylhet", "Tangail", "Thakurgaon"
];

function saveUser(user) {
    localStorage.setItem("lmp_user", JSON.stringify(user));
}

function currentUser() {
    var data = localStorage.getItem("lmp_user");

    if (data == null) {
        return null;
    }

    return JSON.parse(data);
}

function logout() {
    localStorage.removeItem("lmp_user");
    window.location.href = "login.html";
}

function requireRole(allowed) {
    var user = currentUser();

    if (user == null) {
        window.location.href = "login.html";
        return null;
    }

    if (allowed.indexOf(user.role) == -1) {
        window.location.href = homePage[user.role];
        return null;
    }

    return user;
}

var menuLinks = [
    ["index.html", "Home"],
    ["jobs.html", "Jobs"],
    ["find-workers.html", "Find Workers"],
    ["wage-rates.html", "Wage Rates"],
    ["blog.html", "Blog"],
    ["complaints.html", "Help"],
    ["about.html", "About"]
];

function layout(here) {

    var user = currentUser();
    var html = '<a href="index.html" class="brand">Labour Market Place</a><ul class="menu">';

    for (var i = 0; i < menuLinks.length; i++) {
        var mark = (menuLinks[i][0] == here) ? ' class="here"' : '';
        html = html + '<li><a href="' + menuLinks[i][0] + '"' + mark + '>' + menuLinks[i][1] + '</a></li>';
    }

    if (user == null) {
        html = html
            + '<li><a href="login.html">Log in</a></li>'
            + '<li><a href="register.html" class="btn btn-main">Register</a></li>';
    } else {
        html = html
            + '<li><a href="' + homePage[user.role] + '">My page</a></li>'
            + '<li><button type="button" class="btn btn-line" onclick="logout()">Log out</button></li>';
    }

    document.getElementById("nav").innerHTML = html + langButton() + '</ul>';

    document.getElementById("foot").innerHTML =
        "<p>Labour Market Place &mdash; a fair day's work at a fair day's rate.</p>";

    addMicPill();

    applyLanguage();
}

function addMicPill() {

    if (document.getElementById("micFloat") != null) {
        return;
    }

    var pill = document.createElement("a");
    pill.id = "micFloat";
    pill.className = "mic-float";
    pill.href = "register.html?voice=1";
    pill.innerHTML = '<i>' + icon("mic", 24, "#ffffff") + '</i><span>Speak instead</span>';

    document.body.appendChild(pill);
}

function money(amount) {
    return (lang == "bn" ? "\u09F3" : "Tk ") + amount;
}

function val(id) {
    return document.getElementById(id).value.trim();
}

function setText(id, text) {
    document.getElementById(id).textContent = t(text);
}

function showMessage(text, type) {
    var box = document.getElementById("message");
    box.textContent = t(text);
    box.className = "msg " + type;
    box.style.display = "block";
    box.scrollIntoView({ block: "center" });
}

function draw(boxId, rows, makeRow, emptyText) {

    var box = document.getElementById(boxId);

    if (rows == null || rows.length == 0) {
        box.innerHTML = emptyText;
        applyLanguage();
        return;
    }

    var html = "";

    for (var i = 0; i < rows.length; i++) {
        html = html + makeRow(rows[i]);
    }

    box.innerHTML = html;

    applyLanguage();
}

function noRows(columns, text) {
    return '<tr><td colspan="' + columns + '" class="empty">' + text + '</td></tr>';
}

async function countRows(table, column, value) {
    var result = await db.from(table).select("id", { count: "exact", head: true }).eq(column, value);
    return result.count;
}

function fillList(boxId, list, firstLine) {

    var html = '<option value="">' + firstLine + '</option>';

    for (var i = 0; i < list.length; i++) {
        html = html + '<option value="' + list[i] + '">' + list[i] + '</option>';
    }

    document.getElementById(boxId).innerHTML = html;

    applyLanguage();
}

function stampFor(status) {

    if (status == "open" || status == "accepted" || status == "done") {
        return "good";
    }

    if (status == "rejected") {
        return "bad";
    }

    if (status == "closed") {
        return "off";
    }

    return "wait";
}

function area(row) {
    return (row.upazila || "-") + ", " + (row.district || "-");
}

function idFromUrl() {
    return new URLSearchParams(window.location.search).get("id");
}

function starBar(score) {

    if (score == null) {
        return '<span class="dim">no rating yet</span>';
    }

    var full = Math.round(score);
    var line = "";

    for (var i = 1; i <= 5; i++) {
        line = line + (i <= full ? "★" : "☆");
    }

    return '<span class="stars">' + line + '</span> ' + score.toFixed(1);
}

async function averageStars(workerIds) {

    var averages = {};

    if (workerIds.length == 0) {
        return averages;
    }

    var result = await db.from("ratings").select("worker_id, stars").in("worker_id", workerIds);
    var rows = result.data;

    if (rows == null) {
        return averages;
    }

    var totals = {};

    for (var i = 0; i < rows.length; i++) {
        var id = rows[i].worker_id;

        if (totals[id] == null) {
            totals[id] = { sum: 0, count: 0 };
        }

        totals[id].sum = totals[id].sum + rows[i].stars;
        totals[id].count = totals[id].count + 1;
    }

    for (var key in totals) {
        averages[key] = totals[key].sum / totals[key].count;
    }

    return averages;
}

async function applyToJob(jobId) {

    var me = currentUser();

    if (me == null) {
        window.location.href = "login.html";
        return false;
    }

    if (me.role != "worker") {
        showMessage("Only a worker can apply to a job.", "error");
        return false;
    }

    var old = await db.from("applications")
        .select("id")
        .eq("job_id", jobId)
        .eq("worker_id", me.id)
        .maybeSingle();

    if (old.data != null) {
        showMessage("You have already applied to this job.", "error");
        return false;
    }

    await db.from("applications").insert({
        job_id: jobId,
        worker_id: me.id,
        worker_name: me.name,
        worker_phone: me.phone
    });

    showMessage("Applied. The employer can see you now.", "success");
    return true;
}
