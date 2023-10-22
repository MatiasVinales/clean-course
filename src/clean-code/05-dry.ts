type Size = '' | 'S' | 'M' | 'XL';

class Product {
  constructor(
    public name: string = '',
    public price: number = 0,
    public size: Size = ''
  ) {}

  isProductReady(): boolean {
    for (const key in this) {
      switch (typeof this[key]) {
        case 'string':
          if ((this[key] as string).length <= 0)
            throw new Error(`${key} is empty`);
        case 'string':
          if ((this[key] as number) <= 0) throw new Error(`${key} is zero`);
          break;
        default:
          throw new Error(`${typeof this[key]} is not valid`);
      }
    }

    return true;
  }

  toString() {
    if (!this.isProductReady()) return;
    return `${this.name} (${this.price}), ${this.size}`;
  }
}

(() => {
  const bluePants = new Product('Blue Large Pants', 10, 'M');
  console.log({ bluePants: bluePants.toString() });
})();
