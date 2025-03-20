
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

// ------------------------------------------dark mode------------------------------------

    const toggleButton = document.getElementById('dark-mode-toggle');
    
    
    if (localStorage.getItem('theme') === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    }

    toggleButton.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
    const toggleSwitch = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // Apply theme to all relevant elements
    function applyTheme(theme) {
        document.body.className = theme + '-mode';
        
        // Apply to all major components with proper classes
        const elementTypes = [
            '.navbar', '.nav-brand', '.nav-link', '.dropdown-menu', 
            '.footer', '.footer-section', '.footer-left', '.footer-center'
        ];
        
        elementTypes.forEach(type => {
            document.querySelectorAll(type).forEach(element => {
                // Remove any existing theme classes
                element.classList.remove('dark-mode', 'light-mode');
                // Add new theme class
                element.classList.add(theme + '-mode');
            });
        });
        
        // Apply to all links inside specific containers
        document.querySelectorAll('.footer-section ul li a, .dropdown-menu li a').forEach(link => {
            link.classList.remove('dark-mode', 'light-mode');
            link.classList.add(theme + '-mode');
        });
    }
    
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        applyTheme('dark');
    } else {
        applyTheme('light');
    }
    
    toggleSwitch.addEventListener('change', function() {
        if (this.checked) {
            applyTheme('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            applyTheme('light');
            localStorage.setItem('theme', 'light');
        }
    });


