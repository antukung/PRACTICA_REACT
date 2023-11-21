import Form from 'react-bootstrap/Form';


function   SelectDeTiposDeProductos() {
  return (
    <Form.Select aria-label="Default select example">
      <option>Tipos de productos a mostrar</option>
      <option value="1">1</option>
      <option value="3">3</option>
      <option value="7">7</option>
      <option value="10">10</option>
    </Form.Select>
  );
}

export default SelectDeTiposDeProductos;