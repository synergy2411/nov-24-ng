// let x= "Hello World!";
// x = 101;
var Animal = /** @class */ (function () {
    // private legs: T;
    // private species: K;
    function Animal(legs, species) {
        this.legs = legs;
        this.species = species;
        // if (typeof legs === <T>) {
        // }
        // this.legs = legs;
        // this.species = species;
    }
    Animal.prototype.getDetails = function () {
        return "".concat(this.species, " does have ").concat(this.legs, " legs!");
    };
    return Animal;
}());
var bunny = new Animal(4, "Rabbit");
console.log(bunny.getDetails());
// let user: [string, number] = ["John Doe", 32];
// type CustomType = {
//     resourceName: string,
//     location: number
// }
// let resource1: CustomType = {
//     resourceName: "",
//     location: 32.43
// }
// class Foo{
// }
// class Bar {
// }
// class Bam {
//     constructor(foo: Foo, bar: Bar) {
//     }
// }
// new Bam(new Foo(), new Bar());
// interface Person {
//     name: string,
//     age: number,
//     dob: Date,
//     getDetail: () => void
// }
// class John implements Person {
//     name: string;
//     age: number;
//     dob: Date;
//     getDetail: () => void;
// }
