import axios, { AxiosResponse } from "axios";
import { GetStaticProps } from "next";
import { MenuItem } from "../../interfaces/menu.interface";
import { withLayout } from "../../layout/Layout"



function Course ({} : CourseProps) : JSX.Element {

    return (
        <>

        </>
    )
}

export default withLayout(Course);

export const getStaticProps: GetStaticProps<CourseProps> =  async () => {

    const firstCategory = 0;
    const {data: menu} = await axios.post<any, AxiosResponse<MenuItem[]>>(process.env.NEXT_PUBLIC_DOMAIN + 'api/top-page/find', {firstCategory});
    return {
    props: {
      menu,
      firstCategory
    }
  }
  
}


interface CourseProps extends Record<string, unknown> {

}