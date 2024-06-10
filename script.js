document.addEventListener("DOMContentLoaded", function() {
    var popup = document.getElementById("popup");
    var buttons = document.querySelectorAll(".popupButton"); // Изменено на querySelectorAll для выбора всех кнопок
    var span = document.getElementsByClassName("close")[0];

    buttons.forEach(function(btn) {
        btn.onclick = function() {
            popup.style.display = "block";
        }
    });

    span.onclick = function() {
        popup.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    }

    // Автоматический слайдер
    var slides = document.querySelectorAll(".slides img");
    var currentIndex = 0;

    function showSlide(index) {
        var offset = -index * 100;
        document.querySelector(".slides").style.transform = "translateX(" + offset + "%)";
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    setInterval(nextSlide, 3000); // Смена слайда каждые 3 секунды
});
