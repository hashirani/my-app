


import React from 'react'
import img from "./homeimage.jpg";
import "./Home.css";
import Product from './Product';
function Home() {
    return (
        <div className="home">
            <img className="home__image" src={img} alt="img"></img>
            <div className="home__row">
          
            <Product
            id={43215}
            title={"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the"}
            price={11.95}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51FwkQojA2L._AC_SX184_.jpg"
            />
             <Product
            id={43215}
            title={"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the"}
            price={11.95}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51FwkQojA2L._AC_SX184_.jpg"
            />
            </div>
            <div className="home__row">
            <Product
            id={43215}
            title={"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the"}
            price={11.95}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51FwkQojA2L._AC_SX184_.jpg"
            />
             <Product
            id={43215}
            title={"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the"}
            price={11.95}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51FwkQojA2L._AC_SX184_.jpg"
            />
            <Product
            id={43215}
            title={"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the"}
            price={11.95}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51FwkQojA2L._AC_SX184_.jpg"
            />
            </div>
            <div className="home__row">
             <Product
            id={43215}
            title={"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the"}
            price={11.95}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51FwkQojA2L._AC_SX184_.jpg"
            />
            </div>
            
        </div>
    )
}

export default Home
