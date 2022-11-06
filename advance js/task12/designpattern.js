this.table = 'window table'

const cleantable = function(soap){
    let that = this  // that is outer this
    //this inside inner function
    const innerfunction = (_soap) => {
        console.log(`cleaning ${this.table} using ${_soap}`)

    }
    innerfunction(soap)
    console.log(`cleaning ${this.table}`)

    innerfunction.bind(this)(soap)
}

cleantable.call(this,'some soap ')
cleantable.call(this.garage,'some soap ')
cleantable.call(jhonsroom,'some soap ')


cleantable()

// call funtion to rescue
this.garage = {
    table:'garage table',
        //this inside a method 
        cleantable(){
            console.log(`cleaning ${this.table}`)
        }
}

this.garage.table;  // getting table

// this inside object
let jhonsroom = {
    table : 'this is john table',
    //this inside a method 
    cleantable(){
        console.log(`cleaning ${this.table}`)
    }
}

this.jhonsroom.table  // not working
console.log(jhonsroom.table)
this.garage.cleantable()

//this inside class
class createroom{
    constructor(name){
        this.table = `${name}s table`
    }
    cleantable = function(){
        console.log(`cleaning ${this.table} using ${soap}`)
    }
}
//this inside constructor
let createroom = function(name){
    this.table = `${name}s room`
}

createroom.prototype.cleantable = function(soap){
    console.log(`cleaning ${this.table} using ${soap}`)
}
const jillsroom = new createroom('jill')
const jhonroom = new createroom('jhon')

jillsroom.cleantable('some soap')
jhonroom.cleantable('some soap');



//---------
class student{
    static count = 0
    
    constructor(name,age,ph,marks)
    {
      this.name = name;
      this.age = age;
      this.ph = ph;
      this.marks = marks
      student.count = student.count + 1
    }
   
    // FAT ARROW FUNCTION FOR AGE CRITERIA
    setplacementage(minplacementage){
      return (minmarks) => {
        if(this.marks > minmarks && this.age > minplacementage){
          return `${this.name} is ready for placement`
        }else {
          return `${this.name} is not ready for placement`
        }
      }
    }
    
    //elegible method
    iselegible()
    {
      if(this.marks >= 40)
      {
        return `${this.name} is elegible`
      }else if(this.marks <= 40)
      {
        return `${this.name} is not elegible`
      }
    }
  }
  
  let student1 = new student('ravi', 20 , 22246 , 40)
  let student2 = new student('raju', 19 , 22246 , 20)
  let student3 = new student('ram', 15 , 22246 , 60)
  let student4 = new student('rahe', 11 , 22246 , 50)
  let student5 = new student('rajesh', 20 , 22246 , 80)
  
  // console.log(student1.iselegible()) //ravi is elegible
  // console.log(student2.iselegible()) // raju is not elegible
  
  // console.log(student.count) //5
  
  console.log(student1.setplacementage(18)(40))
  
  // var x = function(){
    
  //   this.val = 1
  //   setTimeout(function() {
  //     this.val++;
  //     console.log(this.val)
  //   }, 1);
    
  //   var x = function(){
  //   var this = that
  //   this.val = 1s
  //   setTimeout(function() {
  //     this.val++;
  //     console.log(this.val)
  //   }, 1);
    
  //   var x = () => {
  //     console.log(arguments[0]);
  //   } 
    
  //     var x = (...n) => { // using spread operator
  //     console.log(n[0]);
  //   } 
    
  //   x(1,2,3)
    
  //   var xx = new x();
  // }