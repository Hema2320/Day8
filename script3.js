class Movie{

    getPG(...movie1){
      movie1.forEach(movie1 => {
        if(movie1.rate=="PG")
           console.log(movie1.moviename);
        
      });
     
    }
    
    }
    
    let movie1=[{
        moviename:"Avengers Endgame",
        studio:"Marvelous Studio",
        rate:"PG"
    },
    {
       moviename:"Game throne",
       studio:"Linen Stuido",
       rate:"8.4/10"
    }
    ]; 
    
    let obj1= new Movie();
    obj1.getPG(...movie1);
    