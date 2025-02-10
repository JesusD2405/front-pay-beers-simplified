export class ItemModel {
  name: string;
  pricePerUnit: number;
  total: number;

  constructor(name: string, pricePerUnit: number, total: number) {
    this.name = name;
    this.pricePerUnit = pricePerUnit;
    this.total = total;
  }
}
