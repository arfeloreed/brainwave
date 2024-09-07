import ButtonSvg from "../../assets/svg/ButtonSvg";

interface LoginButtonProps {
  className?: string;
  onClick: () => void;
  children: React.ReactNode;
}

const LoginButton = ({ className, onClick, children }: LoginButtonProps) => {
  const classes = `button relative inline-flex items-center justify-center
                h-11 transition-colors hover:text-color-1 px-7 text-n-1 ${className || ""}`;

  return (
    <button className={classes} onClick={onClick}>
      <span>{children}</span>
      {ButtonSvg(false)}
    </button>
  );
};

export default LoginButton;
