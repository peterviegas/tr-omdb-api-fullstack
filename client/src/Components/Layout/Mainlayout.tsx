import { Outlet } from 'react-router-dom';
import ComponentHeader from '../Header/header';
import ComponentFooter from '../Footer/footer';

export const ComponentMainlayout: React.FC = () => (
    <div className='container'>
        <ComponentHeader />

        <main className='main'>
            <Outlet />
        </main>

        <ComponentFooter />
    </div>
);
