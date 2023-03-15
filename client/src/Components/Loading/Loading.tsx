const loader = require('../../Images/loading.png');

const Loading = () => {
    return (
        <div className='loading'>
            <img src={loader} className='loading__icon' alt={'Loading'} />
        </div>
    );
};

export default Loading;
