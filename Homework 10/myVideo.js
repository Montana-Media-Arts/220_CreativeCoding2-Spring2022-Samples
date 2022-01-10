class myVideo{

    constructor(videoPath, x, y, w, h)
    {
        this.videoPath = videoPath;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    settheVideoObject(videoObject)
    {
        this.videoObject = videoObject;
    }

    get theVideoObject()
    {
        return this.videoObject;
    }
    get theVideoPath()
    {
        return this.videoPath;
    }

    get theX()
    {
        return this.x;
    }

    get theY()
    {
        return this.y;
    }

    get theW()
    {
        return this.w;
    }

    get theH()
    {
        return this.h;
    }
}