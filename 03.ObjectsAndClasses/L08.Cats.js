function createCats(arr) {
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    meow() {
      return `${this.name}, age ${this.age} says Meow`;
    }
  }

  for (cat of arr) {
    const [name, age] = cat.split(" ");
    cat = new Cat(name, age);
    console.log(cat.meow());
  }
}

createCats(["Mellow 2", "Tom 5"]);
