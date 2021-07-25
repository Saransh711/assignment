function Human(name,age){
    this.name=name;
    this.age=age;

};

function Man (name,age){
    Human.call(this,name,age);

};


Man.prototype=Object.create(Human.prototype)

function check(){
    var obj=new Man("Saransh",26);
    console.log(obj.name);
    console.log(obj instanceof Human);
}
check()