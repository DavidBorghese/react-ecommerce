import { useState } from "react";
import Button from 'react-bootstrap/Button';

export default function CartForm(props) {
  const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
    });
    function onInputChange(evt) {
      let nameInput = evt.target.name;
      let value = evt.target.value;
  
      let newData = { ...data };
      newData[nameInput] = value;
      setData(newData);
    }
  
    function onSubmit(evt) {
      if (data.name.length === 0) return;
  
      evt.preventDefault();
      props.onSubmit(evt, data);
    }

    return (
      <form className="mb-5" onSubmit={onSubmit}>
        <div className="form-outline mb-5">
          <input required type="text" name="name" className="form-control form-control-lg" siez="17"
            value={data.name} onChange={onInputChange} />
          <label className="form-label" htmlFor="name">Nombre</label>
        </div>
        <div className="form-outline mb-5">
          <input required type="email" name="email" className="form-control form-control-lg" siez="17"
            value={data.email} onChange={onInputChange} />
          <label className="form-label" htmlFor="email">Email</label>
        </div>
        <div className="form-outline mb-5">
          <input required type="phone" name="phone" className="form-control form-control-lg" siez="17"
            value={data.phone} onChange={onInputChange} />
          <label className="form-label" htmlFor="phone">Teléfono</label>
        </div>
        <Button className="btn btn-primary btn-block btn-lg" 
          disabled={data.name === "" || data.phone === "" || data.email === ""}
          type="submit" >Fin de la Compra</Button>
      </form>
    )
}



