var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function($) {
	jQuery.fn.stopwatch = function() {
		var clock = $(this);
		var timer = 0;
		
		clock.addClass('stopwatch');
		
		// This is bit messy, but IE is a crybaby and must be coddled. 
		clock.html('<div class="display"><span class="hr">00</span>:<span class="min">00</span>:<span class="sec">00</span></div><div class="controls"><a class="btn start">Start</a><a class="btn stop">Pause</a><a class="btn reset">Reset</a></div>');
		
		// We have to do some searching, so we'll do it here, so we only have to do it once.
		var h = $('.hr');
		var m = $('.min');
		var s = $('.sec');
		var start = $('.start');
		var stop = $('.stop');
		var reset = $('.reset');
		
		stop.hide();

		start.bind('click', function() {
			timer = setInterval(do_time, 1000);
			stop.show();
			start.hide();
		});
		
		stop.bind('click', function() {
			clearInterval(timer);
			timer = 0;
			start.show();
			stop.hide();
		});
		
		reset.bind('click', function() {
			clearInterval(timer);
			timer = 0;
			h.html("00");
			m.html("00");
			s.html("00");
			stop.hide();
			start.show();
		});
		
		function do_time() {
			// parseInt() doesn't work here...
			hour = parseFloat(h.text());
			minute = parseFloat(m.text());
			second = parseFloat(s.text());
			
			second++;
			
			if(second > 59) {
				second = 0;
				minute = minute + 1;
			}
			if(minute > 59) {
				minute = 0;
				hour = hour + 1;
			}
			
			h.html("0".substring(hour >= 10) + hour);
			m.html("0".substring(minute >= 10) + minute);
			s.html("0".substring(second >= 10) + second);
		}
	}
})(jQuery);


}
/*
     FILE ARCHIVED ON 21:38:20 Jan 19, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:28:22 Dec 13, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1.034
  exclusion.robots: 0.042
  exclusion.robots.policy: 0.012
  esindex: 0.013
  cdx.remote: 7.531
  LoadShardBlock: 135.417 (3)
  PetaboxLoader3.datanode: 62.079 (4)
  PetaboxLoader3.resolve: 150.826 (3)
  load_resource: 109.805
*/