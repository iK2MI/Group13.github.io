document.addEventListener("DOMContentLoaded", function () {
    var radioButtons = document.querySelectorAll('input[name="radio-btn"]');
    var index = 0;

    function clickCurrentRadio() {
      radioButtons[index].click();
    }

    function moveToNextRadio() {
      index = (index + 1) % radioButtons.length;
      clickCurrentRadio();
    }

    setInterval(moveToNextRadio, 3000);
    clickCurrentRadio();
});
