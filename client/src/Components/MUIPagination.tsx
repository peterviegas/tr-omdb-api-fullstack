import { Box, Pagination } from '@mui/material';
import React from 'react';

interface MUIPaginationProp {
    count: number;
    page: number;
    onChange: (event: React.ChangeEvent<unknown>, page: number) => void;
}

const MUIPagination: React.FC<MUIPaginationProp> = ({
    count,
    page,
    onChange,
}) => {
    return (
        <div className='pagination'>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: 100,
                    mt: 10,
                    fontSize: 'large',
                }}
            >
                <Pagination
                    count={count}
                    page={page}
                    onChange={onChange}
                    variant='outlined'
                    color='primary'
                    size='large'
                    defaultPage={6}
                    siblingCount={0}
                />
            </Box>
        </div>
    );
};

export default MUIPagination;
