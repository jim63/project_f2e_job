class Person {
  constructor(f, b) {
    this.frontname = f;
    this.backname = b;
  }
  sayHello = () => {
    console.log(`hello, ${this.backname}`);
  };

  get fullname() {
    return `${this.frontname} ${this.backname}`;
  }

  set fullname(fn) {
    this.frontname = fn.split(' ')[0];
    this.backname = fn.split(' ')[1];
  }
}

class Worker extends Person {
  constructor(f, b, w) {
    super(f, b);
    this.Worker = w;
  }
}

var worker = new Worker('xu', 'jim', 'coding');
