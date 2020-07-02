window.addEventListener('DOMContentLoaded', function(){

    //изменяем данные скрытого поля инпута для валидации
    function checkInputFlagValue() {
        let arrInputsFlag = document.querySelectorAll('input[name="input_checked_flag"]');

        arrInputsFlag.forEach(item => {
            item.value = true;
        })
    }
    checkInputFlagValue();

    //open mobile navigation

    let mobileNavBtnContainer = document.querySelector('.header__mobile-nav-btn-wrapper');
    let mobileNavBtn = document.querySelector('.header__mobile-nav-btn');
    let mobileHeader = document.querySelector('.header_main');

    mobileNavBtnContainer.addEventListener('click', function () {
        if (mobileNavBtn.classList.contains('header__mobile-nav-btn_active')) {
            mobileHeader.classList.remove('header_main_active');
            mobileNavBtn.classList.remove('header__mobile-nav-btn_active');
        } else {
            mobileHeader.classList.add('header_main_active');
            mobileNavBtn.classList.add('header__mobile-nav-btn_active');
        }

    })

    //open pop-ups
    let popupConsultation = document.querySelector('.popup-consultation-form');
    let openPopupConsultationBtn = document.querySelector('.header_main .header__contact-list-request-link');
    let openPopupConsultationBtn2 = document.querySelector('.header_scroll .header__contact-list-request-link');
    let openPopupConsultationBtn3 = document.querySelector('.delivery__btn');
    let openPopupConsultationBtn4 = document.querySelector('.advantages__btn');
    let openPopupConsultationBtn5 = document.querySelector('.faq__request-btn');
    let openPopupConsultationBtn6 = document.querySelector('.header__contact-list-request-link_mobile')
    let closePopupConsultationBtn = document.querySelector('.popup-consultation-form .popup-form__btn-close');


    openPopupConsultationBtn.addEventListener('click', function () {
        popupConsultation.classList.add('popup-consultation-form_active');
        document.body.style.overflow = 'hidden';
    })

    openPopupConsultationBtn2.addEventListener('click', function () {
        popupConsultation.classList.add('popup-consultation-form_active');
        document.body.style.overflow = 'hidden';
    })

    openPopupConsultationBtn3.addEventListener('click', function () {
        popupConsultation.classList.add('popup-consultation-form_active');
        document.body.style.overflow = 'hidden';
    })

    openPopupConsultationBtn4.addEventListener('click', function () {
        popupConsultation.classList.add('popup-consultation-form_active');
        document.body.style.overflow = 'hidden';
    })

    openPopupConsultationBtn5.addEventListener('click', function () {
        popupConsultation.classList.add('popup-consultation-form_active');
        document.body.style.overflow = 'hidden';
    })

    openPopupConsultationBtn6.addEventListener('click', function () {
        popupConsultation.classList.add('popup-consultation-form_active');
        document.body.style.overflow = 'hidden';
    })

    closePopupConsultationBtn.addEventListener('click', function () {
        popupConsultation.classList.remove('popup-consultation-form_active');
        document.body.style.overflow = '';
    })

    popupConsultation.addEventListener('click', function (e) {
        if (e.target.classList.contains('popup-consultation-form')) {
            popupConsultation.classList.remove('popup-consultation-form_active');
            document.body.style.overflow = '';
        }
    })    


    let popupCalculate = document.querySelector('.popup-calculate-form');
    let openPopupCalculate = document.querySelector('.home__btn');
    let closePopupCalculate = document.querySelector('.popup-calculate-form .popup-form__btn-close');

    openPopupCalculate.addEventListener('click', function () {
        popupCalculate.classList.add('popup-calculate-form_active');
        document.body.style.overflow = 'hidden';
    })

    closePopupCalculate.addEventListener('click', function () {
        popupCalculate.classList.remove('popup-calculate-form_active');
        document.body.style.overflow = '';
    })

    popupCalculate.addEventListener('click', function (e) {
        if (e.target.classList.contains('popup-calculate-form')) {
            popupCalculate.classList.remove('popup-calculate-form_active');
            document.body.style.overflow = '';
        }
    })


    let popupQuestion = document.querySelector('.popup-question-form');
    let openPopupQuestionBtn1 = document.querySelector('.faq__btn');
    let openPopupQuestionBtn2 = document.querySelector('.faq__btn_second');
    let openPopupQuestionBtn3 = document.querySelector('.footer__btn-question');
    let closePopupQuestionBtn = document.querySelector('.popup-question-form .popup-form__btn-close');

    openPopupQuestionBtn1.addEventListener('click', function () {
        popupQuestion.classList.add('popup-question-form_active');
        document.body.style.overflow = 'hidden';
    })

    openPopupQuestionBtn2.addEventListener('click', function () {
        popupQuestion.classList.add('popup-question-form_active');
        document.body.style.overflow = 'hidden';
    })

    openPopupQuestionBtn3.addEventListener('click', function () {
        popupQuestion.classList.add('popup-question-form_active');
        document.body.style.overflow = 'hidden';
    })


    closePopupQuestionBtn.addEventListener('click', function () {
        popupQuestion.classList.remove('popup-question-form_active');
        document.body.style.overflow = '';
    })

    popupQuestion.addEventListener('click', function (e) {
        if (e.target.classList.contains('popup-question-form')) {
            popupQuestion.classList.remove('popup-question-form_active');
            document.body.style.overflow = '';
        }
    })


    let popupThanks = document.querySelector('.popup-thanks');
    let closePopupThanks = document.querySelector('.popup-thanks .popup-form__btn-close');

    closePopupThanks.addEventListener('click', function () {
        popupThanks.classList.remove('popup-thanks_active');
        document.body.style.overflow = '';
    })

    popupThanks.addEventListener('click', function (e) {
        if (e.target.classList.contains('popup-thanks')) {
            popupThanks.classList.remove('popup-thanks_active');
            document.body.style.overflow = '';
        }
    })


    //open mobile navigation with swipe
    //zoduaks
    // let body = document.querySelector('body');
    // let mobileNav = document.querySelector('.header__navigation_main');
    let bodyHummer = new Hammer(document.body);
    bodyHummer.get('swipe').set({
        threshold: 150
    });

    bodyHummer.on('swipeleft', function () {
        mobileHeader.classList.add('header_main_active');
        mobileNavBtn.classList.add('header__mobile-nav-btn_active');
    })

    bodyHummer.on('swiperight', function () {
        mobileHeader.classList.remove('header_main_active');
        mobileNavBtn.classList.remove('header__mobile-nav-btn_active');
    })

    //flowing scroll
    $('.flowing-scroll').on('click', function () {
        let el = $(this);
        let dest = el.attr('href');
        if (dest !== undefined && dest !== '') {
            $('.header_main').removeClass('header_main_active');
            $('.header__mobile-nav-btn').removeClass('header__mobile-nav-btn_active');
            $('html').animate({
                scrollTop: $(dest).offset().top
            }, 500);
        }
        return false;
    });


    //show fixed header
    var fixedHeader = $('.header_scroll');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 80) {
            fixedHeader.addClass('header_scroll_active');
        } else {
            fixedHeader.removeClass('header_scroll_active');
        }
    });

    //open faq list items
    $('.faq__list').on('click', e => openFAQ(e));
    function openFAQ(e) {
        if (e.target.classList.contains('faq__list-item_active')) {
            e.target.classList.remove('faq__list-item_active');
        } else if (e.target.classList.contains('faq__list-item')) {
            e.target.classList.add('faq__list-item_active');
        } else if (e.target.parentNode.classList.contains('faq__list-item_active')) {
            e.target.parentNode.classList.remove('faq__list-item_active');
        } else if (e.target.parentNode.classList.contains('faq__list-item')) {
            e.target.parentNode.classList.add('faq__list-item_active');
        }
    }

    //add video reviews
    //zoduaks
    // let videosContainers = document.querySelectorAll('.reviews__video-item iframe');
    // shuffle(videos);

    // for (let i = 0; i < videosContainers.length; i++) {
    //     videosContainers[i].setAttribute('src', videos[i]);
    // }

    //add reviews
    // let reviewsContainer = document.querySelector('.swiper-wrapper');
    // shuffle(reviews);

    // for (let i = 0; i < reviews.length; i++) {
    //     let newSlide = document.createElement('div');
    //     newSlide.classList.add('swiper-slide');
    //     newSlide.innerHTML = `<div class="slide__img-container"><img src="../assets/${reviews[i].photoUrl}" alt=""></div>
    //     <div class="slide__content">
    //         <div class="slide__title">
    //              ${reviews[i].title}
    //         </div>
    //         <div class="slide__text">${reviews[i].text}</div>
    //     </div>`;

    //     reviewsContainer.appendChild(newSlide);
    // }

    //validator form
    //zoduaks
    const Validator = function(options){

        const form = document.getElementById(options.id),
            //form.elements - HTML коллекция
            elementsForm = [...form.elements].filter(item => item.tagName !== 'BUTTON'),
            error = new Set(),       //коллекция set
            //правило проверки
            pattern = {
                form_user_name: /[А-Яа-яЁё]/,
                email: /^\w+@\w+\.\w+$/,
                phone: /^\+?[78]([()-]*\d){10}$/,
                phone1: /^\?[78]([()-]*\d){10}$/,
            },
            validatorMethod = {
                notEmpty(elem){
                    if(elem.value.trim() === ''){
                        return false;
                    }
                    return true;
                },
                //сама проверка
                pattern(elem, pattern){
                    return pattern.test(elem.value);
                }
            },
            submitBtn = document.getElementById(options.submit);
    
        const isValid = (elem) => {
            //отбираем все методы для нужного поля
            const method = options.method[elem.id];
            if(method !== undefined){
                //или проверка не пустой, если не пустой и совпадает с нужным полем то поле+метод
                //every возвращает булевое значение
                return method.some(item => validatorMethod[item[0]](elem, pattern[item[1]]));
            }
            return true;
        };
    
        const checkIt = (e) => {
            let target = e.target;
    
            if(isValid(target)){
                showSuccess(target);
                //добавляем/удаляем в коллекцию ошибку (поможет уйти от дублей)
                error.delete(target);
            } else {
                showError(target);
                error.add(target);
            }
        };
        //следим за изменением input
        elementsForm.forEach(elem => {
            elem.addEventListener('change', checkIt)
        });
        //отобразить ошибку и добавим блоки для сообщения ошибки
        const showError = (elem) => {
            elem.classList.remove('validator_successs');
            elem.classList.add('validator_error');
            submitBtn.disabled = true;
            //проверка наличия класса у следующего после elem елемента
            //error if elem is a last
            if (!elem.nextElementSibling.classList.contains('error-message')){
                const errorDiv = document.createElement('div');
                errorDiv.textContent = 'Ошибка в этом поле';
                errorDiv.classList.add('error-message');
                //метод вставляет errorDiv после elem
                elem.insertAdjacentElement('afterend', errorDiv);
            }
        };
    
        const showSuccess = (elem) => {
            elem.classList.remove('validator_error');
            elem.classList.add('validator_successs');
            submitBtn.disabled = false;
            if (elem.nextElementSibling.classList.contains('error-message')){
                elem.nextElementSibling.remove();
            }
        };
        //добавляем правила пользователя с индекса к основным правилам на валидатор.js
        for (let key in options.pattern) {
            pattern[key] = options.pattern[key]
        }
    
        form.addEventListener('submit', (e) =>{
            elementsForm.forEach((elem)=>{
                checkIt({target: elem});
            });
            if(error.size){
                e.preventDefault();
                console.log('not work, error.size' + error.size);
            } else {
                console.log('0 step');         
            }
        })
    };

    const consultationFormMain = new Validator(
        {
            id: 'consultation-form_main',
            submit: 'consultation-form_main__submit',
            pattern: {
            },
            //какие  методы применяем для отдельных инпутов
            method: {
                'buy-car__form-name': [
                    ['pattern', 'form_user_name']
                  ],
                'buy-car__form-phone': [
                    // ['notEmpty'],
                    ['pattern', 'phone'],
                    ['pattern', 'phone1'],
                ]
            }
        }
    );

    const calculateFormMain = new Validator(
        {
            id: 'calculate-form_main',
            submit: 'calculate-form_main__submit',
            pattern: {
            },
            method: {
                'calculate__form-name': [
                    ['pattern', 'form_user_name']
                  ],
                'calculate__form-phone': [
                    ['pattern', 'phone'],
                    ['pattern', 'phone1'],
                ]
            }
        }
    );

    const consultationFormPopup = new Validator(
        {
            id: 'consultation-form_popup',
            submit: 'consultation-form_popup__submit',
            pattern: {
            },
            method: {
                'consultation__form-name': [
                    ['pattern', 'form_user_name']
                  ],
                'consultation__form-phone': [
                    ['pattern', 'phone'],
                    ['pattern', 'phone1'],
                ]
            }
        }
    );

    const calculateFormPopup = new Validator(
        {
            id: 'calculate-form_popup',
            submit: 'calculate-form_popup__submit',
            pattern: {
            },
            method: {
                'popup-calculate__form-name': [
                    ['pattern', 'form_user_name']
                  ],
                'popup-calculate__form-phone': [
                    ['pattern', 'phone'],
                    ['pattern', 'phone1'],
                ]
            }
        }
    );

    const questionFormPopup = new Validator(
        {
            id: 'question-form_popup',
            submit: 'question-form_popup__submit',
            pattern: {
            },
            method: {
                'question-form_popup-name': [
                    ['pattern', 'form_user_name']
                  ],
                'question__phone': [
                    ['pattern', 'phone'],
                    ['pattern', 'phone1'],
                ]
            }
        }
    );

     // send forms 
     $('#consultation-form_main').trigger('reset');
     $(function () {
         'use strict';
         $('#consultation-form_main').on('submit', function (e) {
            e.preventDefault();
            if(this.input_checked_flag.value == 'true'){
                $.ajax({
                    url: 'wp-content/themes/auc-jp/assets/mail.php',
                    type: 'POST',
                    contentType: false,
                    processData: false,
                    data: new FormData(this),
                    success: function (msg) {                     
                        if (msg.trim() == 'ok') {
                            $('.popup-thanks').addClass('popup-thanks_active');
                            $('#consultation-form_main').trigger('reset');
                       
                        } else {
                           alert('Ошибка, ответ сервера: ' + msg);
                        }
                        //closePopUp();
                    }
                });
            } else {
                console.log(this.input_checked_flag.value);
            }
             this.reset();
         });
     });


     $('#calculate-form_main').trigger('reset');
     $(function () {
         'use strict';
         $('#calculate-form_main').on('submit', function (e) {
             e.preventDefault();
             if(this.input_checked_flag.value == 'true') {
                $.ajax({
                    url: 'wp-content/themes/auc-jp/assets/mail.php',
                  type: 'POST',
                    contentType: false,
                    processData: false,
                    data: new FormData(this),
                    success: function (msg) {
                        if (msg.trim() == 'ok') {
                            $('.popup-thanks').addClass('popup-thanks_active');
                            $('#calculate-form_main').trigger('reset');                    
                        } else {
                           alert('Ошибка, ответ сервера: ' + msg);
                        }
                        //closePopUp();
                    }
                });
             } else {
                console.log(this.input_checked_flag.value);
            }
             this.reset()
         });
     });

      $('#consultation-form_popup').trigger('reset');
      $(function () {
          'use strict';
          $('#consultation-form_popup').on('submit', function (e) {
              e.preventDefault();
              if(this.input_checked_flag.value == 'true') {
                $.ajax({
                    url: 'wp-content/themes/auc-jp/assets/mail.php',
                   type: 'POST',
                    contentType: false,
                    processData: false,
                    data: new FormData(this),
                    success: function (msg) {
                        if (msg.trim() == 'ok') {
                            $('.popup-consultation-form').removeClass('popup-consultation-form_active');
                            $('.popup-thanks').addClass('popup-thanks_active');
                            $('#consultation-form_popup').trigger('reset');                    
                        } else {
                          alert('Ошибка, ответ сервера: ' + msg);
                        }
                       // closePopUp();
                    }
                });
            } else {
                console.log(this.input_checked_flag.value);
            }
              this.reset()
          });
      });

      $('#calculate-form_popup').trigger('reset');
      $(function () {
          'use strict';
          $('#calculate-form_popup').on('submit', function (e) {
              e.preventDefault();
              if(this.input_checked_flag.value == 'true') {
                $.ajax({
                    url: 'wp-content/themes/auc-jp/assets/mail.php',
                    type: 'POST',
                    contentType: false,
                    processData: false,
                    data: new FormData(this),
                    success: function (msg) {
                       if (msg.trim() == 'ok') {
                            $('.popup-calculate-form').removeClass('popup-calculate-form_active');
                            $('.popup-thanks').addClass('popup-thanks_active');
                            $('#calculate-form_popup').trigger('reset');                    
                       } else {
                          alert('Ошибка, ответ сервера: ' + msg);
                        }
                       //closePopUp();
                    }
              });
              } else {
                console.log(this.input_checked_flag.value);
            }
            this.reset()
          });
      });

      $('#question-form_popup').trigger('reset');
      $(function () {
          'use strict';
          $('#question-form_popup').on('submit', function (e) {
              e.preventDefault();
              if(this.input_checked_flag.value == 'true') {
                $.ajax({
                    url: 'wp-content/themes/auc-jp/assets/mail.php',
                    type: 'POST',
                    contentType: false,
                    processData: false,
                    data: new FormData(this),                  
                    success: function (msg) {
                        if (msg.trim() == 'ok') {
                            $('.popup-question-form').removeClass('popup-question-form_active');
                            $('.popup-thanks').addClass('popup-thanks_active');
                            $('#question-form_popup').trigger('reset');                      
                       } else {
                          alert('Ошибка, ответ сервера: ' + msg);
                        }
                       // closePopUp();
                    }
                });
              } else {
                console.log(this.input_checked_flag.value);
            }
            this.reset();
          });
      });

    //add slider
    var swiper = new Swiper('.reviews__slider .swiper-container', {
        navigation: {
            nextEl: '.reviews__slider .swiper-button-next',
            prevEl: '.reviews__slider .swiper-button-prev',
        },
        loop: true
    });

    let youtubeSwiper = new Swiper ('.youtube-swiper-container .swiper-container', {
        // Optional parameters
        slidesPerView: 1,
        slidesPerGroup: 1,
        loop: true,
        spaceBetween: 40,

        breakpoints: {
            // when window width is >= 320px
            380: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              spaceBetween: 5
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              spaceBetween: 20
            },
            // when window width is >= 640px
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 40
            }
          },
    
        //pagination
        pagination: {
          el: '.youtube-swiper-pagination',
          clickable: true,
        },
    
        // Navigation arrows
        navigation: {
          nextEl: '.youtube-swiper-button-next',
          prevEl: '.youtube-swiper-button-prev',
        },
    });

    //create videoContainer after initialization script
    function findVideos() {
        let videos = document.querySelectorAll('.swiper-slide-video');
    
        for (let i = 0; i < videos.length; i++) {
            setupVideo(videos[i]);
        }
    }
    
    function setupVideo(video) {
        let link = video.querySelector('.swiper-slide-video__link');
        let media = video.querySelector('.swiper-slide-video__media');
        let button = video.querySelector('.swiper-slide-video__button');
        let id = parseMediaURL(media);
    
        video.addEventListener('click', () => {
            let iframe = createIframe(id);
    
            link.remove();
            button.remove();
            video.appendChild(iframe);
        });
    
        link.removeAttribute('href');
        video.classList.add('swiper-slide-video--enabled');
    }
    
    function parseMediaURL(media) {
        let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
        let url = media.src;
        let match = url.match(regexp);
    
        return match[1];
    }
    
    function createIframe(id) {
        let iframe = document.createElement('iframe');
    
        iframe.setAttribute('allowfullscreen', '');
        iframe.setAttribute('allow', 'autoplay');
        iframe.setAttribute('src', generateURL(id));
        iframe.classList.add('swiper-slide-video__media');
    
        return iframe;
    }
    
    function generateURL(id) {
        let query = '?rel=0&showinfo=0&autoplay=1';
    
        return 'https://www.youtube.com/embed/' + id + query;
    }
    
    findVideos();


    //input phone cheked numbers and currilic symbols
    //zoduaks
    document.body.addEventListener('input', (event) => {
        let target = event.target;
        if (target.matches('input[name="consultation__phone"]') || 
            target.matches('input[name="calculate__phone"]') || 
            target.matches('input[name="question__phone"]')) {
            target.value = target.value.replace(/[^\+\d]/g, '');
        }
        if (target.matches('input[name="consultation__name"]') || 
            target.matches('input[name="calculate__name"]') || 
            target.matches('input[name="question__name"]')
            ) {
            target.value = target.value.replace(/[^а-яА-Я,.!?"';: ]/, '');
        }
    });

    //add vk widget
    //zoduaks-v3
    // VK.Widgets.Group("vk_groups", {
    //     mode: 3,
    //     no_cover: 1,
    //     width: "300",
    //     color1: '3E4551',
    //     color2: 'FFFFFF',
    //     color3: 'E74C3C'
    // }, 62033979);

    //zoduaks
    //add jivisite to page
    // setTimeout(function jivosite_vidget(){
    //     const jivosite = document.createElement('script');
    //     jivosite.src = '//code.jivosite.com/widget/I7pl2u8CSK';
    //     document.body.appendChild(jivosite);
    // }, 3000);

    function jivosite_vidget(){
        const jivosite = document.createElement('script');
        jivosite.src = '//code.jivosite.com/widget/I7pl2u8CSK';
        document.body.appendChild(jivosite);
    }
    function vk_api(){
        const vkScript = document.createElement('script');
        vkScript.src = 'https://vk.com/js/api/openapi.js?167';
        document.body.appendChild(vkScript);
    }
    function vkApiAddVidgetToPage(){
        VK.Widgets.Group("vk_groups", {
            mode: 3,
            no_cover: 1,
            width: "300",
            color1: '3E4551',
            color2: 'FFFFFF',
            color3: 'E74C3C'
        }, 62033979);
    }

    function vk_vidget(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://vk.com/js/api/openapi.js?168",t.onload=function(){VK.Retargeting.Init("VK-RTRG-480014-1IgKk"),VK.Retargeting.Hit()},document.documentElement.appendChild(t)};

    function mango_time(){
        !function(t){function e(){i=document.querySelectorAll(".button-widget-open");for(var e=0;e<i.length;e++)"true"!=i[e].getAttribute("init")&&(options=JSON.parse(i[e].closest('.'+t).getAttribute("data-settings")),i[e].setAttribute("onclick","alert('"+options.errorMessage+"(0000)'); return false;"))}function o(t,e,o,n,i,r){var s=document.createElement(t);for(var a in e)s.setAttribute(a,e[a]);s.readyState?s.onreadystatechange=o:(s.onload=n,s.onerror=i),r(s)}function n(){for(var t=0;t<i.length;t++){var e=i[t];if("true"!=e.getAttribute("init")){options=JSON.parse(e.getAttribute("data-settings"));var o=new MangoWidget({host:'https://'+options.host,id:options.id,elem:e,message:options.errorMessage});o.initWidget(),e.setAttribute("init","true"),i[t].setAttribute("onclick","")}}}host="https://widgets.mango-office.ru/";var i=document.getElementsByClassName(t);o("link",{rel:"stylesheet",type:"text/css",href:host+"css/widget-button.css"},function(){},function(){},e,function(t){document.documentElement.insertBefore(t,document.documentElement.firstChild)}),o("script",{type:"text/javascript",src:host+"widgets/mango-callback.js"},function(){("complete"==this.readyState||"loaded"==this.readyState)&&n()},n,e,function(t){document.documentElement.appendChild(t)})}("mango-callback");
    }
    setTimeout(function(){
        // vk_api(),
        // vk_vidget(), 
        mango_time(), 
        jivosite_vidget(),
        vkApiAddVidgetToPage()
    }, 3000);
    // setTimeout(mango_time, 3700);
});

