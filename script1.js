	class Movie{
    	    
    	    constructor(mname,studio,rate="PG"){
    	        this.mname=mname;
           this.studio=studio;
    	        this.rate=rate;
    	    }
    	print()
    	{
    	    return (`The title : ${this.mname} the studio ${this.studio} and the rating ${this.rate}`);
    	}
    	
    
    	}
    	let obj1= new Movie("Avengers Endgame","Marvelous Studio");
    	console.log(obj1.print());
    