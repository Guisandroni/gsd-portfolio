import { Box, Container, Grid, styled, Typography } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import { AnimatedBackground } from "./AnimatedBackground";
import {StyledButton} from "./StyledButton";

export function Aboutcv() {

    const StyleAbout = styled('div')(({theme}) => ({
        background: theme.palette.primary.main,
        height: '100vh',
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up('xs')]: { // <= mobile
            paddingTop: "100px",

        },
        [theme.breakpoints.up('md')]: { // >=mobile
            paddingTop: "0",
        }
    })) 

    const StyleImgProfile = styled('img')(({theme}) => ({
        width: '70%',
        borderRadius: '50%',
         border: `1px solid ${theme.palette.primary.contrastText}`
    }))
    return (

        <>
            <StyleAbout>
                <Container maxWidth='lg'>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={5} display={'flex'} justifyContent={'center'}>
                        <Box position={'relative'}>
                                <Box position="absolute" width={"150%"} top={-150} right={-100}>
                                    <AnimatedBackground />
                                </Box>
                                <Box  position="relative" textAlign="center">
                                <StyleImgProfile src='https://github.com/Guisandroni.png' />
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={7} >
                            <Typography color="primary.contrastText" pb={2} variant="h2" textAlign='center'>
                               Gui Sandroni
                            </Typography>
                            <Typography color="primary.contrastText" variant="h3" textAlign='center'>
                                I'm Developer Full Stack
                            </Typography>
                            <Typography color="primary.contrastText" variant="h4" textAlign='center'>
                             university Ads Fatec
                            </Typography>

                           <Grid  container display={'flex'} justifyContent={'center'} spacing={3} pt={3}>
                            <Grid item xs={12} md={4} display={'flex'} justifyContent={'center'}>

                            <StyledButton  >
                            <DownloadIcon/>
                            <Typography>
                            Download Cv
                            </Typography>
                            </StyledButton>
                            
                            </Grid>

                            <Grid item xs={12} md={4} display={'flex'} justifyContent={'center'}>
                            <StyledButton > 
                                <EmailIcon/>
                                <Typography>
                                Contact Me
                                </Typography>
                                
                                </StyledButton>
                            </Grid>
                           </Grid>
                        </Grid>
                        </Grid>
                        </Container>
                </StyleAbout>


        </>
    )
}