class Person{
    constructor(name){
        this.name=name;
}
static detail(){
    console.log("Employee details");
}

output(){
    let details=[{
        empid:"1000000001",
        dob:"23/11/2000",
        joiningdate:"23/10/2019",
        mail:"hema@gmail.com",
        desigination:"Junior Developer Department",
        address:"Chennai",
        phn:"1234567",
    }];
    console.log(`Details of  ${this.name} and her empid is  ${details[0].empid} she belongs to ${details[0].desigination}`);

}

}
Person.detail();
let obj1=new Person("Hema");
obj1.output();
