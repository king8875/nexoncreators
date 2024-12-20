window.addEventListener('scroll', function () {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop; //현재 스크롤 위치
    var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight; //전체 스크롤 값
    var clientHeight = document.documentElement.clientHeight || document.body.clientHeight; //
    var scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
    var navContainer = document.querySelector('header');
    if (scrollTop >= 100) {
        navContainer.style.backgroundColor = 'white';
       
    } else if (scrollTop <= 90) {
        navContainer.style.backgroundColor = 'transparent';
         // hover 시 배경색을 흰색으로 변경
        navContainer.addEventListener('mouseenter', function () {
            navContainer.style.backgroundColor = 'white';
        });
         // hover를 벗어나면 배경색을 다시 투명으로
        navContainer.addEventListener('mouseleave', function () {
            navContainer.style.backgroundColor = 'transparent';
        });

    };
});

$(document).ready(function() {

    $('.slide-list a').mouseover(function () {
        $('.next').css('visibility', 'visible');
        $('.prev').css('visibility', 'visible');

    })
    $('.slide-list a').mouseleave(function () {
        $('.next').css('visibility', 'hidden');
        $('.prev').css('visibility', 'hidden');
    })

    $('.next').mouseover(function () {
        $('.next').css('visibility', 'visible');
        $('.prev').css('visibility', 'visible');

    })
    $('.prev').mouseover(function () {
        $('.next').css('visibility', 'visible');
        $('.prev').css('visibility', 'visible');
    })

    var num = 1;

    $('.next').on('click', function () {
        if (num == 1) {
            $('.slide-list .slide-item').css('transform', 'translateX(-100vw)');
            num = 2;
        } else if (num == 2) {
            $('.slide-list .slide-item').css('transform', 'translateX(-200vw)');
            num = 3;
        } else if (num == 3) {
            $('.slide-list .slide-item').css('transform', 'translateX(0vw)');
            num = 1;
        };
    });

    $('.prev').on('click', function () {
        if (num == 1) {
            $('.slide-list .slide-item').css('transform', 'translateX(-200vw)');
            num = 3;
        } else if (num == 2) {
            $('.slide-list .slide-item').css('transform', 'translateX(0vw)');
            num = 1;
        } else if (num == 3) {
            $('.slide-list .slide-item').css('transform', 'translateX(-100vw)');
            num = 2;

        };
    });
})

// 현재 날짜 출력 
var today = new Date();

var year = today.getFullYear();
var month = ('0' + (today.getMonth() + 1)).slice(-2);
var date = ('0' + today.getDate()).slice(-2);

var dateString = year + '.' + month + '.' + date;

document.querySelector('.date').innerHTML = dateString;
document.querySelector('.day').innerHTML = dateString;
document.querySelector('.day01').innerHTML = dateString;


console.log(dateString);


function countingType1(num) {
    const element = document.querySelector('.number');
    if (num == 0) {
        element.innerHTML = '0';
    } else {
        const each = Math.ceil(num / 33);
        let time = 0

        for (let i = 0; i < num; i += each) {
            setTimeout(() => {
                element.innerHTML = i;
            }, 20 * time);
            if (i + each > this.maxNum1) {
                setTimeout(() => {
                    element.innerHTML = num;
                }, 20 * (time + 1));
            }
            time++;
        }
    }
}

window.onload = function() {
    countingType1(2116);
}

 


    // 크리에이터즈 캠페인 이미지
    $('.sec04_item01').mouseover(function () {
        $(this).find('img').css('transform','scale(1.1)');
    });
    $('.sec04_item01').mouseleave(function () {
        $(this).find('img').css('transform','scale(1)');
    });

 

    // 캠페인 둘러보기 이미지 
    $('.li_item_01').mouseover(function() {
        $('#li_item_01_img').css('transform', 'scale(1.1)');
        $('#li_item_01_img').css('transition-duration', '.15s');

    });
    $('.li_item_01').mouseleave(function() {
        $('#li_item_01_img').css('transform', 'scale(1)');
    });

    $('.li_item_03').mouseover(function() {
        $('#li_item_03_img').css('transform', 'scale(1.1)');
        $('#li_item_03_img').css('transition-duration', '.15s');

    });
    $('.li_item_03').mouseleave(function() {
        $('#li_item_03_img').css('transform', 'scale(1)');
    });

    $('.li_item_04').mouseover(function() {
        $('#li_item_04_img').css('transform', 'scale(1.1)');
        $('#li_item_04_img').css('transition-duration', '.15s');

    });
    $('.li_item_04').mouseleave(function() {
        $('#li_item_04_img').css('transform', 'scale(1)');
    });


    const tabItem = document.querySelectorAll('.tab_item');
    const tabContent = document.querySelectorAll('.tab_content');

    tabItem.forEach((item, index) => {
        item.addEventListener('click', function (e) {
            e.preventDefault();

            tabContent.forEach((content) => {
                content.classList.remove('active');
            });
            tabItem.forEach((content) => {
                content.classList.remove('active');
            });

            tabItem[index].classList.add('active');
            tabContent[index].classList.add('active');
        });
    });






    const Sec02Swiper = new Swiper('.sec02-swiper.swiper',{
        loop:true,
        spaceBetween:10,
        slidesPerView:4,
        navigation: {
            nextEl: '.sec02_next',
            prevEl: '.sec02_pre',
        },

    });