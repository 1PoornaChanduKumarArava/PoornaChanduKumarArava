import { Box, Typography, useTheme, Paper, useMediaQuery } from '@mui/material';

const Certifications = () => {
    const certifications = [
        {
            title: 'React (Basic)',
            image: '/HackerRank_React_PoornaChanduKumarArava.jpg',
        },
        {
            title: 'Python (Basic)',
            image: '/HackerRank_Python_PoornaChanduKumarArava.jpg',
        },
        {
            title: 'Data Science 101',
            image: '/DataScience_PoornaChanduKumarArava.jpg',
        },
        {
            title: 'Agile Methodology',
            image: '/AgileMethodology_PoornaChanduKumarArava.png',
        },
        {
            title: 'Responsive Website',
            image: '/ResponsiveWebsite_PoornaChanduKumarArava.png',
        },
        {
            title: 'Static Website',
            image: '/Static Website_PoornaChanduKumarArava.png',
        },
        {
            title: 'TCS ION Career Edge Young Professional',
            image: '/TCSIONCareerEdgeYoungProfessional_PoornaChanduKumarArava.png',
        },
        {
            title: 'Cloud Computing',
            image: '/Cloud computing_PoornaChanduKumarArava.jpg',
        },
        {
            title: 'Crack Leaked Password Database',
            image: '/GoldmanSachs_PoornaChanduKumarArava.png',
        },
    ];

    const theme = useTheme();
    const isMobile=useMediaQuery(theme.breakpoints.down('sm'))
    return (
        <>
            <Box sx={{ padding: '16px', ml: 4.2, mr: 6 }}>
                {/* <Typography variant={`${isMobile ? 'h6' : 'h4'}`} sx={{ marginBottom: '16px', fontWeight:'bold' }}>
                    Certifications
                </Typography> */}
                  <Typography fontSize={32} fontWeight={700} sx={{ mb: 2,mt:2, fontWeight: 'bold', letterSpacing: 0.5, textAlign:"start" }}>
    Certifications
  </Typography>
                {certifications.map((cert, index) => (
                    <Paper key={index} sx={{ padding: '16px', marginBottom: '16px', ml:'18%', height:'25%', width:'65%', textAlign:'center' }}>
                        <Typography variant={`${isMobile ? 'body2' : 'h5'}`} sx={{ marginBottom: '8px' }}>
                            {cert.title}
                        </Typography>
                        <Box
                            component="img"
                            src={cert.image}
                            alt={`${cert.title} Certificate`}
                            sx={{
                                width: isMobile ? '100%' : '100%',
                                height: 'auto',
                                borderRadius: '4px',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            }}
                        />
                    </Paper>
                ))}
            </Box>
        </>
    )
}

export default Certifications