/* ==========================================
   CLACKAMAS UNITED MASTER THEME ENGINE
   ========================================== */

const siteTheme = {

    injectStyles: function() {
        const styles = `
            @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500;700&family=Inter:wght@400;700;900&display=swap');
            :root { --cu-red: #E21E26; --cu-black: #111111; }
            body { font-family: 'Inter', sans-serif; margin: 0; background: white; }
            .font-display { font-family: 'Oswald', sans-serif; }
            .nav-dropdown { display: none; position: absolute; top: 100%; left: 0; min-width: 260px; background: #111111; border-top: 4px solid var(--cu-red); z-index: 50; }
            .group:hover > .nav-dropdown { display: block; }
            .nav-submenu { display: none; position: absolute; top: 0; left: 100%; min-width: 240px; background: #1a1a1a; border-left: 2px solid var(--cu-red); }
            .sub-group:hover > .nav-submenu { display: block; }
            .hero-title { line-height: 0.85; letter-spacing: -0.05em; }
        `;
        const styleSheet = document.createElement("style");
        styleSheet.innerText = styles;
        document.head.appendChild(styleSheet);
    },

    injectNav: function(basePath) {
        const logoPath = basePath + "images/club-logo.png";
        const navHTML = `
        <nav class="bg-[#111111] sticky top-0 z-[100] shadow-2xl border-b border-white/10">
            <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center w-full">
                <a href="${basePath}index.html" class="flex items-center space-x-4 shrink-0">
                    <img src="${logoPath}" alt="Logo" class="h-10 w-auto object-contain">
                    <div class="text-white font-display font-bold text-2xl uppercase leading-none tracking-tight">Clackamas <span class="text-[#E21E26]">United</span></div>
                </a>
                
                <div class="hidden lg:flex flex-1 justify-end items-center font-bold text-xs text-white uppercase tracking-widest">
                    <div class="flex items-center space-x-8">
                        <div class="relative group h-full py-4">
                            <button class="uppercase font-black hover:text-[#E21E26]">Soccer Programs<i class="fas fa-chevron-down ml-1 text-[#E21E26]"></i></button>
                            <div class="nav-dropdown shadow-2xl">
                                <a href="${basePath}programs/overview.html" class="block px-6 py-4 hover:bg-[#E21E26] border-b border-white/5 uppercase">Overview</a>
                                <div class="relative sub-group">
                                    <a href="#" class="flex justify-between items-center px-6 py-4 hover:bg-[#E21E26] border-b border-white/5 uppercase">Programs <i class="fas fa-chevron-right text-[10px]"></i></a>
                                    <div class="nav-submenu">
                                        <a href="${basePath}programs/competitive.html" class="block px-6 py-4 hover:bg-[#E21E26] border-b border-white/5 uppercase">Competitive</a>
                                        <a href="${basePath}programs/recreational.html" class="block px-6 py-4 hover:bg-[#E21E26] border-b border-white/5 uppercase">Recreational</a>
                                        <a href="${basePath}programs/pdp.html" class="block px-6 py-4 hover:bg-[#E21E26] border-b border-white/5 uppercase">Developmental (PDP)</a>
                                        <a href="${basePath}programs/goalkeeping.html" class="block px-6 py-4 hover:bg-[#E21E26] uppercase">Goalkeeper Training</a>
                                    </div>
                                </div>
                                <div class="relative sub-group">
                                    <a href="${basePath}programs/camps/overview.html" class="flex justify-between items-center px-6 py-4 hover:bg-[#E21E26] border-b border-white/5 uppercase">Camps <i class="fas fa-chevron-right text-[10px]"></i></a>
                                    <div class="nav-submenu">                         
                                        <a href="${basePath}programs/camps/spring-break-rec-camp.html" class="block px-6 py-4 hover:bg-[#E21E26] border-b border-white/5 uppercase">Spring Break - Rec Camp</a>
                                        <a href="${basePath}programs/camps/summer-camps.html" class="block px-6 py-4 hover:bg-[#E21E26] border-b border-white/5 uppercase">Summer Camps</a>
                                        <a href="${basePath}programs/camps/winter-academy.html" class="block px-6 py-4 hover:bg-[#E21E26] uppercase">Winter Academy</a>
                                    </div>
                                </div>
                                <a href="${basePath}programs/fees.html" class="block px-6 py-4 hover:bg-[#E21E26] border-b border-white/5 uppercase">Fees</a>
                                <a href="${basePath}scholarships.html" class="block px-6 py-4 hover:bg-[#E21E26] border-b border-white/5 uppercase">Scholarship Info</a>
                                <a href="${basePath}programs/refereeing.html" class="block px-6 py-4 hover:bg-[#E21E26] uppercase">Refereeing</a>
                            </div>
                        </div>

                        <div class="relative group h-full py-4">
                            <button class="uppercase font-black hover:text-[#E21E26]">About <i class="fas fa-chevron-down ml-1 text-[#E21E26]"></i></button>
                            <div class="nav-dropdown shadow-2xl">
                                <a href="${basePath}about/our-history.html" class="block px-6 py-4 hover:bg-[#E21E26] border-b border-white/5 uppercase">Our History</a>
                                <a href="${basePath}about/administrative-staff.html" class="block px-6 py-4 hover:bg-[#E21E26] border-b border-white/5 uppercase">Administrative Staff</a>
                                <a href="${basePath}about/board-of-directors.html" class="block px-6 py-4 hover:bg-[#E21E26] border-b border-white/5 uppercase">Board of Directors</a>
                                <a href="${basePath}about/coaching-staff.html" class="block px-6 py-4 hover:bg-[#E21E26] uppercase">Coaching Staff</a>
                            </div>
                        </div>

                        <div class="relative group h-full py-4">
                            <button class="uppercase font-black hover:text-[#E21E26]">Resources <i class="fas fa-chevron-down ml-1 text-[#E21E26]"></i></button>
                            <div class="nav-dropdown shadow-2xl">
                                <a href="${basePath}resources/rangersfc.html" class="block px-6 py-4 hover:bg-[#E21E26] border-b border-white/5 uppercase">Rangers FC Affiliation</a>
                                <a href="${basePath}resources/policies.html" class="block px-6 py-4 hover:bg-[#E21E26] border-b border-white/5 uppercase">Club Policies</a>
                                <a href="${basePath}resources/uniforms.html" class="block px-6 py-4 hover:bg-[#E21E26] uppercase">Uniforms</a>
                            </div>
                        </div>

                        <a href="/news.html" class="hover:text-[#E21E26] transition font-black uppercase">News</a>
                        <a href="https://playmetrics.com/signup?clubToken=TG9naW4tQ2x1Yi52MS0xMDA2LTE3NzY4NDEzOTB8VUhKdmR4TFFjNGlwclRyUytON2tQOTRQdUwwREVkcmJnSURHL0tvSjljVT0=" class="bg-[#E21E26] px-8 py-3 hover:bg-white hover:text-black transition-all uppercase text-[11px] font-black">Register</a>
                    </div>
                    
                    <div class="flex items-center space-x-6 ml-[100px] border-l border-white/10 pl-6">
                        <a href="https://www.facebook.com/clackamasunitedsoccerclub" class="text-white hover:text-cu-red transition text-lg"><i class="fab fa-facebook"></i></a>
                        <a href="https://www.instagram.com/clackamasunitedsoccer/" class="text-white hover:text-cu-red transition text-lg"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
                
                <button id="mobile-btn" class="lg:hidden text-white text-3xl ml-4"><i class="fas fa-bars" id="mobile-icon"></i></button>
            </div>

            <div id="mobile-menu" class="hidden lg:hidden bg-[#111111] text-white p-6 uppercase font-bold text-sm border-t border-white/10 max-h-[80vh] overflow-y-auto">
                <a href="${basePath}index.html" class="block py-4 border-b border-white/5 uppercase">Home</a>
                <div class="border-b border-white/5">
                    <button class="w-full flex justify-between items-center py-4 accordion-trigger text-left uppercase">Soccer Programs <i class="fas fa-plus text-[#E21E26]"></i></button>
                    <div class="hidden pl-4 bg-white/5">
                        <a href="${basePath}programs/overview.html" class="block py-3 text-xs opacity-70 uppercase">Overview</a>
                        <button class="w-full flex justify-between items-center py-3 text-xs opacity-70 sub-accordion-trigger uppercase">Programs <i class="fas fa-plus"></i></button>
                        <div class="hidden pl-4 bg-black/20">
                            <a href="${basePath}programs/competitive.html" class="block py-3 text-[10px] text-[#E21E26] uppercase">Competitive</a>
                            <a href="${basePath}programs/recreational.html" class="block py-3 text-[10px] text-[#E21E26] uppercase">Recreational</a>
                            <a href="${basePath}programs/pdp.html" class="block py-3 text-[10px] text-[#E21E26] uppercase">Developmental (PDP)</a>
                            <a href="${basePath}programs/goalkeeping.html" class="block py-3 text-[10px] text-[#E21E26] uppercase">Goalkeeper Training</a>
                       </div>
                        <a href="${basePath}programs/camps/overview.html" class="block py-3 text-xs opacity-70 uppercase">Camps Overview</a>
                        <a href="${basePath}programs/fees.html" class="block py-3 text-xs opacity-70 uppercase">Fees</a>
                        <button class="w-full flex justify-between items-center py-3 text-xs opacity-70 sub-accordion-trigger uppercase">Camps <i class="fas fa-plus"></i></button>
                        <div class="hidden pl-4 bg-black/20">
                            <a href="${basePath}programs/camps/summer-camps.html" class="block py-3 text-xs opacity-70 uppercase">Summer Camps</a>
                            <a href="${basePath}programs/camps/spring-break-rec-camp.html" class="block py-3 text-xs opacity-70 uppercase">Spring Break Rec Camp</a>
                            <a href="${basePath}programs/camps/winter-academy.html" class="block py-3 text-xs opacity-70 uppercase">Winter Academy</a>
                        </div>
                        <a href="${basePath}scholarships.html" class="block py-3 text-xs opacity-70 uppercase">Scholarship Info</a>
                        <a href="${basePath}programs/refereeing.html" class="block py-3 text-xs opacity-70 uppercase">Refereeing</a>
                </div>
                <div class="border-b border-white/5">
                    <button class="w-full flex justify-between items-center py-4 accordion-trigger text-left uppercase">About <i class="fas fa-plus text-[#E21E26]"></i></button>
                    <div class="hidden pl-4 bg-white/5">
                        <a href="${basePath}about/our-history.html" class="block py-3 text-xs opacity-70 uppercase">Our History</a>
                        <a href="${basePath}about/administrative-staff.html" class="block py-3 text-xs opacity-70 uppercase">Administrative Staff</a>
                        <a href="${basePath}about/board-of-directors.html" class="block py-3 text-xs opacity-70 uppercase">Board of Directors</a>
                        <a href="${basePath}about/coaching-staff.html" class="block py-3 text-xs opacity-70 uppercase">Coaching Staff</a>
                    </div>
                </div>
                <div class="border-b border-white/5">
                    <button class="w-full flex justify-between items-center py-4 accordion-trigger text-left uppercase">Resources <i class="fas fa-plus text-[#E21E26]"></i></button>
                    <div class="hidden pl-4 bg-white/5">
                        <a href="${basePath}resources/rangersfc.html" class="block py-3 text-xs opacity-70 uppercase">Rangers FC Affiliation</a>
                        <a href="${basePath}resources/policies.html" class="block py-3 text-xs opacity-70 uppercase">Club Policies</a>
                        <a href="${basePath}resources/uniforms.html" class="block py-3 text-xs opacity-70 uppercase">Uniforms</a>
                    </div>
                </div>
                <a href="/news.html" class="block py-4 border-b border-white/5 uppercase">News</a>
                <a href="https://playmetrics.com/signup?clubToken=TG9naW4tQ2x1Yi52MS0xMDA2LTE3NzY4NDEzOTB8VUhKdmR4TFFjNGlwclRyUytON2tQOTRQdUwwREVkcmJnSURHL0tvSjljVT0=" class="block bg-[#E21E26] p-4 text-center mt-6 font-black tracking-widest">Register Now</a>
                
                <div class="flex items-center justify-center space-x-6 mt-8">
                    <a href="https://www.facebook.com/clackamasunitedsoccerclub" class="text-white hover:text-cu-red transition text-2xl"><i class="fab fa-facebook"></i></a>
                    <a href="https://www.instagram.com/clackamasunitedsoccer/" class="text-white hover:text-cu-red transition text-2xl"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        </nav>`;
        const contentWrapper = document.getElementById('page-content') || document.body;
        contentWrapper.insertAdjacentHTML('beforebegin', navHTML);
    },

    injectFooter: function(basePath) {
        const contentWrapper = document.getElementById('page-content') || document.body;
        const footerHTML = `
        <footer class="bg-[#111111] pt-20 pb-10 text-gray-500 border-t-8 border-[#E21E26] mt-20">
            <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 text-center md:text-left">
                <div class="col-span-2">
                    <h4 class="text-white font-display text-2xl font-bold uppercase mb-6 italic">Clackamas <span class="text-[#E21E26]">United</span></h4>
                    <p class="text-sm max-w-sm mx-auto md:mx-0 leading-relaxed mb-8">Official member of the Oregon Youth Soccer Association.</p>
                </div>
                <div>
                    <h4 class="text-white font-bold uppercase text-[10px] tracking-[0.3em] mb-8">Resources</h4>
                    <ul class="space-y-4 text-xs font-bold uppercase tracking-widest leading-loose">
                        <li><a href="/resources/rangersfc.html" class="hover:text-[#E21E26] transition">Rangers FC Affiliation</a></li>
                        <li><a href="/resources/policies.html" class="hover:text-[#E21E26] transition">Club Policies</a></li>
                        <li><a href="/scholarships.html" class="hover:text-[#E21E26] transition">Scholarships</a></li>
                        <li><a href="/resources/uniforms.html" class="hover:text-[#E21E26] transition">Uniforms</a></li>
                        <li><a href="https://tursissoccer.com/collections/clackamas-united-fan-apparel" target="_blank" rel="noopener noreferrer" class="hover:text-[#E21E26] transition">Club Apparel</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-white font-bold uppercase text-[10px] tracking-[0.3em] mb-8">Contact</h4>
                    <div id="contact-info" lass="text-xs space-y-4 font-bold uppercase tracking-widest leading-relaxed">
                        <p><i class="fas fa-phone mr-2 text-[#E21E26]"></i> (503) 550-7535</p>
                        <p class="lowercase"><i class="fas fa-envelope mr-2 text-[#E21E26]"></i> registrar@clackamasunited.com</p>
                    </div>

                </div>
            </div>
        </footer>`;
        contentWrapper.insertAdjacentHTML('afterend', footerHTML);
    },
 
    injectSponsors: function(basePath) {
        const sponsorsHTML = `<section class="bg-white py-12">
            <div class="max-w-7xl mx-auto px-6">
                <h2 class="text-3xl font-display font-bold uppercase mb-8 italic text-center">Our <span class="text-[#E21E26]">Sponsors</span><span class="text-[#111111]"> &amp; </span><span class="text-[#E21E26]">Partners</span></h2>
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-8 items-center">
                    ${sponsorsData.map(sponsor => {
                        const imageHTML = `<img src="${basePath}${sponsor.logo}" alt="${sponsor.name}" class="h-auto w-full max-h-[100px] object-contain transition-opacity duration-300 group-hover:opacity-75">`;
                        
                        if (sponsor.url) {
                            return `
                                <a href="${sponsor.url}" target="_blank" rel="noopener noreferrer" class="flex justify-center items-center group">
                                    ${imageHTML}
                                </a>`;
                        }
                        // If no URL, just display the image in a div
                        return `<div class="flex justify-center items-center">${imageHTML}</div>`;
                    }).join('')}
                </div>
            </div>
        </section>`;
        const contentWrapper = document.getElementById('page-content') || document.body;
        contentWrapper.insertAdjacentHTML('afterend', sponsorsHTML);
    },

    injectPostNavigation: function(basePath) {
        const prevLink = document.getElementById('prev-post-link');
        const nextLink = document.getElementById('next-post-link');

        // Only run if the navigation elements exist on the page
        if (!prevLink || !nextLink || typeof newsData === 'undefined') {
            return;
        }

        const now = new Date();
        // A news item is visible if it's not hidden and its publish date is in the past.
        const visibleNews = newsData.filter(item => 
            !item.hidden && item.publishDateTime && new Date(item.publishDateTime) <= now
        );
        const currentPath = window.location.pathname;

        const currentVisibleIndex = visibleNews.findIndex(item => `/news/${item.date}-${item.slug}.html` === currentPath);

        if (currentVisibleIndex === -1) {
            return; // Current page is not in the visible news list (it might be hidden)
        }

        // Set up the "Previous" (newer) post link
        if (currentVisibleIndex > 0) {
            const prevPost = visibleNews[currentVisibleIndex - 1];
            prevLink.href = `${basePath}news/${prevPost.date}-${prevPost.slug}.html`;
            prevLink.classList.remove('invisible');
        }

        // Set up the "Next" (older) post link
        if (currentVisibleIndex < visibleNews.length - 1) {
            const nextPost = visibleNews[currentVisibleIndex + 1];
            nextLink.href = `${basePath}news/${nextPost.date}-${nextPost.slug}.html`;
            nextLink.classList.remove('invisible');
        }
    },

    injectPoliciesList: function(basePath) {
        const policiesGrid = document.getElementById('policies-grid');
        if (!policiesGrid || typeof policiesData === 'undefined') {
            return;
        }

        const policiesHTML = policiesData.map(policy => `
            <a href="${basePath}resources/policies/${policy.filename}" target="_blank" rel="noopener noreferrer" class="block bg-white p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-cu-red group">
                <h3 class="text-xl font-display font-bold uppercase text-gray-900 group-hover:text-cu-red transition-colors">${policy.title}</h3>
                <p class="text-sm text-gray-500 mt-2">Last Updated: ${policy.lastUpdated}</p>
                <div class="mt-4 text-cu-red font-bold text-xs uppercase tracking-widest">
                    View Policy <i class="fas fa-arrow-right ml-1"></i>
                </div>
            </a>
        `).join('');

        if (policiesHTML) {
            policiesGrid.innerHTML = policiesHTML;
        }
    },

    injectNewsGrid: function(basePath) {
        const newsGrid = document.getElementById('news-grid');
        if (!newsGrid || typeof newsData === 'undefined') {
            return;
        }

        const showMoreButton = document.getElementById('show-more');
        let visibleItems = 6;
        const now = new Date();
        // A news item is visible if it's not hidden and its publish date is in the past.
        const visibleNews = newsData.filter(item => 
            !item.hidden && item.publishDateTime && new Date(item.publishDateTime) <= now
        );

        function displayNews() {
            newsGrid.innerHTML = visibleNews.slice(0, visibleItems).map(item => `
              <div class="min-w-full md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.33%-16px)] bg-white border-t-4 border-[#E21E26] shadow-xl group">
                  <div class="overflow-hidden h-52">
                      <img src="${basePath}${item.img}" class="h-full w-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition duration-700">
                  </div>
                  <div class="p-8">
                      <p class="text-xs italic">By ${item.author}</p>
                      <span class="text-[10px] font-black text-[#E21E26] uppercase tracking-[0.2em]">${item.date}</span>
                      <h3 class="text-xl font-display font-bold uppercase mt-2 group-hover:text-[#E21E26] transition leading-tight">${item.title}</h3>
                      <p class="text-sm text-gray-600 mt-4 leading-relaxed line-clamp-2 italic">"${item.excerpt}"</p>
                      <a href="${basePath}news/${item.date}-${item.slug}.html" class="inline-block mt-6 text-xs font-black uppercase border-b-2 border-black pb-1 hover:border-[#E21E26] hover:text-[#E21E26] transition">Read Story</a>
                  </div>
              </div>`).join('');
        }

        function updateShowMoreButton() {
            if (visibleItems >= visibleNews.length) {
                showMoreButton.style.display = 'none';
            }
        }

        showMoreButton.addEventListener('click', () => {
            visibleItems += 6;
            displayNews();
            updateShowMoreButton();
        });

        displayNews();
        updateShowMoreButton();
    },

    initImageCarousel: function(basePath) {
        const carousel = document.getElementById('rangers-carousel');
        if (!carousel || typeof rangersGalleryData === 'undefined' || rangersGalleryData.length === 0) {
            return;
        }

        const imageContainer = document.getElementById('carousel-image-container');
        const thumbnailsContainer = document.getElementById('carousel-thumbnails');
        const prevButton = document.getElementById('carousel-prev');
        const nextButton = document.getElementById('carousel-next');
        let currentIndex = 0;

        // Generate thumbnails
        thumbnailsContainer.innerHTML = rangersGalleryData.map((image, index) => `
            <button data-index="${index}" class="carousel-thumbnail-btn h-16 w-16 p-1 border-2 border-transparent hover:border-cu-red transition focus:outline-none">
                <img src="${basePath}${image.src}" alt="Thumbnail for ${image.alt}" class="w-full h-full object-cover pointer-events-none">
            </button>
        `).join('');

        const thumbnailButtons = thumbnailsContainer.querySelectorAll('.carousel-thumbnail-btn');

        function showImage(index) {
            const image = rangersGalleryData[index];
            imageContainer.innerHTML = `<img src="${basePath}${image.src}" alt="${image.alt}" class="w-full h-full object-cover">`;
            
            // Update active thumbnail
            thumbnailButtons.forEach((btn, btnIndex) => {
                btn.classList.toggle('border-cu-red', btnIndex === index);
            });
        }

        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + rangersGalleryData.length) % rangersGalleryData.length;
            showImage(currentIndex);
        });
        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % rangersGalleryData.length;
            showImage(currentIndex);
        });
        thumbnailButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                currentIndex = parseInt(btn.dataset.index);
                showImage(currentIndex);
            });
        });

        // Show the first image initially
        showImage(currentIndex);
    },

    init: function(basePath = "") {
        // This function should be called after the DOM is ready.
        this.injectStyles();
        this.injectNav(basePath);
        this.injectFooter(basePath);

        // Sponsors are only needed if the data exists
        if (typeof sponsorsData !== 'undefined') {
            this.injectSponsors(basePath);
        }

        // Post Navigation is only needed if newsData exists
        if (typeof newsData !== 'undefined') {
            this.injectPostNavigation(basePath);
            this.injectNewsGrid(basePath);
        }

        // Policies list is only needed if the data exists
        if (typeof policiesData !== 'undefined') {
            this.injectPoliciesList(basePath);
        }

        // Rangers gallery is only needed if the data exists
        if (typeof rangersGalleryData !== 'undefined') {
            this.initImageCarousel(basePath);
        }

        // Mobile Menu Toggle
        const btn = document.getElementById('mobile-btn');
        if (btn) btn.onclick = () => document.getElementById('mobile-menu').classList.toggle('hidden');

        // Accordion Logic for mobile menu
        document.querySelectorAll('.accordion-trigger, .sub-accordion-trigger').forEach(trigger => {
            trigger.onclick = (e) => {
                e.preventDefault();
                trigger.nextElementSibling.classList.toggle('hidden');
                const icon = trigger.querySelector('i');
                if (icon) {
                    icon.classList.toggle('fa-plus');
                    icon.classList.toggle('fa-minus');
                }
            };
        });

        // Homepage News Engine
        const track = document.getElementById('news-track');
        if (track && typeof newsData !== 'undefined') {
            track.classList.add('grid', 'gap-6', 'md:grid-cols-3');
            const now = new Date();
            // A news item is visible if it's not hidden and its publish date is in the past.
            const visibleNews = newsData.filter(item => 
                !item.hidden && item.publishDateTime && new Date(item.publishDateTime) <= now
            );
            track.innerHTML = visibleNews.slice(0, 3).map(item => `                    
                <div class="min-w-full bg-white border-t-4 border-[#E21E26] shadow-xl group">
                    <div class="overflow-hidden h-52">
                        <img src="${item.img}" class="h-full w-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition duration-700">
                    </div>
                    <div class="p-8">
                        <p class="text-xs italic">By ${item.author}</p>
                        <span class="text-[10px] font-black text-[#E21E26] uppercase tracking-[0.2em]">${item.date}</span>
                        <h3 class="text-xl font-display font-bold uppercase mt-2 group-hover:text-[#E21E26] transition leading-tight">${item.title}</h3>
                        <p class="text-sm text-gray-600 mt-4 leading-relaxed line-clamp-2 italic">"${item.excerpt}"</p>

                        <a href="${basePath}news/${item.date}-${item.slug}.html" class="inline-block mt-6 text-xs font-black uppercase border-b-2 border-black pb-1 hover:border-[#E21E26] hover:text-[#E21E26] transition">Read Story</a>
                    </div>
                </div>`).join('');
            const newsSection = document.getElementById('news-track').parentNode;
            newsSection.innerHTML += `<div class="w-full text-center mt-4"><a class="text-gray-600 italic font-bold text-lg" href="${basePath}news.html">Read older stories...</a></div>`;
        }            
    }
};