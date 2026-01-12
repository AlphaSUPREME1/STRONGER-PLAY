const repo = window.location.pathname.split("/")[1]; 
const base = "/" + repo;

fetch(base + "/games.json")
  .then(res => {
    if (!res.ok) throw new Error("HTTP " + res.status);
    return res.json();
  })
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
  })
  .catch(err => {
    document.getElementById("games-container").innerHTML =
      "<p style='color:red'>Cannot load games.json</p>";
    console.error("Load error:", err);
  });
