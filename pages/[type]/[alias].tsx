import axios, { AxiosResponse } from "axios";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import { firstLevelMenuItem } from "../../helpers/menuHelpers";
import { MenuItem } from "../../interfaces/menu.interface";
import { PageModel, TopLevelCategoty } from "../../interfaces/page.interface";
import { ProductModel } from "../../interfaces/product.interface";
import { withLayout } from "../../layout/Layout"


function Course ({menu, page, products} : CourseProps) : JSX.Element {
    return (
        <>
            {products && products.length}
        </>
    )
}

export default withLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {
        let paths: string[] = [];
        for (const item of firstLevelMenuItem) {
            const {data: menu} = await axios.post<unknown, AxiosResponse<MenuItem[]>>(process.env.NEXT_PUBLIC_DOMAIN + 'api/top-page/find', {firstCategory: item.id});
            if (menu) {
                paths = paths.concat(menu.flatMap(m => m.pages.map(p => `/${item.route}/${p.alias}`)))
            }
        }
    return {
        paths,
        fallback: true
    }
}

export const getStaticProps: GetStaticProps<CourseProps> =  async ({ params } : GetStaticPropsContext<ParsedUrlQuery>) => {
    if (!params) {
        return {
                notFound: true
            }
    }
    const firstCategoryItem = firstLevelMenuItem.find(el => el.route === params.type);
    if (!firstCategoryItem) {
        return {
                notFound: true
            }
    }
    try {
        const {data: menu} = await axios.post<unknown, AxiosResponse<MenuItem[]>>(process.env.NEXT_PUBLIC_DOMAIN + 'api/top-page/find', {firstCategory: firstCategoryItem.id});
        if (menu.length === 0) {
            return {
                notFound: true
            }
        }
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


interface CourseProps extends Record<string, unknown> {
    menu: MenuItem[],
    firstCategory: TopLevelCategoty,
    page: PageModel,
    products: ProductModel[],
}