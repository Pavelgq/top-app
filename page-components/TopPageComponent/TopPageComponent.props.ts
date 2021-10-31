import { TopLevelCategoty, PageModel } from "../../interfaces/page.interface";
import { ProductModel } from "../../interfaces/product.interface";

export interface TopPageComponentProps {
    firstCategory: TopLevelCategoty,
    page: PageModel,
    products: ProductModel[],
}