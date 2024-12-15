//Funcion (Pedacito de codigo reutilizable) Una liena (comentario)

/*Comentario
multi
linea*/
function redirigir(url){
    window.location.href = url;
}

var acc = document.getElementsByClassName("accordion");
      var i;

      for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
          this.classList.toggle("active");
          this.parentElement.classList.toggle("active");

          var pannel = this.nextElementSibling;

          if (pannel.style.display === "block") {
            pannel.style.display = "none";
          } else {
            pannel.style.display = "block";
          }
        });
      }


      const carouselInner = document.querySelector('.carousel-inner');
      const items = document.querySelectorAll('.carousel-item');
      const indicators = document.querySelectorAll('.carousel-indicators div');
      let currentIndex = 0;

      function updateCarousel(index) {
          carouselInner.style.transform = `translateX(-${index * 100}%)`;
          indicators.forEach(ind => ind.classList.remove('active'));
          indicators[index].classList.add('active');
      }

      document.querySelector('.prev').addEventListener('click', () => {
          currentIndex = (currentIndex === 0) ? items.length - 1 : currentIndex - 1;
          updateCarousel(currentIndex);
      });

      document.querySelector('.next').addEventListener('click', () => {
          currentIndex = (currentIndex === items.length - 1) ? 0 : currentIndex + 1;
          updateCarousel(currentIndex);
      });

      indicators.forEach(indicator => {
          indicator.addEventListener('click', () => {
              currentIndex = parseInt(indicator.getAttribute('data-index'));
              updateCarousel(currentIndex);
          });
      });