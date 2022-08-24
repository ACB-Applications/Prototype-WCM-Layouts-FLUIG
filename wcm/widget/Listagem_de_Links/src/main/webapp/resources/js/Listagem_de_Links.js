var Widget_Listagem_de_links = SuperWidget.extend({
  //variáveis da widget
  variavelNumerica: null,
  variavelCaracter: null,

  //método iniciado quando a widget é carregada
  init: function () {},

  //BIND de eventos
  bindings: {
    local: {
      execute: ["click_executeAction"],
    },
    global: {},
  },

  addLink: function () {
    var dadosCampos = {};

    dadosCampos.EnderecoURL = $("EnderecoURL_" + this.instanceId).val();
    dadosCampos.TituloURL = $("TituloURL_" + this.instanceId).val();

    var Lista = (dadosCampos) => {
      `<li class="list-group-item">
          <i class="flaticon flaticon-link icon-sm" aria-hidden="true"></i> 
          &nbsp; ${dadosCampos.TituloURL} &nbsp; 
          <button type="button" style="display: absolute; float: right; border: none; background: none;">
            <i class="flaticon flaticon-minus icon-sm" aria-hidden="true"></i>
          </button>
        </li>
      `;
    };
  },
});
