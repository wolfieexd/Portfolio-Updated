// Portfolio Website JavaScript - Enhanced with UTC Theme Switching and API-Powered ALPHA Chatbot

class PortfolioApp {
    constructor() {
        this.init();
        this.setupEventListeners();
        this.setupThemeSystem();
        this.setupChatbot();
        this.setupResumeModal();
        this.updateUTCTime();
        this.setupScrollEffects();
    }

    init() {
        this.updateTheme();
        setInterval(() => {
            this.updateUTCTime();
            this.updateTheme();
        }, 1000); // Update every second
    }

    setupEventListeners() {
        // Navigation smooth scrolling - Fixed
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1); // Remove the #
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    const navbarHeight = document.querySelector('.navbar').offsetHeight;
                    const elementPosition = targetElement.offsetTop - navbarHeight - 20;

                    window.scrollTo({
                        top: elementPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Hero section buttons smooth scrolling
        document.querySelectorAll('.hero-links a[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    const navbarHeight = document.querySelector('.navbar').offsetHeight;
                    const elementPosition = targetElement.offsetTop - navbarHeight - 20;

                    window.scrollTo({
                        top: elementPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Back to top button
        const backToTopBtn = document.getElementById('back-to-top');
        if (backToTopBtn) {
            backToTopBtn.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }

        // Contact form submission
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleContactForm(e.target);
            });
        }

        // Scroll events
        window.addEventListener('scroll', () => {
            this.handleScroll();
        });
    }

    setupResumeModal() {
        const viewResumeBtn = document.getElementById('view-resume-btn');
        const resumeModal = document.getElementById('resume-modal');
        const resumeModalClose = document.getElementById('resume-modal-close');
        const resumeModalCloseBtn = document.getElementById('resume-modal-close-btn');
        const resumeModalOverlay = document.querySelector('.resume-modal-overlay');
        const downloadResumeBtn = document.getElementById('download-resume-btn');

        // Open resume modal
        if (viewResumeBtn && resumeModal) {
            viewResumeBtn.addEventListener('click', (e) => {
                e.preventDefault();
                resumeModal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            });
        }

        // Close resume modal functions
        const closeModal = () => {
            if (resumeModal) {
                resumeModal.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }
        };

        // Close modal events
        if (resumeModalClose) {
            resumeModalClose.addEventListener('click', closeModal);
        }

        if (resumeModalCloseBtn) {
            resumeModalCloseBtn.addEventListener('click', closeModal);
        }

        if (resumeModalOverlay) {
            resumeModalOverlay.addEventListener('click', closeModal);
        }

        // ESC key to close modal
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && resumeModal && !resumeModal.classList.contains('hidden')) {
                closeModal();
            }
        });

        // Download resume button
        if (downloadResumeBtn) {
            downloadResumeBtn.addEventListener('click', () => {
                // Create a link to download the resume PDF
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
        // UTC-based theme switching
        this.updateTheme();
    }

    updateUTCTime() {
        const now = new Date();
        // Format local date and time
        const localYear = now.getFullYear();
        const localMonth = String(now.getMonth() + 1).padStart(2, '0');
        const localDay = String(now.getDate()).padStart(2, '0');
        const localHours = String(now.getHours()).padStart(2, '0');
        const localMinutes = String(now.getMinutes()).padStart(2, '0');
        const localSeconds = String(now.getSeconds()).padStart(2, '0');
        const localDateTime = `${localYear}-${localMonth}-${localDay} ${localHours}:${localMinutes}:${localSeconds}`;
        const utcTimeElement = document.getElementById('utc-time');
        if (utcTimeElement) {
            utcTimeElement.textContent = `Local: ${localDateTime}`;
        }
    }

    updateTheme() {
        const now = new Date();
        const utcHour = now.getUTCHours();
        const themeTextElement = document.getElementById('theme-text');

        // Light theme: 6:00 AM - 6:00 PM UTC
        // Dark theme: 6:00 PM - 6:00 AM UTC
        if (utcHour >= 6 && utcHour < 18) {
            // Light theme
            document.body.setAttribute('data-color-scheme', 'light');
            if (themeTextElement) {
                themeTextElement.textContent = 'Light Theme';
            }
        } else {
            // Dark theme
            document.body.setAttribute('data-color-scheme', 'dark');
            if (themeTextElement) {
                themeTextElement.textContent = 'Dark Theme';
            }
        }
    }

    setupScrollEffects() {
        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe cards and sections
        document.querySelectorAll('.card, .achievement-item, .certification-item, .social-card').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'all 0.6s ease';
            observer.observe(el);
        });
    }

    handleScroll() {
        const backToTopBtn = document.getElementById('back-to-top');
        const navbar = document.getElementById('navbar');

        // Show/hide back to top button
        if (backToTopBtn) {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        }

        // Add shadow to navbar on scroll
        if (navbar) {
            if (window.pageYOffset > 10) {
                navbar.style.boxShadow = 'var(--shadow-sm)';
            } else {
                navbar.style.boxShadow = 'none';
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
            const response = await fetch(form.action, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json'
                },
                body: new FormData(form)
            });

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
        notification.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            background: var(--color-${type === 'success' ? 'success' : type === 'error' ? 'error' : 'info'});
            color: var(--color-btn-primary-text);
            padding: 12px 20px;
            border-radius: 8px;
            z-index: 9999;
            box-shadow: var(--shadow-lg);
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }

    // API-Powered ALPHA Chatbot Implementation
    setupChatbot() {
        const chatbotToggle = document.getElementById('chatbot-toggle');
        const chatbotWindow = document.getElementById('chatbot-window');
        const chatbotClose = document.getElementById('chatbot-close');
        const chatbotInput = document.getElementById('chatbot-input');
        const chatbotSend = document.getElementById('chatbot-send');

        // Fixed: Ensure elements exist before adding event listeners
        if (chatbotToggle && chatbotWindow) {
            // Toggle chatbot window
            chatbotToggle.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                chatbotWindow.classList.toggle('hidden');
                if (!chatbotWindow.classList.contains('hidden') && chatbotInput) {
                    setTimeout(() => chatbotInput.focus(), 100);
                }
            });
        }

        if (chatbotClose && chatbotWindow) {
            // Close chatbot
            chatbotClose.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                chatbotWindow.classList.add('hidden');
            });
        }

        if (chatbotSend) {
            // Send message
            chatbotSend.addEventListener('click', (e) => {
                e.preventDefault();
                this.sendChatMessage();
            });
        }

        if (chatbotInput) {
            // Enter key to send
            chatbotInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    this.sendChatMessage();
                }
            });
        }

        // Close chatbot when clicking outside
        document.addEventListener('click', (e) => {
            if (chatbotWindow && !chatbotWindow.classList.contains('hidden')) {
                if (!chatbotWindow.contains(e.target) && !chatbotToggle.contains(e.target)) {
                    chatbotWindow.classList.add('hidden');
                }
            }
        });

        // Add initial welcome message
        setTimeout(() => {
            this.addChatMessage("Hello! I'm ALPHA, Sujan's AI assistant. I can help you with questions about Sujan's background, or chat about anything else you'd like to know!", 'bot');
        }, 1000);
    }

    async sendChatMessage() {
        const chatbotInput = document.getElementById('chatbot-input');
        const message = chatbotInput ? chatbotInput.value.trim() : '';

        if (!message) return;

        // Add user message
        this.addChatMessage(message, 'user');
        chatbotInput.value = '';

        // Show typing indicator
        this.showTypingIndicator();

        try {
            // Make API call to Groq
            const response = await this.callGroqAPI(message);

            // Hide typing indicator
            this.hideTypingIndicator();

            // Add bot response
            this.addChatMessage(response, 'bot');
        } catch (error) {
            console.error('API Error:', error);

            // Hide typing indicator
            this.hideTypingIndicator();

            // Show fallback response
            const fallbackResponse = this.getFallbackResponse(message);
            this.addChatMessage(fallbackResponse, 'bot');
        }
    }

    async callGroqAPI(userMessage) {
        const requestBody = {
            model: 'meta-llama/llama-4-scout-17b-16e-instruct',
            messages: [
                {
                    role: "system",
                    content: "You are ALPHA, an AI assistant for Sujan S's portfolio. You can answer questions about Sujan (a Computer Science student at SRM IST, specializing in GenAI, cybersecurity, and full-stack development), but you can also help with any other topics the user asks about. Be helpful, friendly, and informative."
                },
                {
                    role: "user",
                    content: userMessage
                }
            ],
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

        if (!response.ok) {
            throw new Error(`API request failed: ${response.status}`);
        }

        const data = await response.json();
        return data.choices[0].message.content.trim();
    }

    getFallbackResponse(userMessage) {
        const message = userMessage.toLowerCase();

        // Portfolio-related fallbacks
        if (message.includes('sujan') || message.includes('about') || message.includes('background')) {
            return "I'm having trouble connecting to my AI brain right now, but I can tell you that Sujan is a Computer Science student at SRM IST specializing in GenAI, cybersecurity, and full-stack development. He has experience with Python, JavaScript, AI tools like ChatGPT, and has worked on projects ranging from penetration testing tools to fitness trackers!";
        }

        if (message.includes('project') || message.includes('work')) {
            return "While I'm experiencing some connectivity issues, I can share that Sujan has worked on exciting projects like an AI-powered target recognition system, a full-stack fitness tracker called Nutri-Fit, and various cybersecurity tools. Check out the Projects section for more details!";
        }

        if (message.includes('skill') || message.includes('technology')) {
            return "Despite the connection issue, I can tell you Sujan's skills include Python, JavaScript, Java, AI tools like ChatGPT and GitHub Copilot, cybersecurity techniques, and full-stack development. He's also certified in various technologies from Oracle, Cisco, and other institutions.";
        }

        if (message.includes('contact') || message.includes('reach')) {
            return "Even with the technical difficulties, I can help you connect with Sujan! You can reach him at sujans1411@gmail.com or +91 8015139701. Don't forget to check out his social media links in the Follow Me section!";
        }

        // General fallback
        return "I'm sorry, I'm experiencing some connectivity issues with my AI capabilities right now. Please try again in a moment, or feel free to explore Sujan's portfolio to learn more about his background, projects, and skills!";
    }

    addChatMessage(message, sender) {
        const chatbotMessages = document.getElementById('chatbot-messages');
        if (!chatbotMessages) return;

        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;

        const messageContent = document.createElement('div');
        messageContent.className = 'message-content';
        messageContent.textContent = message;

        messageDiv.appendChild(messageContent);
        chatbotMessages.appendChild(messageDiv);

        // Scroll to bottom
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    showTypingIndicator() {
        const chatbotMessages = document.getElementById('chatbot-messages');
        if (!chatbotMessages) return;

        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot-message typing-indicator';
        typingDiv.id = 'typing-indicator';
        typingDiv.innerHTML = `
            <div class="message-content">
                <div class="typing-dots">
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                </div>
                <span style="margin-left: 8px; font-style: italic; color: var(--color-text-secondary);">ALPHA is thinking...</span>
            </div>
        `;

        chatbotMessages.appendChild(typingDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    hideTypingIndicator() {
        const typingIndicator = document.getElementById('typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioApp();
});

// Handle page visibility change for better performance
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Page is hidden, reduce unnecessary operations
        console.log('Page hidden - reducing operations');
    } else {
        // Page is visible, resume normal operations
        console.log('Page visible - resuming operations');
    }
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    // ESC key to close chatbot
    if (e.key === 'Escape') {
        const chatbotWindow = document.getElementById('chatbot-window');
        if (chatbotWindow && !chatbotWindow.classList.contains('hidden')) {
            chatbotWindow.classList.add('hidden');
        }
    }
});
