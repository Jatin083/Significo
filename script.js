function homePageAnimation() {
    gsap.set(".slidesm", { scale: 4 });
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".home",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5,
      },
    });
  
    tl.to(
      ".vdodiv",
      {
        "--clip": "0%",
        ease: Power2,
      },
      "a"
    )
  
      .to(
        ".slidesm",
        {
          scale: 1,
          ease: Power2,
        },
        "a"
      )
  
      .to(
        ".lft",
        {
          xPercent: -10,
          stagger: 0.03,
          ease: Power4,
        },
        "b"
      )
  
      .to(
        ".rgt",
        {
          xPercent: 10,
          stagger: 0.03,
          ease: Power4,
        },
        "b"
      );
  }
  
  function realPageAnimaton() {
    gsap.to(".slide", {
      scrollTrigger: {
        trigger: ".real",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
      xPercent: -210,
      ease: Power4,
    });
  }
  
  function teamPageAnimation() {
    document.querySelectorAll(".listelem").forEach(function (el) {
      el.addEventListener("mousemove", function (dets) {
        gsap.to(this.querySelector(".picture"), {
          opacity: 1,
          x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
          ease: Power4,
          duration: 0.5,
        });
      });
  
      el.addEventListener("mouseleave", function (dets) {
        gsap.to(this.querySelector(".picture"), {
          opacity: 0,
          ease: Power4,
          duration: 0.5,
        });
      });
    });
  }
  
  function paraAnimation() {
    var clutter = "";
    document
      .querySelector(".textpara")
      .textContent.split("")
      .forEach(function (e) {
        if (e === " ") clutter += `<span>&nbsp;</span>`;
        clutter += `<span>${e}</span>`;
      });
    document.querySelector(".textpara").innerHTML = clutter;
  
    gsap.set(".textpara span", { opacity: 0.1 });
    gsap.to(".textpara span", {
      scrollTrigger: {
        trigger: ".textpara",
        start: "top 40%",
        end: "bottom 80%",
        scrub: 2,
      },
      opacity: 1,
      stagger: 0.03,
      ease: Power4,
    });
  }
  
  function loco(){
      (function () {
          const locomotiveScroll = new LocomotiveScroll();
      })();
  }
  
  function capsulePageAnimaton(){
      gsap.to(".capsule:nth-child(2)", {
          scrollTrigger: {
              trigger: ".capsules",
              start: "top 70%",
              end: "bottom bottom",
              scrub: 1,
          },
          y: 0,
          ease: Power4
      })
  }
  
  function bodyColorChange(){
      document.querySelectorAll(".section").forEach(function(e){
          ScrollTrigger.create({
              trigger: e,
              start: "top 50%",
              end: "bottom 50%",
              onEnter: function(){
                  document.body.setAttribute("theme", e.dataset.color);
              },
              onEnterBack: function(){
                  document.body.setAttribute("theme", e.dataset.color);
              },
          })
      })
  }
  
  homePageAnimation();
  realPageAnimaton();
  teamPageAnimation();
  paraAnimation();
  loco();
  capsulePageAnimaton();
  bodyColorChange();
  