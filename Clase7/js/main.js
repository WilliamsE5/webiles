var patch;

$.get('patches/PatchClase7.pd', function(patchStr){
    patch = Pd.loadPatch(patchStr);
    Pd.start();
});

// DEFINIR VARIABLES

var oscilator;
var envel;
var volu = 1;

function volumeChange(valorVolumen){
    volu = valorVolumen;
    
    console.log('Valor: ' + volu);
    //masterVolume(volu);
}

// SETUP - Define oscilator and envelope. 

function setup(){
    /*oscilator = new p5.Oscillator();
    envel = new p5.Env();
    envel.setADSR(0, 0.2, 0.2, 0.3);
    envel.setRange(1, 0);
    oscilator.amp(envel);*/
}

function draw(){
    console.log(Pd);
    console.log(mouseX);
    console.log('Y:' + mouseY);

    Pd.send('modAmp', [mouseX]);
    Pd.send('carr', [mouseY]);
}

// KEY PRESSED - Assign each key to a note, start oscillator, ...
// ... start envelope.

function keyPressed(){
    var midiNota = 0;

    switch(key){
        case "q":
        midiNota = 60;
        fill(0, 0, 139);
        break;
        
        case "2":
        midiNota = 61;
        fill(0, 0, 139);
        break;
        
        case "w":
        midiNota = 62;
        fill(0, 0, 139);
        break;
        
        case "3":
        midiNota = 63;
        fill(0, 0, 139);
        break;
       
        case "e":
        midiNota = 64;
        fill(0, 0, 139);
        break;

        case "r":
        midiNota = 65;
        fill(0, 0, 139);
        break;

        case "5":
        midiNota = 66;
        fill(0, 0, 139);
        break;
       
        case "t":
        midiNota = 67;
        fill(0, 0, 139);
        break;

        case "6":
        midiNota = 68;
        fill(0, 0, 139);
        break;
       
        case "y":
        midiNota = 69;
        fill(0, 0, 139);
        break;

        case "7":
        midiNota = 70;
        fill(0, 0, 139);
        break;
       
        case "u":
        midiNota = 71;
        fill(0, 0, 139);
        break;
        
        case "i":
        midiNota = 72;
        fill(0, 0, 139);
        break;

        case "z":
        midiNota = 60 - 12;
        fill(0, 0, 139);
        break;
        
        case "s":
        midiNota = 61 - 12;
        fill(0, 0, 139);
        break;
        
        case "x":
        midiNota = 62 - 12;
        fill(0, 0, 139);
        break;
        
        case "d":
        midiNota = 63 - 12;
        fill(0, 0, 139);
        break;
       
        case "c":
        midiNota = 64 - 12;
        fill(0, 0, 139);
        break;

        case "v":
        midiNota = 65 - 12;
        fill(0, 0, 139);
        break;

        case "g":
        midiNota = 66 - 12;
        fill(0, 0, 139);
        break;
       
        case "b":
        midiNota = 67 - 12;
        break;

        case "h":
        midiNota = 68 - 12;
        fill(0, 0, 139);
        break;
       
        case "n":
        midiNota = 69 - 12;
        fill(0, 0, 139);
        break;

        case "j":
        midiNota = 70 - 12;
        fill(0, 0, 139);
        break;
       
        case "m":
        midiNota = 71 - 12;
        fill(0, 0, 139);
        break;

        case ",":
        midiNota = 72 - 12;
        fill(0, 0, 139);
        break;

        default:
        midiNota = 0;
        fill(240, 248, 255);

    }
    
    Pd.send('on', [mouseX]);

    noStroke();
    rect(20, 20, 60, 60, 60, 60);
    
    // oscilator.freq(midiToFreq(midiNota));
    // oscilator.start();
    // envel.play();
    // envel.triggerAttack();
}

// KEY RELEASED - Release envelope. 

function keyReleased(){

    Pd.send('off', [mouseX]);
    // envel.triggerRelease();
    background(240, 248, 255);
}

// PLAY SOUND - Play sound by pressing on the interface's keys. 

function playSound(nota){
    var freq = midiToFreq(nota);
    //console.log('Sound Playing: ' + nota);
    // oscilator.freq(freq);
    // oscilator.start();
    // envel.play();
}










