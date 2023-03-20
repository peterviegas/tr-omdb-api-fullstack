import { render, screen } from '@testing-library/react';
import ComponentTeam from './ComponentTeam';

describe('Testing for the Team Component Label', () => {
    test(`When the component is rendered, then the Team Component must be present`, async () => {
        render(<ComponentTeam />);

        const testHome = screen.getByText(/Meet the Team/i);

        expect(testHome).toBeInTheDocument();
    });

    test(`When the component is rendered, then the honest Component must be present`, async () => {
        render(<ComponentTeam />);

        const testHome = screen.getByText(
            /We are honest and dedicated Full-Stack Developers who love to code and contribute to the World./i
        );

        expect(testHome).toBeInTheDocument();
    });
});
