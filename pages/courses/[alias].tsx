import axios, { AxiosResponse } from "axios";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import { MenuItem } from "../../interfaces/menu.interface";
import { PageModel } from "../../interfaces/page.interface";
import { ProductModel } from "../../interfaces/product.interface";
import { withLayout } from "../../layout/Layout"

const firstCategory = 0;

function Course ({menu, page, products} : CourseProps) : JSX.Element {

    return (
        <>
					{products.length}
        </>
    )
}

export default withLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {
        const {data: menu} = await axios.post<unknown, AxiosResponse<MenuItem[]>>(process.env.NEXT_PUBLIC_DOMAIN + 'api/top-page/find', {firstCategory});
    return {
        paths: menu.flatMap(m => m.pages.map(p => `/courses/${p.alias}`)),
        fallback: true
    }
}

export const getStaticProps: GetStaticProps<CourseProps> =  async ({ params } : GetStaticPropsContext<ParsedUrlQuery>) => {
    if (!params) {
        return {
                notFound: true
            }
        
    }
    const {data: menu} = await axios.post<unknown, AxiosResponse<MenuItem[]>>(process.env.NEXT_PUBLIC_DOMAIN + 'api/top-page/find', {firstCategory});
    const {data: page} = await axios.get<unknown, AxiosResponse<PageModel>>(process.env.NEXT_PUBLIC_DOMAIN + 'api/top-page/byAlias/' + params.alias);
    const {data: products} = await axios.post<unknown, AxiosResponse<ProductModel[]>>(process.env.NEXT_PUBLIC_DOMAIN + 'api/product/find', {
        category: page.category,
        limit: 10
    })
		console.log(products)
    return {
			props: {
					menu,
					firstCategory,
					page,
					products
			}
  }
  
}


interface CourseProps extends Record<string, unknown> {
    menu: MenuItem[],
    firstCategory: number,
    page: PageModel,
    products: ProductModel[],
}