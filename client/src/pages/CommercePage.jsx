import React from "react";
import HeaderComponent from '../componentsCommerce/HeaderComponent';
import SliderComponent from '../componentsCommerce/SliderComponent.jsx';
import DestinoComponent from '../componentsCommerce/DestinoComponent.jsx';
import VentaDestinoComponent from '../componentsCommerce/VentaDestinoComponent.jsx';
import NavComponent from "../componentsCommerce/NavComponent.jsx";

const CommercePage = () => {
    return (
        <div>
            <SliderComponent />
            <DestinoComponent />
            <VentaDestinoComponent />
        </div>
    )
}

export default CommercePage;