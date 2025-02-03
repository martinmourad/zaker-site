// Custom JavaScript can go here for more advanced interactions

document.addEventListener('DOMContentLoaded', function() {
    // Example: Simple alert when the user clicks a feature box
    const featureBoxes = document.querySelectorAll('.feature-box');
    featureBoxes.forEach(box => {
      box.addEventListener('click', () => {
        alert('للعلم المحاضره هتتشال بعد تارخ نزلها 6 ايام');
      });
    });
  });
  