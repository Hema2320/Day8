class Price{
    constructor(name,mail){
        this.name=name;
        this.mail=mail;
    }
    calc(){
        console.log("Travelling from Mylapore to Velachery");
        console.log("Car type: Uber Black");
        let onekm=15;
        let baseprice=100;
        let dist=12.8;
        let bookingfee=11;
        let total= baseprice+ onekm * dist  + bookingfee;
        return (`Total cost to be paid:${total} and travelled km  is ${dist}`);
        }
    detatils(){
        return (`Passenger name:${this.name} and mail id is${this.mail} thanks for using our service`)
    
    }
    
    }
    
    
    let obj1=new Price("Hema","hema@abc.com");
    console.log(obj1.calc());
    console.log(obj1.detatils());
    