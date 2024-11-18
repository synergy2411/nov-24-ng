// let x= "Hello World!";

// x = 101;

class Animal<T, K> {
  // private legs: T;
  // private species: K;

  constructor(private legs: T, private species: K) {
    // if (typeof legs === <T>) {
    // }
    // this.legs = legs;
    // this.species = species;
  }

  getDetails(): string {
    return `${this.species} does have ${this.legs} legs!`;
  }
}

let bunny = new Animal<number, string>(4, "Rabbit");

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
