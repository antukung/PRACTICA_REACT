import Form from 'react-bootstrap/Form';


function   SelectDeCantidadDeProductos() {
  return (
    <Form.Select aria-label="Default select example">
      <option>Tipos de productos a mostrar</option>
      <option value="1">1</option>
      <option value="15">15</option>
      <option value="25">25</option>
      <option value="50">50</option>
    </Form.Select>
  );
}

export default SelectDeCantidadDeProductos;