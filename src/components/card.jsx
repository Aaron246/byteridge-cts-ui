import React from 'react';
import { Box, Typography, Badge, Button } from '@mui/material';
import { Add } from '@mui/icons-material';

function CustomCard({ headerTitle, headerColor, badgeContent, children }) {
    return (
        <Box
            sx={{
                border: '1px solid #828282',
                borderRadius: 1,
                overflow: 'hidden',
                backgroundColor: '#fff',
                height: "724px",
                width: "410px",
                mt: 5
            }}
        >
            {/* Header Section */}
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '8px 16px',
                    backgroundColor: headerColor || '#1976d2',
                    color: '#fff',
                    borderBottom: '1px solid #030080'
                }}
            >
                <Typography component="div" color='primary'>
                    {headerTitle}
                    {badgeContent && (
                        <Badge
                            badgeContent={badgeContent}
                            color="primary"
                            sx={{ ml: 2 }}
                        />
                    )}
                </Typography>
                <Button
                    disableElevation
                    variant="contained"
                    sx={{
                        textTransform: 'none',
                        ml: 2,
                        borderRadius: 100
                    }}
                    startIcon={<Add/>}
                >Request
                </Button>
            </Box>

            {/* Children Content */}
            <Box sx={{ p: '16px' }}>
                <Typography color='primary' align='left'
                sx={{
                    pb: 2
                }}>Current Quarter (Q3):</Typography>
                {children}
                </Box>
        </Box>
    );
}

export default CustomCard;
