var Slideshow_Atlantic = SuperWidget.extend({
    //variáveis da widget
    variavelNumerica: null,
    variavelCaracter: null,
    pastaGed: "",

    //método iniciado quando a widget é carregada
    init: function() {
    	Slideshow_Atlantic.pastaGed = this.pastaDoc;
    	this.loadCarousel();
    },
    
    loadCarousel: function(){
    	var arrayImagens = [];
    	$.ajax({
    		type: 'GET',
    		async: false,
    		dataType: 'json',
    		url: '/api/public/ecm/document/listDocument/1094',
    		contentType: 'application/json',
    		success: function(data, status, xhr){
    			console.log(data);
    			if(data != null && data != undefined && data.content.length > 0){
					for (var x=0; x< data.content.length;x++) {
						var image_url = data.content[x].fileURL;
						var imagem = {
			    	        src: image_url,
			    	        alt: '',
			    	        title: '',
			    	        description: '',
			    	        linktarget: '_blank',
			    	        linkhref: 'http://www.fluig.com',
			    	        linktext: 'fluig'
						}
						arrayImagens.push(imagem);
                    }
    			}
    		},
    		error: function(xhr, status, error){
    			FLUIGC.toast({
    				message : "Erro: " + error,
    				type: "danger"
    			})
    		}
    	});
    	
    	var settings = {
    		    id: 'carouselAtlantic',
    		    images: arrayImagens,
    		    indicators: true,
    		    startIndex: 0,
    		    interval: 5000,
    		    resize: true,
    		    height: "576px",
    		    maxHeight: "576px"
    		};
    		 
    		var carousel = FLUIGC.carousel('#carousel_images', settings);
    },
    
    saveParams: function(element, event){
    	var preferences = {};
    	preferences.pastaDoc = $("#pastaDoc_"+this.instanceId).val();
    	
    	WCMSpaceAPI.PageService.UPDATEPREFERENCES({
    		async: true,
    		success: function(data){
    			FLUIGC.toast({
    				message: data.message,
    				type: 'success'
    			});
    		},
    		fail: function(xhr, message,errorData){
    			FLUIGC.toast({
    				message: errorData.message,
    				type: 'danger'
    			});
    		}
    	}, this.instanceId, preferences);
    	
    },
  
    //BIND de eventos
    bindings: {
        local: {
            'execute': ['click_executeAction']
        },
        global: {}
    },
 
    executeAction: function(htmlElement, event) {
    }

});

