let xPunkteArray = [ 0, 50, 100, 150, 200, 250, 300, 350, 400, 450];
let yPunkteArray = [25, 60,  50, 120, 100, 170, 120, 160, 130,  40];
let kurvenFunktion;

let settings;
let kuppenAn = true;
let linienAn = false;
let smoothieAn = false;

function setup() {
  createCanvas(550, 400);
  
  settings = QuickSettings.create(20, 20, "Hügellandschaft");
	settings.addBoolean("Kuppen anzeigen", true, function(value) { kuppenAn = value; }); 
	settings.addBoolean("Linien anzeigen", false, function(value) { linienAn = value; }); 	
	settings.addBoolean("Smoothie anzeigen", false, function(value) { smoothieAn = value; }); 
  
  kurvenFunktion = Smooth(yPunkteArray);
}

function draw() {
  background(240);
  translate(50, 0);
  if (kuppenAn) {  
    for (let i=0; i<xPunkteArray.length; i++) {
      strokeWeight(0);
      fill('CRIMSON');
      ellipse(xPunkteArray[i], height-yPunkteArray[i], 10, 10);
    }
  }
  if (linienAn) {  
    for (let i=0; i<xPunkteArray.length-1; i++) {
      strokeWeight(1);
      stroke('TEAL');
      line(xPunkteArray[i], height-yPunkteArray[i], xPunkteArray[i+1], height-yPunkteArray[i+1]);
    }  
  }
  if (smoothieAn) {
    for (let i=0; i<=500; i++) {
      strokeWeight(0);
      fill('STEELBLUE');
      ellipse(i, height-kurvenFunktion(i/50), 3, 3);
    } 
  }
  fill('orange');
  strokeWeight(0);
  ellipse(380,50,25,25);  
}