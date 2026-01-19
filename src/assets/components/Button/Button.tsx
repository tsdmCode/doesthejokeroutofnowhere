import style from './button.module.scss';

interface ButtonProps {
  onClick: () => void;
  text: string;
  isDark: boolean;
}

export function Button({ onClick, text, isDark }: ButtonProps) {
  return (
    <button className={isDark ? style.lightBtn : ''} onClick={onClick}>
      {text}
    </button>
  );
}
