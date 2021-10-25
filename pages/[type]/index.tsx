import axios, { AxiosResponse } from "axios";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from "querystring";
import { firstLevelMenuItem } from "../../helpers/menuHelpers";
import { MenuItem } from "../../interfaces/menu.interface";
import { PageModel, TopLevelCategoty } from "../../interfaces/page.interface";
import { ProductModel } from "../../interfaces/product.interface";
import { withLayout } from "../../layout/Layout"

function Type ({firstCategory} : TypeProps) {
    console.log('sdfsd', firstCategory)
    return (
        <div>
            Главная ({firstCategory})
        </div>
    )
}


export default withLayout(Type);

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: firstLevelMenuItem.map(m => '/' + m.route),
        fallback: true
    }
}

export const getStaticProps: GetStaticProps<TypeProps> =  async ({ params } : GetStaticPropsContext<ParsedUrlQuery>) => {
    if (!params) {
        return {
                notFound: true
            }
    }
    const firstCategoryItem = firstLevelMenuItem.find(el => {
        console.log(el.route, params.type);
        return el.route == params.type
    });
    if (!firstCategoryItem) {
        return {
                notFound: true
            }
    }
    try {
        const {data: menu} = await axios.post<unknown, AxiosResponse<MenuItem[]>>(process.env.NEXT_PUBLIC_DOMAIN + 'api/top-page/find', {firstCategory: firstCategoryItem.id});
        const {data: page} = await axios.get<unknown, AxiosResponse<PageModel>>(process.env.NEXT_PUBLIC_DOMAIN + 'api/top-page/byAlias/' + params.alias);
        const {data: products} = await axios.post<unknown, AxiosResponse<ProductModel[]>>(process.env.NEXT_PUBLIC_DOMAIN + 'api/product/find', {
            category: page.category,
            limit: 10
        })
        return {
                props: {
                        menu,
                        firstCategory: firstCategoryItem.id,
                        page,
                        products
                }
        }
    }
    catch {
        return {
                notFound: true
            }
    }
    
  
}

interface TypeProps extends Record<string, unknown> {
    menu: MenuItem[],
    firstCategory: TopLevelCategoty,
    page: PageModel,
    products: ProductModel[],
}