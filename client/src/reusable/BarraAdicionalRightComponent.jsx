import React, { useState, useEffect } from 'react';
import '../styles/BarraAdicionalRightComponent.css';

const BarraAdicionalRightComponent = ({ onClose, children }) => {
    const [isActive, setIsActive] = useState(false);
    
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
    
    return (
        <>
            <div className={`barra-adicional-overlay ${isActive ? 'active' : ''}`} onClick={handleOverlayClick}></div>
            <div className={`barra-adicional-sidebar ${isActive ? 'active' : ''}`}>
                <div className="barra-adicional-content">
                    {children}
                </div>
            </div>
        </>
    );
};

export default BarraAdicionalRightComponent;