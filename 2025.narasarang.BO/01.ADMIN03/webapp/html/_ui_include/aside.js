(function () {
	const str = `
											<div class="side-menu" id="side-menu">
					<h3>사이트 운영관리</h3>
					<nav>
						<ul class="side-dep2">
							<li>
								<a href="javascript:void(0)" class="active"><span>menu2-1</span></a>
								<ul class="side-dep3">
									<li><a href="javascript:void(0)" class="active">menu3-1</a></li>
									<li><a href="javascript:void(0)">menu3-2</a></li>
								</ul>
							</li>
							<li>
								<a href="javascript:void(0)"><span>menu2-2</span></a>
								<ul class="side-dep3">
									<li><a href="javascript:void(0)">menu3-1</a></li>
									<li><a href="javascript:void(0)">menu3-2</a></li>
								</ul>
							</li>
							<li>
								<a href="javascript:void(0)"><span>menu2-3</span></a>
							</li>
						</ul>
					</nav>
				</div>
	`;

	document.write(str);
})();
