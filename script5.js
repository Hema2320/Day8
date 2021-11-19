class Circle{
    constructor(radius,color)
    {
        this.radius=radius;
        this.color=color;

    }
getradius(){
    return this.radius;
}
setradius(){
    return this.radius=1.45;

}
getcolor(){
    return this.color;
}
setcolor(){
    return this.color="red";

}

toString(){
    return (`${this.radius} and ${this.color}`)
}
getarea(r){
 let a=3.14;
  return  (a *r *r );
}
getcircumference(r)
{
return (2 *3.14 *r)
}
}

let obj1=new Circle();
console.log(`Radius setvalue :${obj1.setradius()}`);
console.log(`Color value:${obj1.setcolor()}`);
console.log(`To String value:${obj1.toString()}`);
console.log(`Area of circle:${obj1.getarea(1.2)}`);
console.log(`Circumference :${obj1.getcircumference(1.2)}`);

