import { TopLevelCategoty } from "./page.interface";

export interface PageItem {
    alias: string;
    title: string;
    _id: string;
    category: string;
}

export interface MenuItem {
    _id: {
        secondCategory: string;
    };
    pages: PageItem[];
}

export interface TopLevelMenuItem {
    route: string;
    title: string;
    icon: JSX.Element;
    id: TopLevelCategoty;
}
