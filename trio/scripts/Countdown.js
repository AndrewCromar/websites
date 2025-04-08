function pad(n, width = 2) {
    return n.toString().padStart(width, '0');
  }
  
  function startCountdown(el, endDateStr) {
    const endDate = new Date(endDateStr).getTime();
  
    function update() {
      const now = new Date().getTime();
      let diff = endDate - now;
  
      if (diff < 0) {
        el.innerText = "Time's up!";
        return;
      }
  
      const ms = diff % 1000;
      diff = Math.floor(diff / 1000);
  
      const sec = diff % 60;
      diff = Math.floor(diff / 60);
  
      const min = diff % 60;
      diff = Math.floor(diff / 60);
  
      const hrs = diff % 24;
      diff = Math.floor(diff / 24);
  
      const days = diff % 30;
      diff = Math.floor(diff / 30);
  
      const months = diff % 12;
      const years = Math.floor(diff / 12);
  
      el.innerText = `${pad(years)}:${pad(months)}:${pad(days)}:${pad(hrs)}:${pad(min)}:${pad(sec)}:${pad(ms, 3)}`;
    }
  
    setInterval(update, 33);
    update();
  }
  
  // Automatically initialize all countdowns
  window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.countdown').forEach(el => {
      const date = el.getAttribute('data-date');
      if (date) startCountdown(el, date);
    });
  });  