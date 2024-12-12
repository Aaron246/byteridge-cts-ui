import { CancelOutlined } from "@mui/icons-material";
import { alpha, Box, Button, Divider, Typography } from "@mui/material";

function WithdrawCard({ name, title}) {
  
  const red = "#B3261E";
  const lightRed = alpha(red, 0.4);

  return (

    <Box
      sx={{
        display: 'flex',
        maxWidth: '100%',
        flexGrow: 1,
        border: '1px solid #CBCBCB',
        borderRadius: '4px',
        marginBottom: 2,
      }}>
      <Box
        sx={{
          width: '9px',
          background: lightRed,
          borderBottomLeftRadius: '4px',
          borderTopLeftRadius: '4px'
        }}>

      </Box>
      <Box
        sx={{
          padding: '8px',
          flexGrow: 1
        }}
      >
        <Typography variant="subtitle2" sx={{ color: red }} align="left">
          Pending Approval
        </Typography>
        <Typography variant="h6" sx={{ color: '#000' }} align="left">
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: '#030080' }} align="left">
          {title}
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Button
          size="small"
          sx={{
            color: red,
            textTransform: 'none',
          }}
          startIcon={<CancelOutlined />}
        >
          Withdraw Request
        </Button>
      </Box>
    </Box>
  )
}

export default WithdrawCard;