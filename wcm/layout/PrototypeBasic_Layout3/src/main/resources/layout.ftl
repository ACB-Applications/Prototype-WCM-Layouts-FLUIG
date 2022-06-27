<#import "/wcm.ftl" as wcm/>
<@wcm.header />
<!-- WCM Wrapper content -->
<div class="wcm-wrapper-content">
	<@wcm.menu />
	<!-- Wrapper -->
	<div class="wcm-all-content">
		<div id="wcm-content" class="clearfix wcm-background">
			<div id="wcm_wrap">
				<#if pageRender.isEditMode()=true>
				<div name="formatBar" id="formatBar"></div>
				<div id="edicaoPagina" class="clearfix">
					<#else>
					<div id="visualizacaoPagina" class="clearfix">
						</#if>
						<!-- Slot container do lado esquerdo -->
						<div class="layout-2-3left clearfix" id="all-slots-left">
							<!-- Slot 1 -->
							<div class="editable-slot slotfull layout-1-1" id="slotFull">
								<div id="slotA" class="sortable" slot="true" decorator="false"
									editableSlot="true">
									<div class="wcm-layouttab-container">
										<nav id="nav" class="system-tabs-navigation">
											<ul class="list-tabs-navigation list-inline">
												<#list (pageRender.getInstancesIds("slotA"))! as id>
												<li class="tab-navigation-items state-default">
													<a class="item-navigation-link" href="#">${pageRender.getInstanceTitle(id)}
													</a>
												</li>
												</#list>
											</ul>
										</nav>
										<#list (pageRender.getInstancesIds("slotA"))! as id>
										<section class="wcm-layouttab-section">
											${pageRender.renderInstanceNoDecorator(id)}
										</section>
										</#list>
									</div>
								</div>
							</div>
							<!-- Slot 2 -->
							<div class="editable-slot slotfull layout-1-1" id="slotFull">
								<@wcm.renderSlot id="SlotB" editableSlot="true"/>
							</div>
						</div>
						<!-- Slot container do lado direito -->		
						<div class="layout-1-3right clearfix" id="all-slots-right">
							<!-- Slot 1 -->
							<div class="editable-slot slotfull layout-1-1" id="slotFull">
								<@wcm.renderSlot id="SlotG" editableSlot="true"/>
							</div>
							<!-- Slot 2 -->
							<div class="editable-slot slotfull layout-1-1" id="slotFull">
								<@wcm.renderSlot id="SlotH" editableSlot="true"/>
							</div>
							<!-- Slot 3 -->
							<div class="editable-slot slotfull layout-1-1" id="slotFull">
								<@wcm.renderSlot id="SlotI" editableSlot="true"/>
							</div>
							<!-- Slot 4 -->
							<div class="editable-slot slotfull layout-1-1" id="slotFull">
								<@wcm.renderSlot id="SlotJ" editableSlot="true"/>
							</div>
							<!-- Slot 5 -->
							<div class="editable-slot slotfull layout-1-1" id="slotFull">
								<@wcm.renderSlot id="SlotK" editableSlot="true"/>
							</div>
						</div>
						<!-- Slot container do lado esquerdo -->
						<div class="layout-2-3left clearfix" id="all-slots-left">
							<div class="clearfix">
									<!-- Slot 1 -->
									<div style="width:49%!important" class="editable-slot slotfull layout-1-3" id="slotFull">
										<@wcm.renderSlot id="SlotC" editableSlot="true"/>
									</div>
									<!-- Slot 2 -->
									<div style="width:49%!important" class="editable-slot slotfull layout-1-3" id="slotFull">
										<@wcm.renderSlot id="SlotD" editableSlot="true"/>
									</div>
									<!-- Slot 3 -->
									<div style="width:49%!important" class="editable-slot slotfull layout-1-3" id="slotFull">
										<@wcm.renderSlot id="SlotE" editableSlot="true"/>
									</div>
									<!-- Slot 4 -->
									<div style="width:49%!important" class="editable-slot slotfull layout-1-3" id="slotFull">
										<@wcm.renderSlot id="SlotF" editableSlot="true"/>
									</div>
							</div>
						</div>
					</div>
				</div><!-- FIM DAS WIDGETS DO LAYOUT -->
				<!-- footer -->
				<@wcm.footer layoutuserlabel="wcm.layouttabs.user" />
			</div>
		</div>
	</div>
</div>