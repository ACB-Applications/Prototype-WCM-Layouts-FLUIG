var Widget_Listagem_de_links = SuperWidget.extend({
  //variáveis da widget
  variavelNumerica: null,
  variavelCaracter: null,
  contadorLink: 1,
  liItens: [],
  liItensView: null,
  liEnderecos: [],
  liTitulos: [],
  liIds: [],
  liEnderecosView: [],
  liTitulosView: [],
  liIdsView: [],
  nr_fichario: 1571,
  nm_fichario: "pre_cadastro_links",

  //método iniciado quando a widget é carregada
  init: function () {
    var that = this;
    $("#ListaLinks_" + this.instanceId).on("click", "button", function () {
      var id = $(this).closest("li").attr("id");
      that.removerFicha(id);
    });
    if (!this.isEditMode) {
      Widget_Listagem_de_links.liEnderecosView = this.liEnderecos;
      Widget_Listagem_de_links.liTitulosView = this.liTitulos;
      Widget_Listagem_de_links.liIdsView = this.liIds;
      console.log("executou");
      that.renderizarCards();
    } else {
      if (this.contadorLinkView != "") {
        Widget_Listagem_de_links.contadorLink = this.contadorLinkView;
      }
      that.atualizarTabela();
    }
  },

  renderizarCards: function () {
    var that = this;
    $("#ListaLinks_" + that.instanceId).html("");
    var nm_fichario = that.nm_fichario;
    var url_ajax =
      "/api/public/ecm/dataset/search?datasetId=" +
      nm_fichario +
      "&likeField=metadata_active,true";

    $.ajax({
      type: "GET",
      async: false,
      dataType: "json",
      url: url_ajax,
      contentType: "application/json",
      success: function (data, status, xhr) {
        if (data != null && data != undefined && data.content.length > 0) {
          var cont = 1;
          var itens = [];
          retorno_dataset = data.content;
          for (var s = 0; s < data.content.length; s++) {
            var nr_ficha = data.content[s].documentid;
            var nr_versao = data.content[s].version;
            var endereco = data.content[s].endereco;
            var titulo = data.content[s].titulo;
            var id = data.content[s].id;

            var element =
              '<a target="_blank" href=' +
              endereco +
              ' class="list-group-item"> <i class="flaticon flaticon-link icon-sm" aria-hidden="true"></i> &nbsp; ' +
              titulo +
              "</a>";
            $("#div_links").append(element);
          }
        }
      },
      error: function (xhr, status, error) {
        FLUIGC.toast({
          message: "Erro: " + error,
          type: "danger",
        });
      },
    });
  },

  createCard: function (fields) {
    var that = this;

    var nr_fichario = that.nr_fichario;
    var request_data = {
      documentDescription: "Criado via widget",
      parentDocumentId: nr_fichario,
      version: 1000,
      inheritSecurity: true,
      formData: fields,
      attachments: [],
    };

    $.ajax({
      type: "POST",
      dataType: "json",
      contentType: "application/json",
      url: "/api/public/2.0/cards/create",
      data: JSON.stringify(request_data),
      success: function (data, status, xhr) {
        if (data) {
          console.log(data);
          that.atualizarTabela();
        }
      },
      error: function (xhr, status, error) {
        FLUIGC.toast({
          message:
            "Erro ao criar a ficha, favor entrar em contato com um administrador",
          type: "danger",
        });
      },
    });
  },

  removerFicha: function (nr_ficha) {
    var that = this;

    $.ajax({
      type: "POST",
      contentType: "application/json",
      url: "/api/public/2.0/documents/deleteDocument/" + nr_ficha,
      error: function (e) {
        FLUIGC.toast({
          title: "",
          message:
            "Erro ao remover o link, favor entrar em contato com um administrador",
          type: "danger",
        });
      },
      success: function (data) {
        FLUIGC.toast({
          title: "",
          message: "Link removido com sucesso",
          type: "success",
        });
        that.atualizarTabela();
      },
    });
  },

  atualizarTabela: function () {
    var that = this;
    $("#ListaLinks_" + that.instanceId).html("");
    var nm_fichario = that.nm_fichario;
    var url_ajax =
      "/api/public/ecm/dataset/search?datasetId=" +
      nm_fichario +
      "&likeField=metadata_active,true";

    $.ajax({
      type: "GET",
      async: false,
      dataType: "json",
      url: url_ajax,
      contentType: "application/json",
      success: function (data, status, xhr) {
        if (data != null && data != undefined && data.content.length > 0) {
          var cont = 1;
          var itens = [];
          retorno_dataset = data.content;
          for (var s = 0; s < data.content.length; s++) {
            var nr_ficha = data.content[s].documentid;
            var nr_versao = data.content[s].version;
            var endereco = data.content[s].endereco;
            var titulo = data.content[s].titulo;
            var id = data.content[s].id;

            var liItem =
              '<li class="list-group-item" id=' +
              nr_ficha +
              '><i class="flaticon flaticon-link icon-sm" aria-hidden="true"></i><a href=' +
              endereco +
              ' target="_blank">&nbsp; ' +
              titulo +
              ' &nbsp;</a><button type="button" style="display: absolute; float: right; border: none; background: none;"><i class="flaticon flaticon-minus icon-sm" aria-hidden="true"></i></button></li>';
            $("#ListaLinks_" + that.instanceId).append(liItem);
          }
        }
      },
      error: function (xhr, status, error) {
        FLUIGC.toast({
          message: "Erro: " + error,
          type: "danger",
        });
      },
    });
  },

  carregarLinks: function () {
    var enderecos = JSON.parse(this.liEnderecos);
    var titulos = JSON.parse(this.liTitulos);
    var ids = JSON.parse(this.liIds);
    for (var x = 0; x < enderecos.length; x++) {
      var liItem =
        '<li class="list-group-item" id=' +
        ids[x] +
        '><i class="flaticon flaticon-link icon-sm" aria-hidden="true"></i><a href=' +
        enderecos[x] +
        ' target="_blank">&nbsp; ' +
        titulos[x] +
        ' &nbsp;</a><button type="button" style="display: absolute; float: right; border: none; background: none;"><i class="flaticon flaticon-minus icon-sm" aria-hidden="true"></i></button></li>';
      // $("#ListaLinks_" + this.instanceId).append(liItem);
      Widget_Listagem_de_links.liEnderecos.push(enderecos[x]);
      Widget_Listagem_de_links.liTitulos.push(titulos[x]);
      Widget_Listagem_de_links.liIds.push(ids[x]);
    }
  },

  renderizarLinks: function () {
    console.log(Widget_Listagem_de_links.liEnderecosView);
    console.log(JSON.parse(Widget_Listagem_de_links.liEnderecosView));
    var enderecos = JSON.parse(Widget_Listagem_de_links.liEnderecosView);
    var titulos = JSON.parse(Widget_Listagem_de_links.liTitulosView);
    var ids = JSON.parse(Widget_Listagem_de_links.liIdsView);
    for (var x = 0; x < enderecos.length; x++) {
      var element =
        '<a target="_blank" href=' +
        enderecos[x] +
        ' class="list-group-item"> <i class="flaticon flaticon-link icon-sm" aria-hidden="true"></i> &nbsp; ' +
        titulos[x] +
        "</a>";
      $("#div_links").append(element);
    }
  },

  //BIND de eventos
  bindings: {
    local: {
      execute: ["click_executeAction"],
      adicionaritem: ["click_addLink"],
      removerItem: ["click_removerLink"],
      "save-params": ["click_saveParams"],
    },
    global: {},
  },

  removerLink: function (id) {
    $("#" + id).remove();
    /*
	  var indice = Widget_Listagem_de_links.liItens.indexOf(id);
	  if(indice > -1){
		  Widget_Listagem_de_links.liItens.splice(indice,1);
	  }
	  */
    for (var i = Widget_Listagem_de_links.liIds.length - 1; i >= 0; --i) {
      if (Widget_Listagem_de_links.liIds[i] == id) {
        Widget_Listagem_de_links.liIds.splice(i, 1);
        Widget_Listagem_de_links.liEnderecos.splice(i, 1);
        Widget_Listagem_de_links.liTitulos.splice(i, 1);
      }
    }
  },

  addLink: function () {
    var that = this;
    var dadosCampos = {};

    dadosCampos.EnderecoURL = $("#EnderecoURL_" + this.instanceId).val();
    dadosCampos.TituloURL = $("#TituloURL_" + this.instanceId).val();
    if (dadosCampos.EnderecoURL == "" || dadosCampos.TituloURL == "") {
      FLUIGC.toast({
        message: "Favor informar os campos Endereço e Título da URL!",
        type: "danger",
      });
    } else {
      dadosCampos.id = that.contadorLink;
      var liItem =
        '<li class="list-group-item" id=' +
        that.contadorLink +
        '><i class="flaticon flaticon-link icon-sm" aria-hidden="true"></i><a href=' +
        dadosCampos.EnderecoURL +
        ' target="_blank">&nbsp; ' +
        dadosCampos.TituloURL +
        ' &nbsp;</a><button type="button" style="display: absolute; float: right; border: none; background: none;"><i class="flaticon flaticon-minus icon-sm" aria-hidden="true"></i></button></li>';
      $("#ListaLinks_" + this.instanceId).append(liItem);
      //Widget_Listagem_de_links.liItens.push(dadosCampos);
      Widget_Listagem_de_links.liEnderecos.push(dadosCampos.EnderecoURL);
      Widget_Listagem_de_links.liTitulos.push(dadosCampos.TituloURL);
      Widget_Listagem_de_links.liIds.push(that.contadorLink);

      $("#EnderecoURL_" + this.instanceId).val("");
      $("#TituloURL_" + this.instanceId).val("");
      FLUIGC.toast({
        message: "Endereço adicionado!",
        type: "success",
      });

      var fields = [];
      fields.push({ name: "endereco", value: dadosCampos.EnderecoURL });
      fields.push({ name: "titulo", value: dadosCampos.TituloURL });
      fields.push({ name: "id_linha", value: dadosCampos.contadorLink });
      that.createCard(fields);

      that.contadorLink = parseInt(that.contadorLink) + 1;
    }
  },

  saveParams: function (element, event) {
    var that = this;
    var preferences = {};
    preferences.liEnderecos = Widget_Listagem_de_links.liEnderecos;
    preferences.liTitulos = Widget_Listagem_de_links.liTitulos;
    preferences.liIds = Widget_Listagem_de_links.liIds;
    preferences.contadorLinkView = parseInt(that.contadorLink);

    WCMSpaceAPI.PageService.UPDATEPREFERENCES(
      {
        async: true,
        success: function (data) {
          FLUIGC.toast({
            message: data.message,
            type: "success",
          });
        },
        fail: function (xhr, message, errorData) {
          FLUIGC.toast({
            message: errorData.message,
            type: "danger",
          });
        },
      },
      this.instanceId,
      preferences
    );
  },
});
