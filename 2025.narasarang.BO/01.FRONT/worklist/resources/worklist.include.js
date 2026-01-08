/**
 * worklist.include
 * --------------------------------------
 * @version 1.33
**/


// ------------------------
// InfoSection >> LinkInfo
// ------------------------
function incLinkInfo(){
  const path_PC = '';

	const str = `
		<table>
			<caption>Link info</caption>
			<colgroup><col width="100px" /><col width="auto" /></colgroup>
			<tbody>
				<tr>
					<th scope="row">Publish</th>
					<td class="tobe_section">
						<div class="pc">
							<a href="${path_PC}worklist.html" class="btn btn_front"><span>UI/UX</span></a>
							<a href="${path_PC}worklist.guide.html" class="btn btn_guide"><span>Guide</span></a>
							<a href="${path_PC}worklist.directory.html" class="btn btn_directory"><span>Directory</span></a>
							<a href="${path_PC}worklist.todo.html" class="btn btn_todo"><span>Todo</span></a>
						</div>
					</td>
				</tr>

			</tbody>
		</table>
	`;

	document.writeln(str);
}



// ------------------------
// Table >> Thead
// ------------------------
function incThead(){
	var pageType = document.body.getAttribute('data-page');
	var str = '';

	if(pageType == 'worklist'){
		str = `
			<caption>작업 리스트: worklist</caption>
			<colgroup>
				<col class="num" 				style="width:33px"	 	/> 		<!-- 번호 -->
				<col class="depth2" 		style="width:9%"		 	/> 		<!-- 2Depth -->
				<col class="depth3" 		style="width:9%"		 	/> 		<!-- 3Depth -->
				<col class="depth4" 		style="width:9%"		 	/> 		<!-- 4Depth -->
				<col class="page" 			style="width:10%"		 	/> 		<!-- 화면명 -->
				<col class="type" 			style="width:60px"		/> 		<!-- 구분 -->
				<col class="pid" 				style="width:110px"		/> 		<!-- 프로그램ID -->
				<col class="path" 			style="width:200px"	 	/> 		<!-- 화면ID -->
				<col class="plan" 			style="width:62px"	 	/> 		<!-- 기획 -->
				<col class="dev" 				style="width:62px"		/> 		<!-- 개발자 -->
				<col class="corder" 		style="width:62px"		/> 		<!-- 담당자 -->
				<col class="ddate" 			style="width:62px"		/> 		<!-- 예정일 -->
				<col class="rdate" 			style="width:62px"		/> 		<!-- 완료일 -->
				<col class="test" 			style="width:62px"		/> 		<!-- 검수 -->
				<col class="pdate" 			style="width:62px"		/> 		<!-- 수정일 -->
				<col class="tag" 				style="width:200px"		/> 		<!-- Tag -->
				<col class="log" 				style="width:auto"		/> 		<!-- Log -->
			</colgroup>
			<thead>
				<tr>
					<th class="num"  			scope="col">No</th>
					<th class="depth2"  	scope="col">Depth2</th>
					<th class="depth3"  	scope="col">Depth3</th>
					<th class="depth4"  	scope="col">Depth4</th>
					<th class="page"  		scope="col">화면명</th>
					<th class="type"  		scope="col">구분</th>
					<th class="pid"  			scope="col">프로그램ID</th>
					<th class="path"  		scope="col">화면ID</th>
					<th class="plan"  		scope="col">기획</th>
					<th class="dev"		  	scope="col">개발</th>
					<th class="corder"  	scope="col">담당</th>
					<th class="ddate"  		scope="col">예정</th>
					<th class="rdate"  		scope="col">완료</th>
					<th class="test"  		scope="col">검수</th>
					<th class="pdate"  		scope="col">수정</th>
					<th class="tag"  			scope="col">Tag</th>
					<th class="log"  			scope="col">Log</th>
				</tr>
			</thead>
		`;
	}

	else if(pageType == 'guide'){
		str = `
			<caption>작업 리스트: guide</caption>
			<colgroup>
				<col class="num" 				style="width:3%" 			/> 		<!-- 번호 -->
				<col class="depth2" 		style="width:11%" 		/> 		<!-- 2Depth -->
				<col class="depth3" 		style="width:11%" 		/> 		<!-- 3Depth -->
				<col class="depth4" 		style="width:11%" 		/> 		<!-- 4Depth -->
				<col class="depth5" 		style="width:11%" 		/> 		<!-- Page -->
				<col class="path" 			style="width:9%" 			/> 		<!-- 경로 -->
				<col class="corder" 		style="width:60px" 		/> 		<!-- 담당자 -->
				<col class="rdate" 			style="width:60px" 		/> 		<!-- Date -->
				<col class="info" 			style="width:12%" 		/> 		<!-- Info -->
				<col class="tag" 				style="width:12%" 		/> 		<!-- Tag -->
				<col class="log" 				style="width:auto" 		/> 		<!-- Log -->
			</colgroup>
			<thead>
				<tr>
					<th class="num"				scope="col">No</th>
					<th class="depth2" 		scope="col">2Depth</th>
					<th class="depth3" 		scope="col">3Depth</th>
					<th class="depth4" 		scope="col">4Depth</th>
					<th class="depth5" 		scope="col">Page</th>
					<th class="path" 			scope="col">Path</th>
					<th class="corder" 		scope="col">담당자</th>
					<th class="rdate" 		scope="col">Date</th>
					<th class="info" 			scope="col">Info</th>
					<th class="tag" 			scope="col">Tag</th>
					<th class="log" 			scope="col">Log</th>
				</tr>
			</thead>
		`;
	}

	else if(pageType == 'todo'){
		str = `
			<caption>작업 리스트: todo</caption>
			<colgroup>
				<col class="num" 				style="width:35px" 		/> 		<!-- 번호 -->
				<col class="id" 				style="width:60px" 		/> 		<!-- index -->
				<col class="depth2" 		style="width:7%" 			/> 		<!-- Cate -->
				<col class="depth3" 		style="width:25%" 		/> 		<!-- Description -->
				<col class="path" 			style="width:20%" 		/> 		<!-- path -->
				<col class="request" 		style="width:60px" 		/> 		<!-- 요청자 -->
				<col class="corder" 		style="width:60px" 		/> 		<!-- 담당자 -->
				<col class="ddate" 			style="width:60px" 		/> 		<!-- 요청일 -->
				<col class="rdate" 			style="width:60px" 		/> 		<!-- 완료일 -->
				<col class="tag" 				style="width:10%" 		/> 		<!-- Tag -->
				<col class="log" 				style="width:auto" 		/> 		<!-- Log -->
			</colgroup>
			<thead>
				<tr>
					<th class="num"  			scope="col">No</th>
					<th class="id"  			scope="col">ID</th>
					<th class="depth2"  	scope="col">Cate</th>
					<th class="depth3"  	scope="col">Description &nbsp;<a href="javascript:void(0);" class="btn btn_detail"><span> ▼</span></a></th>
					<th class="path"  		scope="col">Path</th>
					<th class="request"  	scope="col">요청자</th>
					<th class="corder"  	scope="col">담당자</th>
					<th class="ddate"  		scope="col">요청일</th>
					<th class="rdate"  		scope="col">완료일</th>
					<th class="tag"  			scope="col">Tag</th>
					<th class="log"  			scope="col">Log</th>
				</tr>
			</thead>
		`;
	}


	else if(pageType == 'directory'){
		str=''
			+'<caption>작업 리스트: directory</caption>'
			+'<colgroup>'
			+'	<col class="num" 				style="width:3%" 			/> 		<!-- 번호 -->'
			+'	<col class="depth2" 		style="width:7%" 			/> 		<!-- 2Depth -->'
			+'	<col class="depth3" 		style="width:7%" 			/> 		<!-- 3Depth -->'
			+'	<col class="depth4" 		style="width:7%" 			/> 		<!-- 4Depth -->'
			+'	<col class="depth5" 		style="width:7%" 			/> 		<!-- 5Depth -->'
			+'	<col class="depth6" 		style="width:7%" 			/> 		<!-- 6Depth -->'
			+'	<col class="type" 			style="width:60px" 		/> 		<!-- Type -->'
			+'	<col class="path" 			style="width:120px" 	/> 		<!-- path -->'
			+'	<col class="path2" 			style="width:120px" 	/> 		<!-- path2 -->'
			+'	<col class="corder" 		style="width:60px" 		/> 		<!-- 담당자 -->'
			+'	<col class="rdate" 			style="width:60px" 		/> 		<!-- 작업일 -->'
			+'	<col class="info" 			style="width:15%" 		/> 		<!-- Tag -->'
			+'	<col class="tag" 				style="width:11%" 		/> 		<!-- Tag -->'
			+'	<col class="log" 				style="width:auto" 		/> 		<!-- Log -->'
			+'</colgroup>'
			+'<thead>'
			+'	<tr>'
			+'		<th class="num"  			scope="col">No</th>'
			+'		<th class="depth2"  	scope="col">2Depth</th>'
			+'		<th class="depth3"  	scope="col">3Depth</th>'
			+'		<th class="depth4"  	scope="col">4Depth</th>'
			+'		<th class="depth5"  	scope="col">5Depth</th>'
			+'		<th class="depth6"  	scope="col">6Depth</th>'
			+'		<th class="type"  		scope="col">Type</th>'
			+'		<th class="path"  		scope="col">Path</th>'
			+'		<th class="path2"  		scope="col">Path2</th>'
			+'		<th class="corder"  	scope="col">담당자</th>'
			+'		<th class="rdate"  		scope="col">작업일</th>'
			+'		<th class="info"  		scope="col">Info</th>'
			+'		<th class="tag"  			scope="col">Tag</th>'
			+'		<th class="log"  			scope="col">Log</th>'
			+'	</tr>'
			+'</thead>'
		;
	}

	document.writeln(str);
}





/**
 * Worklist Setting
 * --------------------------------------
 * 'O': 	Disibled Checked
 * 'X': 	Disibled Unchecked
 * true: 	Enabled Checked
 * false or blank: Enabled Unchecked
 **/
$(document).ready(function() {
	var pageType = document.body.getAttribute('data-page')

	var pageOption = {
		version : 'worklist'
		, desktop:{
			setting:{
				data:['O', false, true, true]
				, option:[true, true, true, false]
				, search:[
					'X' //No
					, 'X' //depth2
					, 'X' //depth3
					, 'X' //depth4
					, 'X' //page
					, true //type
					, false //pid
					, 'X' //path
					, true //plan
					, true //dev
					, true //corder
					, true //ddate
					, true //rdate
					, true //test
					, true //pdate
					, true //tag
					, true //log
				]
				, table :[
					'O' //No
					, true //depth2
					, true //depth3
					, true //depth4
					, 'O' //page
					, true //type
					, true //pid
					, true //path
					, true //plan
					, true //dev
					, true //corder
					, true //ddate
					, true //rdate
					, true //test
					, true //pdate
					, true //tag
					, true //log
				]
			}
		}
		, mobile : {
			setting:{
				data:['O', 'X', false, false]
				, option:[false, true, false, false]
				, search:[
					'X' //No
					, 'X' //depth2
					, 'X' //depth3
					, 'X' //depth4
					, 'X' //page
					, 'X' //type
					, 'X' //pid
					, 'X' //path
					, 'X' //plan
					, 'X' //dev
					, 'X' //corder
					, 'X' //ddate
					, 'X' //rdate
					, 'X' //test
					, 'X' //pdate
					, 'X' //tag
					, 'X' //log
				]
				, table :[
					'O' //No
					, true //depth2
					, false //depth3
					, false //depth4
					, 'O' //page
					, false //type
					, false //pid
					, true //path
					, true //plan
					, false //dev
					, false //corder
					, false //ddate
					, false //rdate
					, false //test
					, false //pdate
					, false //tag
					, false //log
				]
			}
			, headerFolding :{
				headerClose:true
			}
		}
	}

	if(pageType === "guide"){
		pageOption = {
			version : 'worklist.guide'
			, desktop:{
				setting:{
					data:['O', false, true, false]
					, option:[false, true, false, false]
								//:[No,		2D,			3D,			4D,			page, 	path,		담당자,	Date,		Info,		Tag, 		Log
					, search:['X',	'X', 		'X', 		'X', 		'X', 		'X', 		true, 	true, 	false,	false, 	true]
					, table :['O', 	'O', 		true, 	true, 	false, 	true, 	true,		true,		true,		false, 	true]
				}
			}
			, mobile : {
				setting:{
					data:['O', 'X', false, false]
					, option:[false, true, false, false]
								//:[No,		2D,			3D,			4D,			page, 	path,		담당자,	Date,		Info,		Tag, 		Log
					, search:['X',	'X', 		'X', 		'X', 		'X', 		'X', 		'X',		'X', 		'X',		'X', 		'X']
					, table :['O', 	'O', 		false, 	false,	 true, 	true, 	false,	false, 	false,	false, 	false]
				}
				, headerFolding :{
					headerClose:true
				}
			}
		}
	}

	else if(pageType === "todo"){
		pageOption = {
			version : 'worklist.todo'
			, desktop:{
				setting:{
					data:['O', false, false, false]
					, option:[true, true, true, true]
								//:[No,		ID,		Cate,		내용,		path,		요청자,	담당자,	요청일, 완료일,  	Tag, 		Log
					, search:['X',	'X', 	'X', 		'X', 		false,	true, 	true,  	true, 	true,	 	true,		true]
					, table :['O', 	'O', 	true, 	true, 	true,		true, 	true,		true, 	true,  	true, 	true]
				}
			}
			, mobile : {
				setting:{
					data:['O', 'X', false, false]
					, option:[false, true, false, false]
								//:[No,		ID,		Cate,		내용,		path,  	요청자,	담당자,	요청일, 완료일, 		Tag, 		Log
					, search:['X',	'X', 	'X', 		'X', 		'X', 		'X', 		'X', 		'X', 		'X', 		 	'X',		'X']
					, table :['O', 	'O', 	false, 	false, 	false,  true, 	false, 	false, 	false, 		false,	false]
				}
				, headerFolding :{
					headerClose:true
				}
			}
		}
	}

	Worklist.initModule(pageOption);
});


