import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Tests on FirstApp Component", () => {
  // test('should match with the snapshot', () => {
  //   const titleTest = 'Inuyasha!';
  //   const titleTest2 = 'Seshomaru ataca de nuevo...';
  //   const {container} = render( <FirstApp nombre={ titleTest } title={ titleTest2 }/>)
  //   expect(container).toMatchSnapshot();
  // })

  test('should contain "Title: Inuyasha!"', () => {
    const titleTest = "Inuyasha!";
    const titleTest2 = "Seshomaru ataca de nuevo...";
    const { container, getByText } = render(
      <FirstApp nombre={titleTest} title={titleTest2} />
    );
    expect(getByText("Title: Inuyasha!")).toBeTruthy();
  });

//   test("should contain Title: Inuyasha! in a h1 tag", () => {
//     const titleTest = "Title: Inuyasha!";
//     const { container, getByText } = render(
//       <FirstApp nombre={"Inuyasha!"} title={"Seshomaru ataca de nuevo..."} />
//     );
//     const h1 = document.querySelector("h2");
//     expect(h1.innerHTML).toContain(titleTest);
//   });

  test("should contain Title: Inuyasha! in a h1 tag", () => {
    const titleTest = "Anime App";
    const { container, getByTestId } = render(
      <FirstApp nombre={"Inuyasha!"} title={"Seshomaru ataca de nuevo..."} />
    );
    const h1 = getByTestId("h1-anime");
    expect(h1.innerHTML).toContain(titleTest);
  });

  test("should contain title sent by props", () => {
    const titleProp = "Seshomaru ataca de nuevo...";
    const { container, getByTestId } = render(
      <FirstApp nombre={"Inuyasha!"} title={titleProp} />
    );
    
    expect(getByTestId("h3-title").innerHTML).toContain(titleProp);
  });

});
