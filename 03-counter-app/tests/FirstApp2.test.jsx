import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Tests on FirstApp Component", () => {
  const titleExp = "Inuyasha!"
  const episodeExp = "Seshomaru ataca de nuevo..."
  
  test('should match with snapshot', () => {
    render(<FirstApp title={titleExp} episode={episodeExp} />)
    expect(screen).toMatchSnapshot();
  })
  
  test('should render the text: "Anime App"', () => {
    render( <FirstApp title={titleExp} episode={episodeExp} />)
    expect(screen.findAllByText("Anime App")).toBeTruthy();

  });

  //Learning: screen.getByRole() - heading, { level:1 }
  test("should render the title in the 2nd tag element", () => {
    render( <FirstApp title={titleExp} episode={episodeExp} />)
    expect(screen.getByRole('heading', {level:2}).innerHTML).toBe(titleExp);
  });

  test("should render the episode in a h3 element", () => {
    render( <FirstApp title={titleExp} episode={episodeExp} />)
    expect(screen.findByText(episodeExp)).toBeTruthy();
  });

});
