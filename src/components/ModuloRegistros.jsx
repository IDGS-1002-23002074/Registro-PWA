import { useState } from 'react';
import Container from '@mui/material/Container';
import Header from './Header';
import Footer from './Footer';
import FormularioRegistro from './FormularioRegistro';
import TablaRegistros from './TablaRegistros';


function ModuloRegistros() {
  const [registros, setRegistros] = useState([]);

  const agregarRegistro = (nuevoRegistro) => {
    setRegistros((registrosPrevios) => [...registrosPrevios, nuevoRegistro]);
  };

  const eliminarRegistro = (idAEliminar) => {
    setRegistros((registrosPrevios) =>
      registrosPrevios.filter((registro) => registro.id !== idAEliminar)
    );
  };

  return (
    <>
      <Header titulo="Modulo de invalidos" totalRegistros={registros.length} />
      <Container maxWidth="md">
        <FormularioRegistro onAgregar={agregarRegistro} />
        <TablaRegistros registros={registros} onEliminar={eliminarRegistro} />
      </Container>
      <Footer />
    </>
  );
}

export default ModuloRegistros;
