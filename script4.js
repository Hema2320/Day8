class Movie{
    constructor(mname,studio,rate){
        this.mname=mname;
        this.studio=studio;
        this.rate=rate;
    }
print()
{
    return (`the title : ${this.mname} the studio ${this.studio} and the rating ${this.rate}`);
}
}
let obj1= new Movie("Casino Royale","Eon Productions","PG13");
console.log(obj1.print());
