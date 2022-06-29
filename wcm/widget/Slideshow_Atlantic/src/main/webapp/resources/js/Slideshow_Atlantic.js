var Slideshow_Atlantic = SuperWidget.extend({
    //variáveis da widget
    variavelNumerica: null,
    variavelCaracter: null,
    pastaGed: "",

    //método iniciado quando a widget é carregada
    init: function() {
    	Slideshow_Atlantic.pastaGed = this.pastaDoc;
    	Slideshow_Atlantic.descPastaGed = this.descPastaDoc;
    	this.loadCarousel();
    },
    
    loadCarousel: function(){
    	var that = this;
    	var arrayImagens = [];
    	$.ajax({
    		type: 'GET',
    		async: false,
    		dataType: 'json',
    		url: '/api/public/ecm/document/listDocument/'+that.pastaGed,
    		contentType: 'application/json',
    		success: function(data, status, xhr){
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

    	if(arrayImagens.length > 0){
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
    	}else{
    		$("<p>Nenhuma imagem encontrada na pasta</p>").appendTo("#carousel_images");
    	}
    	
    },
    
    saveParams: function(element, event){
    	var preferences = {};
    	preferences.pastaDoc = $("#pastaDoc_"+this.instanceId).val();
    	preferences.descPastaDoc = $("#descPastaDoc_"+this.instanceId).val();
    	
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
    
    chooseDirectory: function () {
		var that = this;

		ECMBC.searchDocument({
			showPrivate: false,
			showCheckOutDocs: false,
			selectableDocTypeId: '1',
			title: "Selecionar pasta",
			height: "calc(100vh - 138px)" // 138px é a soma da altura do header/footer/margens da modal
		}, function(err, document) {
				if(err) {
					FLUIGC.message.alert({
				    message: 'N\u00E3o foi poss\u00EDvel carregar os diret\u00F3rios do ECM.',
				    title: 'Diret\u00F3rio ECM',
				    label: 'Fechar'
					});
					return false;
				}

				that.setDirectory(document);
		});
	},
	
	setDirectory: function (doc) {
		

		this.fluigDirectoryID = doc.documentId;
		$('#pastaDoc_'+this.instanceId).val(this.fluigDirectoryID);

		this.fluigDirectoryName = doc.documentDescription;
		$('#descPastaDoc_'+this.instanceId).val(this.fluigDirectoryName);
	},
  
    //BIND de eventos
    bindings: {
        local: {
            'execute': ['click_executeAction'],
            'save-params': ['click_saveParams'],
            'find-fluigdir': ['click_chooseDirectory']
        },
        global: {}
    },
 
    executeAction: function(htmlElement, event) {
    }

});

