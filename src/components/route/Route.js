import React from "react";
import {useRoutes} from 'hookrouter';
import RecipeList from "../recipe/RecipeList";


export const Routes = {
    "/": () => <RecipeList />,
    "/recipe": () => <RecipeList />,

  };

export const RouterView = () => {
    const routeResult = useRoutes(Routes);
    return routeResult;
}

export default Routes