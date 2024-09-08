import ButtonSvg from "../../assets/svg/ButtonSvg";

interface LoginButtonProps {
  className?: string;
  onClick: () => void;
  white?: boolean;
  children: React.ReactNode;
}

const LoginButton = ({
  className,
  onClick,
  white = false,
  children,
}: LoginButtonProps) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 px-7 ${className || ""}`;

  return (
    <button className={classes} onClick={onClick}>
      <span className={`relative z-10 ${white ? "text-black" : "text-n-1"}`}>
        {children}
      </span>
      {ButtonSvg(white)}
    </button>
  );
};

export default LoginButton;
