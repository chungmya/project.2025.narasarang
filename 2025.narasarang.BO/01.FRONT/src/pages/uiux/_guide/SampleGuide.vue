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
			<!-- alert pop -->
			<h3 class="subtit-lg">Alert</h3>
			<div class="q-gutter-sm">
				<q-btn class="custom-btn" label="Alert" @click="cstAlert = true" />
				<custom-alert v-model="cstAlert">
					<template v-slot:body>
						<h1 class="alert-tit">타이틀</h1>
						<p class="alert-msg">내용입니다. 내용입니다.</p>
						<div class="alert-links">
							<a href="/" class="arrow-link">My 스크랩 보기</a>
						</div>
					</template>
					<template v-slot:footer>
						<q-btn class="custom-btn" label="확인" v-close-popup />
					</template>
				</custom-alert>

				<q-btn class="custom-btn" label="Error" @click="cstError = true" />
				<custom-alert v-model="cstError">
					<template v-slot:body>
						<h1 class="alert-tit error">접속불가</h1>
						<p class="alert-msg">
							홍길동님은 본 메뉴의 접속 권한을 갖고 있지 않습니다.
						</p>
					</template>
					<template v-slot:footer>
						<q-btn class="custom-btn" label="확인" v-close-popup />
					</template>
				</custom-alert>

				<q-btn class="custom-btn" label="Confirm" @click="cstConfirm = true" />
				<custom-alert v-model="cstConfirm">
					<template v-slot:body>
						<h1 class="alert-tit">확인 팝업</h1>
						<p class="alert-msg">
							대화 상자는 사용자에게 작업에 대해 알리고 중요한 정보를 포함하거나
							결정이 필요하거나 여러 작업을 포함할 수 있습니다.
						</p>
					</template>
					<template v-slot:footer>
						<q-btn class="custom-btn bd-blue" label="아니오" v-close-popup />
						<q-btn class="custom-btn" label="네" />
					</template>
				</custom-alert>

				<q-btn
					class="custom-btn"
					label="ConfirmStyle"
					@click="cstConfirmStyle = true"
				/>
				<custom-alert v-model="cstConfirmStyle" :cdstyle="'max-width: 800px'">
					<template v-slot:body>
						<h1 class="alert-tit">Style로 max-width변경</h1>
						<p class="alert-msg">
							:cdstyle 속성으로 max-width값을 변경할수 있습니다.<br />디폴트는
							360px 입니다.
						</p>
					</template>
					<template v-slot:footer>
						<q-btn class="custom-btn" label="확인" />
					</template>
				</custom-alert>
			</div>

			<h3 class="subtit-lg">Popup</h3>
			<!-- popup -->
			<div class="q-gutter-sm">
				<q-btn class="custom-btn" label="Popup" @click="cstPopup = true" />
				<custom-popup v-model="cstPopup">
					<template v-slot:header>
						<h1 class="pop-tit large">PopUp</h1>
					</template>
					<template v-slot:body>
						컨텐츠 html이 들어갑니다.
						<div>
							----------<br /><br /><br /><br /><br />
							----------<br /><br /><br /><br /><br />
							----------<br /><br /><br /><br /><br />
							----------<br /><br /><br /><br /><br />
							----------<br /><br /><br /><br /><br />
							----------<br /><br /><br /><br /><br />
							----------<br /><br /><br /><br /><br />
							----------<br /><br /><br /><br /><br />
							----------<br /><br /><br /><br /><br />
							----------<br /><br /><br /><br /><br />
							----------<br /><br /><br /><br /><br />
						</div>
					</template>
				</custom-popup>

				<q-btn
					class="custom-btn"
					label="Popup 600"
					@click="cstPopupStyle = true"
				/>
				<custom-popup v-model="cstPopupStyle" :cdstyle="'max-width: 600px'">
					<template v-slot:header>
						<h1 class="pop-tit">팝업타이틀</h1>
					</template>
					<template v-slot:body>
						<h2 class="subtit-xs">안내</h2>
						<p>상세 내용을 조회한다.</p>
						<div class="subtit-xs-con">
							<h3 class="subtit-xxs">[01]</h3>
							<p>설명 문구입니다.</p>
							<h3 class="subtit-xxs">[02]</h3>
							<p>설명 문구입니다.</p>
							<h3 class="subtit-xxs">[03]</h3>
							<p>설명 문구입니다.</p>
							<h3 class="subtit-xxs">[04]</h3>
							<p>설명 문구입니다.</p>
							<h3 class="subtit-xxs">[05]</h3>
							<p>설명 문구입니다.</p>
						</div>
					</template>
					<template v-slot:footer>
						<q-btn class="custom-btn width-fixed" label="확인" />
					</template>
				</custom-popup>
			</div>

			<h3 class="subtit-lg">Notify</h3>
			<!-- notify -->
			<q-btn class="custom-btn" label="show notify" @click="showNotif" />
			<!-- //notify -->

			<!-- step -->
			<nav class="page-step">
				<ol>
					<li
						v-for="(step, index) in steps"
						:key="index"
						:class="{ completed: index < currentStep - 1 }"
						:aria-current="index === currentStep - 1 ? 'step' : null"
					>
						<div class="icon"></div>
						<span class="step-num">{{ step.number }}단계</span>
						<span class="step-tit">{{ step.title }}</span>
					</li>
				</ol>
			</nav>
			<!-- //step -->

			<div class="q-pt-xl"></div>

			<!-- tab -->
			<custom-tabs class="custom-tabs" mobile-arrows v-model="tabType">
				<q-tab name="tabtype1" label="아이디/비밀번호" />
				<q-tab name="tabtype2" label="간편인증" />
				<q-tab name="tabtype3" label="본인 확인" />
				<q-tab name="tabtype4" label="협업/참여" />
			</custom-tabs>
			<q-tab-panels class="custom-panels" v-model="tabType">
				<q-tab-panel name="tabtype1"> 아이디/비밀번호 내용 </q-tab-panel>
				<q-tab-panel name="tabtype2"> 간편인증 </q-tab-panel>
				<q-tab-panel name="tabtype3"> 본인 확인 </q-tab-panel>
				<q-tab-panel name="tabtype4"> 협업/참여 </q-tab-panel>
			</q-tab-panels>
			<!-- //tab -->

			<!-- tab -->
			<custom-tabs class="custom-tabs" mobile-arrows>
				<q-route-tab to="/" label="라우터링크1" />
				<q-route-tab to="/common" label="공통페이지" />
				<q-route-tab to="/common" label="공통페이지" />
				<q-route-tab
					href="https://www.open.go.kr/infOthbc/infOthbc/infOthbc.do"
					target="_blank"
					label="외부링크일때"
				/>
			</custom-tabs>
			<!-- //tab -->

			<!-- 컨텐츠 텍스트 -->
			<h3 class="subtit-lg">lg서브타이틀</h3>
			<p class="txt-desc-info">하단간격있는 텍스트입니다</p>

			<h4 class="subtit-md">md서브타이틀</h4>
			<ul class="sublist-dot">
				<li>
					테스트입니다모바일용길어질때테스트입니다테스트입니다길어질때테스트입니다테스트입니다길어질때테스트입니다
				</li>
				<li>테스트입니다</li>
				<li>테스트입니다</li>
			</ul>

			<h4 class="subtit-md">md서브타이틀</h4>
			<ol class="sublist-num-circle">
				<li>
					<span class="num-circle">01</span
					>테스트입니다모바일용길어질때테스트입니다테스트입니다길어질때테스트입니다테스트입니다길어질때테스트입니다
				</li>
				<li><span class="num-circle">02</span>테스트입니다</li>
				<li><span class="num-circle">03</span>테스트입니다</li>
				<li><span class="num-circle">04</span>테스트입니다</li>
			</ol>

			<h5 class="subtit-sm">sm서브타이틀</h5>
			<ol class="sublist-num-circle c-blue">
				<li>
					<span class="num-circle">01</span
					>테스트입니다모바일용길어질때테스트입니다테스트입니다길어질때테스트입니다테스트입니다길어질때테스트입니다
				</li>
				<li><span class="num-circle">02</span>테스트입니다</li>
				<li><span class="num-circle">03</span>테스트입니다</li>
				<li><span class="num-circle">04</span>테스트입니다</li>
			</ol>

			<!-- 줄바꿈용 -->
			<br /><br />
			<div style="height: 1px; background: #000"></div>

			<!-- 예외 텍스트 예제 -->
			<h2 class="subtit-xs">xs서브타이틀-팝업내부</h2>
			<p>
				텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트
			</p>
			<div class="subtit-xs-con">
				<h3 class="subtit-xxs">xxs서브타이틀-팝업내부</h3>
				<p>
					텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트
				</p>
			</div>

			<!-- UIUX가이드 a태그 -->
			<h3 class="subtit-lg">a태그 유형</h3>
			<h4 class="subtit-xs">
				(전화번호, 팩스, 이메일, 링크(새창열림), 다운로드)
			</h4>

			<div class="flex" style="flex-direction: column; gap: 2.4rem">
				<a href="tel:+8201000000000" class="text-link" aria-label="전화 걸기"
					>010-0000-0000</a
				>

				<a href="fax:+820200000000" class="text-link" aria-label="팩스 보내기"
					>02-0000-0000</a
				>

				<a
					href="mailto:abc@test.co.kr"
					class="text-link"
					aria-label="이메일 보내기"
					>abc@test.co.kr</a
				>

				<a
					href="http://www.narasarang.or.kr"
					class="link-btn ico-blank"
					target="_blank"
					aria-label="새창열림"
					>http://www.narasarang.or.kr"</a
				>

				<a
					href="/"
					class="link-btn ico-download"
					download
					aria-label="파일 다운로드"
					>파일이름 [pdf, 3MB]</a
				>
			</div>

			<!-- tbl-style -->
			<h3 class="subtit-lg">DL: tbl-style</h3>
			<q-form>
				<div class="tbl-style">
					<div class="dl-row">
						<div class="dt">
							<span class="dt-label required" aria-hidden="true"
								>Required 타이틀</span
							>
						</div>
						<div class="dd">
							<div class="dd-text" aria-label="Required 타이틀">
								<q-btn
									class="custom-btn bd-grey size-xs q-mr-md"
									label="버튼네임"
								/>
								<p class="c-danger-60">validation 문구</p>
							</div>
						</div>
					</div>
					<div class="dl-row">
						<div class="dt">
							<span class="dt-label" aria-hidden="true">단순 텍스트</span>
						</div>
						<div class="dd">
							<div class="dd-text" aria-label="단순 텍스트">
								단순 텍스트 내용입니다. 단순 텍스트 내용입니다. 단순 텍스트
								내용입니다. 단순 텍스트 내용입니다. 단순 텍스트 내용입니다. 단순
								텍스트 내용입니다. 단순 텍스트 내용입니다. 단순 텍스트
								내용입니다. 단순 텍스트 내용입니다. 단순 텍스트 내용입니다. 단순
								텍스트 내용입니다. 단순 텍스트 내용입니다.
							</div>
						</div>
					</div>
				</div>
				<!-- nodata -->
				<div class="box-nodata">
					<div class="icon-nodata"></div>
					<p>box-nodata</p>
				</div>
				<!-- //nodata -->
			</q-form>

			<!-- datatable -->
			<h3 class="subtit-lg">데이터테이블</h3>
			<DataTable>
				<table>
					<caption>
						데이터테이블 표 - 목록, 개정일, 파일, 담당부서, 담당자로 구성
					</caption>
					<colgroup>
						<col />
						<col style="width: 17%" />
						<col style="width: 17%" />
						<col style="width: 14%" />
						<col style="width: 18%" />
					</colgroup>
					<thead>
						<tr>
							<th scope="col">목록</th>
							<th scope="col">개정일</th>
							<th scope="col">파일</th>
							<th scope="col">담당부서</th>
							<th scope="col">담당자</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td class="align-left">정관</td>
							<td>개정(2025.07.12)</td>
							<td>
								<a href="/" download>
									<span class="blind">파일 다운로드</span>
									<q-icon class="q-icon-file-blue size-24" />
								</a>
							</td>
							<td>군인공제회 C&amp;C</td>
							<td>홍길동</td>
						</tr>
					</tbody>
				</table>
			</DataTable>

			<br />
			<br />
			<DataTable>
				<table>
					<caption>
						XXX하는 표 - th1, th2, th3, th4로 구성
					</caption>
					<colgroup>
						<col />
						<col style="width: 15%" />
						<col style="width: 15%" />
						<col style="width: 15%" />
						<col style="width: 15%" />
						<col style="width: 15%" />
						<col style="width: 15%" />
					</colgroup>
					<thead>
						<tr>
							<th scope="col" rowspan="2">th1</th>
							<th scope="col">th2-1</th>
							<th scope="col" rowspan="2">th3</th>
							<th scope="col">th4-1</th>
							<th scope="col" rowspan="2">th5</th>
							<th scope="col" rowspan="2">th6</th>
							<th scope="col" rowspan="2">th7</th>
						</tr>
						<tr>
							<th scope="col">th2-2</th>
							<th scope="col">th4-2</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td class="align-left">11</td>
							<td>22</td>
							<td>33</td>
							<td>
								<a
									href="javascript:void(0);"
									target="_blank"
									aria-label="새창열림"
									class="link-btn ico-blank"
								>
									URL</a
								>
							</td>
							<td>오오오 오오</td>
							<td>육육 육육육육</td>
							<td>칠칠칠 칠칠칠칠</td>
						</tr>
					</tbody>
				</table>
			</DataTable>

			<!-- form 상단타이틀 -->
			<h3 class="subtit-lg">타이틀 + 우측버튼</h3>
			<div class="right-btn">
				<q-btn
					class="custom-btn"
					:class="$q.screen.lt.md ? 'size-xs' : 'size-sm'"
					label="불러오기"
				/>
			</div>

			<h3 class="subtit-lg">타이틀 + 우측 필수사항 + 버튼</h3>
			<div class="required-btn-box">
				<p class="desc-required" aria-hidden="true">는 필수 입력 사항입니다.</p>
				<div class="right-btn">
					<q-btn
						class="custom-btn"
						:class="$q.screen.lt.md ? 'size-xs' : 'size-sm'"
						label="불러오기"
					/>
				</div>
			</div>

			<h3 class="subtit-lg">타이틀 + 우측 필수사항 + 버튼(size-xs)</h3>
			<div class="required-btn-box fixed-xs">
				<p class="desc-required" aria-hidden="true">는 필수 입력 사항입니다.</p>
				<div class="right-btn">
					<q-btn class="custom-btn width-fixed size-xs" label="추가" />
				</div>
			</div>

			<h3 class="subtit-lg">타이틀 + 우측 필수사항 + 기본텍스트</h3>
			<div class="required-subtext-box">
				<p class="desc-required" aria-hidden="true">는 필수 입력 사항입니다.</p>
				<p class="desc-subtext">금액 : 부가세 포함</p>
			</div>

			<h3 class="subtit-lg">타이틀 + 우측 탭버튼</h3>
			<div class="subtab-btn-box">
				<ul class="btn-list">
					<li>
						<button
							type="button"
							:aria-selected="activeSubTab === 0 ? 'true' : 'false'"
							@click="selectSubTab(0)"
							class="subtab-btn"
						>
							2024
						</button>
					</li>
					<li>
						<button
							type="button"
							:aria-selected="activeSubTab === 1 ? 'true' : 'false'"
							@click="selectSubTab(1)"
							class="subtab-btn"
						>
							2023
						</button>
					</li>
				</ul>
			</div>

			<h3 class="subtit-lg">타이틀 + 우측 기본텍스트</h3>
			<p class="desc-subtext">금액 : 부가세 포함</p>

			<h3 class="subtit-lg">타이틀 + 우측 필수사항</h3>
			<p class="desc-required" aria-hidden="true">는 필수 입력 사항입니다.</p>

			<h4 class="subtit-md">Form요소 반응형 사이즈</h4>
			<p class="desc-required" aria-hidden="true">는 필수 입력 사항입니다.</p>

			<q-form>
				<div class="tbl-style">
					<div class="dl-row">
						<div class="dt">
							<span class="dt-label required" aria-hidden="true">사진</span>
						</div>
						<div class="dd">
							<!-- 사진영역 -->
							<div class="photo-file-wrap">
								<div v-if="imageUrl" class="photo-file">
									<q-img class="photo-img" :src="imageUrl" />
									<p class="photo-name" aria-label="파일명">{{ fileName }}</p>
									<q-btn
										class="photo-btn custom-btn bd-blue width-fixed"
										label="삭제"
										@click="removeImage"
									/>
								</div>
								<div v-else class="photo-file">
									<q-img
										class="photo-img"
										src="/src/assets/images/common/photo-none.jpg"
									/>
									<q-btn
										class="photo-btn custom-btn bd-blue width-fixed"
										label="사진등록"
										@click="uploadFile"
									/>
								</div>
								<q-file
									v-model="file"
									ref="fileInput"
									@input="handleFileChange"
									style="display: none"
								/>
							</div>
							<!-- //사진영역 -->

							<ul class="form-msg form-msg-hint">
								<li>· 파일형식 : JPEG, JPG, PNG</li>
								<li>· 파일크기 : 5MB 이하</li>
							</ul>
						</div>
					</div>

					<div class="dl-row">
						<div class="dt">
							<span class="dt-label required" aria-hidden="true">이름</span>
						</div>
						<div class="dd">
							<q-input
								class="custom-input col max-width-md"
								v-model="cstInput"
								label="이름"
								aria-required="true"
							/>
							<p class="form-msg form-msg-error">
								<q-icon class="q-icon-system-danger" />
								정확히 입력해 주세요. 부정확한 정보는 서비스 이용 시 불이익을
								받으실 수 있습니다.
							</p>
							<p class="form-msg form-msg-hint">아래 힌트 설명글 입니다.</p>
						</div>
					</div>

					<div class="dl-row">
						<div class="dt">
							<span class="dt-label required" aria-hidden="true">비밀번호</span>
						</div>
						<div class="dd">
							<q-input
								class="custom-input col max-width-md"
								:type="isPwd ? 'password' : 'text'"
								v-model="cstInputPW"
								label="비밀번호"
								aria-required="true"
							>
								<template v-slot:append>
									<q-icon
										class="cursor-pointer"
										:class="
											isPwd ? 'q-icon-visibility-off' : 'q-icon-visibility'
										"
										@click="isPwd = !isPwd"
									/>
								</template>
							</q-input>

							<ul class="form-msg form-msg-hint">
								<li>
									· 영문자, 숫자, 특수문자는 각각 1자 이상 씩 모두 포함시켜
									주세요.
								</li>
								<li>· 영문자, 숫자, 특수문자를 9~30자로 조합해 주세요.</li>
								<li>
									· 사용 가능한 특수문자는 ~ ! @ # $ ^ * ( ) = _ . | 입니다.
								</li>
								<li>· 비밀번호는 대/소문자를 구분합니다.</li>
							</ul>
						</div>
					</div>

					<div class="dl-row">
						<div class="dt">
							<span class="dt-label" aria-hidden="true">전화번호</span>
						</div>
						<div class="dd">
							<div class="max-group max-width-md col">
								<q-select
									class="custom-select col"
									v-model="cstSelectTel"
									:options="cstSelectTelOpt"
									label="전화번호 앞자리 선택"
									readonly
									for
								/>
								<div class="dd-item">-</div>
								<q-input
									class="custom-input col"
									v-model="cstInput"
									label="전화번호 가운데자리 입력"
									readonly
								/>
								<div class="dd-item">-</div>
								<q-input
									class="custom-input col"
									v-model="cstInput"
									label="전화번호 뒷자리 입력"
									readonly
								/>
							</div>
							<q-btn
								class="custom-btn bd-blue width-sm-full"
								label="본인확인 입력"
							/>

							<div class="box-break">
								<q-checkbox
									class="custom-checkbox size-sm"
									v-model="chkMail"
									label="통합 포털 정보 SMS 수신동의"
								/>
							</div>
						</div>
					</div>

					<div class="dl-row">
						<div class="dt">
							<span class="dt-label required" aria-hidden="true">성별</span>
						</div>
						<div class="dd">
							<q-option-group
								class="custom-optiongroup"
								v-model="cstOGRadioMW"
								:options="cstOGRadioMWOpt"
								aria-label="성별"
								aria-required="true"
								inline
							/>
						</div>
					</div>

					<div class="dl-row">
						<div class="dt">
							<span class="dt-label" aria-hidden="true">체크</span>
						</div>
						<div class="dd">
							<q-option-group
								type="checkbox"
								class="custom-optiongroup"
								v-model="cstOGChk"
								:options="cstOGChkOpt"
								aria-label="체크"
								inline
							/>
						</div>
					</div>

					<div class="dl-row">
						<div class="dt">
							<span class="dt-label" aria-hidden="true">라디오버튼</span>
						</div>
						<div class="dd">
							<q-option-group
								class="custom-optiongroup"
								v-model="cstOGRadio"
								:options="cstOGRadioOpt"
								aria-label="라디오버튼"
							/>
						</div>
					</div>

					<div class="dl-row">
						<div class="dt">
							<span class="dt-label" aria-hidden="true">체크박스</span>
						</div>
						<div class="dd">
							<q-option-group
								type="checkbox"
								class="custom-optiongroup"
								v-model="cstOGChk2"
								:options="cstOGChkOpt2"
								aria-label="체크박스"
							/>
						</div>
					</div>

					<div class="dl-row">
						<div class="dt">
							<span class="dt-label" aria-hidden="true">주민등록번호</span>
						</div>
						<div class="dd">
							<div class="max-group max-width-md">
								<q-input
									class="custom-input col"
									v-model="cstInput"
									label="주민등록번호 앞자리 입력"
								/>
								<div class="dd-item">-</div>
								<q-input
									type="password"
									class="custom-input col"
									v-model="cstInputPW"
									label="주민등록번호 뒷자리 입력"
								/>
								<q-btn
									class="custom-btn bd-blue width-sm-full"
									label="중복확인"
								/>
							</div>
						</div>
					</div>

					<div class="dl-row">
						<div class="dt">
							<span class="dt-label" aria-hidden="true">이메일</span>
						</div>
						<div class="dd">
							<p class="form-msg form-msg-hint">
								이메일은 SNS 간편 로그인 때에도 이용하는 이메일을 입력해 주세요.
							</p>

							<div class="max-group col max-width-xl">
								<q-input
									class="custom-input col"
									v-model="cstInput"
									label="이메일 아이디 입력"
								/>
								<div class="dd-item">@</div>
								<q-input
									class="custom-input col"
									v-model="cstInput"
									label="이메일 도메인 입력"
								/>
								<q-select
									class="custom-select col width-sm-full"
									v-model="cstSelectMail"
									:options="cstSelectMailOpt"
									label="이메일 도메인 선택"
								/>
							</div>
							<q-btn
								class="custom-btn bd-blue width-sm-full"
								label="중복확인"
							/>

							<p class="form-msg form-msg-error">
								<q-icon class="q-icon-system-danger" />
								정확히 입력해 주세요. 부정확한 정보는 서비스 이용 시 불이익을
								받으실 수 있습니다.
							</p>

							<div class="box-break">
								<q-checkbox
									class="custom-checkbox size-sm"
									v-model="chkMail"
									label="통합 포털 정보 이메일 수신동의"
								/>
							</div>
						</div>
					</div>

					<div class="dl-row">
						<div class="dt">
							<span class="dt-label" aria-hidden="true">주소</span>
						</div>
						<div class="dd">
							<div class="max-group max-width-sm">
								<q-input
									class="custom-input col"
									v-model="cstInput"
									label="우편번호 입력"
								/>
								<q-btn class="custom-btn bd-blue" label="검색" />
							</div>

							<div class="max-group">
								<q-input
									class="custom-input col max-width-xl"
									v-model="cstInput"
									label="주소 입력"
								/>
							</div>

							<div class="max-group">
								<q-input
									class="custom-input col max-width-xl"
									v-model="cstInput"
									label="상세주소 입력"
								/>
							</div>
						</div>
					</div>
					<div class="dl-row">
						<div class="dt">
							<span class="dt-label" aria-hidden="true">첨부파일</span>
						</div>
						<div class="dd">
							<div class="max-group max-width-md">
								<CustomUploader label="첨부파일" multiple />
							</div>
							<ul class="form-msg form-msg-hint">
								<li>
									<ul class="slash-list">
										<li>파일 유형 : JPEG, JPG, PNG, PDF</li>
										<li>파일 크기 : 5MB 이하</li>
									</ul>
								</li>
								<li>증빙 : 주민등록등본 or 가족관계증명서</li>
							</ul>

							<!-- 파일 관련 내용만 있을 시-->
							<!-- <ul class="form-msg form-msg-hint slash-list">
                <li>파일 유형 : JPEG, JPG, PNG, PDF</li>
                <li>파일 크기 : 5MB 이하</li>
                <li>파일 개수 : 1개</li>
              </ul> -->
						</div>
					</div>

					<div class="dl-row">
						<div class="dt">
							<span class="dt-label" aria-hidden="true">비고</span>
						</div>
						<div class="dd">
							<q-input
								type="textarea"
								class="custom-textarea col"
								rows="3"
								v-model="cstTextarea1"
								label="비고"
								maxlength="2000"
								counter
							/>
						</div>
					</div>

					<div class="dl-row">
						<div class="dt">
							<span class="dt-label required" aria-hidden="true">Test</span>
						</div>
						<div class="dd">
							<div class="dd-in-group" aria-label="Test">
								<div class="dd-in-row">
									<span class="dt-label-xs" aria-hidden="true">Label1</span>
									<q-input
										class="custom-input col max-width-md"
										v-model="cstInput"
										label="Label1"
										aria-required="true"
										readonly
									/>
								</div>
								<div class="dd-in-row">
									<span class="dt-label-xs" aria-hidden="true">Label2</span>
									<q-input
										class="custom-input col max-width-md"
										v-model="cstInput"
										label="Label2"
										aria-required="true"
										readonly
									/>
								</div>
								<div class="dd-in-row">
									<span class="dt-label-xs" aria-hidden="true">Label3</span>
									<q-input
										class="custom-input col max-width-md"
										v-model="cstInput"
										label="Label3"
										aria-required="true"
										readonly
									/>
								</div>
								<div class="dd-in-row">
									<span class="dt-label-xs" aria-hidden="true">Label4</span>
									<div class="max-group col">
										<q-input
											class="custom-input col max-width-md"
											v-model="cstInput"
											label="Label4"
											aria-required="true"
											readonly
										/>
										<q-btn
											class="custom-btn bd-blue width-sm-full"
											label="검색"
										/>
									</div>
								</div>
							</div>
							<ul class="form-msg form-msg-hint">
								<li>form msg hint 입니다.</li>
							</ul>
						</div>
					</div>

					<div class="dl-row">
						<div class="dt">
							<span class="dt-label required" aria-hidden="true">금액</span>
						</div>
						<div class="dd">
							<q-input
								class="custom-input col max-width-md"
								type="number"
								v-model="cstInputNum"
								label="금액"
								input-class="text-right"
								aria-required="true"
							/>
						</div>
					</div>

					<div class="dl-row">
						<div class="dt">
							<span class="dt-label required" aria-hidden="true"
								>일정(차수)</span
							>
						</div>
						<div class="dd">
							<div class="dd-in-colgroup" aria-label="일정(차수)">
								<div class="dd-in-col">
									<span class="dt-label-xs" aria-hidden="true">횟수</span>
									<q-input
										class="custom-input col"
										v-model="cstInputNum"
										type="number"
										label="횟수"
										aria-required="true"
									/>
								</div>
								<div class="dd-in-col">
									<span class="dt-label-xs" aria-hidden="true">일자</span>
									<DatePicker
										class="col"
										v-model="datePicker"
										label="일자"
										aria-required="true"
										:rules="[(val) => !!val || '필수항목']"
										hide-bottom-space
										readonly
									></DatePicker>
								</div>
								<div class="dd-in-col">
									<span class="dt-label-xs" aria-hidden="true">요일</span>
									<q-input
										class="custom-input col"
										v-model="cstInputDay"
										label="요일"
										aria-required="true"
										readonly
									/>
								</div>
							</div>
						</div>
					</div>

					<div class="dl-row">
						<div class="dt">
							<span class="dt-label required" aria-hidden="true">시간</span>
						</div>
						<div class="dd">
							<q-option-group
								class="custom-reserve"
								v-model="cstOGRadioReserv"
								:options="cstOGRadioOptReserv"
								aria-label="시간"
								aria-required="true"
								inline
							>
								<template v-slot:label="opt">
									<p class="time">{{ opt.label }}</p>
									<p class="available">
										예약가능<span class="num">{{ opt.num }}</span
										>명
									</p>
								</template>
							</q-option-group>
						</div>
					</div>

					<div class="dl-row">
						<div class="dt">
							<span class="dt-label required" aria-hidden="true">유형</span>
						</div>
						<div class="dd">
							<q-option-group
								class="custom-chkgrey"
								type="checkbox"
								v-model="cstOGCheckboxDf"
								:options="cstOGCheckboxOptDf"
								aria-label="유형"
								aria-required="true"
								inline
							/>
						</div>
					</div>

					<div class="row">
						<div class="col-12 col-md-6">
							<div class="dl-row">
								<div class="dt">
									<span class="dt-label" aria-hidden="true">좌측</span>
								</div>
								<div class="dd">
									<div class="dd-text" aria-label="좌측">좌측 내용입니다.</div>
								</div>
							</div>
						</div>
						<div class="col-12 col-md-6">
							<div class="dl-row">
								<div class="dt">
									<span class="dt-label" aria-hidden="true">우측</span>
								</div>
								<div class="dd">
									<div class="dd-text" aria-label="우측">우측 내용입니다.</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</q-form>

			<div class="btn-actions">
				<q-btn
					class="custom-btn bd-blue size-lg width-fixed"
					label="회원가입"
				/>
				<q-btn class="custom-btn size-lg width-fixed" label="회원가입" />
			</div>

			<!-- 공공누리 -->
			<KoglBox />

			<!-- 만족도 조사 -->
			<SatisfactBox />
		</div>
		<!-- //서브컨텐츠 -->
	</q-page>
</template>

<script setup>
import { ref } from "vue"
import { useQuasar } from "quasar"
import SubHeaderSection from "src/layouts/uiux/common/SubHeaderSection.vue"

import CustomAlert from "src/components/uiux/CustomAlert.vue"
import CustomTabs from "src/components/uiux/CustomTabs.vue"
import CustomPopup from "src/components/uiux/CustomPopup.vue"
import DataTable from "src/components/uiux/DataTable.vue"
import CustomUploader from "src/components/uiux/CustomUploader.vue"
import DatePicker from "src/components/uiux/DatePicker.vue"
import KoglBox from "src/components/uiux/KoglBox.vue"
import SatisfactBox from "src/components/uiux/SatisfactBox.vue"

// Breadcrumb(마지막 요소명이 서브상단 타이틀명과 같으면 생략)
const breadcrumbItems = ref([
	{
		menuName: "Guide",
		menuLink: "/",
	},
	{
		menuName: "Sapmle",
		menuLink: "/",
	},
])

// 서브상단 타이틀
const pageTitle = ref("Template")
const pageDescription = ref("설명글 입니다.")

// alert
const cstAlert = ref(false)
const cstError = ref(false)
const cstConfirm = ref(false)
const cstConfirmStyle = ref(false)

// popup
const cstPopup = ref(false)
const cstPopupStyle = ref(false)

// q
const $q = useQuasar()
// notify
const showNotif = () => {
	$q.notify({
		message: "선택해 주세요.",
		classes: "custom-notify",
		icon: "error",
		// position: 'center',
		// timeout: '5000',
	})
}

// step
const currentStep = ref(2)
const steps = [
	{ number: 1, title: "회원구분 선택" },
	{ number: 2, title: "약관동의" },
	{ number: 3, title: "본인 확인" },
	{ number: 4, title: "회원정보 입력" },
	{ number: 5, title: "회원가입 완료" },
]

// tab
const tabType = ref("tabtype2")

// form
// 사진첨부: 시작
const file = ref(null)
const fileName = ref("photo_sample.jpg")
const imageUrl = ref("/src/assets/images/etc/photo_sample.png") // 기본 이미지 URL을 설정합니다.
const fileInput = ref(null)
const allowedFileTypes = ["image/gif", "image/jpeg", "image/jpg", "image/png"]
const maxFileSize = 500 * 1024 * 1024 // 5MB
const uploadFile = () => {
	fileInput.value.pickFiles()
}
const handleFileChange = (event) => {
	const files = event.target.files || event
	if (files && files[0]) {
		const selectedFile = files[0]

		// 파일 형식 및 크기 검사
		if (!allowedFileTypes.includes(selectedFile.type)) {
			console.error("허용되지 않는 파일 형식입니다.")
			return
		}
		if (selectedFile.size > maxFileSize) {
			console.error("파일 크기가 5MB를 초과합니다.")
			return
		}

		fileName.value = selectedFile.name // 파일 이름 저장
		const reader = new FileReader()
		reader.onload = (e) => {
			console.log("Image URL:", e.target.result)
			imageUrl.value = e.target.result
		}
		reader.readAsDataURL(selectedFile)
	} else {
		console.error("유효하지 않은 파일입니다.")
	}
}
const removeImage = () => {
	file.value = null
	fileName.value = null
	imageUrl.value = "" // 기본 이미지 URL로 초기화합니다.
}
// 사진첨부: 끝

const cstInput = ref("")
const cstInputNum = ref("0")
const cstInputPW = ref()
const isPwd = ref(true)
const cstSelectTel = ref("02")
const cstSelectTelOpt = ["02", "031", "032"]
const cstSelectMail = ref("선택하세요.")
const cstSelectMailOpt = ["직접입력", "선택1", "선택2"]
const chkMail = ref(false)
const cstTextarea1 = ref("")

const cstOGRadioMW = ref()
const cstOGRadioMWOpt = [
	{
		label: "남",
		value: "op1",
	},
	{
		label: "여",
		value: "op2",
	},
]
const cstOGRadio = ref("ra1")
const cstOGRadioOpt = [
	{
		label: "선택1",
		value: "ra1",
	},
	{
		label: "선택2",
		value: "ra2",
	},
	{
		label: "선택 선택선택 선택3",
		value: "ra3",
	},
	{
		label: "선택4",
		value: "ra4",
	},
]

const cstOGChk = ref(["chk2"])
const cstOGChkOpt = [
	{
		label: "체크1",
		value: "chk1",
	},
	{
		label: "체크2",
		value: "chk2",
	},
]
const cstOGChk2 = ref(["ra2"])
const cstOGChkOpt2 = [
	{
		label: "선택1",
		value: "ra1",
	},
	{
		label: "선택2",
		value: "ra2",
	},
	{
		label: "선택 선택선택 선택3",
		value: "ra3",
	},
	{
		label: "선택4",
		value: "ra4",
	},
]

const datePicker = ref("2024-01-01")

const cstInputDay = ref("월")

const cstOGRadioReserv = ref()
const cstOGRadioOptReserv = [
	{
		label: "09:00~09:30",
		num: "2",
		value: "op1",
		disable: false,
	},
	{
		label: "09:30~10:00",
		num: "0",
		value: "op2",
		disable: true,
	},
	{
		label: "10:00~10:30",
		num: "2",
		value: "op3",
		disable: false,
	},
	{
		label: "10:30~11:00",
		num: "2",
		value: "op4",
		disable: false,
	},
	{
		label: "11:00~11:30",
		num: "2",
		value: "op5",
		disable: false,
	},
	{
		label: "11:30~12:00",
		num: "2",
		value: "op6",
		disable: false,
	},
	{
		label: "13:00~13:30",
		num: "2",
		value: "op7",
		disable: false,
	},
	{
		label: "13:30~14:00",
		num: "2",
		value: "op8",
		disable: false,
	},
	{
		label: "14:00~14:30",
		num: "2",
		value: "op9",
		disable: false,
	},
	{
		label: "14:30~15:00",
		num: "2",
		value: "op10",
		disable: false,
	},
	{
		label: "15:00~15:30",
		num: "2",
		value: "op11",
		disable: false,
	},
	{
		label: "15:30~16:30",
		num: "2",
		value: "op12",
		disable: false,
	},
	{
		label: "16:00~16:30",
		num: "2",
		value: "op13",
		disable: false,
	},
	{
		label: "16:30~17:00",
		num: "2",
		value: "op14",
		disable: false,
	},
	{
		label: "17:00~17:30",
		num: "2",
		value: "op15",
		disable: false,
	},
	{
		label: "17:30~18:00",
		num: "2",
		value: "op16",
		disable: false,
	},
]

const cstOGCheckboxDf = ref([])
const cstOGCheckboxOptDf = [
	{
		label: "label op1",
		value: "op1",
	},
	{
		label: "label op2",
		value: "op2",
	},
	{
		label: "label op3",
		value: "op3",
	},
	{
		label: "label op4",
		value: "op4",
	},
	{
		label: "label op5",
		value: "op5",
	},
	{
		label: "label op6",
		value: "op6",
	},
	{
		label: "label op7",
		value: "op7",
	},
	{
		label: "label op8",
		value: "op8",
	},
	{
		label: "label op9",
		value: "op9",
	},
	{
		label: "label op1",
		value: "op10",
	},
	{
		label: "label op1",
		value: "op11",
	},
	{
		label: "label op1",
		value: "op12",
	},
	{
		label: "label op1",
		value: "op13",
	},
	{
		label: "label op1",
		value: "op14",
	},
	{
		label: "label op1",
		value: "op15",
	},
	{
		label: "label op1",
		value: "op16",
	},
]

// subtab-btn 디폴트 값 설정
const activeSubTab = ref(0)

// subtab-btn 선택 시 클릭이벤트
const selectSubTab = (index) => {
	activeSubTab.value = index
}
</script>
