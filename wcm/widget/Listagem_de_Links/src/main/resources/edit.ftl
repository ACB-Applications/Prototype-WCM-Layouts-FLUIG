<div id="Listagem_de_links_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide" 
	data-params="Listagem_de_links.instance({'liEnderecos': '${liEnderecos!""}','liTitulos': '${liTitulos!""}','liIds': '${liIds!""}','contadorLinkView': '${contadorLinkView!""}'})">
	
	<div class="row">
		<div class="col-md-12">
			<div class="form-group">
	        	<label for="EnderecoURL_${instanceId}">Endereço URL</label>
	        	<input class="form-control" name="EnderecoURL_${instanceId}" id="EnderecoURL_${instanceId}" value="${EnderecoURL!''}" placeholder="Ex.: Hello-World.com">
    		</div>
		</div>
	</div>
	
	<div class="row">
		<div class="col-md-12">
			<div class="form-group">
	        	<label for="TituloURL_${instanceId}">Título da URL</label>
	        	<input class="form-control" name="TituloURL_${instanceId}" id="TituloURL_${instanceId}" value="${TituloURL!''}" placeholder="Ex.: Hello World">
	        	<br />	        	
    		<div class="btn-group">
					<button type="button" data-adicionaritem class="btn btn-default">Adicionar</button>		
				</div>
				<div class="btn-group">
					<button class="btn btn-primary" data-save-params>Salvar</button>
				</div>
    	</div>
		</div>
	</div>
	
	<div class="row">
		<div class="col-md-12">
			<ul class="list-group" id="ListaLinks_${instanceId}" style="margin-bottom: 4px;">				
			</ul>
		</div>
	</div>

</div>