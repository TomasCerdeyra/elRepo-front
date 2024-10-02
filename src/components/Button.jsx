import PropTypes from 'prop-types';
import { Children } from 'react';

export const Button = ({children, ...props}) => (
    <button className='bg-color-blue400' {...props}>
        {children}
    
    </button>
);

Button.propTypes = {
    children: PropTypes.node.isRequired
};