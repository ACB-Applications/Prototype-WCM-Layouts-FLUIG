<#import "/wcm.ftl" as wcm/>
<@wcm.header authenticated="true"/>
<!-- WCM Wrapper content -->
<div class="wcm-wrapper-content">
	<@wcm.menu />
	<!-- Wrapper -->
	<div class="wcm-all-content">
		<div id="wcm-content" class="clearfix wcm-background">		
			<!-- Your content here -->
			<#if pageRender.isEditMode()=true>
				<!-- Onde deverá estar a barra de formatação -->
				<div name="formatBar" id="formatBar"></div>
					<!-- Div geral -->
					<!-- Há CSS distinto para Edição/Visualização -->
				<div id="edicaoPagina" class="clearfix">
			<#else>
				<div id="visualizacaoPagina" class="clearfix">
	    </#if>
				<div class="slotfull layout-1-1">
					<span class="titleArea">${i18n.getTranslation('wcm.layoutarsocial.title')}</span>
					<h2 class="pageTitle">${pageTitle}</h2>
				</div>
				<!-- Slot 1 -->			
				<div class="editable-slot slotfull layout-1-1" id="slotFull1">
						<@wcm.renderSlot id="SlotA" editableSlot="true"/>
				</div>			
				<div class="layout-2-3left clearfix" id="all-slots-left">
					<!-- Slot 2 -->
					<div class="editable-slot slotfull layout-1-1" id="slotFull2">
						<@wcm.renderSlot id="SlotD" editableSlot="true"/>
					</div>			
				</div>	
				<div class="layout-1-3right clearfix" id="all-slots-right">
					<!-- Slot 3 -->
					<div class="editable-slot slotfull layout-1-1" id="slotFull3">
						<@wcm.renderSlot id="SlotE" editableSlot="true"/>
					</div>
				</div>	
			</div>
			<!-- FIM DAS WIDGETS DO LAYOUT -->
			<@wcm.footer layoutuserlabel="wcm.layoutdefault.user" />
		</div>
	</div>
</div>