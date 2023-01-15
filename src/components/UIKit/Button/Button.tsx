import React from 'react';

interface IButton extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, React.AriaAttributes {
    className?: string
    variant?: 'primary' | 'outlined' | 'secondary',
    size?: 'small' | 'large',
    children: React.ReactNode
}

export const Button = ({
                    className = '',
                    variant = 'primary',
                    size = 'small',
                    children,
                    ...rest
                }: IButton) => {
    return (
        <button
            className={`btn ${variant} ${size} ${className}`}
            {...rest}
        >
            {children}
        </button>
    );
};

