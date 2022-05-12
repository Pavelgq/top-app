import CoursesIcon from "./icons/Courses.svg";
import BooksIcon from "./icons/Books.svg";
import ServicesIcon from "./icons/Services.svg";
import ProductsIcon from "./icons/Products.svg";
import { TopLevelMenuItem } from "../interfaces/menu.interface";
import { TopLevelCategoty } from "../interfaces/page.interface";

export const firstLevelMenuItem: TopLevelMenuItem[] = [
  {
    route: "courses",
    title: "Курсы",
    icon: <CoursesIcon />,
    id: TopLevelCategoty.Courses,
  },
  // {route: 'books', title: 'Книги', icon: <BooksIcon/>, id: TopLevelCategoty.Books},
  // {route: 'services', title: 'Сервисы', icon: <ServicesIcon/>, id: TopLevelCategoty.Services},
  // {route: 'products', title: 'Продукты', icon: <ProductsIcon/>, id: TopLevelCategoty.Products}
];
