import { render, screen } from "@testing-library/react";
import ComponentTeam from "./team";


describe("Testing for the Team Component Label", () => {

    test(`When the component is rendered, then the Team Component must be present`, async () => {

        render(<ComponentTeam />);

        const testHome = screen.getByText(/team/i);

        expect(testHome).toBeInTheDocument();

    });

}
);