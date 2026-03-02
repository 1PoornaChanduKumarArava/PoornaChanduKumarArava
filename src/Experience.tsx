import {
  Box,
  Typography,
  Paper,
  Chip,
  Stack,
  Avatar
} from "@mui/material";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Talent Pace — Bangalore, India",
      period: "Nov 2023 — Present",
      type: "Full-Time",
      logo: "/TPLogo.png",
      highlights: [
        "Working on a production-grade Distributor Management System used to manage large-scale FMCG sales and distribution operations.",
        "Contributed to the development of core business modules including order processing, pricing, and target management.",
        "Built a hierarchical target allocation feature enabling real-time tracking of sales performance across distributor networks.",
        "Integrated SAP pricing data and implemented business rules to ensure accurate distributor pricing.",
        "Resolved live production issues through root cause analysis across application and database layers.",
        "Collaborated with business and QA teams to deliver system enhancements and change requests.",
        "Improved backend performance by optimizing SQL queries and business logic.",
        "Developed internal tools including a Resource Management System to streamline employee and access management workflows."
      ],
      tech: [".NET Core", "React", "SQL Server", "Azure"]
    },
    {
      title: "Teaching Assistant",
      company: "CCBP NXT WAVE - Remote, India",
      period: "Oct 2023 — Nov 2023",
      type: "Internship",
      logo: "/Nxtwave_Colored_Logo.svg",
      highlights: [
        "Mentored students in Full-Stack Development and supported their coding learning journey.",
        "Clarified doubts in frontend technologies including HTML, CSS, Flexbox, Bootstrap and React.",
        "Assisted students in debugging assignments and improving problem-solving skills.",
        "Guided learners in building responsive web interfaces and project implementations."
      ],
      tech: ["React", "HTML, CSS", "Bootstrap, JS", "SQL", "Teaching"]
    }
  ];

  return (
    <Box
      sx={{
        maxWidth: "95%",
        ml:"1.7%",
        // margin:"auto",
        px: 3,
        py: 6,
        paddingTop:"2%",
        background: "#f8fafc"
      }}
    >
      {/* HEADER */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={6}
      >
        <Box>
          <Typography fontSize={32} fontWeight={700}>
            Experience
          </Typography>

          <Typography color="#64748B" fontSize={18}>
            Building scalable enterprise software systems
          </Typography>
        </Box>

<Chip
  label="2.5+ Years in Tech"
  sx={{
    px: 2.2,
    py: 2.6,
    fontSize: 15,
    fontWeight: 600,
    letterSpacing: "0.3px",
    color: "#4338CA",
    background:
      "linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%)",
    border: "1px solid #C7D2FE",
    borderRadius: "999px",
    boxShadow: "0 4px 14px rgba(99,102,241,0.15)",
  }}
/>



      </Stack>

      {/* TIMELINE WRAPPER */}
      <Box
        sx={{
          position: "relative",

          /* CONTINUOUS LINE */
          "&::before": {
            content: '""',
            position: "absolute",
            left: "28px",
            top: 0,
            bottom: 0,
            width: "1.6px",
            
           background: "#a1afc4"

          }
        }}
      >
        {experiences.map((exp, index) => (
          <Box
            key={index}
            sx={{
              position: "relative",
              pl: 10,
              mb: 6,
              width:"100%"
            }}
          >
            {/* DOT */}
            <Box
              sx={{
                position: "absolute",
                left: "20px",
                top: 30,
                width: 16,
                height: 16,
                borderRadius: "50%",
                background:
                  "linear-gradient(135deg,#60A5FA,#6366F1)",
                boxShadow: "0 0 0 6px rgba(99,102,241,0.15)"
              }}
            />

            {/* CARD */}
            <Paper
              elevation={0}
              sx={{
                p: 3,
                borderRadius: "18px",
                border: "1px solid #E2E8F0",
                background: "#fff",
                transition: "0.3s",

                "&:hover": {
                //   transform: "translateY(-6px)",
                  boxShadow:
                    "0 15px 15px rgba(0,0,0,0.08)"
                }
              }}
            >
              <Stack direction="row" spacing={2}>
                
                {/* LOGO */}
                <Avatar
                  src={exp.logo}
                  variant="rounded"
                  sx={{
                    width: 65,
                    height: 65,
                    bgcolor: "#ffffff",
                    border: "1px solid #E2E8F0",
                    p: 1,
                    "& img": {
                      objectFit: "contain"
                    }
                  }}
                />
                




                {/* CONTENT */}
                <Box flex={1}>
                  
                  {/* TITLE */}
                  <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                  >
                    <Typography
                      fontSize={22}
                      fontWeight={700}
                      sx={{letterSpacing: "0.2px"}}
                    >
                      {exp.title}
                    </Typography>

                    <Chip
                      label={exp.type}
                      size="small"
                      sx={{
                        background: "#E0F2FE",
                        color: "#0369A1"
                      }}
                    />
                  </Stack>

                  {/* COMPANY */}
                  <Typography
                    color="#475569"
                    fontSize={15}
                  >
                    {exp.company}
                  </Typography>

                  {/* PERIOD */}
                  <Typography
                    color="#6B7280"
                    fontSize={14}
                    
                    mt={1}
                    sx={{fontWeight: 500}}
                  >
                    {exp.period}
                  </Typography>

                  {/* BULLETS */}
                  <Box component="ul" sx={{ pl: 2 }}>
                    {exp.highlights.map((h, i) => (
                      <Typography
                        key={i}
                        component="li"
                        fontSize={14}
                        mb={0.7}
                        color="#334155"
                      >
                        {h}
                      </Typography>
                    ))}
                  </Box>

                  {/* TECH */}
                  <Stack
                    direction="row"
                    spacing={1}
                    mt={2}
                    flexWrap="wrap"
                  >
                    {exp.tech.map((t, i) => (
                      <Chip
                        key={i}
                        label={t}
                        size="small"
                        sx={{
                          background: "#F1F5F9"
                        }}
                      />
                    ))}
                  </Stack>
                </Box>
              </Stack>
            </Paper>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Experience;
