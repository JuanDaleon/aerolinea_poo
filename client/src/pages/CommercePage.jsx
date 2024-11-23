import React from "react";
import HeaderComponent from '../componentsCommerce/HeaderComponent';
import SliderComponent from '../componentsCommerce/SliderComponent.jsx';
import DestinoComponent from '../componentsCommerce/DestinoComponent.jsx';
import VentaDestinoComponent from '../componentsCommerce/VentaDestinoComponent.jsx';

const CommercePage = () => {
    return (
        <div>
            <HeaderComponent />
            <SliderComponent />
            <DestinoComponent />
            <VentaDestinoComponent />
        </div>
    )
}

export default CommercePage;