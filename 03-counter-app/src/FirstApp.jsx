// import { Fragment } from "react";

// export const FirstApp = () => {
//   return (
//     <Fragment>
//       <h1>Fabio Escobar</h1>
//       <h2>First App</h2>
//     </Fragment>
//   );
// };


const getNombre = (nombre) => nombre

// export const FirstApp = (props) => {
export const FirstApp = ({nombre, title}) => {

  return (
    <>
      <h1>{getNombre(nombre)}</h1>
      <h2>First App</h2>
      {/* <h3>Title: {props.title}</h3> */}
      <h3>Title: {title}</h3>
    </>
  );
};
