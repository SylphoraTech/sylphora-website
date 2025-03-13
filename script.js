
                // Load first animation for the typing text background
                window.addEventListener('load', () => {
                    lottie.loadAnimation({
                        container: document.getElementById('lottie-bg'),
                        renderer: 'svg',
                        loop: true,
                        autoplay: true,
                        path: 'assets/animation/LWSBC9Kget.json'
                    });
            
                    // Load second animation for the vision section after a slight delay
                    setTimeout(() => {
                        lottie.loadAnimation({
                            container: document.getElementById('vision-animation'),
                            renderer: 'svg',
                            loop: true,
                            autoplay: true,
                            path: 'assets/animation/BZemMKVndX.json'
                        });
                    }, 500); // Delay to avoid overlap
            
                    // Typing effect for the welcome text
                    const text = "Welcome to Sylphora";
                    const typingElement = document.getElementById("typing-text");
                    let index = 0;
            
                    function typeWriter() {
                        if (index < text.length) {
                            typingElement.innerHTML += text.charAt(index);
                            index++;
                            setTimeout(typeWriter, 100);
                        } else {
                            typingElement.classList.add("typing-complete");
                        }
                    }
            
                    typeWriter();
                });
                // ---------------research-----------------
                
            function showTab(tabId) {
        // Hide all tab content
            const tabs = document.querySelectorAll('.tab-content');
            tabs.forEach(tab => tab.classList.remove('active'));

        // Show the selected tab content
        document.getElementById(tabId).classList.add('active');
    }

    // -----------------------------------------------------
 
    setTimeout(() => {
        lottie.loadAnimation({
            container: document.getElementById('research-animation'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: "assets/animation/Animation - 1741868521757.json"
        });
    }, 500);
// --------------------------------------contact-us----------------------------------
  lottie.loadAnimation({
    container: document.getElementById('contact-animation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'assets/animation/aXFxzl1Itl.json'
  });



