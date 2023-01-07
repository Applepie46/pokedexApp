document.addEventListener("DOMContentLoaded", () => {
    const searchForm = document.querySelector(".search-form");
    const searchInput = document.getElementById("seach-bar");

    searchForm.addEventListener("submit", (e) => {
        let errors = [];
        e.preventDefault();
        if (searchInput.value === "") {
            errors.push("You must type something on the field")
        }

        if (errors.length === 0) {
            searchForm.submit()
        }

    })
});