import * as React from 'react';
import { Box, Tabs, Tab, Badge, Select, MenuItem, Button } from '@mui/material'
import { Sync } from '@mui/icons-material';

function TopBar() {

    const [tabValue, setTabValue] = React.useState(0);
    const [fy, setFy] = React.useState('FY 24-25');
    const [quarter, setQuarter] = React.useState('Q3');

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <>
            <Box sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 1000,
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                px: 2,
                pt: 3
            }}>

                <Tabs value={tabValue} onChange={handleTabChange} sx={{ flexGrow: 1 }}>
                    <Tab
                        label={
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                My Mentors
                                <Badge
                                    badgeContent={4}
                                    color="primary"
                                    sx={{ ml: 2 }}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                />
                            </Box>
                        }
                    />
                    <Tab
                        label={
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                My Mentees
                                <Badge
                                    badgeContent={9}
                                    color="primary"
                                    sx={{ ml: 2 }}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                />
                            </Box>
                        }
                    />
                </Tabs>


                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Select
                        value={fy}
                        onChange={(e) => setFy(e.target.value)}
                        size="small"
                        sx={{ minWidth: 100 }}
                    >
                        <MenuItem value="FY 24-25">FY 24-25</MenuItem>
                        <MenuItem value="FY 23-24">FY 23-24</MenuItem>
                    </Select>

                    <Select
                        value={quarter}
                        onChange={(e) => setQuarter(e.target.value)}
                        size="small"
                        sx={{ minWidth: 80 }}
                    >
                        <MenuItem value="Q1">Q1</MenuItem>
                        <MenuItem value="Q2">Q2</MenuItem>
                        <MenuItem value="Q3">Q3</MenuItem>
                        <MenuItem value="Q4">Q4</MenuItem>
                    </Select>
                </Box>


                <Button variant="contained" color="primary" sx={{ ml: 2, borderRadius: 100 }} startIcon={<Sync />}>
                    Retain Mentors
                </Button>
            </Box>
        </>
    )
}

export default TopBar