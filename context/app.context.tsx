import { createContext, PropsWithChildren, useState } from "react";
import { MenuItem } from "../interfaces/menu.interface";
import { TopLevelCategoty } from "../interfaces/page.interface";


export interface IAppContext {
    menu: MenuItem[];
    firstCategory: TopLevelCategoty;
    setMenu?: (newMenu: MenuItem[]) => void; 
    setCategory?: (newCategory: TopLevelCategoty) => void;
}

export const AppContext = createContext<IAppContext>({menu: [], firstCategory: TopLevelCategoty.Courses });

export const AppContextProvider = ({menu, firstCategory, children} : PropsWithChildren<IAppContext>) : JSX.Element => {
    const [menuState, setMenuState] = useState<MenuItem[]>(menu)
    const [currentCategory, setCurrentCategory] = useState<TopLevelCategoty>(firstCategory);
    if (menuState !== menu) {
        setMenuState(menu)
    }
    if (currentCategory !== firstCategory) {
        setCurrentCategory(firstCategory)
    }
    
    const setMenu = (newMenu: MenuItem[]) => {
        setMenuState(newMenu);  
    }
    const setCategory = (newCategory: TopLevelCategoty) => {
        setCurrentCategory(newCategory)
    }
    
    return <AppContext.Provider value={{menu: menuState, firstCategory: currentCategory, setMenu, setCategory}}>
        {children}
    </AppContext.Provider>
}