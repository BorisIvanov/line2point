var pointSize = 20;
var pointOffset = parseInt(pointSize/2);
var 
	x1 = 330, 
	y1 = 30, 
	x2 = 200, 
	y2 = 200,
  color = "red";

function onDrag(event, ui){
	if (ui.helper[0].id == "point_1"){
		x1 = ui.helper[0].offsetLeft + pointOffset;
		y1 = ui.helper[0].offsetTop + pointOffset;		
	} else {
		x2 = ui.helper[0].offsetLeft + pointOffset;
		y2 = ui.helper[0].offsetTop + pointOffset;		
	}

  var param = coordToCss();
  console.log(param);
	$("#line").css({"transform": param.transform }).width(param.length).offset({left: param.left, top: param.top});
};

function coordToCss(){
	var length = Math.sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2));
	var angle  = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
	var transform = "rotate(" + angle + "deg)";

	var canvasOffset = $("#canvas").offset();	
	var left = canvasOffset.left + Math.min(x1, x2);
	var top = canvasOffset.top + Math.min(y1, y2);
	return { transform: transform, length: length, canvasOffset: canvasOffset, left:left, top:top};
};

function renderLine(){
	var param = coordToCss();

	$("#line").css({
	  "transform": param.transform,
	  "background": color
	})
  .width(param.length)
  .offset({ left: param.left, top: param.top });
  
	$("#point_1")
		.offset({ left: param.canvasOffset.left + x1 - pointOffset, top: param.canvasOffset.top + y1 - pointOffset });
	
	$("#point_2")
    .offset({ left: param.canvasOffset.left + x2 - pointOffset, top: param.canvasOffset.top + y2 - pointOffset });
		
    return line;
};

function updateSegment() {
  $.ajax("/home/update", {
    cache: false,
    dataType: "json",
    type: "POST",
    success: function (response) {
      x1 = response.x1;
      y1 = response.y1;
      x2 = response.x2;
      y2 = response.y2;
      color = response.color;
      renderLine();
    }
  });
};

$(document).ready(function () {
  $("#point_1").draggable({ containment: "parent", drag: onDrag, stop: onDrag });
  $("#point_2").draggable({ containment: "parent", drag: onDrag, stop: onDrag });
  renderLine();
});