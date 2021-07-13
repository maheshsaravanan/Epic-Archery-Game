class ComputerBase {
    constructor(x, y, width, height) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);
        this.height = height
        this.width = width
        this.image = loadImage("assets/base2.png")    
    }
    display() {
        var pos = this.body.position
        imageMode(CENTER)
        image(this.image, pos.x, pos.y, this.width, this.height);

    }
}