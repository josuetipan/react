import { useState } from "react";

type Props = {
  data: string[];
  onselect?: (elemento: string) => void;
};

function List({ data, onselect }: Props) {
  const [index, setIndex] = useState(1);
  const handClick = (i: number, elemento: string) => {
    setIndex(i);
    onselect?.(elemento);
  };
  return (
    <ul className="list-group">
      {data.map((elemento, i) => (
        <li
          onClick={() => handClick(i, elemento)}
          key={elemento}
          className={`list-group-item ${index == i ? "active" : ""}`}
        >
          {elemento}
        </li>
      ))}
    </ul>
  );
}

export default List;
