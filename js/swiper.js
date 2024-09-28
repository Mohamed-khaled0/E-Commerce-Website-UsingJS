
//  Swiper  Slide 
  var swiper = new Swiper(".slide-swp", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets :true,
      clickable:true
    },
    autoplay:{
      delay:2500,
    },
    loop:true
  });
//  Slide for Sale_slide  

  var swiper = new Swiper(".sale_sec", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets :true,
      clickable:true
    },
    slidesPerView:5,
    spaceBetween:30,
    autoplay:{
      delay:3000,
    },
    navigation:{
      nextEl:".swiper-button-next",
      prevEl:".swiper-button-prev"
    },
    loop:true
  });