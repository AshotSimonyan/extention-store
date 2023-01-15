import * as React from 'react';
import IcomoonReact from 'icomoon-react';

const iconSet = require('./selection.json');

type IconProps = {
    color?: string;
    size?: string | number;
    name: string;
    className?: string;
    onMouseEnter?: () => void
    onMouseLeave?: () => void
};

export const Icon: React.FC<IconProps> = ({
                                              color, size = 24,
                                              name, className = '',
                                              onMouseEnter,
                                              onMouseLeave
                                          }) => {
    return (
        <IcomoonReact
            className={`icon ${className}`}
            iconSet={iconSet}
            color={color}
            size={size}
            icon={name}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        />
    );
};
