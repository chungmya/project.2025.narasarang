<template>
	<q-page class="g-page">
		<!-- 서브상단 -->
		<SubHeaderSection
			:breadcrumbItems="breadcrumbItems"
			:pageTitle="pageTitle"
			:pageDescription="pageDescription"
		></SubHeaderSection>
		<!-- //서브상단 -->

		<!-- 서브컨텐츠 -->
		<div class="g-content">
			<!-- 일정 타이틀영역 -->
			<div class="sub-schedule-title" role="group">
				<button class="q-icon-left size-28 cursor-pointer">
					<span class="blind">이전 주</span>
				</button>
				<div class="title" role="heading" aria-live="polite">2024.12.31 ~ 2024.01.07</div>
				<button class="q-icon-right size-28 cursor-pointer">
					<span class="blind">다음 주</span>
				</button>
			</div>

			<div class="sub-schedule-title" role="group">
				<button class="q-icon-left size-28 cursor-pointer">
					<span class="blind">이전 월</span>
				</button>
				<div class="title" role="heading" aria-live="polite">2024년 1월</div>
				<button class="q-icon-right size-28 cursor-pointer">
					<span class="blind">다음 월</span>
				</button>
			</div>

			<div class="sub-schedule-title" role="group">
				<button class="q-icon-left size-28 cursor-pointer">
					<span class="blind">이전 년</span>
				</button>
				<div class="title" role="heading" aria-live="polite">2024년</div>
				<button class="q-icon-right size-28 cursor-pointer">
					<span class="blind">다음 년</span>
				</button>
			</div>

			<!-- 서브검색영역 -->
			<q-form>
				<div class="sub-search-wrap">
					<div class="ss-table" :class="ssOGRadio != 'ssra1' ? 'col2' : ''">
						<div class="ss-tr">
							<div class="ss-th"><span class="ss-label" aria-hidden="true">구분</span></div>
							<div class="ss-td">
								<q-option-group
									class="custom-optiongroup-btn"
									label="구분"
									v-model="ssOGRadio"
									:options="ssOGRadioOpt"
								/>
							</div>
							<div v-if="ssOGRadio != 'ssra1'" class="ss-th">
								<span class="ss-label" aria-hidden="true">회원 아이디</span>
							</div>
							<div v-if="ssOGRadio != 'ssra1'" class="ss-td">
								<q-input class="custom-input col" label="회원 아이디" v-model="ssIpt" />
							</div>
						</div>
					</div>
				</div>
			</q-form>

			<q-form>
				<div class="sub-search-wrap">
					<div class="ss-table">
						<div class="ss-tr">
							<div class="ss-th"><span class="ss-label" aria-hidden="true">제목</span></div>
							<div class="ss-td">
								<q-input class="custom-input col" label="제목" v-model="ssIpt" />
							</div>
						</div>
					</div>
					<q-btn class="custom-btn bd-blue width-sm-full" label="검색" />
				</div>
			</q-form>

			<q-form>
				<div class="sub-search-wrap">
					<div class="ss-table">
						<div class="ss-tr">
							<div class="ss-th">
								<span class="ss-label" aria-hidden="true">제목/내용/담당자</span>
							</div>
							<div class="ss-td">
								<q-select
									class="custom-select col ss-type"
									v-model="ssSel"
									:options="ssSelOpt"
									label="제목/내용/담당자"
								/>
								<q-input class="custom-input col" label="제목/내용/담당자" v-model="ssIpt" />
							</div>
						</div>
					</div>
					<q-btn class="custom-btn bd-blue width-sm-full" label="검색" />
				</div>
			</q-form>

			<q-form>
				<div class="sub-search-wrap">
					<div class="ss-table col2">
						<div class="ss-tr">
							<div class="ss-th"><span class="ss-label" aria-hidden="true">분류</span></div>
							<div class="ss-td">
								<q-select
									class="custom-select col"
									v-model="ssSel"
									:options="ssSelOpt"
									label="분류"
								/>
							</div>
							<div class="ss-th"><span class="ss-label" aria-hidden="true">제목</span></div>
							<div class="ss-td">
								<q-input class="custom-input col" label="제목" v-model="ssIpt" />
							</div>
						</div>
					</div>
					<q-btn class="custom-btn bd-blue width-sm-full" label="검색" />
				</div>
			</q-form>

			<q-form>
				<div class="sub-search-wrap">
					<div class="ss-table col2-half-left">
						<div class="ss-tr">
							<div class="ss-th"><span class="ss-label" aria-hidden="true">년도</span></div>
							<div class="ss-td">
								<q-input class="custom-input col" label="년도" v-model="ssIptYear" readonly />
							</div>
							<div class="ss-th"><span class="ss-label" aria-hidden="true">분류</span></div>
							<div class="ss-td">
								<q-select
									class="custom-select col"
									v-model="ssSel"
									:options="ssSelOpt"
									label="분류"
								/>
							</div>
							<div class="ss-th"><span class="ss-label" aria-hidden="true">사업명/담당</span></div>
							<div class="ss-td">
								<q-select
									class="custom-select col ss-type"
									v-model="ssSel"
									:options="ssSelOpt"
									label="사업명"
								/>
								<q-input class="custom-input col" label="담당" v-model="ssIpt" />
							</div>
						</div>
					</div>
					<q-btn class="custom-btn bd-blue width-sm-full" label="검색" />
				</div>
			</q-form>

			<q-form>
				<div class="sub-search-wrap">
					<div class="ss-table col2">
						<div class="ss-tr">
							<div class="ss-th"><span class="ss-label" aria-hidden="true">기간</span></div>
							<div class="ss-td">
								<q-input class="custom-input col" label="기간" v-model="ssIptDateRange" readonly>
									<template v-slot:append>
										<q-icon class="q-icon-calendar size-20" />
									</template>
								</q-input>
							</div>
							<div class="ss-th"><span class="ss-label" aria-hidden="true">시도</span></div>
							<div class="ss-td">
								<q-select
									class="custom-select col"
									v-model="ssSel"
									:options="ssSelOpt"
									label="시도"
								/>
							</div>
						</div>
						<div class="ss-tr">
							<div class="ss-th"><span class="ss-label" aria-hidden="true">분류</span></div>
							<div class="ss-td">
								<q-select
									class="custom-select col"
									v-model="ssSel"
									:options="ssSelOpt"
									label="분류"
								/>
							</div>
							<div class="ss-th"><span class="ss-label" aria-hidden="true">세부분류</span></div>
							<div class="ss-td">
								<q-select
									class="custom-select col"
									v-model="ssSel"
									:options="ssSelOpt"
									label="세부분류"
								/>
							</div>
						</div>
					</div>
					<q-btn class="custom-btn bd-blue width-sm-full" label="검색" />
				</div>
			</q-form>

			<q-form>
				<div class="sub-search-wrap">
					<div class="ss-table col2">
						<div class="ss-tr">
							<div class="ss-th"><span class="ss-label" aria-hidden="true">기간Range</span></div>
							<div class="ss-td">
								<date-range-picker v-model="ssDateRangePicker" />
							</div>
							<div class="ss-th"><span class="ss-label" aria-hidden="true">시도</span></div>
							<div class="ss-td">
								<q-select
									class="custom-select col"
									v-model="ssSel"
									:options="ssSelOpt"
									label="시도"
								/>
							</div>
						</div>
						<div class="ss-tr">
							<div class="ss-th"><span class="ss-label" aria-hidden="true">분류</span></div>
							<div class="ss-td">
								<q-select
									class="custom-select col"
									v-model="ssSel"
									:options="ssSelOpt"
									label="분류"
								/>
							</div>
							<div class="ss-th"><span class="ss-label" aria-hidden="true">세부분류</span></div>
							<div class="ss-td">
								<q-select
									class="custom-select col"
									v-model="ssSel"
									:options="ssSelOpt"
									label="세부분류"
								/>
							</div>
						</div>
					</div>
					<q-btn class="custom-btn bd-blue width-sm-full" label="검색" />
				</div>
			</q-form>

			<q-form>
				<div class="sub-search-wrap">
					<div class="ss-table col3">
						<div class="ss-tr">
							<div class="ss-th">
								<span class="ss-label required" aria-hidden="true">분류</span>
							</div>
							<div class="ss-td">
								<q-select
									class="custom-select col"
									v-model="ssSel"
									:options="ssSelOpt"
									label="분류"
									aria-required="true"
								/>
							</div>
							<div class="ss-th none"></div>
							<div class="ss-td none"></div>
							<div class="ss-th none"></div>
							<div class="ss-td none"></div>
						</div>
						<div class="ss-tr">
							<div class="ss-th"><span class="ss-label" aria-hidden="true">시도</span></div>
							<div class="ss-td">
								<q-select
									class="custom-select col"
									v-model="ssSel"
									:options="ssSelOpt"
									label="시도"
								/>
							</div>
							<div class="ss-th"><span class="ss-label" aria-hidden="true">성별</span></div>
							<div class="ss-td">
								<q-select
									class="custom-select col"
									v-model="ssSel"
									:options="ssSelOpt"
									label="성별"
								/>
							</div>
							<div class="ss-th">
								<span class="ss-label required" aria-hidden="true">이름</span>
							</div>
							<div class="ss-td">
								<q-input
									class="custom-input col"
									label="이름"
									v-model="ssIpt"
									aria-required="true"
								/>
							</div>
						</div>
					</div>
					<q-btn class="custom-btn bd-blue width-sm-full" label="검색" />
				</div>
			</q-form>

			<q-form>
				<div class="sub-search-wrap">
					<div class="ss-table col3">
						<div class="ss-tr">
							<div class="ss-th">
								<span class="ss-label required" aria-hidden="true">분류</span>
							</div>
							<div class="ss-td">
								<q-select
									class="custom-select col"
									v-model="ssSel"
									:options="ssSelOpt"
									label="분류"
									aria-required="true"
								/>
							</div>
							<div class="ss-th"><span class="ss-label" aria-hidden="true">선수유형</span></div>
							<div class="ss-td">
								<q-select
									class="custom-select col"
									v-model="ssSel"
									:options="ssSelOpt"
									label="선수유형"
								/>
							</div>
							<div class="ss-th"><span class="ss-label" aria-hidden="true">장애유형</span></div>
							<div class="ss-td">
								<q-select
									class="custom-select col"
									v-model="ssSel"
									:options="ssSelOpt"
									label="장애유형"
								/>
							</div>
						</div>
						<div class="ss-tr">
							<div class="ss-th"><span class="ss-label" aria-hidden="true">시도</span></div>
							<div class="ss-td">
								<q-select
									class="custom-select col"
									v-model="ssSel"
									:options="ssSelOpt"
									label="시도"
								/>
							</div>
							<div class="ss-th"><span class="ss-label" aria-hidden="true">성별</span></div>
							<div class="ss-td">
								<q-select
									class="custom-select col"
									v-model="ssSel"
									:options="ssSelOpt"
									label="성별"
								/>
							</div>
							<div class="ss-th">
								<span class="ss-label required" aria-hidden="true">이름</span>
							</div>
							<div class="ss-td">
								<q-input
									class="custom-input col"
									label="이름"
									v-model="ssIpt"
									aria-required="true"
								/>
							</div>
						</div>
					</div>
					<q-btn class="custom-btn bd-blue width-sm-full" label="검색" />
				</div>
			</q-form>

			<!-- list -->
			<h3 class="subtit-lg">카드형 / 리스트형 전환</h3>
			<div class="board-list">
				<div class="bo-head">
					<p class="total">
						총 <span class="cnt">100</span>건
						<q-select
							v-if="viewType === 'list'"
							class="custom-select size-xs"
							v-model="scnt"
							:options="scntOpt"
							label="건수보기"
						/>
					</p>

					<!-- 보기 형식 전환 버튼 -->
					<q-btn-toggle class="btn-viewtype" v-model="viewType" :options="viewTypeOption" />
				</div>
				<div class="bo-body">
					<ul v-if="viewType === 'card'" class="card-txtlist">
						<li>
							<dl>
								<dt>Date</dt>
								<dd>2024-01-01</dd>
								<dt>시도</dt>
								<dd>서울</dd>
								<dt>구분</dt>
								<dd>성인</dd>
							</dl>
						</li>
						<li>
							<dl>
								<dt>Date</dt>
								<dd>2024-01-01</dd>
								<dt>시도</dt>
								<dd>서울</dd>
								<dt>구분</dt>
								<dd>성인</dd>
							</dl>
						</li>
						<li>
							<dl>
								<dt>Date</dt>
								<dd>2024-01-01</dd>
								<dt>시도</dt>
								<dd>서울</dd>
								<dt>구분</dt>
								<dd>성인</dd>
							</dl>
						</li>
						<li>
							<dl>
								<dt>Date</dt>
								<dd>2024-01-01</dd>
								<dt>시도</dt>
								<dd>서울</dd>
								<dt>구분</dt>
								<dd>성인</dd>
							</dl>
						</li>
					</ul>

					<table v-else class="bo-table">
						<caption>
							심리측정현황 확인하는 표 - Date, 시도, 구분으로 구성
						</caption>
						<colgroup>
							<col style="width: 20%" />
							<col style="width: 40%" />
							<col />
						</colgroup>
						<thead>
							<tr>
								<th scope="col">Date</th>
								<th scope="col">시도</th>
								<th scope="col">구분</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td b-title="Date">2024-01-01</td>
								<td b-title="시도">서울</td>
								<td b-title="구분">성인</td>
							</tr>
						</tbody>
					</table>

					<!-- nodata 리스트 -->
					<table class="bo-table nodata">
						<caption>
							데이터가 존재하지 않습니다.
						</caption>
						<tbody>
							<tr>
								<td>
									<!-- nodata -->
									<div class="box-nodata">
										<div class="icon-nodata"></div>
										<p>데이터가 존재하지 않습니다.</p>
									</div>
									<!-- //nodata -->
								</td>
							</tr>
						</tbody>
					</table>
					<!-- //nodata 리스트 -->
				</div>
			</div>

			<!-- list -->
			<h3 class="subtit-lg">리스트 샘플1</h3>
			<h4 class="subtit-xs">참고&gt; 항목이 많을 경우 bo-table에 .bo-multi-data class 추가</h4>
			<div class="board-list">
				<div class="bo-head">
					<p class="total">총 <span class="cnt">3</span>건</p>
					<ul class="bo-step">
						<li aria-current="step">신청</li>
						<li>접수</li>
						<li>승인/반려</li>
					</ul>
				</div>
				<div class="bo-body">
					<table class="bo-table">
						<caption>
							심판 등록신청 진행상태 확인하는 표 - 번호, 신청자, 신청일, 진행상태, 취소로 구성
						</caption>
						<colgroup>
							<col style="width: 108px" />
							<col />
							<col style="width: 168px" />
							<col style="width: 158px" />
							<col style="width: 108px" />
							<col style="width: 108px" />
						</colgroup>
						<thead>
							<tr>
								<th scope="col">번호</th>
								<th scope="col">제목</th>
								<th scope="col">담당자</th>
								<th scope="col">등록일</th>
								<th scope="col">진행상태</th>
								<th scope="col" class="actions"><span>취소</span></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td class="num" b-title="번호"><strong class="notice">[공지]</strong></td>
								<td class="title" b-title="제목">
									<a href="#"
										>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, totam!<q-badge
											class="custom-badge b-point-5 c-point-50"
											>신규</q-badge
										></a
									>
								</td>
								<td b-title="담당자">담당</td>
								<td b-title="등록일">2024-01-03</td>
								<td b-title="진행상태">
									<q-badge class="custom-badge b-skyblue">신청</q-badge>
								</td>
								<td class="actions" b-title="버튼">
									<q-btn class="custom-btn bd-red size-sm" label="취소" />
								</td>
							</tr>
							<tr>
								<td class="num" b-title="번호">98</td>
								<td class="title" b-title="제목">
									<a href="#">Lorem ipsum dolor, sit amet.</a>
								</td>
								<td b-title="담당자">엄청 엄청 엄청 엄청 길어질때 이렇게 보입니다.</td>
								<td b-title="등록일">2024-01-03</td>
								<td b-title="진행상태">
									<q-badge class="custom-badge b-secondary-50">접수</q-badge>
								</td>
								<td class="actions" b-title="버튼">
									<q-btn class="custom-btn bd-red size-sm" label="취소" />
								</td>
							</tr>
							<tr>
								<td class="num" b-title="번호">97</td>
								<td class="title" b-title="제목">
									<a href="#"
										>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus,
										commodi.</a
									>
								</td>
								<td b-title="담당자">담당</td>
								<td b-title="등록일">2024-01-03</td>
								<td b-title="진행상태">
									<q-badge class="custom-badge b-danger-50">승인/반려</q-badge>
								</td>
								<td class="actions" b-title="버튼">
									<q-btn class="custom-btn bd-red size-sm" label="취소" />
								</td>
							</tr>
						</tbody>
					</table>

					<!-- nodata 리스트 -->
					<table class="bo-table nodata">
						<caption>
							데이터가 존재하지 않습니다.
						</caption>
						<tbody>
							<tr>
								<td>
									<!-- nodata -->
									<div class="box-nodata">
										<div class="icon-nodata"></div>
										<p>데이터가 존재하지 않습니다.</p>
									</div>
									<!-- //nodata -->
								</td>
							</tr>
						</tbody>
					</table>
					<!-- //nodata 리스트 -->
				</div>
				<div class="bo-foot">
					<custom-pagination />
				</div>
			</div>

			<h3 class="subtit-lg">리스트 샘플1-2(행 전체가 링크 이동 시)</h3>
			<div class="board-list">
				<div class="bo-head">
					<p class="total">총 <span class="cnt">3</span>건</p>
				</div>
				<div class="bo-body">
					<table class="bo-table">
						<caption>
							역대대회 표 - 회수, 대회, 시도, 기간, 홈페이지로 구성
						</caption>
						<colgroup>
							<col style="width: 100px" />
							<col />
							<col style="width: 260px" />
							<col style="width: 260px" />
							<col style="width: 200px" />
						</colgroup>
						<thead>
							<tr>
								<th scope="col">회수</th>
								<th scope="col">대회</th>
								<th scope="col">시도</th>
								<th scope="col">기간</th>
								<th scope="col">홈페이지</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td class="num" b-title="회수">44</td>
								<td class="title" b-title="대회">
									<a href="/" class="full-link-after">나라사랑포털</a>
								</td>
								<td b-title="시도">경상남도(김해)</td>
								<td b-title="기간">2024-01-01 ~ 2024-01-03</td>
								<td b-title="홈페이지">
									<a href="/" target="_blank" aria-label="새창열림" class="link-btn ico-blank"
										>바로가기</a
									>
								</td>
							</tr>
							<tr>
								<td class="num" b-title="회수">43</td>
								<td b-title="대회">
									<a href="/" class="no-style full-link-after"
										>title이 아닌 링크이동시(가운데정렬) a태그에 no-style 추가</a
									>
								</td>
								<td b-title="시도">경상남도(김해)</td>
								<td b-title="기간">2024-01-01 ~ 2024-01-03</td>
								<td b-title="홈페이지">
									<a href="/" target="_blank" aria-label="새창열림" class="link-btn ico-blank"
										>바로가기</a
									>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			<!-- list 2형 -->
			<h3 class="subtit-lg">리스트 샘플2</h3>
			<div class="board-list">
				<div class="bo-head">
					<p class="total">총 <span class="cnt">100</span>건</p>
				</div>
				<div class="bo-body">
					<div class="bo-list">
						<h3 class="bo-list-tit">목록</h3>
						<ul class="bo-list-con">
							<li>
								<div class="inbox">
									<span class="txt-type">[나라사랑포털]</span>
									<a href="/" class="title full-link-after">나라사랑포털 TestTest </a>
									<div class="infobox">
										<dl class="width-sm-full">
											<dt class="blind">일시 :</dt>
											<dd>2024-10-27 11:10</dd>
										</dl>
										<dl>
											<dt>항목 :</dt>
											<dd>단위업무, 보존기간, 보존기간 책정사유 등</dd>
										</dl>
										<dl>
											<dt>주기 :</dt>
											<dd>수시</dd>
										</dl>
										<dl>
											<dt>시기 :</dt>
											<dd>수시</dd>
										</dl>
										<dl>
											<dt>담당자 :</dt>
											<dd>인사총무부</dd>
										</dl>
									</div>
								</div>
								<a href="/" class="link-btn ico-download" download>다운로드</a>
							</li>
							<li>
								<div class="inbox">
									<span class="txt-type">스크랩일 2024-01-01</span>
									<a href="/" class="title full-link-after">안내</a>
									<div class="infobox">
										<p class="text">test1 > test2 > 안내</p>
									</div>
								</div>
								<button type="button" class="link-btn ico-share" @click="cstShare = true">
									공유하기
								</button>
							</li>
							<li>
								<div class="inbox">
									<p class="title">안내</p>
									<div class="infobox">
										<p class="text">
											등록해 주세요. 등록해 주세요. 등록해 주세요. 등록해 주세요. 등록해 주세요.
											등록해 주세요. 등록해 주세요. 등록해 주세요. 등록해 주세요. 등록해 주세요.
											등록해 주세요. 등록해 주세요. 등록해 주세요. 등록해 주세요. 등록해 주세요.
											등록해 주세요. 등록해 주세요. 등록해 주세요. 등록해 주세요. 등록해 주세요.
											등록해 주세요. 등록해 주세요. 등록해 주세요. 등록해 주세요. 등록해 주세요.
										</p>
										<dl>
											<dt class="blind">알림 일 :</dt>
											<dd>2024-01-01</dd>
										</dl>
									</div>
								</div>
							</li>
						</ul>
					</div>

					<!-- 공유 -->
					<custom-share v-model="cstShare" />

					<!-- nodata 리스트 -->
					<table class="bo-table nodata">
						<caption>
							데이터가 존재하지 않습니다.
						</caption>
						<tbody>
							<tr>
								<td>
									<!-- nodata -->
									<div class="box-nodata">
										<div class="icon-nodata"></div>
										<p>데이터가 존재하지 않습니다2.</p>
									</div>
									<!-- //nodata -->
								</td>
							</tr>
						</tbody>
					</table>
					<!-- //nodata 리스트 -->
				</div>
				<div class="bo-foot">
					<custom-pagination />
				</div>
			</div>

			<h3 class="subtit-lg">리스트 샘플2-1(순위)</h3>
			<div class="board-list">
				<div class="bo-head">
					<p class="total">총 <span class="cnt">100</span>건</p>
				</div>
				<div class="bo-body">
					<div class="bo-list">
						<ul class="bo-list-con">
							<li>
								<div class="inbox-icon gold">
									<p class="medal-txt">1<span class="unit">위</span></p>
								</div>
								<div class="inbox">
									<p class="title">나라사랑포털</p>
									<div class="infobox">
										<dl class="full-blue">
											<dt><span>타이틀서브</span> 총 :</dt>
											<dd>10,000</dd>
										</dl>
										<dl>
											<dt>기간 :</dt>
											<dd>2024-10-25 ~ 2024-10-30</dd>
										</dl>
										<dl>
											<dt>장소 :</dt>
											<dd>서울</dd>
										</dl>
									</div>
								</div>
							</li>
							<li>
								<div class="inbox-icon silver">
									<p class="medal-txt">2<span class="unit">위</span></p>
								</div>
								<div class="inbox">
									<p class="title">나라사랑포털</p>
									<div class="infobox">
										<dl class="full-blue">
											<dt><span>타이틀서브</span> 총 :</dt>
											<dd>10,000</dd>
										</dl>
										<dl>
											<dt>기간 :</dt>
											<dd>2024-10-25 ~ 2024-10-30</dd>
										</dl>
										<dl>
											<dt>시도 :</dt>
											<dd>서울</dd>
										</dl>
									</div>
								</div>
							</li>
							<li>
								<div class="inbox-icon bronze">
									<p class="medal-txt">3<span class="unit">위</span></p>
								</div>
								<div class="inbox">
									<p class="title">나라사랑포털</p>
									<div class="infobox">
										<dl class="full-blue">
											<dt><span>타이틀서브</span> 총 :</dt>
											<dd>10,000</dd>
										</dl>
										<dl>
											<dt>기간 :</dt>
											<dd>2024-10-25 ~ 2024-10-30</dd>
										</dl>
										<dl>
											<dt>시도 :</dt>
											<dd>서울</dd>
										</dl>
									</div>
								</div>
							</li>
							<li>
								<div class="inbox-icon ranking">
									<p class="medal-txt">100<span class="unit">위</span></p>
								</div>
								<div class="inbox">
									<p class="title">나라사랑포털</p>
									<div class="infobox">
										<dl class="full-blue">
											<dt><span>타이틀서브</span> 총 :</dt>
											<dd>10,000</dd>
										</dl>
										<dl>
											<dt>기간 :</dt>
											<dd>2024-10-25 ~ 2024-10-30</dd>
										</dl>
										<dl>
											<dt>시도 :</dt>
											<dd>서울</dd>
										</dl>
									</div>
								</div>
							</li>
						</ul>
					</div>

					<!-- nodata 리스트 -->
					<table class="bo-table nodata">
						<caption>
							데이터가 존재하지 않습니다.
						</caption>
						<tbody>
							<tr>
								<td>
									<!-- nodata -->
									<div class="box-nodata">
										<div class="icon-nodata"></div>
										<p>데이터가 존재하지 않습니다.</p>
									</div>
									<!-- //nodata -->
								</td>
							</tr>
						</tbody>
					</table>
					<!-- //nodata 리스트 -->
				</div>
			</div>

			<!-- list 3형 -->
			<h3 class="subtit-lg">리스트 샘플3(옵션그룹)</h3>
			<div class="board-list">
				<div class="bo-head">
					<p class="total">총 <span class="cnt">3</span>건</p>
				</div>
				<div class="bo-body">
					<div class="bo-optgroup">
						<q-option-group
							class="opt-greybox"
							v-model="cstOGRadioDoc"
							:options="cstOGRadioDocOpt"
							aria-label="발급신청"
							aria-required="true"
							inline
						/>
					</div>

					<!-- nodata 리스트 -->
					<table class="bo-table nodata">
						<caption>
							등록 데이터가 존재하지 않습니다.
						</caption>
						<tbody>
							<tr>
								<td>
									<!-- nodata -->
									<div class="box-nodata">
										<div class="icon-nodata"></div>
										<p>등록 데이터가 존재하지 않습니다.</p>
									</div>
									<!-- //nodata -->
								</td>
							</tr>
						</tbody>
					</table>
					<!-- //nodata 리스트 -->
				</div>
			</div>

			<h3 class="subtit-lg">카드형 리스트 샘플1(썸네일)</h3>
			<div class="board-list">
				<div class="bo-head">
					<p class="total">총 <span class="cnt">100</span>건</p>
				</div>
				<div class="bo-body">
					<!-- 카드리스트 :12개씩 출력(기획협의완료) -->
					<div class="bo-card-list">
						<ul class="bo-card-con">
							<li>
								<div class="card-box">
									<q-img
										class="card-img"
										src="/src/assets/images/sub/img-ex-thumbnail.png"
										:ratio="1 / 1.383"
									/>
									<button type="button" class="card-img-name" aria-label="e-book 보기">
										<span>병길라잡이 병길라잡이 병길라잡이 병길라잡이</span>
									</button>
									<div class="card-btn-box">
										<button type="button" class="type-square ico-left">
											<span>e-book 보기</span>
										</button>
										<a href="/" class="type-square ico-download" download
											><span>PDF 다운로드</span></a
										>
									</div>
								</div>
							</li>
							<li>
								<div class="card-box">
									<q-img
										class="card-img"
										src="/src/assets/images/sub/img-ex-thumbnail.png"
										:ratio="1 / 1.383"
									/>
									<button type="button" class="card-img-name" aria-label="e-book 보기">
										<span>병길라잡이 병길라잡이 병길라잡이 병길라잡이</span>
									</button>
									<div class="card-btn-box">
										<button type="button" class="type-square ico-left">
											<span>e-book 보기</span>
										</button>
										<a href="/" class="type-square ico-download" download
											><span>PDF 다운로드</span></a
										>
									</div>
								</div>
							</li>
							<li>
								<div class="card-box">
									<q-img
										class="card-img"
										src="/src/assets/images/sub/img-ex-thumbnail.png"
										:ratio="1 / 1.383"
									/>
									<button type="button" class="card-img-name" aria-label="e-book 보기">
										<span>병길라잡이 병길라잡이 병길라잡이 병길라잡이</span>
									</button>
									<div class="card-btn-box">
										<button type="button" class="type-square ico-left">
											<span>e-book 보기</span>
										</button>
										<a href="/" class="type-square ico-download" download
											><span>PDF 다운로드</span></a
										>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div class="bo-foot">
					<custom-pagination />
				</div>
			</div>

			<h3 class="subtit-lg">카드형 리스트 샘플2</h3>
			<a
				href="/KPC/SCR-PSP-KPC-M0020"
				target="_blank"
				class="link-btn ico-blank"
				aria-label="새창열림"
				>일반</a
			>
			<br /><br />
			<a
				href="/SMA/SCR-PSP-SMA-M0030"
				target="_blank"
				class="link-btn ico-blank"
				aria-label="새창열림"
				>링크 버전</a
			>
			<br /><br />
			<a
				href="/DSI/SCR-PSP-DSI-M0095"
				target="_blank"
				class="link-btn ico-blank"
				aria-label="새창열림"
				>버튼 및 이미지체크 버전</a
			>
			<br /><br />
			<a
				href="/KIK/SCR-PSP-KIK-M0180"
				target="_blank"
				class="link-btn ico-blank"
				aria-label="새창열림"
				>홈아이콘 버전</a
			>

			<h3 class="subtit-lg">아코디언 리스트</h3>
			<div class="board-list">
				<div class="bo-head">
					<p class="total">총 <span class="cnt">100</span>건</p>
				</div>
				<div class="bo-body">
					<q-list class="faq-list">
						<q-expansion-item
							class="custom-expansion"
							label="질문이 2줄일 경우 테스트입니다 질문이 2줄일 경우 테스트입니다 질문이 2줄일 경우 테스트입니다 질문이 2줄일 경우 테스트입니다 질문이 2줄일 경우 테스트입니다 질문이 2줄일 경우 테스트입니다 "
							aria-expanded="false"
						>
							<q-card>
								<q-card-section>
									답변이 2줄일 경우 테스트입니다 답변이 2줄일 경우 테스트입니다답변이 2줄일 경우
									테스트입니다답변이 2줄일 경우 테스트입니다답변이 2줄일 경우 테스트입니다답변이
									2줄일 경우 테스트입니다답변이 2줄일 경우 테스트입니다답변이 2줄일 경우
									테스트입니다
								</q-card-section>
							</q-card>
						</q-expansion-item>

						<q-expansion-item
							class="custom-expansion"
							label="질문이 1줄일 경우 테스트입니다 "
							aria-expanded="false"
						>
							<q-card>
								<q-card-section> 답변 1줄일 경우 유형입니다. </q-card-section>
							</q-card>
						</q-expansion-item>

						<q-expansion-item
							class="custom-expansion"
							label="질문이 1줄일 경우 테스트입니다 "
							aria-expanded="false"
						>
							<q-card>
								<q-card-section> 답변 1줄일 경우 유형입니다. </q-card-section>
							</q-card>
						</q-expansion-item>
					</q-list>
				</div>
			</div>

			<h3 class="subtit-lg">갤러리형 리스트 샘플</h3>
			<a
				href="/KPI/SCR-PSP-KPI-M0050"
				target="_blank"
				class="link-btn ico-blank"
				aria-label="새창열림"
				>동영상</a
			>
			<br /><br />
			<a
				href="/KPI/SCR-PSP-KPI-M0080"
				target="_blank"
				class="link-btn ico-blank"
				aria-label="새창열림"
				>사진</a
			>
			<br /><br />
			<a
				href="/KPI/SCR-PSP-KPI-M0030"
				target="_blank"
				class="link-btn ico-blank"
				aria-label="새창열림"
				>뉴스</a
			>

			<!-- view -->
			<h3 class="subtit-lg">상세보기 샘플 (동영상, 사진)</h3>
			<a
				href="/KPI/SCR-PSP-KPI-M0055"
				target="_blank"
				class="link-btn ico-blank"
				aria-label="새창열림"
				>상세보기(동영상 관련 vod 있는 버전)</a
			>
			<br /><br />
			<a
				href="/KPI/SCR-PSP-KPI-M0095"
				target="_blank"
				class="link-btn ico-blank"
				aria-label="새창열림"
				>상세보기(동영상만 있는 버전)</a
			>
			<br /><br />
			<a
				href="/KPI/SCR-PSP-KPI-M0085"
				target="_blank"
				class="link-btn ico-blank"
				aria-label="새창열림"
				>상세보기(사진)</a
			>

			<!-- view -->
			<h3 class="subtit-lg">상세보기 샘플</h3>
			<div class="board-view">
				<h3 class="bo-title">공고 안내</h3>
				<table class="bo-info">
					<caption>
						이 표는 "공고 안내" 세부 정보를 제공합니다.
					</caption>
					<colgroup>
						<col style="width: 160px" />
						<col />
						<col style="width: 160px" />
						<col />
						<col style="width: 160px" />
						<col />
					</colgroup>
					<tbody>
						<tr>
							<th scope="row">담당자</th>
							<td b-title="담당자">홍길동</td>
							<th scope="row">담당자</th>
							<td b-title="담당자">홍길동</td>
							<th scope="row">이메일</th>
							<td b-title="이메일">
								<a href="mailto:admin@test.co.kr" class="text-link" aria-label="이메일 보내기"
									>admin@test.co.kr</a
								>
							</td>
						</tr>
						<tr>
							<th scope="row">등록일</th>
							<td b-title="등록일">2004-01-02</td>
							<th scope="row">조회수</th>
							<td b-title="조회수" colspan="3">1,000</td>
						</tr>
						<tr class="att-area">
							<th scope="row">첨부파일</th>
							<td b-title="첨부파일" colspan="5">
								<ul class="att-files">
									<li>
										<a href="/" class="link-btn ico-download" download aria-label="파일 다운로드"
											>파일이름 [pdf, 3MB]</a
										>
									</li>
									<li>
										<a href="/" class="link-btn ico-download" download aria-label="파일 다운로드"
											>파일이름 [hwp, 504KB]</a
										>
									</li>
								</ul>
							</td>
						</tr>
					</tbody>
				</table>
				<div class="bo-content">
					1. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, vero harum eaque cum,
					adipisci repudiandae velit repellat nemo omnis recusandae maxime aliquam esse, pariatur
					placeat veritatis consequuntur! Sapiente, illo totam!. <br />
					<br />
					2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, repellat! Soluta
					maiores aspernatur quasi iste nostrum, suscipit consequatur numquam rem ea et possimus
					pariatur labore excepturi impedit doloremque iusto! Blanditiis!<br />
					<br />
					<br />
					가. 공고내용<br />
					<br />
					① Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quae nam incidunt
					repellat nisi laboriosam facilis architecto! Nisi, officiis ipsa, corrupti voluptates
					rerum quibusdam temporibus itaque, nam repellat labore doloremque!<br />
					<br />
					② Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quae nam incidunt
					repellat nisi laboriosam facilis architecto! Nisi, officiis ipsa, corrupti voluptates
					rerum quibusdam temporibus itaque, nam repellat labore doloremque!<br />
					<br />
					③ 공고 및 접수: 2024. 12. 16.(월) ~ 2025. 2. 28.(금)<br />
					<br />
					* 접수 마감: 2025. 2. 28.(금) 18:00까지<br />
					<br />
					④ 신청방법: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, deleniti sed
					in labore, quod provident enim soluta nesciunt dolorum eaque, quas non. Nemo repellat
					maiores mollitia ad distinctio, quam ut!<br />
					<br />
				</div>
			</div>
			<div class="btn-actions">
				<q-btn class="custom-btn size-lg width-fixed" label="목록" />
			</div>

			<!-- answer -->
			<h3 class="subtit-sm c-secondary-50">답변</h3>
			<div class="board-answer">
				<div class="answer-info">관리자</div>
				<div class="answer-content">
					답변드립니다. 답변 드립니다. 답변드립니다. 답변 드립니다. 답변드립니다. 답변 드립니다.
				</div>
			</div>
		</div>
		<!-- //서브컨텐츠 -->
	</q-page>
</template>

<script setup>
import { ref } from 'vue'
import SubHeaderSection from 'src/layouts/uiux/common/SubHeaderSection.vue'

import DateRangePicker from 'src/components/uiux/DateRangePicker.vue'
import CustomPagination from 'src/components/uiux/CustomPagination.vue'
import CustomShare from 'src/components/uiux/CustomShare.vue' // 게시판 리스트 보여주기

// Breadcrumb(마지막 요소명이 서브상단 타이틀명과 같으면 생략)
const breadcrumbItems = ref([
	{
		menuName: 'Guide',
		menuLink: '/',
	},
	{
		menuName: 'Sapmle',
		menuLink: '/',
	},
])

// 서브상단 타이틀
const pageTitle = ref('Template')
const pageDescription = ref('설명글 입니다.')

// 서브검색
const ssIpt = ref()
const ssIptYear = ref('2024')
const ssIptDateRange = ref('2024-01-01~2024-12-31')
const ssSel = ref('전체')
const ssSelOpt = ['전체', '선택1', '선택2']
const scnt = ref('10')
const scntOpt = ['10', '20', '30']
const ssDateRangePicker = ref(['2024-01-01', '2025-12-28'])
const ssOGRadio = ref('ssra1')
const ssOGRadioOpt = [
	{
		label: '본인 일반회원',
		value: 'ssra1',
	},
	{
		label: '어린이 회원',
		value: 'ssra2',
	},
	{
		label: '대리인 회원',
		value: 'ssra3',
	},
]

// form
const cstOGRadioDoc = ref()
const cstOGRadioDocOpt = [
	{
		label: '제증명서(기본)',
		value: 'op1',
	},
	{
		label: '제증명서(상세)',
		value: 'op2',
	},
	{
		label: '긴제목의유형긴제목의유형긴제목의유형긴제목의유형',
		value: 'op3',
	},
]

// 공유
const cstShare = ref(false)

// 보기 형식 상태 관리
const viewType = ref('card')
const viewTypeOption = [
	{ label: '카드형', value: 'card', class: 'card-btn' },
	{ label: '리스트형', value: 'list', class: 'list-btn' },
]
</script>
