import {BrowserRouter,Routes,Route} from "react-router-dom";
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Newsletter from "./components/Footer/Newsletter/Newsletter"
import Home from "./components/Home/Home"
import Category from "./components/Category/Category"
import SingleProduct from "./components/SingleProduct/SingleProduct"
import AppContext from "./utils/context";
//update
function App() {
    return (
        <BrowserRouter>
            <AppContext>
                <Header/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/category/:id' element={<Category/>}/>
                    <Route path='/product/:id' element={<SingleProduct/>}/>
                </Routes>
                <Newsletter/>
                <Footer/>
            </AppContext>
        </BrowserRouter>
    )
}

export default App;
