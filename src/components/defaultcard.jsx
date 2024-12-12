import { Box, Typography } from "@mui/material";

function DefaultCard({ name, title , rectColor, bgColor}) {
    return (
        <Box
            sx={{
                display: 'flex',
                maxWidth: '100%',
                flexGrow: 1,
                border: '1px solid #CBCBCB',
                borderRadius: '4px',
                background: bgColor
            }}>
            <Box
            sx={{
                width: '9px',
                background: rectColor,
                borderBottomLeftRadius: '4px',
                borderTopLeftRadius: '4px'
            }}>

            </Box>

            <Box
                sx={{
                    padding: '8px',
                }}
            >
                <Typography variant="h6" sx={{ color: '#000' }} align="left">
                    {name}
                </Typography>
                <Typography variant="body2" sx={{ color: '#030080' }} align="left">
                    {title}
                </Typography>
            </Box>
        </Box>

    )
}

export default DefaultCard;