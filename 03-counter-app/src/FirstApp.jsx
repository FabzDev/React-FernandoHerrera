
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
export const FirstApp = ({title, episode}) => {

  return (
    <>
      <h1 data-testid="h1-anime-app">Anime App</h1>
      <h2>{title}</h2>
      <h3>{episode}</h3>
    </>
  );
};

// TODO fix
// FirstApp.defaultProps = {
//     nombre: "Nombre del Anime",
//     title: "Titulo del capitulo"
// }



