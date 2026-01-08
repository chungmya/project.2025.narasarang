/**
 * worklist.include
 * --------------------------------------
 * @version 1.33
**/


// ------------------------
// InfoSection >> LinkInfo
// ------------------------
function incLinkInfo(){
  const path_PC = './';

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
							<a href="${path_PC}worklist.directory.html" class="btn btn_directory"><span>Dir</span></a>
							<a href="${path_PC}worklist.todo.html" class="btn btn_todo"><span>Todo</span></a>
						</div>
					</td>
				</tr>
				<tr>
					<th scope="row">Util</th>
					<td class="etc_section">
						<div>
							<a href="${path_PC}tools.table.html" class="btn" target="_blank"><span>Data</span></a>
							<a href="${path_PC}tools.urlEncoderSVG.html" class="btn" target="_blank"><span>Svg</span></a>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	`;

	document.write(str);
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
				<col class="num" 				style="width:40px"	 	/> 		<!-- 번호 -->
				<col class="depth2" 		style="width:10%"		 	/> 		<!-- 2Depth -->
				<col class="depth3" 		style="width:10%"		 	/> 		<!-- 3Depth -->
				<col class="depth4" 		style="width:10%"		 	/> 		<!-- 4Depth -->
				<col class="page" 			style="width:10%"		 	/> 		<!-- 화면명 -->
				<col class="path" 			style="width:100px"	 	/> 		<!-- 화면ID -->
				<col class="corder" 		style="width:65px"		/> 		<!-- 담당자 -->
				<col class="ddate" 			style="width:65px"		/> 		<!-- 예정일 -->
				<col class="rdate" 			style="width:65px"		/> 		<!-- 완료일 -->
				<col class="pdate" 			style="width:65px"		/> 		<!-- 수정일 -->
				<col class="tag" 				style="width:auto"		 	/> 		<!-- Tag -->
				<col class="log" 				style="width:auto"		/> 		<!-- Log -->
			</colgroup>
			<thead>
				<tr>
					<th class="num"  			scope="col">No</th>
					<th class="depth2"  	scope="col">2Depth</th>
					<th class="depth3"  	scope="col">3Depth</th>
					<th class="depth4"  	scope="col">4Depth</th>
					<th class="page"  		scope="col">화면명</th>
					<th class="path"  		scope="col">화면ID</th>
					<th class="corder"  	scope="col">담당</th>
					<th class="ddate"  		scope="col">예정</th>
					<th class="rdate"  		scope="col">완료</th>
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
					<th class="depth3"  	scope="col">Description</th>
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
		str = `
			<caption>작업 리스트: directory</caption>
			<colgroup>
				<col class="num" 				style="width:3%" 			/> 		<!-- 번호 -->
				<col class="depth2" 		style="width:7%" 			/> 		<!-- 2Depth -->
				<col class="depth3" 		style="width:7%" 			/> 		<!-- 3Depth -->
				<col class="depth4" 		style="width:7%" 			/> 		<!-- 4Depth -->
				<col class="depth5" 		style="width:7%" 			/> 		<!-- 5Depth -->
				<col class="depth6" 		style="width:7%" 			/> 		<!-- 6Depth -->
				<col class="type" 			style="width:60px" 		/> 		<!-- Type -->
				<col class="path" 			style="width:120px" 	/> 		<!-- path -->
				<col class="path2" 			style="width:120px" 	/> 		<!-- path2 -->
				<col class="corder" 		style="width:60px" 		/> 		<!-- 담당자 -->
				<col class="rdate" 			style="width:60px" 		/> 		<!-- 작업일 -->
				<col class="info" 			style="width:15%" 		/> 		<!-- Tag -->
				<col class="tag" 				style="width:11%" 		/> 		<!-- Tag -->
				<col class="log" 				style="width:auto" 		/> 		<!-- Log -->
			</colgroup>
			<thead>
				<tr>
					<th class="num"  			scope="col">No</th>
					<th class="depth2"  	scope="col">2Depth</th>
					<th class="depth3"  	scope="col">3Depth</th>
					<th class="depth4"  	scope="col">4Depth</th>
					<th class="depth5"  	scope="col">5Depth</th>
					<th class="depth6"  	scope="col">6Depth</th>
					<th class="type"  		scope="col">Type</th>
					<th class="path"  		scope="col">Path</th>
					<th class="path2"  		scope="col">Path2</th>
					<th class="corder"  	scope="col">담당자</th>
					<th class="rdate"  		scope="col">작업일</th>
					<th class="info"  		scope="col">Info</th>
					<th class="tag"  			scope="col">Tag</th>
					<th class="log"  			scope="col">Log</th>
				</tr>
			</thead>
		`;
	}

	else if(pageType == 'check'){
		str = `
			<caption>작업 리스트: check</caption>
			<colgroup>
				<col class="num" 				style="width:2%" 			/> 		<!-- 번호 -->
				<col class="path" 			style="width:3%" 			/> 		<!-- 2Depth -->
				<col class="depth2" 		style="width:8%" 			/> 		<!-- 3Depth -->
				<col class="depth3" 		style="width:8%" 			/> 		<!-- 4Depth -->
				<col class="depth4" 		style="width:8%" 			/> 		<!-- 5Depth -->
				<col class="type" 			style="width:60px" 		/> 		<!-- 5Depth -->
				<col class="page" 			style="width:20%" 		/> 		<!-- Page -->
				<col class="corder" 		style="width:60px" 		/> 		<!-- 작성자 -->
				<col class="rdate" 			style="width:60px" 		/> 		<!-- Date -->
				<col class="info" 			style="width:15%" 		/> 		<!-- Info -->
				<col class="tag" 				style="width:14%" 		/> 		<!-- Tag -->
				<col class="log" 				style="width:auto" 		/> 		<!-- Log -->
			</colgroup>
			<thead>
				<tr>
					<th class="num"				scope="col">No</th>
					<th class="path" 			scope="col">ID</th>
					<th class="depth2" 		scope="col">D2</th>
					<th class="depth3" 		scope="col">D3</th>
					<th class="depth4" 		scope="col">D4</th>
					<th class="type" 			scope="col">Type</th>
					<th class="page" 			scope="col">내용</th>
					<th class="corder" 		scope="col">확인자</th>
					<th class="rdate" 		scope="col">확인일</th>
					<th class="info" 			scope="col">Etc</th>
					<th class="tag" 			scope="col">Tag</th>
					<th class="log" 			scope="col">Log</th>
				</tr>
			</thead>
		`;
	}

	document.write(str);
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
				//			:[No   , 2D   , 3D   , 4D   ,	Page , Path , Coder, dDate, rDate, pDate, Tag  , Log
				, search:['X'  , 'X'  , 'X'  , 'X'  , 'X'  , 'X'  , true , true , true , true , true , true  ]
				, table :['O'  , 'O'  , true , true , true , 'O'  , true , true , true , true , true , true  ]
			}
		}
		, mobile : {
			setting:{
				data:['O', 'X', false, false] 
				, option:[false, true, false, false]
				//			:[No   , 2D   , 3D   , 4D   ,	Page , Path , Coder, dDate, rDate, pDate, Tag  , Log
				, search:['X'  , 'X'  , 'X'  , 'X'  , 'X'  , 'X'  , 'X'  , 'X'  , 'X'  , 'X'  , 'X'  , 'X'   ]
				, table :['O'  , 'O'  , false, false, true , 'O'  , true , false, false, false, false, false ]
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
					data:['O', false, true, true]
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
					data:['O', false, false, true]
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

	else if(pageType === "directory"){
		pageOption = {
			version : 'worklist.directory'
			, desktop:{
				setting:{
					data:['O', false, true, false]
					, option:[false, true, false, false] 
								//:[No,		2D,			3D,			4D,			5D, 		6D, 		Type, 	path,		path2,	담당,		완료,		Info, 	Tag, 		Log
					, search:['X',	'X', 		'X', 		'X', 		'X', 		'X',	 	true,		'X', 		'X', 		true, 	true, 	true,		true, 	true]
					, table :['O', 	'O', 		true, 	true, 	true, 	true,		true,		true,		true,		true,		true,		true,		true, 	true]
				}
			}
			, mobile : {
				setting:{
					data:['O', 'X', false, false] 
					, option:[false, true, false, false]
								//:[No,		2D,			3D,			4D,			5D, 		6D, 		Type, 	path,		path2,	담당,		완료,		Info,		Tag, 		Log
					, search:['X',	'X', 		'X', 		'X', 		'X', 		'X',		'X', 		'X', 		'X', 		'X', 		'X', 		true,		true, 	true]
					, table :['O', 	'O', 		true, 	true, 	true, 	true,		true, 	true,		true,		true,		true,		true, 	true, 	true]
				}
				, headerFolding :{
					headerClose:true
				}
			}
		}
	}

	else if(pageType === "check"){
		pageOption = {
			version : 'worklist.check'
			, desktop:{
				setting:{
					data:['O', false, true, true]
					, option:[false, true, false, false] 
								//:[No,		id,	 		2D,			3D,			4D,			type, 	page, 	담당자,	Date,		Info,		Tag, 		Log
					, search:['X',	true,  	false, 	false, 	false, 	true,		'X', 		true, 	true, 	'X',		true, 	true]
					, table :['O', 	'O', 		'O', 		true, 	true, 	true, 	true, 	true,		true,		true,		true, 	true]
				}
			}
			, mobile : {
				setting:{
					data:['O', 'X', false, false] 
					, option:[false, true, false, false]
								//:[No,		id,			2D,			3D,			4D,			type, 		page, 		담당자,	Date,		Info,		Tag, 		Log
					, search:['X',	true,		'X', 		'X', 		'X', 		'X',			'X', 			'X',		'X', 		'X',		'X', 		'X']
					, table :['O', 	'O',		'O', 		false, 	false,	 false, 	true, 	 	false,	false, 	false,	false, 	false]
				}
				, headerFolding :{
					headerClose:true
				}
			}
		}
	}

	Worklist.initModule(pageOption);
});


