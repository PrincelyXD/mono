
interface PillButtonProps {
    title: string;
    className?: string;
    icon?: React.ReactNode;
}

const PillButton= ({ title = 'white', className = '' }:PillButtonProps) => {
    return (
        <button
            className={`px-5 text-[15px] transition-transform duration-300 cursor-pointer hover:scale-[1.05] py-3 rounded-xl  ${className}`}
        >
            {title}
        </button>
    );
};

export default PillButton;