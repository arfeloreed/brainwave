import ButtonSvg from "../../assets/svg/ButtonSvg";

interface ButtonProps {
  className?: string;
  href?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  px?: string;
  white?: boolean;
  children: React.ReactNode;
}

const Button = ({
  className,
  href,
  onClick,
  px,
  white = false,
  children,
}: ButtonProps) => {
  const classes = `button relative inline-flex items-center justify-center
                h-11 transition-colors hover:text-color-1 ${px || "px-7"} 
                ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;
  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white ?? false)}
    </button>
  );

  const renderLink = () => (
    <a className={classes} href={href}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white ?? false)}
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
