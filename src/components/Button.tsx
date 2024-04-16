type ButtonProps = {
  text: string;
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  showAdviceButton: boolean;
};

export default function Button({
  children,
  text,
  onClick,
  showAdviceButton,
}: ButtonProps) {
  const hideButton = showAdviceButton ? "hidden" : "";
  return (
    <li className="list-none">
      <button
        onClick={onClick}
        className={`btn ${text === "Encourage" && "btn-secondary"} ${
          text === "Advice" && "btn-primary"
        } ${hideButton}`}>
        {children}
      </button>
    </li>
  );
}
