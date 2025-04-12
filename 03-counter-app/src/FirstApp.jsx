
// import { Fragment } from "react";

// export const FirstApp = () => {
//   return (
//     <Fragment>
//       <h1>Fabio Escobar</h1>
//       <h2>First App</h2>
//     </Fragment>
//   );
// };

// const getNombre = (nombre) => nombre


// export const FirstApp = (props) => {
export const FirstApp = ({nombre, title}) => {

  return (
    <>
      <h1 data-testid="h1-anime">Anime App</h1>
      <h2>Title: {nombre}</h2>
      <h3 data-testid="h3-title">Episode: {title}</h3>
    </>
  );
};

// TODO fix
// FirstApp.defaultProps = {
//     nombre: "Nombre del Anime",
//     title: "Titulo del capitulo"
// }



