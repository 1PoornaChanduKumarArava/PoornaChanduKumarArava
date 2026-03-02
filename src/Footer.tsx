import { Box, Typography } from "@mui/material"
import CopyrightIcon from "@mui/icons-material/Copyright";


const Footer = () => {
    return (
        <>
            <Box
                component="footer"
                sx={{
                    py: 1,
                    px: 1,
                    mt: 'auto',
                    mb:0,
                    backgroundColor:'rgb(239, 238, 238)',
                    position:'relative',
                    bottom:0,
                    width:'100%',
                    display: "flex", alignItems: "center", justifyContent:"center"
                    
                }}
            >
                <CopyrightIcon sx={{ fontSize: 15, mr: 0.5 }} />
                <Typography variant="body2" align="center" sx={{fontWeight:255}}>
                     {new Date().getFullYear()} Poorna Chandu Kumar Arava.&nbsp;All rights reserved.
                </Typography>
            </Box>
        </>
    )
}

export default Footer