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

						<div class="fluig-style-guide">
							<div class="page-header">
								<h1>${pageTitle}</h1>
							</div>
						</div>

						<!-- Slot 1 -->
						<div class="editable-slot slotfull layout-1-1" id="slotFull1">
							<@wcm.renderSlot id="SlotC" editableSlot="true"/>
						</div>

						<!-- Slot 2 -->
						<div class="editable-slot slotfull layout-1-1" id="slotFull2">
							<div id="slotB" class="sortable" slot="true" decorator="false"
								editableSlot="true">
								<div class="wcm-layouttab-container">
									<nav id="nav" class="system-tabs-navigation">
										<ul class="list-tabs-navigation list-inline">
											<#list (pageRender.getInstancesIds("slotB"))! as id>
											<li class="tab-navigation-items state-default">
												<a class="item-navigation-link" href="#">${pageRender.getInstanceTitle(id)}
												</a>
											</li>
											</#list>
										</ul>
									</nav>
									<#list (pageRender.getInstancesIds("slotB"))! as id>
									<section class="wcm-layouttab-section">
										${pageRender.renderInstanceNoDecorator(id)}
									</section>
									</#list>
								</div>
							</div>
						</div>

						<!-- Slot 3 -->
						<div class="editable-slot slotfull layout-1-1" id="slotFull3">
							<@wcm.renderSlot id="SlotA" editableSlot="true"
							decorator="true"/>
						</div>

					</div>
				</div>

				<@wcm.footer layoutuserlabel="wcm.layouttabs.user" />

			</div>
		</div>
	</div>
</div>