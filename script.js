const base = window.location.pathname.includes("STRONGER-PLAY") 
  ? "/STRONGER-PLAY" 
  : "";

fetch(base + "/games.json")
  .then(response => response.json())
  .then(games => {
    const container = document.getElementById("games-container");
    container.innerHTML = "";

    games.forEach(game => {
      const card = document.createElement("div");
      card.className = "game";

      card.innerHTML = `
        <a href="${base}/games/game.html?url=${encodeURIComponent(game.url)}">
          <img src="${game.thumbnail}">
          <p>${game.name}</p>
        </a>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => {
    document.getElementById("games-container").innerHTML =
      "<p style='color:red'>Failed to load games.json</p>";
    console.error(error);
  });
