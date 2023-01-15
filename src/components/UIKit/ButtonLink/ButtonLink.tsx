import React from 'react';
import {Link} from "react-router-dom";

interface IButton {
    className?: string
    variant?: 'primary' | 'outlined' | 'secondary' | 'white' | 'no-style',
    size?: 'small' | 'large',
    children: React.ReactNode,
    to: string
    disabled?: boolean
}

export const ButtonLink = ({
                               className = '',
                               variant = 'primary',
                               size = 'small',
                               children,
                               disabled,
                               to,
                               ...rest
                           }: IButton) => {
    return (
        <Link
            to={to}
            className={`btn ${variant} ${size} ${className} ${disabled ? 'disabled' : ''}`}
            {...rest}
        >
            {children}
        </Link>
    );
};

