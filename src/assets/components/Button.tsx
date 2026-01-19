interface ButtonProps {
  onClick: () => void;
  text: string;
}

export function Button({ onClick, text }: ButtonProps) {
  return <button onClick={onClick}>{text}</button>;
}
