<div id="Listagem_Usuarios_Atlantic_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide" data-params="Listagem_Usuarios_Atlantic.instance()">
	<script type="text/javascript" src="/webdesk/vcXMLRPC.js"></script>
	<div class="" id="usuarios-wrapper_${instanceId}"></div>
	<button type="button" class="btn btn-primary" id="btn_anterior" name="btn_anterior" data-previoususers data-toggle="button">Anterior</button>
   	<button type="button" class="btn btn-primary" id="btn_proximo" name="btn_proximo" data-nextusers data-toggle="button">Próxima</button>
</div>

<script type="text/template" class="usuarios-tpl">
{{#usuarios}}
<div class="col-xs-12>
        <div class="media">
            <ul class="list-group">
                <li class="fs-no-border list-group-item fs-no-padding-right">
                    <div class="media">
                        <div class="media-body">
                            <div class="media">
                            	<a class="pull-left" href="#">
                                    <img class="fluig-style-guide thumb-profile thumb-profile-sm media-object img-circle userImage" width="40" src="{{foto}}" alt="{{nome}}"/>
                                </a>
                                <div class="media-body">
                                    <h4 class="media-heading"><br>{{nome}}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
   {{/usuarios}} 
</script>
