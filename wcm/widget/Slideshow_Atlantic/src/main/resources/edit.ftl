<div id="Slideshow_Atlantic_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide" data-params="Slideshow_Atlantic.instance({'pastaDoc': '${pastaDoc!""}','descPastaDoc': '${descPastaDoc!""}'})">

	<div class="row">
		<div class="col-md-3 form-group">
			<label for="pastaDoc_${instanceId}">Pasta das imagens</label>
			<input type="hidden" id="pastaDoc_${instanceId}" value="${pastaDoc!''}"></input>
			<input type="text" name="descPastaDoc_${instanceId}" id="descPastaDoc_${instanceId}" class="form-control" readonly="readonly" value="${descPastaDoc!''}"></input>
			<br>
			<button class="btn btn-primary" data-find-fluigdir>Diretório ECM</button>
			</br>
		</div>
	</div>
	
	<div class="row">
		<div class="col-md-3">
			<button class="btn btn-primary" data-save-params>Salvar</button>
		</div>
	</div>

</div>

