document.addEventListener('DOMContentLoaded', function() {
    var yearSpan = document.createElement('span');
    yearSpan.textContent = new Date().getFullYear();
    document.querySelector('footer p').appendChild(yearSpan);
  });
  