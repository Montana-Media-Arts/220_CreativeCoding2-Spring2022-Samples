// create all the variables for the buttons and videos
let playing;
let button, muteButton;
let muted;
let volumeDownButton, volumeUpButton;
let myCurrentVolume = 1;
let myVideos = []; // array to hold all the video objects

// everything happens in the setup now
function setup() {

    // create multiple video objects
    myVideos.push(new myVideo("assets/IntoTheWoods.mp4", 50, 100, 350, 480));
    myVideos.push(new myVideo("assets/WalkThroughTime.mp4", 460, 100, 480, 360));

    // create a canvas for the videos to sit on
    createCanvas(screen.width, screen.height);
    background(120);
    // create a title
    textSize(42);
    text("My Video Wall", 50, 50);

    // add the all buttons to play the videos
    button = createButton('play');
    button.position(90, 600);
    muteButton = createButton('mute');
    muteButton.position(90, 630);

    volumeDownButton = createButton('volume down');
    volumeDownButton.position(90, 660);

    volumeUpButton = createButton('volume up');
    volumeUpButton.position(90, 690);

    button.mousePressed(playVideo);
    muteButton.mousePressed(audioVolume);
    volumeDownButton.mousePressed(volumeDown);
    volumeUpButton.mousePressed(volumeUp);

    // create all the videos 
    for (let i = 0; i < myVideos.length; i++) {
        let tempVideo = createVideo([myVideos[i].theVideoPath]);
        tempVideo.size(myVideos[i].theW, myVideos[i].theH);
        tempVideo.position(myVideos[i].theX, myVideos[i].theY);
        myVideos[i].settheVideoObject(tempVideo);
    }

}

// turn down the video volume
function volumeDown() {
    myCurrentVolume -= .1;
    if (myCurrentVolume <= 0) {
        myCurrentVolume = 0;
    }
    for (let i = 0; i < myVideos.length; i++) {
        let temp = myVideos[i].theVideoObject;
        temp.volume(myCurrentVolume);
    }

}

// turn the volume up
function volumeUp() {
    myCurrentVolume += .1;
    if (myCurrentVolume >= 1) {
        myCurrentVolume = 1;
    }

    for (let i = 0; i < myVideos.length; i++) {
        let temp = myVideos[i].theVideoObject;
        temp.volume(myCurrentVolume);
    }

}

//change the volume from mute to unmute
function audioVolume() {
    if (muted) {
        muteButton.html('unmute')
        for (let i = 0; i < myVideos.length; i++) {
            let temp = myVideos[i].theVideoObject;
            temp.volume(0);
        }

    } else {
        muteButton.html('mute');
        for (let i = 0; i < myVideos.length; i++) {
            let temp = myVideos[i].theVideoObject;
            temp.volume(myCurrentVolume);

        }

    }

    muted = !muted;

}

// This function is called when the video loads
function playVideo() {

    if (playing) {
        for (let i = 0; i < myVideos.length; i++) {
            let temp = myVideos[i].theVideoObject;
            temp.pause();
            temp.volume(1);
        }
        button.html('play');
        playing = false;
    } else {
        for (let i = 0; i < myVideos.length; i++) {
            let temp = myVideos[i].theVideoObject;
            temp.loop();
            temp.volume(1);
        }

        button.html('pause');
        playing = true;

    }

}