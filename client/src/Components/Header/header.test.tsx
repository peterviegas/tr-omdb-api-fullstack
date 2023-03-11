import { render, screen } from "@testing-library/react";
import ComponentHeader from "./header";
import { BrowserRouter } from "react-router-dom";

describe("Testing for the Header Component Label", () => {

    test(`When the component is rendered, then the Header Component must be present`, async () => {

        render(

            <BrowserRouter>

                <ComponentHeader />

            </BrowserRouter>

        );

        const testHome = screen.getByText(/Welcome to the home of PNGC IMDB/i);

        expect(testHome).toBeInTheDocument();

    });

}
);