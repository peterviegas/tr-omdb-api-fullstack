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
                    fontSize: 'large',
                    '& .css-1ysyrvn-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected':
                        {
                            color: 'rgba(255,255,255,.8)',
                            fontSize: '1.8rem',
                        },

                    '& .MuiPaginationItem-sizeLarge': {
                        width: '3rem',
                        height: '3rem',
                        borderRadius: '50%',
                        padding: '.5rem',
                    },
                    '& .css-1ysyrvn-MuiButtonBase-root-MuiPaginationItem-root':
                        {
                            color: 'rgba(255,255,255,.5)',
                            fontSize: '1.4rem',
                            fontWeight: '100',
                        },
                    '& .css-1scal0h-MuiPaginationItem-root': {
                        color: 'rgba(255,255,255,.5)',
                    },
                    '& .css-n8417t-MuiSvgIcon-root-MuiPaginationItem-icon': {
                        width: '3rem',
                        height: '3rem',
                        color: 'rgba(75, 123, 236, 0.3)',
                    },
                    '& .MuiBox-root': {
                        height: '75px',
                    },
                    '@media (max-width: 600px)': {
                        '& .css-1ysyrvn-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected':
                            {
                                minWidth: '30px',
                                height: '30px',
                                fontSize: '1.6rem',
                            },
                        '& .css-1ysyrvn-MuiButtonBase-root-MuiPaginationItem-root':
                            {
                                fontSize: '1rem',
                            },

                        '& .css-n8417t-MuiSvgIcon-root-MuiPaginationItem-icon':
                            {
                                width: '2rem',
                                height: '2rem',
                            },

                        '& .MuiPaginationItem-sizeLarge': {
                            width: '2rem',
                            height: '2rem',
                            borderRadius: '50%',
                            padding: '.5rem',
                        },
                    },
                }}
            >
                <Pagination
                    count={count}
                    page={page}
                    onChange={onChange}
                    variant='outlined'
                    color='primary'
                    size='large'
                    defaultPage={10}
                    siblingCount={0}
                />
            </Box>
        </div>
    );
};

export default MUIPagination;
