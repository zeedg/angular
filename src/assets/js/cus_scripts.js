
$(document).ready(function($){
	
	$(".featured-left").click(function(){
		var w = $(".owl-item").width();
        $(".offlajn-universal-product-slider-90-1-container-inner .owl-wrapper-outer").animate({scrollLeft: "-="+w});
    });
    $(".featured-right").click(function(){
		var w = $(".owl-item").width();
        $(".offlajn-universal-product-slider-90-1-container-inner .owl-wrapper-outer").animate({scrollLeft: "+="+w});
    });
	
	$(".new-left").click(function(){
		var w = $(".owl-item").width();
        $(".offlajn-universal-product-slider-900-1-container-inner .owl-wrapper-outer").animate({scrollLeft: "-="+w});
    });
    $(".new-right").click(function(){
		var w = $(".owl-item").width();
        $(".offlajn-universal-product-slider-900-1-container-inner .owl-wrapper-outer").animate({scrollLeft: "+="+w});
    });

});

function show_overflow(val){	
		$('#'+val+'_scroller .owl-wrapper-outer').css('overflow-x', 'auto');
	}
	
	function hide_overflow(val){	
		$('#'+val+'_scroller .owl-wrapper-outer').css('overflow-x', 'hidden');
	}
	
	function show_control()
	{
		$('.carousel-control').show();
	}
	
	function hide_control()
	{
		$('.carousel-control').hide();
	}

  $.noConflict();
  ;(window.jq183||jQuery)(document).ready(function($) {
  $("#dd_user_input").focus(function(){
	  $('#category').addClass("focus");	  
	})
.blur(function() {
        $('#category').removeClass("focus");
	});
   var cont = "offlajn-universal-product-slider-90-1-container";
    var theme = "flat";
    $("#" + cont).removeClass("loading loading2");
  
  var res = function() {
    var cont = "offlajn-universal-product-slider-90-1-container";
    var theme = "flat";
    if(theme =="light" || theme =="modern") {
      var w = jQuery(window).outerWidth();
      var p = $("#" + cont).parent(); 
      $("#" + cont + " .cont").width(w).css({"left":"-"+p.offset().left+"px"});
    }
    
    
    var h = $("#" + cont + " .off-uni-slider-item.showdesc img").height();
    
    
    
    var showheader = "1";
    var h = $("#" + cont + " .off-uni-slider-item.showdesc img").height();
    $("#" + cont + " .off-uni-slider-item.truncdesc, #" + cont + " .off-uni-slider-item .truncdesc").css({height: h+"px"});
    $(owl90).trigger("owlafterUpdate");
    
    if(theme == "simple" || theme == "elegant") {
      var h = $("#" + cont + " .owl-item .item_header").outerHeight();
      if(showheader != "1") {
        h = 0;
      }
      var mainH = $("#" + cont + " .owl-item .main").outerHeight();
      if(mainH - 150 > 0) {
        h += ($("#" + cont + " .owl-item .main").outerHeight() - 150)/2;
      }
      $("#" + cont + " .off-uni-slider-left-container, #" + cont + " .off-uni-slider-right-container").css({marginTop: h + "px"}); 
    } else {
      var headerW = $("#" + cont + " .off_uni_slider_header").outerWidth();
      var titleW =  $("#" + cont + " .title").outerWidth();
      var controllerW = $("#" + cont + " .controller").outerWidth();
      var paginations = $("#" + cont + " .controller .owl-pagination .owl-page");
     
    }    
  };
  
  owl90 = $(".offlajn-universal-product-slider-90-1-container-inner");
  owl90.owlCarousel({
       
        afterInit : function(c){        
          that = this;
          var cont = "offlajn-universal-product-slider-90-1";
          var controller = "#"+ cont +"-container .controller";
          var c = $("" + controller + "");
            that.owlControls.prependTo(c);
            //res();          
        },
        afterUpdate : res,
        itemsCustom : [
          [0, 1],
          [469, 2],
          [569, 3],          
          [769, 4],
          [1025, 4],
          [1400, 5]
        ],
        singleItem : false,
        autoPlay: false,
        lazyLoad: true,
        slideSpeed: 500,
  		rewindNav:false,
        stopOnHover: true,
		autoDraggerLength: false,
  });
  owl90.trigger("owl.afterUpdate");          
  $(window).load(function() {
    res();
  });
  var cont = "offlajn-universal-product-slider-90-1-container";
  var theme = "flat";
  var lArrow = $("#" + cont + " .off-uni-slider-left-container").on("click", function() {owl90.trigger("owl.prev");});
  var rArrow = $("#" + cont + " .off-uni-slider-right-container").on("click", function() {owl90.trigger("owl.next");});
  if(theme == "flat" || theme == "plastic" || theme == "modern" || theme == "light" || theme == "simple" || theme == "blank") {
    var lArrow = $("#" + cont + " .off-uni-slider-left").on("click", function() {owl90.trigger("owl.prev");});
    var rArrow = $("#" + cont + " .off-uni-slider-right").on("click", function() {owl90.trigger("owl.next");});
  }
  var lArrowInner = $("#" + cont + " .off-uni-slider-left-arrow");
  var rArrowInner = $("#" + cont + " .off-uni-slider-right-arrow"); 
  $(document).on("keypress", function(e){
                                switch(e.key) {
                                  case "Left": owl90.trigger("owl.prev"); break;                                   
                                  case "Right": owl90.trigger("owl.next"); break;
                                }                                  
                              });
							  
				                                 
                  });
        
;(window.jq183||jQuery)(document).ready(function($) {
  
   var cont = "offlajn-universal-product-slider-900-1-container";
    var theme = "flat";
    $("#" + cont).removeClass("loading loading2");
  
  var res = function() {
    var cont = "offlajn-universal-product-slider-900-1-container";
    var theme = "flat";
    if(theme =="light" || theme =="modern") {
      var w = jQuery(window).outerWidth();
      var p = $("#" + cont).parent(); 
      $("#" + cont + " .cont").width(w).css({"left":"-"+p.offset().left+"px"});
    }
    
    
    var h = $("#" + cont + " .off-uni-slider-item.showdesc img").height();
    
    
    
    var showheader = "1";
    var h = $("#" + cont + " .off-uni-slider-item.showdesc img").height();
    $("#" + cont + " .off-uni-slider-item.truncdesc, #" + cont + " .off-uni-slider-item .truncdesc").css({height: h+"px"});
    $(owl90).trigger("owlafterUpdate");
    
    if(theme == "simple" || theme == "elegant") {
      var h = $("#" + cont + " .owl-item .item_header").outerHeight();
      if(showheader != "1") {
        h = 0;
      }
      var mainH = $("#" + cont + " .owl-item .main").outerHeight();
      if(mainH - 150 > 0) {
        h += ($("#" + cont + " .owl-item .main").outerHeight() - 150)/2;
      }
      $("#" + cont + " .off-uni-slider-left-container, #" + cont + " .off-uni-slider-right-container").css({marginTop: h + "px"}); 
    } else {
      var headerW = $("#" + cont + " .off_uni_slider_header").outerWidth();
      var titleW =  $("#" + cont + " .title").outerWidth();
      var controllerW = $("#" + cont + " .controller").outerWidth();
      var paginations = $("#" + cont + " .controller .owl-pagination .owl-page");
     /* if(titleW + controllerW > headerW) {
        $(paginations).css({display: "none"});
      } else {
        $(paginations).css({display: "inline-block"});
      }*/ 
    }    
  };
  
  owl900 = $(".offlajn-universal-product-slider-900-1-container-inner");
  owl900.owlCarousel({
       
        afterInit : function(c){        
          that = this;
          var cont = "offlajn-universal-product-slider-900-1";
          var controller = "#"+ cont +"-container .controller";
          var c = $("" + controller + "");
            that.owlControls.prependTo(c);
            //res();          
        },
        afterUpdate : res,
        itemsCustom : [
          [0, 1],
          [469, 2],
          [569, 3],          
          [769, 4],
          [1025, 4],
          [1400, 5]
        ],
        singleItem : false,
        autoPlay: false,
        lazyLoad: true,
        slideSpeed: 500,
  		rewindNav:false,
        stopOnHover: true,
  });
  owl900.trigger("owl.afterUpdate");          
  $(window).load(function() {
    res();
  });
  var cont = "offlajn-universal-product-slider-900-1-container";
  var theme = "flat";
  var lArrow = $("#" + cont + " .off-uni-slider-left-container").on("click", function() {owl900.trigger("owl.prev");});
  var rArrow = $("#" + cont + " .off-uni-slider-right-container").on("click", function() {owl900.trigger("owl.next");});
  if(theme == "flat" || theme == "plastic" || theme == "modern" || theme == "light" || theme == "simple" || theme == "blank") {
    var lArrow = $("#" + cont + " .off-uni-slider-left").on("click", function() {owl900.trigger("owl.prev");});
    var rArrow = $("#" + cont + " .off-uni-slider-right").on("click", function() {owl900.trigger("owl.next");});
  }
  var lArrowInner = $("#" + cont + " .off-uni-slider-left-arrow");
  var rArrowInner = $("#" + cont + " .off-uni-slider-right-arrow"); 
  $(document).on("keypress", function(e){
                                switch(e.key) {
                                  case "Left": owl900.trigger("owl.prev"); break;                                   
                                  case "Right": owl900.trigger("owl.next"); break;
                                }                                  
                              });
                             
  
          });

$(window).load(function() {
  /*$('#ddm_amazon').show();*/
  document.getElementById('ddm_amazon').style.visibility="visible";
});
  