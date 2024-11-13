import {useState} from 'react';

const CardContainer = ({ children }) => {
  const [layout, setLayout] = useState('column');

  const handleLayoutChange = (event) => {
    setLayout(event.target.value);
  };

  return (
    <div>
      <label htmlFor="layoutSelect">Disposición:</label>
      <select id="layoutSelect" value={layout} onChange={handleLayoutChange}>
        <option value="column">Columnas</option>
        <option value="row">Filas</option>
      </select>

      <div
        style={{
          display: 'flex',
          flexDirection: layout,
          gap: '8px',
          padding: '8px',
          border: '1px solid black',
          borderRadius: '8px',
          backgroundColor: 'white',
        }}>{children}</div>
    </div>
  );
};

export default CardContainer;
