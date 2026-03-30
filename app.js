// Show welcome alert
window.onload = function () {
    alert("Welcome to Job Portal!");
};

// Search filter (works if you add input box)
function searchJobs() {
    let input = document.getElementById("search").value.toLowerCase();
    let jobs = document.getElementsByClassName("job");

    for (let i = 0; i < jobs.length; i++) {
        let text = jobs[i].innerText.toLowerCase();
        if (text.includes(input)) {
            jobs[i].style.display = "block";
        } else {
            jobs[i].style.display = "none";
        }
    }
}

// Save job when clicked
function saveJob(jobName) {
    localStorage.setItem("savedJob", jobName);
    alert(jobName + " saved!");
}

// Show saved job
function showSavedJob() {
    let job = localStorage.getItem("savedJob");
    if (job) {
        document.getElementById("saved").innerHTML =
            "Saved Job: " + job;
    }
}

// Apply button message
function applyJob(jobName) {
    alert("You applied for " + jobName);
}

document.getElementById("submitBtn").addEventListener("click", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;

    if (name && email && phone && address) {
        alert("🎉 Congratulations! You are selected for the job.");
        window.location.href = "selected.html";
    } else {
        alert("⚠️ Please fill all fields");
    }

});