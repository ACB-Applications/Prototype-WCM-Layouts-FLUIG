<div id="Slideshow_Atlantic_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide" data-params="Slideshow_Atlantic.instance({'pastaDoc': '${pastaDoc!""}','descPastaDoc': '${descPastaDoc!""}'})">
	<div class="card">
		<div class="card-body">
			<form role="form">
				<div class="row">
					<div class="col-md-6">
						<div class="form-group">
							<label for="pastaDoc_${instanceId}">Nome da pasta das imagens</label>
							<input type="hidden" id="pastaDoc_${instanceId}" value="${pastaDoc!''}">
							<input type="text" class="form-control" name="descPastaDoc_${instanceId}" id="descPastaDoc_${instanceId}" value="${descPastaDoc!''}" style="margin-bottom: 15px;" readonly="readonly">
							<button class="btn btn-default" data-find-fluigdir>Selecionar pasta</button>
							<button class="btn btn-primary" data-save-params>Salvar</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	</div>
</div>

