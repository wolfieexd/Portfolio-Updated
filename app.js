class PortfolioApp {
    // UPDATED: The constructor now calls updateTimeDisplay()
    constructor() {
        this.init();
        this.setupEventListeners();
        this.setupThemeSystem();
        this.setupChatbot();
        this.setupResumeModal();
        this.updateTimeDisplay(); // Changed from updateUTCTime
        this.setupScrollEffects();
        this.setupNavbar();
    }

    // UPDATED: The init interval now calls updateTimeDisplay()
    init() {
        this.updateTheme();
        setInterval(() => {
            this.updateTimeDisplay(); // Changed from updateUTCTime
            this.updateTheme();
        }, 1000); // Update every second
    }

    setupEventListeners() {
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
                const targetId = link.getAttribute('href').substring(1);
                if (document.getElementById(targetId)) {
                    e.preventDefault();
                    const targetElement = document.getElementById(targetId);
                    const navbarHeight = document.getElementById('navbar')?.offsetHeight || 70;
                    const elementPosition = targetElement.offsetTop - navbarHeight - 20;
                    window.scrollTo({
                        top: elementPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });

        const backToTopBtn = document.getElementById('back-to-top');
        if (backToTopBtn) {
            backToTopBtn.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }

        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleContactForm(e.target);
            });
        }

        window.addEventListener('scroll', () => {
            this.handleScroll();
        });
    }
    
    setupNavbar() {
        const navbar = document.getElementById('navbar');
        const navToggle = document.getElementById('nav-toggle');
        const navMenuMobile = document.getElementById('nav-menu-mobile');
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
        const allNavLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

        let lastScrollTop = 0;
        let scrollTimeout;

        const updateNavbarOnScroll = () => {
            if (!navbar) return;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }

            if (scrollTop > lastScrollTop) {
                if (scrollTop > 100) {
                    navbar.style.transform = 'translateY(-100%)';
                }
            } else {
                navbar.style.transform = 'translateY(0)';
            }

            lastScrollTop = scrollTop;

            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                if (navbar) navbar.style.transform = 'translateY(0)';
            }, 150);
        };

        let scrollThrottle = false;
        window.addEventListener('scroll', () => {
            if (!scrollThrottle) {
                requestAnimationFrame(() => {
                    updateNavbarOnScroll();
                    this.updateActiveNavLinkOnScroll();
                    scrollThrottle = false;
                });
                scrollThrottle = true;
            }
        });

        if (navToggle && navMenuMobile) {
            navToggle.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const isActive = navToggle.classList.toggle('active');
                navMenuMobile.classList.toggle('active', isActive);
                document.body.style.overflow = isActive ? 'hidden' : '';
            });
        }

        document.addEventListener('click', (e) => {
            if (navMenuMobile && navMenuMobile.classList.contains('active')) {
                if (!navMenuMobile.contains(e.target) && !navToggle.contains(e.target)) {
                    navToggle.classList.remove('active');
                    navMenuMobile.classList.remove('active');
                    document.body.style.overflow = '';
                }
            }
        });

        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenuMobile.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        allNavLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href')?.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    const navbarHeight = navbar ? navbar.offsetHeight : 70;
                    const elementPosition = targetElement.offsetTop - navbarHeight - 20;

                    window.scrollTo({
                        top: elementPosition,
                        behavior: 'smooth'
                    });
                    this.updateActiveNavLink(targetId);
                }
            });
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenuMobile && navMenuMobile.classList.contains('active')) {
                navToggle.classList.remove('active');
                navMenuMobile.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
    
    updateActiveNavLinkOnScroll() {
        const sections = document.querySelectorAll('section[id]');
        const navbarHeight = document.getElementById('navbar')?.offsetHeight || 70;
        let currentSectionId = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - navbarHeight - 50;
            if (window.scrollY >= sectionTop) {
                currentSectionId = section.getAttribute('id');
            }
        });

        this.updateActiveNavLink(currentSectionId);
    }
    
    updateActiveNavLink(activeId) {
        document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${activeId}`) {
                link.classList.add('active');
            }
        });
    }

    setupResumeModal() {
        const viewResumeBtn = document.getElementById('view-resume-btn');
        const resumeModal = document.getElementById('resume-modal');
        const resumeModalClose = document.getElementById('resume-modal-close');
        const resumeModalCloseBtn = document.getElementById('resume-modal-close-btn');
        const resumeModalOverlay = document.querySelector('.resume-modal-overlay');
        const downloadResumeBtn = document.getElementById('download-resume-btn');

        const openModal = () => {
            if (resumeModal) {
                resumeModal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            }
        };

        const closeModal = () => {
            if (resumeModal) {
                resumeModal.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }
        };

        if (viewResumeBtn) {
            viewResumeBtn.addEventListener('click', (e) => {
                e.preventDefault();
                openModal();
            });
        }
        if (resumeModalClose) resumeModalClose.addEventListener('click', closeModal);
        if (resumeModalCloseBtn) resumeModalCloseBtn.addEventListener('click', closeModal);
        if (resumeModalOverlay) resumeModalOverlay.addEventListener('click', closeModal);

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && resumeModal && !resumeModal.classList.contains('hidden')) {
                closeModal();
            }
        });

        if (downloadResumeBtn) {
            downloadResumeBtn.addEventListener('click', () => {
                const link = document.createElement('a');
                link.href = 'Sujan_S-Resume.pdf';
                link.download = 'Sujan_S-Resume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                this.showNotification('Resume download started!', 'success');
            });
        }
    }

    setupThemeSystem() {
        this.updateTheme();
    }

    // UPDATED: Function renamed to updateTimeDisplay and now shows local time
    updateTimeDisplay() {
        const now = new Date();
        const localTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
        const timeElement = document.getElementById('utc-time'); // The element ID is still 'utc-time' in the HTML
        if (timeElement) {
            timeElement.textContent = `Local Time: ${localTime}`;
        }
    }

    // UPDATED: Theme is now based on local hours (now.getHours())
    updateTheme() {
        const now = new Date();
        const localHour = now.getHours(); // Use local hour
        const themeTextElement = document.getElementById('theme-text');
        
        // Light theme: 06:00 (6 AM) to 17:59 (5:59 PM)
        // Dark theme: 18:00 (6 PM) to 05:59 (5:59 AM)
        const newTheme = (localHour >= 6 && localHour < 18) ? 'light' : 'dark';

        document.body.setAttribute('data-color-scheme', newTheme);
        if (themeTextElement) {
            themeTextElement.textContent = `${newTheme.charAt(0).toUpperCase() + newTheme.slice(1)} Theme`;
        }
    }

    setupScrollEffects() {
        const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.card, .achievement-item, .certification-item, .social-card').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'all 0.6s ease';
            observer.observe(el);
        });
    }

    handleScroll() {
        const backToTopBtn = document.getElementById('back-to-top');
        if (backToTopBtn) {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        }
    }

    async handleContactForm(form) {
        const name = form.querySelector('input[type="text"]').value;
        const email = form.querySelector('input[type="email"]').value;
        const message = form.querySelector('textarea').value;
        if (!name || !email || !message) {
            this.showNotification('Please fill in all fields', 'error');
            return;
        }

        try {
            const response = await fetch(form.action, { method: 'POST', headers: { 'Accept': 'application/json' }, body: new FormData(form) });
            if (response.ok) {
                this.showNotification('Message sent successfully!', 'success');
                form.reset();
            } else {
                this.showNotification('Failed to send message. Please try again.', 'error');
            }
        } catch (error) {
            this.showNotification('An error occurred. Please try again.', 'error');
        }
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification--${type}`;
        notification.textContent = message;
        document.body.appendChild(notification);
        setTimeout(() => notification.classList.add('visible'), 10);
        setTimeout(() => {
            notification.classList.remove('visible');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    setupChatbot() {
        const chatbotToggle = document.getElementById('chatbot-toggle');
        const chatbotWindow = document.getElementById('chatbot-window');
        const chatbotClose = document.getElementById('chatbot-close');
        const chatbotInput = document.getElementById('chatbot-input');
        const chatbotSend = document.getElementById('chatbot-send');

        if (chatbotToggle && chatbotWindow) {
            chatbotToggle.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                chatbotWindow.classList.toggle('hidden');
                if (!chatbotWindow.classList.contains('hidden') && chatbotInput) {
                    setTimeout(() => chatbotInput.focus(), 100);
                }
            });
        }

        if (chatbotClose) chatbotClose.addEventListener('click', () => chatbotWindow.classList.add('hidden'));
        if (chatbotSend) chatbotSend.addEventListener('click', () => this.sendChatMessage());
        if (chatbotInput) chatbotInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') this.sendChatMessage(); });
        
        document.addEventListener('click', (e) => {
            if (chatbotWindow && !chatbotWindow.classList.contains('hidden')) {
                if (!chatbotWindow.contains(e.target) && !chatbotToggle.contains(e.target)) {
                    chatbotWindow.classList.add('hidden');
                }
            }
        });
        
        setTimeout(() => {
            this.addChatMessage("Hello! I'm ALPHA, Sujan's AI assistant. I can help you with questions about Sujan's background, or chat about anything else you'd like to know!", 'bot');
        }, 1000);
    }

    async sendChatMessage() {
        const chatbotInput = document.getElementById('chatbot-input');
        const message = chatbotInput ? chatbotInput.value.trim() : '';
        if (!message) return;
        this.addChatMessage(message, 'user');
        chatbotInput.value = '';
        this.showTypingIndicator();
        try {
            const botReply = await this.callGroqAPI(message);
            this.hideTypingIndicator();
            this.addChatMessage(botReply, 'bot');
        } catch (error) {
            console.error('API Error:', error);
            this.hideTypingIndicator();
            const fallbackResponse = this.getFallbackResponse(message);
            this.addChatMessage(fallbackResponse, 'bot');
        }
    }

    async callGroqAPI(userMessage) {
        const requestBody = {
            model: 'meta-llama/llama-4-scout-17b-16e-instruct',
            messages: [{
                role: "system",
                content: "You are ALPHA, an AI assistant for Sujan S's portfolio. You can answer questions about Sujan (a Computer Science student at SRM IST, specializing in GenAI, cybersecurity, and full-stack development), but you can also help with any other topics the user asks about. Be helpful, friendly, and informative."
            }, {
                role: "user",
                content: userMessage
            }],
            max_tokens: 512,
            temperature: 0.7
        };
        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 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'
            },
            body: JSON.stringify(requestBody)
        });
        if (!response.ok) throw new Error(`API request failed: ${response.status}`);
        const data = await response.json();
        return data.choices[0].message.content.trim();
    }

    getFallbackResponse(userMessage) {
        const message = userMessage.toLowerCase();
        if (message.includes('sujan') || message.includes('about') || message.includes('background')) return "I'm having trouble connecting to my AI brain right now, but I can tell you that Sujan is a Computer Science student at SRM IST specializing in GenAI, cybersecurity, and full-stack development. He has experience with Python, JavaScript, AI tools like ChatGPT, and has worked on projects ranging from penetration testing tools to fitness trackers!";
        if (message.includes('project') || message.includes('work')) return "While I'm experiencing some connectivity issues, I can share that Sujan has worked on exciting projects like an AI-powered target recognition system, a full-stack fitness tracker called Nutri-Fit, and various cybersecurity tools. Check out the Projects section for more details!";
        if (message.includes('skill') || message.includes('technology')) return "Despite the connection issue, I can tell you Sujan's skills include Python, JavaScript, Java, AI tools like ChatGPT and GitHub Copilot, cybersecurity techniques, and full-stack development. He's also certified in various technologies from Oracle, Cisco, and other institutions.";
        if (message.includes('contact') || message.includes('reach')) return "Even with the technical difficulties, I can help you connect with Sujan! You can reach him at sujans1411@gmail.com or +91 8015139701. Don't forget to check out his social media links in the Follow Me section!";
        return "I'm sorry, I'm experiencing some connectivity issues with my AI capabilities right now. Please try again in a moment, or feel free to explore Sujan's portfolio to learn more about his background, projects, and skills!";
    }

    addChatMessage(message, sender) {
        const chatbotMessages = document.getElementById('chatbot-messages');
        if (!chatbotMessages) return;
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        messageDiv.innerHTML = `<div class="message-content">${message}</div>`;
        chatbotMessages.appendChild(messageDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    showTypingIndicator() {
        const chatbotMessages = document.getElementById('chatbot-messages');
        if (!chatbotMessages || document.getElementById('typing-indicator')) return;
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot-message typing-indicator';
        typingDiv.id = 'typing-indicator';
        typingDiv.innerHTML = `<div class="message-content"><div class="typing-dots"><span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span></div></div>`;
        chatbotMessages.appendChild(typingDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    hideTypingIndicator() {
        const typingIndicator = document.getElementById('typing-indicator');
        if (typingIndicator) typingIndicator.remove();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new PortfolioApp();
});
