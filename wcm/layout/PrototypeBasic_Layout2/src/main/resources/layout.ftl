<#import "/wcm.ftl" as wcm/>
<@wcm.header authenticated="true"/>
<!-- WCM Wrapper content -->
<div class="wcm-wrapper-content">
  <@wcm.menu />
	<!-- Wrapper -->
	<div class="wcm-all-content">
		<div id="wcm-content" class="clearfix wcm-background">
			<!-- Onde deverá estar a barra de formatação -->
			<#if pageRender.isEditMode()=true>
				<div name="formatBar" id="formatBar"></div>
				<!-- Div geral -->
				<!-- Há CSS distinto para Edição/Visualização -->
				<div id="edicaoPagina" class="clearfix">
			<#else>
				<div id="visualizacaoPagina" class="clearfix">	
	    </#if>				
				<!-- Slot -->	
				<div class="editable-slot slotfull layout-1-1" id="slotFull">
						<@wcm.renderSlot id="SlotA" editableSlot="true"/>
				</div>
				<!-- Slot container do lado esquerdo -->
				<div class="layout-2-3left clearfix" id="all-slots-left">
					<div class="clearfix">
							<!-- Slot 1 -->
							<div style="width:49%!important" class="editable-slot slotfull layout-1-3" id="slotFull">
								<@wcm.renderSlot id="SlotB" editableSlot="true"/>
							</div>
							<!-- Slot 2 -->
							<div style="width:49%!important" class="editable-slot slotfull layout-1-3" id="slotFull">
								<@wcm.renderSlot id="SlotC" editableSlot="true"/>
							</div>
					</div>
				</div>
				<!-- Slot container do lado direito -->				
				<div class="layout-1-3right clearfix" id="all-slots-right">	
					<!-- Slot 1 -->
					<div class="editable-slot slotfull layout-1-1" id="slotFull">
							<@wcm.renderSlot id="SlotF" editableSlot="true"/>
					</div>
					<!-- Slot 2 -->
					<div class="editable-slot slotfull layout-1-1" id="slotFull">
							<@wcm.renderSlot id="SlotG" editableSlot="true"/>
					</div>
					<!-- Slot 3 -->
					<div class="editable-slot slotfull layout-1-1" id="slotFull">
							<@wcm.renderSlot id="SlotH" editableSlot="true"/>
					</div>
					<!-- Slot 4 -->
					<div class="editable-slot slotfull layout-1-1" id="slotFull">
							<@wcm.renderSlot id="SlotI" editableSlot="true"/>
					</div>
					<!-- Slot 5 -->
					<div class="editable-slot slotfull layout-1-1" id="slotFull">
							<@wcm.renderSlot id="SlotJ" editableSlot="true"/>
					</div>
				</div>
				<div class="layout-2-3left clearfix" id="all-slots-left">	
					<!-- Slot 1 -->
					<div class="editable-slot slotfull layout-1-1" id="slotFull">
						<@wcm.renderSlot id="SlotD" editableSlot="true"/>
					</div>
					<!-- Slot 2 -->
					<div class="editable-slot slotfull layout-1-1" id="slotFull">
						<@wcm.renderSlot id="SlotE" editableSlot="true"/>
					</div>
				</div>
			</div>
			<!-- FIM DAS WIDGETS DO LAYOUT -->
      <@wcm.footer layoutuserlabel="wcm.layoutarsocial.user" />
		</div>
	</div>
</div>