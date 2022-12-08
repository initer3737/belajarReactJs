import clsx from 'clsx';
//  title case : MyComponents
//  camel case : myComponents
const Button = ({ children, name, className = 'bg-blue-600 text-white',...props }) => {
    return (
        <button
            {...props}
            className={clsx(
                className,
                `[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-2 px-4 py-2 rounded flex items-center gap-x-2`
            )}
        >
            {name || children}
        </button>
    );
};

// cslx untuk membedakkan yang mana class dan property yang mereferensikan classname
export default Button