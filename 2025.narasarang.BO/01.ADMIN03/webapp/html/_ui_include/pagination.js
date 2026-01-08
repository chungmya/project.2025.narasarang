(function () {
	const str = `
  				<div class="contents-area">
					<div class="cont-box">
						<div class="heading">
							<h3>Contents</h3>
						</div>

						<!-- pagination -->
						<div class="pagination-area">
							<div class="pagination-wrap">
								<div class="prev-navi">
									<a href="" class="first-page hidden" id="first-page"><span>첫번째페이지</span></a>
									<a href="" class="prev-page hidden" id="prev-page"><span>이전페이지</span></a>
								</div>
								<div class="page-list">
									<ul>
										<li>
											<a href="" class="active"><span>1</span></a>
										</li>
										<li>
											<a href=""><span>2</span></a>
										</li>
										<li>
											<a href=""><span>3</span></a>
										</li>
										<li>
											<a href=""><span>4</span></a>
										</li>
										<li>
											<a href=""><span>5</span></a>
										</li>
										<li>
											<a href=""><span>6</span></a>
										</li>
										<li>
											<a href=""><span>7</span></a>
										</li>
										<li>
											<a href=""><span>8</span></a>
										</li>
									</ul>
								</div>
								<div class="next-navi">
									<a href="" class="next-page" id="next-page"><span>다음페이지</span></a>
									<a href="" class="last-page" id="last-page"><span>마지막페이지</span></a>
								</div>
							</div>
						</div>

						<div class="pagination-area">
							<div class="pagination-wrap">
								<div class="prev-navi">
									<a href="" class="first-page disabled" id="first-page"><span>첫번째페이지</span></a>
									<a href="" class="prev-page" id="prev-page"><span>이전페이지</span></a>
								</div>
								<div class="page-list">
									<ul>
										<li>
											<a href=""><span>1</span></a>
										</li>
										<li>
											<a href="" class="active"><span>2</span></a>
										</li>
										<li>
											<a href=""><span>3</span></a>
										</li>
										<li>
											<a href=""><span>4</span></a>
										</li>
										<li>
											<a href=""><span>5</span></a>
										</li>
									</ul>
								</div>
								<div class="next-navi">
									<a href="" class="next-page" id="next-page"><span>다음페이지</span></a>
									<a href="" class="last-page" id="last-page"><span>마지막페이지</span></a>
								</div>
							</div>
						</div>

						<div class="pagination-area">
							<div class="pagination-wrap">
								<div class="prev-navi">
									<a href="" class="first-page" id="first-page"><span>첫번째페이지</span></a>
									<a href="" class="prev-page" id="prev-page"><span>이전페이지</span></a>
								</div>
								<div class="page-list">
									<ul>
										<li>
											<a href=""><span>5</span></a>
										</li>
										<li>
											<a href=""><span>6</span></a>
										</li>
										<li>
											<a href="" class="active"><span>7</span></a>
										</li>
									</ul>
								</div>
								<div class="next-navi">
									<a href="" class="next-page hidden" id="next-page"><span>다음페이지</span></a>
									<a href="" class="last-page hidden" id="last-page"><span>마지막페이지</span></a>
								</div>
							</div>
						</div>
					</div>
				</div>
  `;
	document.write(str);
})();
