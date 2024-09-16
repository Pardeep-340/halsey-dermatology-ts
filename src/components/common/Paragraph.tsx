import React from 'react'
type SubHeading = {
    children: React.ReactNode;
    className?: string;
};
const Paragraph = ({ children, className }: SubHeading) => {
    return (
        <p className={`${className} font-normal md:text-base text-sm text-holly !leading-150 text-opacity-70`}>
            {children}
        </p>
    )
}

export default Paragraph