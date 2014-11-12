(function($) {
	var setup = {
	  openMenu:function(target, settings){
  	  $(target).click(function(e){
  	    e.preventDefault();
  	    e.stopPropagation();
        var $this = $(this);
        var thisTrigger = $('a'+settings.trigger).index(this);
        var thisMenu = $(settings.menu+':eq('+thisTrigger+')');
        $(settings.menu).parent().removeClass("active");
        $(settings.menu).css('z-index', 101).slideUp('slow');
        if(thisMenu.is(":not(:visible)")){
          thisMenu.css('z-index', 201).slideDown('slow', settings.open).parent().addClass("active");
        }
      });
      
      $(document).click(function(e){
        var menu = $(settings.menu);
        if(menu.has(e.target).length == 0){
          menu.parent().removeClass("active");
          menu.css('z-index', 101).slideUp('slow');
        }
      });
	  }
	},
	methods = {
    init:function(options){
      if(this.length){
    	  var settings = {
    	    trigger:".open-menu",
      	  menu:".mega-menu",
      	  open:function(){}
    	  }
    	  
    	  return this.each(function(){
      	  if(options){
        	  $.extend(settings, options)
      	  }
      	  setup.openMenu(this, settings);
    	  })
      }
    }
  };
  
  $.fn.megamenu = function(method){
    if(methods[method]){
			return methods[method].apply( this, Array.prototype.slice.call(arguments, 1));
		}else if(typeof method === 'object' || ! method){
			return methods.init.apply(this, arguments);
		}else{
			$.error('Method '+method+' does not exist on jQuery.megamenu');
		}
  }
	  
})(jQuery);		
