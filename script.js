document.addEventListener("DOMContentLoaded", function () {
  const base = "/STRONGER-PLAY";

  fetch(base + "/games.json")
    .then(res => res.json())
    .then(games => {
      const container = document.getElementById("games-container");
      container.innerHTML = "";

      games.forEach(game => {
        const div = document.createElement("div");
        div.className = "game";
        div.innerHTML = `
          <a href="${base}/games/game.html?url=${encodeURIComponent(game.url)}">
            <img src="${game.thumbnail}">
            <p>${game.name}</p>
          </a>
        `;
        container.appendChild(div);
      });
    });
});
