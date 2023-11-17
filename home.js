document.addEventListener("DOMContentLoaded", function () {
    var radioButtons = document.querySelectorAll('input[name="radio-btn"]');
    var currentIndex = 0;

    function clickCurrentRadio() {
      radioButtons[currentIndex].click();
    }

    function moveToNextRadio() {
      currentIndex = (currentIndex + 1) % radioButtons.length;
      clickCurrentRadio();
    }

    setInterval(moveToNextRadio, 4000);
    clickCurrentRadio();
});
