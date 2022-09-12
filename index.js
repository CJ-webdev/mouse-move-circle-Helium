// Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)

// Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e")

// S'assurer que les liens sont clickables

// Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)

window.addEventListener("mousemove", (e) => {
  circleBlue.style.left = e.pageX + "px";
  circleBlue.style.top = e.pageY + "px";

  circleWhite.style.left = e.pageX + "px";
  circleWhite.style.top = e.pageY + "px";

  circleBlack.style.left = e.pageX + "px";
  circleBlack.style.top = e.pageY + "px";
});
