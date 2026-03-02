import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';

const Education = () => {
  const educationData = [
    {
      institute: 'Jawaharlal Nehru Technological University, Anantapur, India',
      course: 'Bachelor of Technology (B.Tech) in Electronics and Communication Engineering',
      period: 'Aug 2019 - Jun 2023',
      CGPA: 9.13,
      Icon: <SchoolIcon sx={{ mr: 1, color: '#1976d2' }} />
    },
    {
      institute: 'Narayana Junior College, Nellore, India',
      course: 'Pre-University Course (PUC)',
      period: 'June 2017 - April 2019',
      CGPA: 8.17,
      Icon: <EmojiEventsIcon sx={{ mr: 1, color: '#ff9800' }} />
    },
    {
      institute: 'Veda Vyasa School, Nellore, India',
      course: 'Secondary School Certificate (SSC)',
      period: 'March 2017',
      CGPA: 9.3,
      Icon: <LocalLibraryIcon sx={{ mr: 1, color: '#4caf50' }} />
    },
  ];


  return (
<Box sx={{ p: 4, mx: 6, height: '100%', pl: 1 ,background: "#f8fafc"}}>
  {/* Header */}
  <Typography fontSize={32} fontWeight={700} sx={{ mb: 2, fontWeight: 'bold', letterSpacing: 0.5 }}>
    Education
  </Typography>

  <Grid container spacing={3}>
    {educationData.map((item, index) => (
      <Grid item xs={12} sm={12} key={index}>
        <Card
              elevation={3}
              sx={{
                p: 1,
                // borderRadius: "18px",
                // border: "1px",
                // borderColor:"fafafa",
                // background: "#fff",
                borderRadius: "18px",
                border: "1px solid #E2E8F0",
                background: "#fff",
                // transition: "0.3s",

                "&:hover": {
                //   transform: "translateY(-6px)",
                  boxShadow:
                    "0 5px 5px rgba(0,0,0,0.08)"
                }
                // transition: "0.3s",

                // "&:hover": {
                // //   transform: "translateY(-6px)",
                //   boxShadow:
                //     "0 2px 2px rgba(45, 45, 45, 0.08)"
                // }
              }}
        >
          <CardContent sx={{ py: 2.5, px: 3 }}>
            {/* Institute Name + Icon */}
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontWeight: 600, fontSize: '1.2rem', mb: 0.5, display: 'flex', alignItems: 'center', gap: 1 }}
            >
               {item.institute}{item.Icon}
            </Typography>

            {/* Course / Degree */}
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{  fontSize: '1rem', mb: 0.75 }}
            >
              {item.course}
            </Typography>

            {/* CGPA */}
            <Typography
              variant="body2"
              color="text.primary"
              sx={{ fontWeight: 'bold', fontSize: '0.95rem', mb: 0.5 }}
            >
              CGPA: {item.CGPA}
            </Typography>

            {/* Period */}
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontSize: '0.9rem' }}
            >
              {item.period}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
</Box>

  );
};

export default Education;
