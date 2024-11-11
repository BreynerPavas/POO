// Crear la clase Person, con propiedades name, age y genre, y el método obtDetails(), que muestra por pantalla las propiedades de la persona.
class Person {

    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    obtDetails(){
        console.log(`Mi nombre es ${this.name} tengo ${this.age} años y soy un/a ${this.gender}`);
        
    }
}
let person1 = new Person("Breyner",20,"Hombre");
person1.obtDetails();
// Crear la clase Student, que hereda de Person, e incluye las propiedades course y group y el método register(), que muestre por pantalla el resultado.
class Student extends Person{
    constructor(name,age,gender,course,group) {
        super(name,age,gender);
        this.course = course;
        this.group = group;
    }
    register(){
        this.obtDetails();
        console.log(`Estoy cursando ${this.course} actualmente y estoy en el curso ${this.group}`);
        
    }
}
let student1 = new Student("Breyner",20,"Hombre","FullStack Developer","Full time");
student1.register();

// Crear la clase Teacher, que hereda de Person, e incluye las propiedades asignatura y level y el método assign(), que muestre por pantalla el resultado.

class Teacher extends Person{
    constructor(name,age,gender,asignatura,level) {
        super(name,age,gender);
        this.asignatura = asignatura;
        this.level = level;
    }
    assign(){
        this.obtDetails();
        console.log(`Doy clases de ${this.asignatura} actualmente y estoy en el nivel ${this.level}`);
        
    }
}
let teacher1 = new Teacher("Breyner",20,"Hombre","FullStack Developer","Advance");
teacher1.assign();