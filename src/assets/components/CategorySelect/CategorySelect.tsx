import style from './categoryselect.module.scss';

interface CategorySelectProps {
  onChange: (value: string) => void;
  category: string;
  isDark: boolean;
}

export function CategorySelect({ onChange, category, isDark }: CategorySelectProps) {
  const catArray = ['general', 'programming', 'knock-knock'];

  const renderedTypes = catArray.map((category) => {
    return <option value={category}>{category.slice(0, 1).toUpperCase() + category.slice(1)}</option>;
  });

  return (
    <select
      className={isDark ? style.lightCategory : ''}
      value={category}
      onChange={(e) => onChange(e.currentTarget.value)}
    >
      {renderedTypes}
    </select>
  );
}
