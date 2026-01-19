interface CategorySelectProps {
  onChange: (value: string) => void;
  category: string;
}

export function CategorySelect({ onChange, category }: CategorySelectProps) {
  const catArray = ['general', 'programming', 'knock-knock'];

  const renderedTypes = catArray.map((category) => {
    return <option value={category}>{category.slice(0, 1).toUpperCase() + category.slice(1)}</option>;
  });

  return (
    <select value={category} onChange={(e) => onChange(e.currentTarget.value)}>
      {renderedTypes}
    </select>
  );
}
