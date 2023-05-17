import React from 'react';
import Lottie from 'react-lottie-player';

import animJson from '../animations/loading-indicator.json';

export interface CircularLoadingIndicatorProps {
    size?: number
}

const CircularLoadingIndicator: React.FC<CircularLoadingIndicatorProps> = ({ size }) => {
    return (
        <div className="loading-indicator">
            <Lottie
                loop
                animationData={animJson}
                play
                style={{ width: size || 150, height: size || 150 }}
            />
        </div>
    );
}

export default CircularLoadingIndicator;