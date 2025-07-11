
    const messages = [
      
     
      "Web Developer 💻",
      "Graphic Design",
      ""
    ];

    let msgIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const speed = 100; // typing speed
    const delayBetweenWords = 1500; // delay before deleting

    function typeLoop() {
      const currentMessage = messages[msgIndex];
      const display = document.getElementById("autoTyper");

      if (isDeleting) {
        display.textContent = currentMessage.substring(0, charIndex--);
      } else {
        display.textContent = currentMessage.substring(0, charIndex++);
      }

      let currentSpeed = speed;

      if (!isDeleting && charIndex === currentMessage.length + 1) {
        isDeleting = true;
        currentSpeed = delayBetweenWords;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        msgIndex = (msgIndex + 1) % messages.length;
        currentSpeed = 400;
      }

      setTimeout(typeLoop, currentSpeed);
    }

    // Start the loop
    typeLoop();
