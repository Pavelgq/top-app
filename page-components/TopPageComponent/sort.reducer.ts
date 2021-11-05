import { SortEnam } from "../../components/Sort/Sort.props";
import { ProductModel } from "../../interfaces/product.interface";

export type SortActions = {type: SortEnam} | {type: 'Reset', initialState: ProductModel[]}

export interface SortReducerState {
  sort: SortEnam;
  products: ProductModel[];
}

export const SortReduser = (state: SortReducerState, action: SortActions) : SortReducerState => {

  switch (action.type) {
    case SortEnam.Price:
      return {
        sort: SortEnam.Price,
        products: state.products.sort((a, b) => a.price > b.price ? -1 : 1)
      }
    case SortEnam.Rating:
      return {
        sort: SortEnam.Rating,
        products: state.products.sort((a, b) => a.initialRating > b.initialRating ? -1 : 1)
      }
    case 'Reset':
      return {
        sort: SortEnam.Rating,
        products: action.initialState.sort((a, b) => a.initialRating > b.initialRating ? -1 : 1),
      }
    default:
      throw new Error("Неверный тип сортировки")
  }
}