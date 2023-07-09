import { createBrowserRouter} from "reac-router-dom";
import HomePage from "../../features/home/HomePage";
import Catalog from "../../features/catalog/catalog";
import ProductDetails from "../../features/catalog/ProductDetails";
import AboutPage from "../../features/about/AboutPage";
import ContactPage from "../../features/contact/ContactPage";
export const routrer = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {path:'',element:<HomePage/>},
            {path:'catalog',element:<Catalog/>},
            {path:'catalog/:id',element:<ProductDetails/>},
            {path:'about',element:<AboutPage/>},
            {path:'contact',element:<ContactPage/>},


        ]
    }
])