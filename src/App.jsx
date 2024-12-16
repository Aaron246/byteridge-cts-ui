import * as React from 'react';
import './App.css'
import TopBar from './components/topbar';
import CustomCard from './components/card';
import { Box, Button, Divider, Typography, alpha } from '@mui/material';
import { CancelOutlined } from '@mui/icons-material';
import WithdrawCard from './components/withdrawcard';
import DefaultCard from './components/defaultcard';


function App() {

  const cardList = [
    {
      headerTitle: "Project Mentor",
      headerColor: "#93D4EF",
      subCards: [
        { name: "Ujwal Parker", title: "Project Manager", bgColor: "#F3FAFD", isWithdraw: true },
        { name: "Ankita Shrivastava", title: "Project Manager", bgColor: "#F3FAFD", isWithdraw: false }
      ]
    },
    {
      headerTitle: "Skill Mentor",
      headerColor: "#C5E1A5",
      subCards: [
        { name: "Ankita Shrivastava", title: "Project Manager", bgColor: "#F8FBF5", isWithdraw: false }
      ]
    },
    {
      headerTitle: "Domain Mentor",
      headerColor: "#D2B7FF",
      subCards: [
        { name: "Ankita Shrivastava", title: "Project Manager", bgColor: "#FAF7FF", isWithdraw: false }
      ]
    }
  ]


  const red = "#B3261E";
  const lightRed = alpha(red, 0.4);

  return (
    <>
      <TopBar />
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: 2,
        padding: 2,
        maxWidth: '100%',
        overflowX: 'auto',
      }}>
        {cardList.map(card => (
          <CustomCard
            headerTitle={card.headerTitle}
            headerColor={card.headerColor}
            badgeContent={1}>
            {card.subCards.map(subCard => (
              subCard.isWithdraw ? (
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
                      {subCard.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#030080' }} align="left">
                      {subCard.title}
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
              ) : (
                <Box
                  sx={{
                    display: 'flex',
                    maxWidth: '100%',
                    flexGrow: 1,
                    border: '1px solid #CBCBCB',
                    borderRadius: '4px',
                    background: subCard.bgColor
                  }}>
                  <Box
                    sx={{
                      width: '9px',
                      background: card.headerColor,
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
                      {subCard.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#030080' }} align="left">
                      {subCard.title}
                    </Typography>
                  </Box>
                </Box>
              )
            ))}
          </CustomCard>
        ))}
        {/* <CustomCard
          headerTitle="Project Mentor"
          headerColor="#93D4EF" 
          badgeContent={1}
        >
          
          <WithdrawCard name="Ujwal Parker" title="Project Manager"/>
          <DefaultCard name="Ankita Shrivastava" title="Project Manager" rectColor="#93D4EF" bgColor="#F3FAFD"/>
        </CustomCard>
        <CustomCard
          headerTitle="Skill Mentor"
          headerColor="#C5E1A5" 
          badgeContent={1}
        >
          <DefaultCard name="Ankita Shrivastava" title="Project Manager" rectColor="#C5E1A5" bgColor="#F8FBF5"/>
          
        </CustomCard>
        <CustomCard
          headerTitle="Domain Mentor"
          headerColor="#D2B7FF" 
          badgeContent={1}
        >
          <DefaultCard name="Ankita Shrivastava" title="Project Manager" rectColor="#D2B7FF" bgColor="#FAF7FF"/>
          
        </CustomCard> */}
      </Box>
    </>
  )
}

export default App
