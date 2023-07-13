let lastWidth = 0;
let lastHeight = 0;

const sc = 32;
let pixWidth = 0;
let pixHeight = 0;

let t = 0

let speed = 0.025;

function setup() {
    createCanvas(windowWidth, windowHeight);
    lastWidth = windowWidth;
    lastHeight = windowHeight;
    pixWidth = windowWidth/sc
    pixHeight = windowHeight/sc
    textSize(18);
    refresh();
}
  
function draw() {
    if(windowWidth !== lastWidth || windowHeight !== windowHeight){
        resizeCanvas(windowWidth,windowHeight)
        lastWidth = windowWidth;
        lastHeight = windowHeight;
        pixWidth =  windowWidth/sc
        pixHeight = windowHeight/sc
        refresh();
    }

    if(speed > 0.0){
        if(speed > 0 && frameCount % 4 == 0){
            refresh();
            t += speed * deltaTime;
        }

        speed -= 0.001;
    }
}

function refresh(){
    background(26, 26, 26, 255);
    noStroke();
    stroke(0,0,0, 50);

    for(let x = 0; x < pixWidth; x++){
        for(let y = 0; y < pixHeight; y++){
            let n = noise(x * 0.05,(y+t) * 0.05) * 1.0;
            //fill(n*80);
            if(n > 0.35){
                //rect(x*scale,y*scale,scale,scale);
                fill(40);
                let charText = (Math.random() + 1).toString(36).substring(2, 3);
                text(charText, x*sc, y*sc)
            }
        }
    }
}