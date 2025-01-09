const suggestions = [
    { name: "Minimalist Baker", action: "Follow" },
    { name: "Marty Bent", action: "Follow" },
];

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".right-sidebar");

    suggestions.forEach((user) => {
        const suggestionDiv = document.createElement("div");
        suggestionDiv.className = "follow-suggestion";

        suggestionDiv.innerHTML = `
            <div>${user.name}</div>
            <button>${user.action}</button>
        `;

        container.appendChild(suggestionDiv);
    });
});
