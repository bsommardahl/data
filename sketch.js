var assets = [
	'dune',
	'elisse',
	'rain',
	'structure',
	'beachrun',
	'face',
	'bombardier',
	'dance',
	'deer',
	'cat',
	'buildingcar',
	'ballet',
	'police',
	'dogs',
	'marie',
	'reflections',
	'helicopter',
	'surf',
	'icecar',
	'football',
	'waterfall',
	'dograce',
	'seawind'
];
var arr = [];
var current = 0;
var counter = 0;

	function lolol (){
		console.log('loooooooooool');
		if(counter >= assets.length){
			counter = 0;
			$( ".marquee3k span p" ).append( ' ' + assets[counter] );
		}else{
			$( ".marquee3k span p" ).append( ' ' + assets[counter] );
			counter ++;
		}
	}

var myRec = new p5.SpeechRec(); // new P5.SpeechRec object
myRec.continuous = true; // do continuous recognition
myRec.interimResults = true; // allow partial recognition (faster, less accurate)

function setup() {

	Marquee3k();

	createCanvas(windowWidth, windowHeight);
	frameRate(30);

	for (var i = 0; i < assets.length; i++) {
		var elem = createVideo(['assets/' + assets[i] + '.mp4']);
		elem.loop();
		elem.volume(0);
		elem.hide();
		arr[i] = new video(elem);
	}

	myRec.onResult = parseResult; // recognition callback
	myRec.onError = errorResult;
	myRec.start(); // start engine
}

function draw() {
	//background(255);

	arr[current].display();
}

function video(videoObject) {
	this.x = random(width);
	this.y = random(height);
	this.video = videoObject;
	this.display = function() {
		imageMode(CENTER);
		image(this.video, windowWidth/2, windowHeight/2, windowWidth*0.8, windowHeight*0.7);
	}
}

function errorResult(){
	console.log('error');
}

function mousePressed() {
	if (current < arr.length-1) {
		current++;
		arr[current].video.time(0);
	} else {
		current = 0;
		arr[current].video.time(0);
	}
}

function currentAsset() {
	return assets[current];
}

function parseResult(){
		// recognition system will often append words into phrases.
		// so hack here is to only use the last word:
		var mostrecentword = myRec.resultString.split(' ').pop();



		console.log(mostrecentword);
		console.log(myRec.resultValue);
		console.log(current);


		if(mostrecentword.indexOf("deer")!==-1) { current = 1; arr[current].video.time(0); }
		else if(mostrecentword.indexOf("skin")!==-1) { current = 2; arr[current].video.time(0); }
		else if(mostrecentword.indexOf("win")!==-1) { current = 3; arr[current].video.time(0); }
		else if(mostrecentword.indexOf("line")!==-1) { current = 2; arr[current].video.time(0); }
		else if(mostrecentword.indexOf("start")!==-1) { current = 4; arr[current].video.time(0); }
		else if(mostrecentword.indexOf("engines")!==-1) { current = 5; arr[current].video.time(0); }
		else if(mostrecentword.indexOf("pin")!==-1) { current = 6; arr[current].video.time(0); }
		else if(mostrecentword.indexOf("pool")!==-1) { current = 7; arr[current].video.time(0); }




		if (currentAsset() == 'fingers') {
			if(mostrecentword.indexOf("left")!==-1) { arr[current].video.time(68); }
			else if(mostrecentword.indexOf("right")!==-1) { arr[current].video.time(55); }
			else if(mostrecentword.indexOf("faster")!==-1) { arr[current].video.time(107); }
			else if(mostrecentword.indexOf("go")!==-1) { arr[current].video.time(15);}
		} 


		else if (currentAsset() == 'deer') {
			if(mostrecentword.indexOf("left")!==-1) { arr[current].video.time(12); }
			else if(mostrecentword.indexOf("right")!==-1) { arr[current].video.time(46); }
			else if(mostrecentword.indexOf("faster")!==-1) { arr[current].video.time(65); }
			else if(mostrecentword.indexOf("go")!==-1) { arr[current].video.time(95);}
		}

		else if (currentAsset() == 'battle') {
			if(mostrecentword.indexOf("left")!==-1) { arr[current].video.time(38); }
			else if(mostrecentword.indexOf("right")!==-1) { arr[current].video.time(29); }
			else if(mostrecentword.indexOf("faster")!==-1) { arr[current].video.time(116); }
			else if(mostrecentword.indexOf("go")!==-1) { arr[current].video.time(23);}
		}






	}

function keyPressed() {
	if (keyCode == UP_ARROW) {
		myRec.start(); // new P5.SpeechRec object
		console.log("launch");
	} 

	if (keyCode == DOWN_ARROW) {
		myRec.stop(); // new P5.SpeechRec object
		console.log("stop");
	}

	if (keyCode == LEFT_ARROW) {
		current--;
		if (current < 0) {
			current = arr.length - 1;
		}
		arr[current].video.time(0);
	}

	if (keyCode == 49) {
			arr[current].video.time(1);
	}
	if (keyCode == 50) {
			arr[current].video.time(3);
	}
	if (keyCode == 51) {
			arr[current].video.time(6);
	}
	if (keyCode == 52) {
			arr[current].video.time(8);
	}
	if (keyCode == 53) {
			arr[current].video.time(10);
	}
	if (keyCode == 54) {
			arr[current].video.time(13);
	}

	if (keyCode == RIGHT_ARROW) {
		current++;
		if (current >= arr.length) {
			current = 0;
		}
		arr[current].video.time(0);
	}    

}

// window.onresize = function() {
//   canvas.size(windowWidth, windowHeight);
// };
