document.addEventListener("DOMContentLoaded", function () {
    var header = document.querySelector('header');
    header.classList.add('fade-in');
  
    var buttons = document.querySelectorAll('button');
    buttons.forEach(function (button) {
      button.addEventListener('mouseover', function () {
        button.style.backgroundColor = '#c56b8a';
      });
      button.addEventListener('mouseout', function () {
        button.style.backgroundColor = ''; 
      });
    });

    var form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
      event.preventDefault(); 
      alert('Terima kasih! Pesanan Anda telah diterima. Silahkan lanjutkan pembayaran');
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#order form");
    form.addEventListener("submit", function (event) {
      event.preventDefault(); 

      const name = document.getElementById("name").value;
      const order = document.getElementById("choose_order").value;
      const deliveryDate = document.getElementById("delivery_date").value;
      const phoneNumber = document.getElementById("phone_number").value;
  
      form.reset();
    });

  });

    document.addEventListener("DOMContentLoaded", function () {
        var selectOrder = document.getElementById("choose_order");

        var pricelistItems = document.querySelectorAll("#pricelist h4");

        pricelistItems.forEach(function (item) {
            var option = document.createElement("option");
            option.value = item.textContent;
            option.text = item.textContent;
            selectOrder.appendChild(option);
        });
    });


document.addEventListener("DOMContentLoaded", function () {
    const pricelistImages = document.querySelectorAll("#pricelist img");
  
    pricelistImages.forEach(function (image) {
      image.addEventListener("mouseenter", function () {
        zoomIn(image);
      });
  
      image.addEventListener("mouseleave", function () {
        zoomOut(image);
      });
    });
  
    function zoomIn(image) {
      image.classList.add("zoom-in");
    }
  
    function zoomOut(image) {
      image.classList.remove("zoom-in");
    }
  });

  document.addEventListener('DOMContentLoaded', function () {
    // Ambil elemen gambar dan modal
    var images = document.querySelectorAll('.pricelist img');
    var modal = document.getElementById('imageModal');
    var modalImage = document.getElementById('modalImage');

    // Tambahkan event listener untuk setiap gambar
    images.forEach(function (image) {
        image.addEventListener('click', function () {
            // Setel sumber gambar modal
            modalImage.src = image.src;

            // Tampilkan modal
            modal.style.display = 'block';
        });
    });

    // Event listener untuk menutup modal saat diklik di luar gambar
    modal.addEventListener('click', function () {
        modal.style.display = 'none';
    });
});

document.addEventListener("DOMContentLoaded", function () {
  // Efek Parallax untuk elemen header
  window.addEventListener("scroll", function () {
      const header = document.getElementById("header");
      const scrollPosition = window.scrollY;

      header.style.backgroundPositionY = -scrollPosition * 0.5 + "px";
  });

  // Animasi Scroll untuk elemen pricelist
  const pricelistSection = document.getElementById("pricelist");
  const pricelistItems = document.querySelectorAll("#pricelist li");

  window.addEventListener("scroll", function () {
      const scrollPosition = window.scrollY;
      const pricelistPosition = pricelistSection.offsetTop;

      if (scrollPosition > pricelistPosition - window.innerHeight / 2) {
          pricelistItems.forEach(function (item, index) {
              setTimeout(function () {
                  item.classList.add("fade-in");
              }, index * 200); // Animasi setiap item dengan selang waktu 200ms
          });
      }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const aboutUsImage = document.querySelector("#aboutus img");

  if (aboutUsImage) {
    aboutUsImage.addEventListener("mouseenter", function () {
      zoomIn(aboutUsImage);
    });

    aboutUsImage.addEventListener("mouseleave", function () {
      zoomOut(aboutUsImage);
    });
  }

  function zoomIn(image) {
    image.classList.add("zoom-in");
  }

  function zoomOut(image) {
    image.classList.remove("zoom-in");
  }
});
