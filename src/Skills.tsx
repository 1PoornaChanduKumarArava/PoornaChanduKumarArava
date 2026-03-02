import {
  Box,
  Typography,
  Chip,
  Grid,
  Paper
} from "@mui/material";

import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import HubIcon from "@mui/icons-material/Hub";
import BuildIcon from "@mui/icons-material/Build";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import PsychologyIcon from "@mui/icons-material/Psychology";

const skills = [
  {
    title: "Frontend Engineering",
    icon: <CodeIcon fontSize="small" />,
    items: [
      "React.js",
      "Redux",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Material UI",
      "Responsive Design"
    ]
  },
  {
    title: "Backend Engineering",
    icon: <HubIcon fontSize="small" />,
    items: [
      "ASP.NET MVC",
      "ASP.NET Core Web API",
      "C#",
      "REST API Development",
      "JWT Authentication",
      "RBAC",
      "Dapper ORM"
    ]
  },
  {
    title: "Database & Storage",
    icon: <StorageIcon fontSize="small" />,
    items: [
      "Microsoft SQL Server",
      "Stored Procedures",
      "Query Optimization",
      "Joins & Indexing",
      "Performance Tuning"
    ]
  },
  {
    title: "Enterprise Integrations",
    icon: <IntegrationInstructionsIcon fontSize="small" />,
    items: [
      "SAP Pricing Integration",
      "Distributor Systems",
      "Sales Workflows",
      "Business Rule Engines",
      "Production Support"
    ]
  },
  {
    title: "Tools & Platforms",
    icon: <BuildIcon fontSize="small" />,
    items: [
      "Git & GitHub",
      "Postman",
      "IIS Deployment",
      "Smarter ASP.NET",
      "VS Code",
      "Visual Studio"
    ]
  },
  {
    title: "Engineering Practices",
    icon: <PsychologyIcon fontSize="small" />,
    items: [
      "Full Stack Development",
      "System Design Basics",
      "Production Debugging",
      "Root Cause Analysis",
      "Agile & Scrum",
      "Change Requests"
    ]
  }
];

export default function Skills() {
  return (
    <Box
      sx={{
        py: 10,
        px: { xs: 3, md: 6 },
        pt:3,
        // Premium soft gradient
        background:
          "linear-gradient(180deg, #F9FAFB 0%, #FFFFFF 100%)"
      }}
    >
      {/* Title */}
  <Typography fontSize={32} fontWeight={700} sx={{ mb: 3, fontWeight: 'bold', letterSpacing: 0.5 }}>
    Skills & Technologies
  </Typography>

      {/* Grid */}
      <Grid container spacing={4}>
        {skills.map((skill, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <Paper
              elevation={0}
              sx={{
                p: 3.5,
                height: "100%",
                borderRadius: 4,

                // Premium card look
                backgroundColor: "#FFFFFF",
                border: "1px solid #E5E7EB",

                boxShadow:
                  "0 4px 14px rgba(0,0,0,0.04)",

                // transition: "all 0.25s ease",

                "&:hover": {
                //   transform: "translateY(-4px)",
                  boxShadow:
                    "0 10px 24px rgba(0,0,0,0.08)",
                  borderColor: "#D1D5DB"
                }
              }}
            >
              {/* Header */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.2,
                  mb: 2.5
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 32,
                    height: 32,
                    borderRadius: 2,
                    backgroundColor: "#EEF2FF",
                    color: "#4F46E5"
                  }}
                >
                  {skill.icon}
                </Box>

                <Typography
                  variant="subtitle1"
                  fontWeight={600}
                  color="#111827"
                >
                  {skill.title}
                </Typography>
              </Box>

              {/* Chips */}
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1.2
                }}
              >
                {skill.items.map((item, i) => (
                  <Chip
                    key={i}
                    label={item}
                    size="small"
                    sx={{
                      fontWeight: 500,
                      backgroundColor: "#F3F4F6",
                      border: "1px solid #E5E7EB",

                      "&:hover": {
                        backgroundColor: "#EEF2FF",
                        borderColor: "#C7D2FE"
                      }
                    }}
                  />
                ))}
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
