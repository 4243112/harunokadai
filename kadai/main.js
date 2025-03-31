document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('お問い合わせありがとうございます！');
  });


  document.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.project-card');
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }
    });
  });
  

  const track = document.querySelector('.carousel-track');
  let position = 0;
  
  function autoScroll() {
    position -= 400; // 1回でスライドする幅
    if (Math.abs(position) >= track.offsetWidth) {
      position = 0; // 末尾まで行ったらリセット
    }
    track.style.transform = `translateX(${position}px)`;
  }
  
  setInterval(autoScroll, 500); // 3秒ごとに自動スクロール
  