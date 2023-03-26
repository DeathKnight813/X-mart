import { m } from 'framer-motion';

const Button = ({ classes = '', children, propVariant, clickHandler }) => {
    const paddingX = !classes.includes('px-') ? 'px-8' : '';
    const paddingY = !classes.includes('py-') ? 'py-2' : '';
    const borderRadius = !classes.includes('rounded-') ? 'rounded-[100vh]' : '';

    return (
        <m.button
            variants={propVariant}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1, outlineOffset: '5px' }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            className={`${classes} ${paddingX} ${paddingY} ${borderRadius} select-none`}
            onClick={clickHandler}
        >
            {children}
        </m.button>
    );
};

export default Button;
