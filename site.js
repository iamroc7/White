console.log("site.js");
function formInit(){
	console.log("formInit")

	$("#optionArea :radio").on("click",function(){
		var _this=$(this);
		var _id=_this.data("id");
		$("#addressArea, #xyArea,#locationArea").hide();
		$("#"+_id).show();
	});

	$("#optionArea :radio:checked").click();

	//---------------------------------
	
}


