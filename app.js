window.addEventListener("load", function () {
  new Glider(document.querySelector(".carousel_lista"), {
    slidesToShow: 3,
    slidesToScroll: 3,
    // draggable: true,
    dots: ".carousel_indicadores",
    arrows: {
      prev: ".carousel_anterior",
      next: ".carousel_siguiente",
    },
  });
});
