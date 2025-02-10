import { Mapper } from "../base/mapper";
import { ItemInterface } from "./item.interface";
import { ItemModel } from "./item.model";

export class ItemMapper extends Mapper<ItemInterface, ItemModel> {
  mapFrom(param: ItemInterface): ItemModel {
    return {
      name: param.name,
      pricePerUnit: param.price_per_unit,
      total: param.total,
    };
  }

  mapTo(param: ItemModel): ItemInterface {
    return {
      name: param.name,
      price_per_unit: param.pricePerUnit,
      total: param.total,
    };
  }
}
