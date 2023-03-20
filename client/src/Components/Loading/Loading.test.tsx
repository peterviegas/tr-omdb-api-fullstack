import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Loading from './Loading';

describe("Testing for the about Function Loading", () => {
	test(`When the Loading function renders, checks if it is present through the quantity`, async () => {
        const { container } = render(
            <BrowserRouter>
                <Loading />
            </BrowserRouter>
            );
			const testHome = container.querySelectorAll('.loading');
        expect(testHome.length).toBe(1);
    });
});

