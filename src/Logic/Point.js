export default class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    add(dx, dy){
        return new Point(this.x + dx, this.y + dy);
    }

    subtract(dx, dy){
        return new Point(this.x - dx, this.y - dy);
    }

    negate(){
        return new Point(-this.x, -this.y);
    }

    asCssPosition(){
        return {left: this.x, top: this.y}
    }

    *[Symbol.iterator](){
        yield this.x;
        yield this.y;
    }
}