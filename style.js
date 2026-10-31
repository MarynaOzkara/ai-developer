(() => {
  document.documentElement.classList.add('js-enabled');

  // Ukrainian / English content switcher
  const translations = {"Послуги":"Services","Портфоліо":"Portfolio","Як я працюю":"How I work","Переваги":"Benefits","Питання":"FAQ","Написати в Telegram":"Message on Telegram","Обговорити проєкт":"Discuss your project","Обговорити проект":"Discuss your project","Орієнтовний термін":"Estimated timeline","Для вашого бізнесу":"For your business","Сайт під задачу":"A website built for your goals","Приймаю замовлення":"Accepting projects","Сайти для вашого бізнесу, які приносять":"Websites for your business that generate","заявки і оплати":"leads and sales","Створюю сучасні AI-сайти для малого бізнесу, що допомагають презентувати послуги та залучати клієнтів без зайвих витрат і технічних складнощів.":"I create modern AI-powered websites for small businesses, helping present services and attract customers without unnecessary costs or technical complexity.","від 100 €":"from €100","ціна залежить від типу сайту":"pricing depends on the website type","Прийом заявок":"Lead generation","Оплата на сайті":"Online payments","Телеграм-бот":"Telegram bot","Адаптив":"Responsive design","Сайт на консультацію":"Consultation website","Сайт офлайн-бізнесу":"Local business website","Сайт для продажу товару":"Product sales website","Міні-каталог":"Mini catalog","Сайт лід-магніту":"Lead magnet website","Сайт мульти-лінк":"Link-in-bio website","✦ Рішення":"✦ Solutions","З якими":"What","проблемами":"challenges","ви стикаєтесь?":"are you facing?","Допомагаю зрозуміло презентувати бізнес, щоб клієнти швидше знаходили потрібну інформацію та зв'язувалися з вами.":"I help you present your business clearly, so potential customers can quickly find the information they need and get in touch.","Немає сучасного сайту, який презентує бізнес":"You don't have a modern website that presents your business","Ваші послуги заслуговують на сучасну та зрозумілу онлайн-презентацію":"Your services deserve a modern, clear online presence","Клієнти проходять мимо,":"Visitors leave without","не залишають заявки":"getting in touch","Зручна структура допомагає розповісти про пропозицію та наступний крок":"A clear structure explains your offer and guides visitors to the next step","Розробка сайту здається дорогою та складною":"Website development seems expensive and complicated","Пропоную зрозумілий процес і рішення під ваші цілі та бюджет":"I offer a straightforward process and solutions tailored to your goals and budget","✦ Послуги та ціни":"✦ Services & pricing","Готові":"Ready-made","рішення":"solutions","для вашого бізнесу":"for your business","Оберіть формат або напишіть мені — підберемо рішення під вашу задачу.":"Choose a format or message me — we'll find the right solution for your needs.","Обрати свій варіант　→":"Choose your option　→","Сайт-мульти-лінк":"Link-in-bio website","Компактна сторінка з усіма посиланнями, кнопками і записом":"A compact page with all your links, buttons and booking options","Сайт для продажу одного товару":"Single-product website","Один продукт з описом, відгуками, оплатою і доставкою":"One product with a description, reviews, payment and delivery information","Сайт з відгуками та кейсами":"Website with testimonials and case studies","Відео, сторіс, скріни відгуків — соціальний доказ, який продає":"Videos, stories and review screenshots — social proof that builds trust","Калькулятор, гайд або чек-лист — клієнт залишає контакт і потрапляє у воронку":"A calculator, guide or checklist that encourages visitors to leave their contact details","Клієнт проходить квіз, прогрівається і записується на консультацію автоматично":"Visitors answer a short quiz, learn about your offer and book a consultation","Кав'ярня, салон, клініка — меню, запис онлайн, карта, відгуки":"For cafés, salons and clinics: menus, online booking, maps and reviews","Компактний каталог товарів або послуг з кошиком, фільтрами і оплатою на сайті":"A compact product or service catalog with a cart, filters and online payments","✦ Портфоліо":"✦ Portfolio","Мої":"My","роботи":"work","Різні проєкти, різні задачі — сучасний дизайн і зручний функціонал.":"Different projects and goals, united by modern design and practical functionality.","Відкрити проєкт ↗":"View project ↗","Калькулятор вартості кухні":"Kitchen price calculator","Інтерактивний сайт / лід-магніт":"Interactive website / lead magnet","Консультація":"Consultation","Майстер манікюру":"Nail technician","Міні-каталог handmade подарунків":"Mini catalog of handmade gifts","✦ Як я працюю":"✦ How I work","Простий і зрозумілий":"A simple, clear","процес":"process","Від першої ідеї до готового сайту — всього чотири кроки.":"From the first idea to a finished website — just four steps.","Обговорення завдання":"Project discussion","З'ясовуємо цілі бізнесу, послуги та потреби клієнтів.":"We clarify your business goals, services and customers' needs.","Дизайн і структура":"Design and structure","Підбираю стиль, структуру й контент для вашої ніші.":"I choose the visual style, structure and content for your industry.","Створення сайту":"Website development","Створюю адаптивний сайт і налаштовую форму заявки.":"I build a responsive website and configure the inquiry form.","Публікація та запуск":"Publication and launch","Допомагаю з доменом і публікацією сайту в інтернеті.":"I help with the domain and publishing your website online.","Прозорість, підтримка на всіх етапах і дотримання узгоджених термінів.":"Clear communication, support at every stage and respect for agreed deadlines.","✦ Чому обирають мене":"✦ Why work with me","Ваші":"Your","переваги":"benefits","Працюю на результат і дбаю про кожен проєкт.":"I focus on results and give every project careful attention.","AI-підхід":"AI-powered approach","Сучасні інструменти для ефективної роботи":"Modern tools for an efficient workflow","Доступна ціна":"Fair pricing","Рішення під бюджет без зайвих витрат":"Solutions that fit your budget without unnecessary costs","Швидкі терміни":"Quick turnaround","Орієнтовно 3–7 днів на створення":"Approximately 3–7 days to build","Гнучкість":"Flexibility","Дизайн і функції під ваші цілі":"Design and features tailored to your goals","✦ Бонус":"✦ Bonus","Допомога з доменом":"Help with your domain","і публікацією сайту":"and website launch","Займусь технічною стороною, щоб ви могли зосередитися на своєму бізнесі.":"I'll take care of the technical details so you can focus on your business.","✦ FAQ":"✦ FAQ","Часті":"Frequently asked","питання":"questions","Скільки часу займає розробка сайту?":"How long does it take to build a website?","Зазвичай 3–7 днів, залежно від задачі та готовності матеріалів.":"Usually 3–7 days, depending on the project and how quickly the materials are ready.","Чи буде сайт адаптований для мобільних пристроїв?":"Will the website work on mobile devices?","Так, макет адаптується для смартфонів, планшетів і комп'ютерів.":"Yes, the layout adapts to smartphones, tablets and desktop computers.","Чи можна замовити індивідуальний дизайн?":"Can I request a custom design?","Так, стиль, структура та функціонал підбираються під ваш бізнес.":"Yes, the style, structure and functionality are tailored to your business.","Чи зможу я змінювати контент?":"Will I be able to update the content?","Можливість оновлення контенту узгодимо відповідно до обраного рішення.":"Content editing options can be agreed based on the solution you choose.","Чи допомагаєте з доменом і публікацією?":"Do you help with the domain and publishing?","Так, я допомагаю з доменом і запуском сайту в інтернеті.":"Yes, I can help with the domain and launching your website online.","Як відбувається оплата?":"How does payment work?","Вартість, обсяг робіт і етапи оплати узгоджуємо до початку проєкту.":"We agree on the price, scope of work and payment stages before the project begins.","Готові створити свій сайт?":"Ready to create your website?","Напишіть у Telegram — обговоримо проєкт і підберемо рішення для вашого бізнесу.":"Message me on Telegram — we'll discuss your project and find the right solution for your business.","AI-сайти для малого бізнесу. Всі права захищені.":"AI websites for small businesses. All rights reserved."};
  const langButtons = document.querySelectorAll('.language-switch [data-lang]');
  const originalTextNodes = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let textNode;
  while ((textNode = walker.nextNode())) {
    const original = textNode.nodeValue;
    const key = original.trim();
    if (key && Object.prototype.hasOwnProperty.call(translations, key)) {
      originalTextNodes.push({ node: textNode, original, key });
    }
  }
  const originalAttrs = [];
  document.querySelectorAll('[alt], [aria-label], meta[name="description"]').forEach(el => {
    ['alt','aria-label','content'].forEach(attr => {
      if (el.hasAttribute(attr)) originalAttrs.push({el, attr, value:el.getAttribute(attr)});
    });
  });
  const setLanguage = lang => {
    const english = lang === 'en';
    originalTextNodes.forEach(item => {
      const replacement = english ? translations[item.key] : item.key;
      item.node.nodeValue = item.original.replace(item.key, replacement);
    });
    document.documentElement.lang = lang;
    document.title = english ? 'Maryna Ozkara — AI Website Specialist' : 'Марина Озкара — AI вебсайт спеціаліст';
    originalAttrs.forEach(item => {
      if (item.attr === 'content' && item.el.matches('meta[name="description"]')) {
        item.el.setAttribute('content', english
          ? 'Modern AI-powered websites for small businesses. Website design, development and launch tailored to your goals.'
          : item.value);
      } else if (item.attr === 'alt' && english) {
        item.el.setAttribute('alt', item.value.replace('Дизайн сайту','Website design').replace('Дизайн калькулятора','Calculator design').replace('Дизайн сайту консультації','Consultation website design').replace('Сайт мульті-лінк','Link-in-bio website').replace('Дизайн міні-каталогу','Mini catalog design').replace('Сайт одного товару','Single-product website'));
      } else if (item.attr === 'aria-label') {
        item.el.setAttribute(item.attr, english ? 'Open menu' : item.value);
      }
    });
    langButtons.forEach(button => {
      const active = button.dataset.lang === lang;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    document.querySelectorAll('a[href*="t.me/MarynaOzkara?text="]').forEach(link => {
      const msg = english ? 'Hello, Maryna! I would like to discuss creating a website.' : 'Привіт, Марино! Хочу обговорити створення сайту';
      const base = link.href.split('?')[0];
      link.href = base + '?text=' + encodeURIComponent(msg);
    });
  };
  langButtons.forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));


  // Mobile navigation
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  const closeMenu = () => {
    if (!menuToggle || !mainNav) return;
    menuToggle.classList.remove('active');
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', document.documentElement.lang === 'en' ? 'Open menu' : 'Відкрити меню');
  };
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('open');
      menuToggle.classList.toggle('active', isOpen);
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      menuToggle.setAttribute('aria-label', isOpen ? (document.documentElement.lang === 'en' ? 'Close menu' : 'Закрити меню') : (document.documentElement.lang === 'en' ? 'Open menu' : 'Відкрити меню'));
    });
    mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
    document.addEventListener('click', event => {
      if (!mainNav.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
    });
  }

  // Reveal blocks as they enter the viewport
  const revealItems = document.querySelectorAll(
    '#services .card, #portfolio .project, #process .step, #benefits .benefit, #benefits .bonus, #faq details, #contact .contact'
  );
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
    revealItems.forEach((item, index) => {
      item.classList.add('reveal-item');
      item.style.setProperty('--reveal-delay', `${(index % 4) * 85}ms`);
      revealObserver.observe(item);
    });
  } else {
    revealItems.forEach(item => item.classList.add('is-visible'));
  }

  // Sticky CTA: show after hero, hide when footer enters the viewport
  const sticky = document.getElementById('sticky');
  const hero = document.querySelector('.hero');
  const footer = document.querySelector('footer');
  if (sticky && hero && footer && 'IntersectionObserver' in window) {
    let heroPassed = false;
    let footerVisible = false;
    const updateSticky = () => sticky.classList.toggle('show', heroPassed && !footerVisible);
    const heroObserver = new IntersectionObserver(([entry]) => {
      heroPassed = !entry.isIntersecting && entry.boundingClientRect.bottom <= 0;
      updateSticky();
    }, { threshold: 0 });
    const footerObserver = new IntersectionObserver(([entry]) => {
      footerVisible = entry.isIntersecting;
      updateSticky();
    }, { threshold: 0 });
    heroObserver.observe(hero);
    footerObserver.observe(footer);
  } else if (sticky && hero && footer) {
    const updateSticky = () => {
      const heroBottom = hero.getBoundingClientRect().bottom;
      const footerTop = footer.getBoundingClientRect().top;
      sticky.classList.toggle('show', heroBottom <= 0 && footerTop > window.innerHeight);
    };
    window.addEventListener('scroll', updateSticky, { passive: true });
    updateSticky();
  }
})();

(function(){const btn=document.getElementById('backToTop');if(!btn)return;const update=()=>{if(window.scrollY>320)btn.classList.add('visible');else btn.classList.remove('visible')};window.addEventListener('scroll',update,{passive:true});update();btn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));})();

document.getElementById('current-year').textContent = new Date().getFullYear();
