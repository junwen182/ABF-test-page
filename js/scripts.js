$(".loader").hide();

$(".button").click(function(){
	$(".loader").show();
});

$(document).ready(function(){
  $('.carousel').slick({
  	infinite: true,
  	slidesToShow: 5,
  	slidesToScroll: 1,
  	speed: 100,
  	cssEase: 'cubic-bezier(0.660, -0.095, 0.470, 1.080)',
  	prevArrow: "<i class='fa fa-chevron-left prev-arrow'></i>",
  	nextArrow: "<i class='fa fa-chevron-right next-arrow'></i>",
  	responsive: [
  		{
	      breakpoint: 1260,
	      settings: {
	        slidesToShow: 4,
	        slidesToScroll: 1,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 1130,
	      settings: {
	        slidesToShow: 4,
	        slidesToScroll: 1,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 780,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]	
  });
});
