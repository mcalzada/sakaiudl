function selectContentFromIdiom() {
	const lang = document.documentElement.getAttribute('lang');
	console.log(lang);
	const elements = document.getElementsByClassName('Mrphs-container Mrphs-sakai-motd');
	console.log(elements);
	if (elements.length > 0) {
		for (var i = 0; i < elements.length; i++) {
			var contenidors = elements[i].getElementsByClassName('contingutsMOTD');
			if (contenidors.length > 0) {
				console.log(contenidors);
				for (var i = 0; i < contenidors.length; i++) {
					if (contenidors[i].id === lang) {
						console.log("Mostrem continguts "+contenidors[i].id);
						contenidors[i].style.display="block";
					}
					else {
						contenidors[i].style.display="none";
               		}
				}
    		}
			else {
				// dins iframe no es veuen
				console.log("iframe");
				var contenidorsIframe = elements[i].getElementsByClassName('Mrphs-toolBody Mrphs-toolBody--sakai-motd');
				if (contenidorsIframe.length > 0) {
					let frameObj = contenidorsIframe[0].firstElementChild;
					let contenidorsMOTD = 	frameObj.contentWindow.document.getElementsByClassName('contingutsMOTD');
					console.log(contenidorsMOTD);	
					for (var i = 0; i < contenidorsMOTD.length; i++) {
						if (contenidorsMOTD[i].id === lang) {
							console.log("Mostrem continguts "+contenidorsMOTD[i].id);
							contenidorsMOTD[i].style.display="block";
                		}
						else {
							contenidorsMOTD[i].style.display="none";
               			}
            		}
				}
				else {
						console("Sense continguts MOTD dins iframe");
				}

			}
		}
	}
	else {
		console.log("No hi ha elements amb la classe Mrphs-container Mrphs-sakai-motd");
	}
}
window.onload = function() {
	selectContentFromIdiom();
};
