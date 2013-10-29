$( document ).ready(function() {

			$("#pedido").hide();

			var counter = 0;
			var clock = 10;
			var interval = 0;

			function timerClock(){
				interval = window.setInterval(function () {
					if (clock > 1){
						clock -= 1;
						$("#timer").html(clock + " segundos");
					} else {
						window.clearInterval(interval);
						$("#timer").fadeOut('fast');
						$("#counter").fadeOut('fast');
						$("#pedido").delay(1000).fadeIn('slow');
					}
				}, 1000);
			}

			$("img").click(function(event) {
				if (clock !== 0){
					window.clearInterval(interval);
					$("#counter").html(" X " + (++counter));
					clock = 10;
					$("#timer").html(clock + " segundos");
					timerClock();
					}
			});
		});