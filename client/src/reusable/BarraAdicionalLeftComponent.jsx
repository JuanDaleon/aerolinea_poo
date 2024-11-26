import React, { useState, useEffect } from 'react';
import '../styles/BarraAdicionalLeftComponent.css';

const BarraAdicionalLeftComponent = ({ onClose, children, initialWidth = '300px' }) => {
    const [isActive, setIsActive] = useState(false);
    const [width, setWidth] = useState(initialWidth);

    useEffect(() => {
        setIsActive(true);

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                handleClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const handleClose = () => {
        setIsActive(false);
        setTimeout(onClose, 300); // Esperar a que la animación termine antes de cerrar
    };

    const handleOverlayClick = (event) => {
        if (event.target.classList.contains('barra-adicional-overlay')) {
            handleClose();
        }
    };

    const updateWidth = (newWidth) => {
        setWidth(newWidth);
    };

    return (
        <>
            <div className={`barra-adicional-overlay ${isActive ? 'active' : ''}`} onClick={handleOverlayClick}></div>
            <div className={`barra-adicional-sidebar-left ${isActive ? 'active' : ''}`} style={{ width }}>
                <div className="barra-adicional-content">
                    {React.cloneElement(children, { updateWidth })}
                </div>
            </div>
        </>
    );
};

export default BarraAdicionalLeftComponent;