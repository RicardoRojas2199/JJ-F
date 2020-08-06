/**@jsx jsx */
import { jsx } from 'theme-ui';

const Form = () => (
  <form
    name="contacto"
    method="POST"
    data-netlify="true"
    action="/gracias"
    sx={{
      variant: 'layout.form',
    }}
  >
    <label htmlFor="nombre">
      Nombre
      <input
        name="nombre"
        id="nombre"
        type="text"
        placeholder="Jhon Doe"
        required
      />
    </label>
    <label htmlFor="empresa">
      Empresa
      <input name="empresa" id="empresa" type="text" placeholder="Doe Corp" />
    </label>
    <label htmlFor="email">
      Email
      <input
        name="email"
        id="email"
        type="email"
        placeholder="jhon@doecorp.com"
        required
      />
    </label>
    <label htmlFor="phone">
      Teléfono
      <input
        name="phone"
        id="phone"
        type="phone"
        placeholder="99965821"
        required
      />
    </label>
    <label htmlFor="servicio">
      Servicio
      <input
        name="servicio"
        id="servicio"
        type="text"
        placeholder="Infraestructura"
      />
    </label>
    <label htmlFor="asunto">
      Mensaje
      <textarea
        type="textarea"
        name="asunto"
        placeholder="Escribe acá tu mensaje"
        required
        rows="4"
      />
    </label>
    <p sx={{ textAlign: 'center' }}>
      <input type="submit" value="Enviar" sx={{ variant: 'button.primary' }} />
    </p>
  </form>
);

export default Form;
