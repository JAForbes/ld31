(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/Bitmap1.jpg", id:"Bitmap1"},
		{src:"images/Bitmap2.jpg", id:"Bitmap2"},
		{src:"images/Bitmap3.png", id:"Bitmap3"},
		{src:"images/iso.png", id:"iso"}
	]
};

// stage content:
(lib.flat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Shield
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("rgba(107,232,107,0.467)").beginStroke().moveTo(-135.8,135.7).curveTo(-192,79.5,-192,-0).curveTo(-192,-79.5,-135.8,-135.8).curveTo(-79.5,-192,-0,-192).curveTo(79.5,-192,135.7,-135.8).curveTo(192,-79.5,192,-0).curveTo(192,79.5,135.7,135.7).curveTo(79.5,192,-0,192).curveTo(-79.5,192,-135.8,135.7).closePath();
	this.shape.setTransform(281.6,201.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("rgba(204,0,51,0.298)").beginStroke().moveTo(-139.1,139.1).curveTo(-196.8,81.5,-196.8,-0).curveTo(-196.8,-81.6,-139.1,-139.2).curveTo(-81.5,-196.8,0,-196.8).curveTo(81.6,-196.8,139.2,-139.2).curveTo(196.8,-81.6,196.8,-0).curveTo(196.8,81.5,139.2,139.1).curveTo(81.6,196.8,0,196.8).curveTo(-81.5,196.8,-139.1,139.1).closePath();
	this.shape_1.setTransform(282.4,200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// Charge2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("rgba(51,255,255,0.169)").beginStroke().moveTo(125.4,63.5).lineTo(79.2,30.4).lineTo(30.4,9.6).lineTo(4,10.4).lineTo(-38.6,32.5).lineTo(-139.1,67.9).lineTo(-154.5,64.1).lineTo(-171.1,45.5).lineTo(-122.8,-5.5).lineTo(-97.2,-25.1).lineTo(-132.7,-19.1).lineTo(-174.2,-10.7).lineTo(-134.7,-39.7).lineTo(-93.5,-62.3).lineTo(-42.6,-74.5).lineTo(-0.1,-82.4).lineTo(33.7,-103).lineTo(67.1,-62.6).lineTo(134,-18.1).lineTo(157.9,9.1).lineTo(174.1,30.9).lineTo(174.2,103).closePath();
	this.shape_2.setTransform(280.2,188);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("rgba(255,51,255,0.239)").beginStroke().moveTo(-37.8,54.8).lineTo(-11.2,12).lineTo(-45.9,12).lineTo(-74.4,-4).lineTo(-145.9,51.2).lineTo(-159.7,29.6).lineTo(-134.5,0.1).lineTo(-174,-15.2).lineTo(-121.8,-59).lineTo(-91.1,-65).lineTo(-67.6,-79.3).lineTo(-42.6,-77).lineTo(-23,-51).lineTo(-18.5,-49.3).lineTo(-1.7,-60.6).lineTo(15.9,-68.9).lineTo(23.5,-64.3).lineTo(24.4,-45.8).lineTo(31.1,-43.3).lineTo(37.2,-52.2).lineTo(57.8,-60.6).lineTo(84.8,-54.8).lineTo(174,15.6).lineTo(119.6,43).lineTo(56.1,37.5).lineTo(-18.8,79.3).closePath();
	this.shape_3.setTransform(289.6,201);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).wait(1));

	// Ship
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FF6666").beginStroke().moveTo(129.3,28.5).lineTo(129.3,19.4).lineTo(164.5,58.2).closePath().moveTo(-132.9,-58.2).lineTo(-128.8,-55).lineTo(-164.5,-46.7).closePath();
	this.shape_4.setTransform(281.2,217.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#7C6666").beginStroke().moveTo(7.5,-21.4).lineTo(36.5,17.2).lineTo(-36.6,21.4).closePath();
	this.shape_5.setTransform(304.8,114.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FFCC00").beginStroke().moveTo(-47.5,10.1).lineTo(-25.2,-3.8).lineTo(-17.2,-8.8).lineTo(1.2,-20.3).lineTo(47.5,-8.7).lineTo(0.6,20.3).closePath();
	this.shape_6.setTransform(228.6,157);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FF9933").beginStroke().moveTo(-84.2,38.4).lineTo(-23.8,-28.4).lineTo(24.2,-18.2).lineTo(71.1,-47.2).lineTo(84.2,-24.1).lineTo(39.5,1.3).lineTo(24.2,-18.2).lineTo(-60.9,47.2).closePath();
	this.shape_7.setTransform(205,195.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#CC6633").beginStroke().moveTo(35,-32.7).lineTo(50.2,-13.2).lineTo(-50.2,32.7).closePath();
	this.shape_8.setTransform(194.3,209.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#CCCCCC").beginStroke().moveTo(68.9,17.7).lineTo(113.8,-1).lineTo(149.4,41).lineTo(112.8,54.5).closePath().moveTo(-21.6,-34.2).lineTo(43.6,-50.7).lineTo(-8.5,-11.2).closePath().moveTo(-124.1,-42).lineTo(-89.8,-54.5).lineTo(-124.4,-32.6).lineTo(-149.5,-23.2).closePath();
	this.shape_9.setTransform(297.7,182.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#666666").beginStroke().moveTo(-131.4,43.6).lineTo(-31,-2.3).lineTo(-40.5,12.4).lineTo(-135,49.2).closePath().moveTo(91.2,13.1).lineTo(91.2,1.1).lineTo(135,37.9).lineTo(135,47).closePath().moveTo(13.8,-27.8).lineTo(37.1,-21).lineTo(35.6,-11.9).lineTo(8.3,-10.4).closePath().moveTo(-127.2,-39.8).lineTo(-102.1,-49.2).lineTo(-95.9,-43.3).lineTo(-123,-36.6).closePath();
	this.shape_10.setTransform(275.4,199);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#333333").beginStroke().moveTo(-115.3,73.4).lineTo(-124.7,63.1).lineTo(-101.4,71.9).lineTo(-105.1,77.5).closePath().moveTo(65.6,16.4).lineTo(67.1,7.3).lineTo(43.7,0.6).lineTo(95.8,-38.9).lineTo(124.7,-20.7).lineTo(67.1,7.3).lineTo(121.1,29.5).lineTo(121.1,41.5).closePath().moveTo(-1,26.1).lineTo(43.7,0.6).lineTo(38.2,18).lineTo(-10.6,40.7).closePath().moveTo(-72.1,-20.8).lineTo(-34,-22.6).lineTo(-0.7,-50.5).lineTo(30,-55.6).lineTo(66.8,-77.5).lineTo(22.7,-34.8).lineTo(30,-55.6).lineTo(17,-49).lineTo(-15.7,-34).lineTo(-34,-22.6).lineTo(-42.1,-17.5).lineTo(-65.9,-15).closePath();
	this.shape_11.setTransform(245.5,170.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#999999").beginStroke().moveTo(128.6,41.5).lineTo(165.3,28).lineTo(163.8,80.3).closePath().moveTo(30.7,-17.4).lineTo(88.3,-45.4).lineTo(129.6,-14).lineTo(84.7,4.8).closePath().moveTo(-108.2,-54.9).lineTo(-133.6,-36.2).lineTo(-165.3,-24.7).closePath().moveTo(-74,-67.4).lineTo(-37.1,-75.2).lineTo(-70.5,-47.3).lineTo(-108.5,-45.6).closePath().moveTo(-52.1,-58.8).lineTo(-19.5,-73.7).lineTo(-6.4,-80.3).lineTo(-13.7,-59.5).lineTo(59.4,-63.6).lineTo(-5.8,-47.2).closePath();
	this.shape_12.setTransform(281.9,195.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#FF6666").beginStroke().moveTo(45.5,2.9).lineTo(75.9,9.4).lineTo(61.3,22.7).closePath().moveTo(-75.9,-22.7).lineTo(-54.6,-18.5).lineTo(-65.9,-6.3).closePath();
	this.shape_13.setTransform(210.8,254.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-30.5,0.2).lineTo(-32.7,-12.4).lineTo(-13.8,12.4).closePath().moveTo(19,0.2).lineTo(26.4,-5.4).lineTo(28.1,-4.9).lineTo(32.6,-1.7).lineTo(32.7,-1.6).lineTo(32.7,12.3).closePath();
	this.shape_14.setTransform(279.1,139.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#666666").beginStroke().moveTo(59.5,33).lineTo(117.2,-11.1).lineTo(170.1,28.3).lineTo(120,53.7).closePath().moveTo(18.2,-27.7).lineTo(30.8,-27.7).lineTo(-5.6,21.3).closePath().moveTo(0.3,-46.6).lineTo(14.7,-53.8).lineTo(7.2,-48.2).lineTo(-33.6,-5.1).lineTo(-53.6,4.8).closePath().moveTo(-25.5,-35.9).lineTo(-19.4,-33.2).lineTo(-75.7,4.8).closePath().moveTo(-170.1,-3.4).lineTo(-122.8,-42.2).lineTo(-90.6,-49).lineTo(-108.5,-16.8).lineTo(-120.7,-2.6).closePath();
	this.shape_15.setTransform(290.9,187.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#000000").beginStroke().moveTo(51.2,39.7).lineTo(114.8,-3.1).lineTo(108.5,10.3).lineTo(36.6,52.9).closePath().moveTo(-79.3,11.8).lineTo(-20.4,-31.4).lineTo(-90.6,23.9).closePath().moveTo(49.7,-14.9).lineTo(66.1,-29.7).lineTo(102.3,-22).lineTo(114.8,-3.1).closePath().moveTo(11.3,-14.9).lineTo(-20.4,-31.4).lineTo(1.7,-31.4).lineTo(30.9,-23.7).lineTo(49.7,-14.9).closePath().moveTo(-114.8,-39.6).lineTo(-65.4,-38.8).lineTo(-77,-23.6).closePath().moveTo(-65.4,-38.8).lineTo(-53.2,-52.9).lineTo(-25.2,-48).lineTo(-20.4,-31.4).closePath().moveTo(-65.4,-38.8).closePath();
	this.shape_16.setTransform(235.6,224);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#CCC9C9").beginStroke().moveTo(-10.2,2.7).lineTo(-17.4,-14.3).lineTo(17.4,14.3).closePath();
	this.shape_17.setTransform(390.6,162.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#999999").beginStroke().moveTo(28.7,21.8).lineTo(71.2,-15.2).lineTo(98.9,-3.5).lineTo(41.2,40.6).closePath().moveTo(12.5,-20.1).lineTo(17.8,-27.2).lineTo(-7.5,14).lineTo(-23.9,28.9).closePath().moveTo(-52,2.5).lineTo(-11.1,-40.6).lineTo(2.6,-28.5).lineTo(-42.7,20).closePath().moveTo(-98.9,-4.3).lineTo(-60.6,-40.6).lineTo(-43.9,-28.4).lineTo(-94,12.4).closePath();
	this.shape_18.setTransform(309.2,180.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#333333").beginStroke().moveTo(-16.6,62.9).lineTo(12.4,14.8).lineTo(-6.4,6).lineTo(38.9,-42.5).lineTo(36.2,-34.2).lineTo(12.4,14.8).lineTo(77.5,26.5).lineTo(13.8,69.3).closePath().moveTo(71.2,40).lineTo(77.5,26.5).lineTo(138,47.2).closePath().moveTo(-138,37.2).lineTo(-114.3,6.1).lineTo(-102.7,-9.1).lineTo(-57.7,-1.7).lineTo(-116.7,41.5).closePath().moveTo(28.8,-0).lineTo(54.1,-41.3).lineTo(75.5,-51.3).lineTo(100.3,-46.2).lineTo(107.5,-29.2).lineTo(65,7.7).closePath().moveTo(-35.7,-1.7).lineTo(-15.7,-11.6).lineTo(-6.4,6).closePath().moveTo(-35.7,-1.7).lineTo(-57.7,-1.7).lineTo(-1.5,-39.7).lineTo(18.2,-53.1).lineTo(-35.7,-1.7).closePath().moveTo(-57.7,-1.7).closePath().moveTo(-90.6,-23.3).lineTo(-72.6,-55.5).lineTo(-51,-69.3).lineTo(-26.5,-67.3).lineTo(-24.3,-54.7).lineTo(-62.6,-18.3).closePath();
	this.shape_19.setTransform(272.9,194.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},1).wait(1));

	// Charge
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#33FFFF").beginStroke().moveTo(125.4,63.5).lineTo(79.2,30.4).lineTo(30.4,9.6).lineTo(4,10.4).lineTo(-38.6,32.5).lineTo(-139.1,67.9).lineTo(-154.5,64.1).lineTo(-171.1,45.5).lineTo(-122.8,-5.5).lineTo(-97.2,-25.1).lineTo(-132.7,-19.1).lineTo(-174.2,-10.7).lineTo(-134.7,-39.7).lineTo(-93.5,-62.3).lineTo(-42.6,-74.5).lineTo(-0.1,-82.4).lineTo(33.7,-103).lineTo(67.1,-62.6).lineTo(134,-18.1).lineTo(157.9,9.1).lineTo(174.1,30.9).lineTo(174.2,103).closePath();
	this.shape_20.setTransform(280.2,188);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#FF33FF").beginStroke().moveTo(-37.8,54.8).lineTo(-11.2,12).lineTo(-45.9,12).lineTo(-74.4,-4.1).lineTo(-145.9,51.1).lineTo(-159.7,29.6).lineTo(-134.6,0.1).lineTo(-174,-15.2).lineTo(-121.8,-59).lineTo(-91.1,-65).lineTo(-67.6,-79.3).lineTo(-42.7,-77).lineTo(-23,-51).lineTo(-18.6,-49.3).lineTo(-1.7,-60.6).lineTo(15.8,-69).lineTo(23.6,-64.3).lineTo(24.4,-45.8).lineTo(31,-43.3).lineTo(37.2,-52.2).lineTo(57.8,-60.6).lineTo(84.8,-54.8).lineTo(174,15.6).lineTo(119.6,43).lineTo(56.1,37.5).lineTo(-18.8,79.3).closePath();
	this.shape_21.setTransform(290.1,201.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20}]}).to({state:[{t:this.shape_21}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(364.7,209.7,384,384);


// symbols:
(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,375);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,476,387);


(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5760,4735);


(lib.iso = function() {
	this.initialize(img.iso);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5760,4735);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;