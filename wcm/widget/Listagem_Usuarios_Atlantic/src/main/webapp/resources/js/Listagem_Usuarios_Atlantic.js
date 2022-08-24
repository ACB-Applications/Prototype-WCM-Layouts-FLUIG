var Listagem_Usuarios_Atlantic = SuperWidget.extend({
    //variáveis da widget
    variavelNumerica: null,
    variavelCaracter: null,
    array_usuarios: [],
    inicio_usuarios: 1,
    final_usuarios: 5,
    length_array_usuarios: null,
    loading: null,
    //método iniciado quando a widget é carregada
    init: function() {
    	this.loading = FLUIGC.loading('#Listagem_Usuarios_Atlantic_' + this.instanceId);
    	this.consultarUsuarios(); //chamada função para consultar os usuários do grupo SCI
    	$('#btn_anterior').attr('disabled','true');
    },
    
    
    consultarProximosUsuarios: function(){
    	var that = this;
    	$('#btn_proximo').removeAttr('disabled');
    	$('#btn_anterior').removeAttr('disabled');
    	finalusuarios = that.final_usuarios;
    	finalusuarioscom5 = finalusuarios+5;
    	if(finalusuarioscom5 > that.length_array_usuarios){
    		that.final_usuarios = finalusuarioscom5;
    		$('#btn_proximo').attr('disabled','true');
    	}else{
    		finalusuarios = finalusuarios+5;
    		that.final_usuarios = finalusuarios;
    	}
    	iniciousuarios = that.inicio_usuarios;
    	iniciousuarioscom5 = iniciousuarios+5;
    	if(iniciousuarioscom5 > that.length_array_usuarios){
    		that.inicio_usuarios = 1;
    		$('#btn_anterior').attr('disabled','true');
    	}else{
    		that.inicio_usuarios = iniciousuarioscom5;
    	}
    	/*if(iniciousuarioscom5 > that.length_array_usuarios){
    		that.inicio_usuarios = iniciousuarios;
    	}*/
    	that.renderizarUsuarios();
    	
    },
    
    consultarUsuariosAnteriores: function(){
    	var that = this;
    	$('#btn_proximo').removeAttr('disabled');
    	$('#btn_anterior').removeAttr('disabled');
    	finalusuarios = that.final_usuarios;
    	finalusuarioscom5 = finalusuarios-5;
    	if(finalusuarioscom5 > that.length_array_usuarios){
    		that.final_usuarios = finalusuarioscom5;
    		$('#btn_proximo').attr('disabled','true');
    	}else{
    		if(finalusuarioscom5 < 5){
    			that.final_usuarios = 5;
    		}else{
    			that.final_usuarios = finalusuarioscom5;
    		}
    		
    	}
    	iniciousuarios = that.inicio_usuarios;
    	iniciousuarioscom5 = iniciousuarios-5;
    	if(iniciousuarioscom5 <= 1){
    		that.inicio_usuarios = 1;
    		$('#btn_anterior').attr('disabled','true');
    	}else{
    		that.inicio_usuarios = iniciousuarioscom5;
    	}
    	/*if(iniciousuarioscom5 > that.length_array_usuarios){
    		that.inicio_usuarios = iniciousuarioscom5;
    	}*/
    	that.renderizarUsuarios();
    },
    
    //função que buscará os usuários do grupo SCI, armazenará a matrícula de cada um deles em um objeto informacoes_usuario e posteriormente os salvará no array_usuarios.
    consultarUsuarios: function(){
    	this.loading.show();
    	var that = this;
    	var papel_usuario = "";
    	$.ajax({
    		type: 'GET',
    		async: false,
    		dataType: 'json',
    		url: '/api/public/ecm/dataset/search?datasetId=colleagueGroup&filterFields=groupId,SCI',
    		contentType: 'application/json',
    		success: function(data, status, xhr){
    			if(data != null && data != undefined && data.content.length > 0){
					for (var x=0;x<data.content.length;x++){
						var informacoes_usuario = {
								matricula: data.content[x].colleagueId,
								login: "",
								nome: "",
								foto: "",
								status: false
						} 
						Listagem_Usuarios_Atlantic.array_usuarios.push(informacoes_usuario);
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
    	
    	//conforme os usuários salvos no array_usuarios, agora vamos complementar as informações dos usuários no array com seus respectivos nomes e logins, visto que o login será necessário para a busca da imagem de perfil de cada um.
    	for(var y=0;y<Listagem_Usuarios_Atlantic.array_usuarios.length;y++){
    		var c1 = DatasetFactory.createConstraint("colleaguePK.colleagueId", Listagem_Usuarios_Atlantic.array_usuarios[y].matricula, Listagem_Usuarios_Atlantic.array_usuarios[y].matricula, ConstraintType.MUST);
    		var constraints = new Array(c1);
    		var dataset_colleague = DatasetFactory.getDataset("colleague", null, constraints, null);
    		if (dataset_colleague != null && dataset_colleague.values != null && dataset_colleague.values.length > 0) {
    			var nome_usuario = dataset_colleague.values[0]["colleagueName"];
    			var matricula_usuario = dataset_colleague.values[0]["colleaguePK.colleagueId"];
    			var login_usuario = dataset_colleague.values[0]["login"];
    			var index = Listagem_Usuarios_Atlantic.array_usuarios.findIndex(b => b.matricula == matricula_usuario);
    			if(index > -1){
    				Listagem_Usuarios_Atlantic.array_usuarios[index].nome = nome_usuario;
    				Listagem_Usuarios_Atlantic.array_usuarios[index].login = login_usuario;
    			}
    		}
        		
    	}
    	//aqui agora realizaremos a chamada que retorna a imagem de perfil de cada usuário da plataforma contido no array de usuários.
    	for(var a=0;a<Listagem_Usuarios_Atlantic.array_usuarios.length;a++){
    		var login_usuario = Listagem_Usuarios_Atlantic.array_usuarios[a].login;
    		var imagem_64 = that.toDataURL(login_usuario,'https://atlanticnickeltst.fluig.com/social/api/rest/social/image/profile/'+login_usuario+'/MEDIUM_PICTURE', function(dataUrl) {
    			})
    		
    	}    	
    },
    
    //Esta função é chamada para renderizar o array de usuários em tela utilizando o template usuarios-tpl configurado no arquivo view.ftl
    renderizarUsuarios: function(){
    	var that = this;
    	var template = $(".usuarios-tpl").html();
    	that.length_array_usuarios = Listagem_Usuarios_Atlantic.array_usuarios.length;
    	var inicio_usuarios_tela = that.inicio_usuarios;
    	var final_usuarios_tela = that.final_usuarios;
    	if(final_usuarios_tela > Listagem_Usuarios_Atlantic.array_usuarios.length){
    		final_usuarios_tela = Listagem_Usuarios_Atlantic.array_usuarios.length;
    	}
    	var array_usuarios_tela = [];
    	for (var x=inicio_usuarios_tela;x<=final_usuarios_tela;x++){
    		array_usuarios_tela.push(Listagem_Usuarios_Atlantic.array_usuarios[x-1]);
    	}
    	var html = Mustache.to_html(template, {
    		usuarios : array_usuarios_tela
    	});
    	//$(".aniversariantes-div").append(html);
    	$('#usuarios-wrapper_' + this.instanceId).html("");
    	$('#usuarios-wrapper_' + this.instanceId).append(html);
    	this.loading.hide();
    },
    
    //Esta função captura a imagem retornada pela consulta da api e a converte para base64 para conseguir ser utilizada no template em tela. Chama a função atualizarArrayUsuarios que atualiza o array com a imagem de cada usuário.
    //Após todas as imagens de perfil serem carregadas, é validado se todos usuários estão com status true. Caso estejam, a função de renderização do array no template é chamada.
    toDataURL: function(login_usuario,url, callback) {
    	var that = this;
    	  var xhr = new XMLHttpRequest();
    	  xhr.onload = function() {
    	    var reader = new FileReader();
    	    reader.onloadend = function() {
    	      callback(reader.result);
    	      that.atualizarArrayUsuarios(login_usuario,reader.result);
  			
  			var concluido = Listagem_Usuarios_Atlantic.array_usuarios.findIndex(b => b.status == false);
  	    		if(concluido < 0){
  	    			console.log(Listagem_Usuarios_Atlantic.array_usuarios);
  	        		that.renderizarUsuarios();
  	        	}
  	    	
  			
    	    }
    	    reader.readAsDataURL(xhr.response);
    	  };
    	  xhr.open('GET', url);
    	  xhr.responseType = 'blob';
    	  xhr.send();
    },
    
    //Esta função recebe como parâmetro o login do usuário que foi retornada a foto e o base64 da imagem e atualiza as informações no array de usuários. 
    //Também atualiza o status true do respectivo usuário que já estiver com a foto retornada na função.   
    atualizarArrayUsuarios: function(login_usuario,foto){
    	var index = Listagem_Usuarios_Atlantic.array_usuarios.findIndex(c => c.login == login_usuario);
  		if(index > -1){
  			Listagem_Usuarios_Atlantic.array_usuarios[index].foto = foto;
  			Listagem_Usuarios_Atlantic.array_usuarios[index].status = true;
  		}
    },
    
    //BIND de eventos
    bindings: {
        local: {
            'execute': ['click_executeAction'],
            'previoususers': ['click_consultarUsuariosAnteriores'],
            'nextusers': ['click_consultarProximosUsuarios']
        },
        global: {}
    },
 
    executeAction: function(htmlElement, event) {
    }
    
   

});

