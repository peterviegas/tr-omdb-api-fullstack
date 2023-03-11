import { render, screen } from "@testing-library/react";
import ComponentHome from "./home";


describe("Testing for the Home Component Label", () => {

    test(`When the component is rendered, then the Home Component must be present`, async () => {

        render(<ComponentHome />);

        const testHome = screen.getByText(/welcome/i);

        expect(testHome).toBeInTheDocument();

    });

}
);