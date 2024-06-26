import { memo, useState } from "react";

const arrOfOj = [
  {
    id: 1,
    name: "Abc 1",
    order: "order 2",
    city: "pune 1",
  },
  {
    id: 2,
    name: "Abc 2",
    order: "order 2",
    city: "pune 2",
  },
  {
    id: 3,
    name: "Abc 3",
    order: "order 3",
    city: "pune 3",
  },
  {
    id: 4,
    name: "Abc 4",
    order: "order 4",
    city: "pune 4",
  },
];

const TableRow = memo(({ item, onClick, isSelected }) => {
  return (
    <tr
      onClick={() => onClick(item)}
      className={isSelected ? "highlight" : ""}
    >
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.order}</td>
      <td>{item.city}</td>
    </tr>
  );
});

const Table = () => {
  const [selectRow, setSelectedRow] = useState(null);

  const handleRowClick = (item) => {
    setSelectedRow(item);
  };

  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Order</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {arrOfOj.map((item) => (
              <TableRow
                key={item.id}
                item={item}
                onClick={handleRowClick}
                isSelected={selectRow?.id === item.id}
              />
            ))}
          </tbody>
        </table>
        <footer>
          {selectRow && (
            <div>
              <p>ID: {selectRow.id}</p>
              <p>Name: {selectRow.name}</p>
              <p>Order: {selectRow.order}</p>
              <p>City: {selectRow.city}</p>
            </div>
          )}
        </footer>
      </div>
    </>
  );
};

export default Table;
