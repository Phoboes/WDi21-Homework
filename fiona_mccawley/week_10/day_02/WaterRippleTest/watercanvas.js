var width = 350;
var height = 275;

function init(){
	var waterModel = new WaterModel(width, height, {
			resolution:2.0,
			interpolate:false,
			damping:0.985,
			clipping:5,
			evolveThreshold:0.05,
			maxFps:30,
			showStats:true
		});
	var waterCanvas = new WaterCanvas(width, height,
		"waterHolder", waterModel, {
			backgroundImageUrl:"images/yourimage.jpg",
			lightRefraction:9.0,
			lightReflection:0.1,
			maxFps:20,
			showStats:true
		});

		var finger = [
			[0.5, 1.0, 0.5],
			[1.0, 1.0, 1.0],
			[0.5, 1.0, 0.5]
		];

		waterModel.touchWater(100, 100, 1.5, finger);
}
