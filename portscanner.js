function PortScanner() {
	/* intentionally left blank */
}

PortScanner.prototype.init = function() {
	
	var self = this;
	// host / adresse
	var host = "192.168.178.20";
	// iterate over all elements with class "portscanner"
	$(".portscanner").each(function(index) {

		var port = $(this).text();
		var target = host.concat(":", port);

		// perform the check for the host and port
		var element = $(this);
		self.check(function(target,port,status) {	
			// put the status into the element below
			if ( status == "OPEN" ) {
                            element.next().css("color",'white');
                            element.next().css("background",'green');
			    element.next().text('OPEN');
                        } else {
                            element.next().css("color",'white');
                            element.next().css("background",'red');
			    element.next().text('CLOSED!!!');
                        }
		}, host, port, 1000);
	});
};

/**
 * Taken from http://www.gnucitizen.org/blog/javascript-port-scanner/
 */
PortScanner.prototype.check = function (callback, target, port, timeout) {
	
	var timeout = (timeout == null)?100:timeout;
	var img = new Image();
	
	img.onerror = function () {
		if (!img) return;
		img = undefined;
		callback(target, port, 'OPEN');
	};
	
	img.onload = img.onerror;
	img.src = 'http://' + target + ':' + port;
	
	setTimeout(function () {
		if (!img) return;
		img = undefined;
		callback(target, port, 'CLOSED');
	}, timeout);
};

var portscanner = new PortScanner();
