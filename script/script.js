(function ($) {
  class Obj {
    init() {
      this.header();
      this.section1();
      this.section2();
      this.section3();
      this.footer();
      this.modal();
    }
    header() {
      // 메인버튼 마우스 오버 이벤트
      $(".main-btn").on({
        mouseenter() {
          $(".sub").stop().slideUp(0);
          $(this).next().stop().slideDown(200);
          $(".main-btn").removeClass("on");
          $(this).addClass("on");
        },
      });
      $(".col").on({
        mouseleave() {
          $(".sub").stop().slideUp(200);
          $(".main-btn").removeClass("on");
        },
      });
    }
    section1() {
      let cnt = 0;
      //1. 메인슬라이드함수
      function mainSlide() {
        $(".slide-wrap")
          .stop()
          .animate({ top: `${-100 * cnt}%` }, 600, function () {
            if (cnt > 2) {
              cnt = 0;
            }
            $(".slide-wrap")
              .stop()
              .animate({ top: `${-100 * cnt}%` }, 0);
          });
      }

      //2. 다음카운트함수
      function nextCount() {
        cnt++;
        mainSlide();
      }

      //3. 자동타이머함수
      function autoTimer() {
        setInterval(nextCount, 3000);
      }
      autoTimer();
    }
    section2() {}
    section3() {
      // 갤러리박스 누를 때
      $(".gallery-btn").on({
        click() {
          $(".notice-btn,.gallery-btn,.contents").addClass("on");
          //   $(".gallery-btn").addClass("on");
          //   $(".contents").addClass("on");
        },
      });

      // 공지박스 누를 때
      $(".notice-btn").on({
        click() {
          $(".notice-btn,.gallery-btn,.contents").removeClass("on");
          //   $(".gallery-btn").removeClass("on");
          //   $(".contents").removeClass("on");
        },
      });
    }
    footer() {}
    modal() {
      //모달 열기
      $(".notice-s").on({
        click() {
          // e.prenentDefault();
          $(".popup").addClass("open");
        },
      });

      //모달 닫기
      $(".close-btn").on({
        click() {
          $(".popup").removeClass("open");
        },
      });
    }
  }
  const obj = new Obj(); // 클래스 객체를 생성하여 사용한다.
  obj.init();
})(jQuery);
