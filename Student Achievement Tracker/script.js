
let count = 0;
let completed = 0;

let form = document.getElementById("achievementForm");
let title = document.getElementById("title");
let category = document.getElementById("category");
let date = document.getElementById("date");
let description = document.getElementById("description");

let list = document.getElementById("achievementList");
let total = document.getElementById("totalCount");
let completedTotal = document.getElementById("completedCount");

let search = document.getElementById("searchInput");
let filter = document.getElementById("filterCategory");


// Add Achievement
form.addEventListener("submit", function(event) {
    event.preventDefault();

    if (title.value == "" || category.value == "" ||
        date.value == "" || description.value == "") {
        alert("Please fill all fields");
        return;
    }

    let card = document.createElement("div");
    card.className = "achievement-card";

    card.innerHTML = `
        <h3>${title.value}</h3>
        <p>${category.value}</p>
        <p>${date.value}</p>
        <p>${description.value}</p>
        <button class="card-btn complete-btn">Complete</button>
        <button class="card-btn delete-btn">Delete</button>
    `;

    list.appendChild(card);

    count++;
    total.innerText = count;

    let completeBtn = card.querySelector(".complete-btn");
    let deleteBtn = card.querySelector(".delete-btn");

    // Complete Button
    completeBtn.addEventListener("click", function() {
        if (completeBtn.innerText == "Complete") {
            completeBtn.innerText = "Completed";
            completed++;
            card.style.border = "2px solid green";
        } else {
            completeBtn.innerText = "Complete";
            completed--;
            card.style.border = "";
        }

        completedTotal.innerText = completed;
    });

    // Delete Button
    deleteBtn.addEventListener("click", function() {
        if (completeBtn.innerText == "Completed") {
            completed--;
            completedTotal.innerText = completed;
        }

        card.remove();

        count--;
        total.innerText = count;
    });

    form.reset();
});


// Search Achievement
search.addEventListener("input", function() {
    let cards = list.children;

    for (let i = 0; i < cards.length; i++) {
        let heading = cards[i].querySelector("h3");

        if (heading.innerText.toLowerCase().includes(search.value.toLowerCase())) {
            cards[i].style.display = "flex";
        } else {
            cards[i].style.display = "none";
        }
    }
});


// Filter Category
filter.addEventListener("change", function() {
    let cards = list.children;

    for (let i = 0; i < cards.length; i++) {
        let categoryText = cards[i].querySelector("p");

        if (filter.value == "All" || categoryText.innerText == filter.value) {
            cards[i].style.display = "flex";
        } else {
            cards[i].style.display = "none";
        }
    }
});
