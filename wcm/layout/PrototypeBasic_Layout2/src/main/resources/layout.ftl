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
				<div class="editable-slot slotfull layout-1-1" id="slotFull1">
						<@wcm.renderSlot id="SlotA" editableSlot="true"/>
				</div>
				<div class="layout-2-3left clearfix" id="all-slots-left">
					<div class="clearfix">
							<!-- Slot 1 -->
							<div style="width:49%!important" class="editable-slot slotfull layout-1-3" id="slotFull2">
								<@wcm.renderSlot id="SlotB" editableSlot="true"/>
							</div>
							<!-- Slot 2 -->
							<div style="width:49%!important" class="editable-slot slotfull layout-1-3" id="slotFull3">
								<@wcm.renderSlot id="SlotC" editableSlot="true"/>
							</div>
					</div>
				</div>				
				<div class="layout-1-3right clearfix" id="all-slots-right">	
					<!-- Slot 3 -->
					<div class="editable-slot slotfull layout-1-1" id="slotFull4">
							<@wcm.renderSlot id="SlotE" editableSlot="true"/>
					</div>
					<div class="editable-slot slotfull layout-1-1" id="slotFull4">
							<@wcm.renderSlot id="SlotF" editableSlot="true"/>
					</div>
					<div class="editable-slot slotfull layout-1-1" id="slotFull4">
							<@wcm.renderSlot id="SlotG" editableSlot="true"/>
					</div>
					<div class="editable-slot slotfull layout-1-1" id="slotFull4">
							<@wcm.renderSlot id="SlotH" editableSlot="true"/>
					</div>
					<div class="editable-slot slotfull layout-1-1" id="slotFull4">
							<@wcm.renderSlot id="SlotI" editableSlot="true"/>
					</div>
				</div>
				<div class="editable-slot slotfull layout-2-3left" id="slotFull1">
					<@wcm.renderSlot id="SlotD" editableSlot="true"/>
				</div>	
			</div>
			<!-- FIM DAS WIDGETS DO LAYOUT -->
      <@wcm.footer layoutuserlabel="wcm.layoutarsocial.user" />
		</div>
	</div>
</div>