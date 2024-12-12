import * as React from 'react';
import './App.css'
import TopBar from './components/topbar';
import CustomCard from './components/card';
import { Box, Button, Divider, Typography } from '@mui/material';
import { CancelOutlined } from '@mui/icons-material';
import WithdrawCard from './components/withdrawcard';
import DefaultCard from './components/defaultcard';


function App() {


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
        <CustomCard
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
          
        </CustomCard>
      </Box>
    </>
  )
}

export default App
