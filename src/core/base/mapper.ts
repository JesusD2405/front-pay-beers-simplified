export abstract class Mapper<I, M> {
  abstract mapFrom(param: I): M;
  abstract mapTo(param: M): I;
}
