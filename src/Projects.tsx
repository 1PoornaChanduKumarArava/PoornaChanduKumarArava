import { Box, Grid, Paper, Typography, Chip, Stack } from "@mui/material";
// import LaunchIcon from "@mui/icons-material/Launch";

const Projects = () => {
  const projects = [
    {
      title: "Distributor Management System",
      role: "Full Stack Development",
        description: [
        "Worked on a production-grade Distributor Management System built using ASP.NET MVC, C#, and Microsoft SQL Server, managing large-scale FMCG sales and distribution operations across multiple regions.",
        "Developed and enhanced core business modules including order processing, pricing management, and sales tracking using .NET backend services and SQL Server databases.",
        "Designed and implemented a hierarchical target allocation and achievement tracking system, enabling real-time visibility into distributor sales performance.",
        "Integrated SAP pricing data into the application and implemented complex business rules to ensure accurate and compliant distributor pricing based on division, channel, and region.",
        "Supported a high-volume platform processing 50K+ orders monthly across 500+ distributors, ensuring reliability and smooth business operations.",
        "Worked on business-driven Change Requests (CRs), developing new features and system enhancements aligned with evolving business requirements.",
        "Handled live production issues by performing root cause analysis across application and database layers, delivering stable fixes with minimal business disruption.",
        "Collaborated with business stakeholders, QA teams, and SAP integration teams to gather requirements and ensure successful feature releases.",
        "Improved backend performance by optimizing SQL queries, stored procedures, and business logic, enhancing overall system responsiveness."
        ],
      tech: ["ASP.NET MVC", "C#", "SQL Server", "SAP"]
    },
    {
      title: "Resource Management System",
      role: "Full Stack Development",
    description: [
            "Designed and developed an internal Resource Management System to manage employee lifecycle, project allocations, and utilization tracking across the organization",
            "Built core modules including employee master, skill matrix, project mapping, and allocation management using C# and .NET",
            "Developed SQL Server stored procedures, views, and complex joins to support resource workflows and reporting",
            "Worked on Business Change Requests (BCRs) — analyzed requirements, performed impact analysis, and delivered production-ready enhancements",
            "Implemented role-based access control (RBAC) for secure access across HR managers, and admin users",
            "Optimized backend performance using query tuning, indexing, and execution plan improvements",
            "Managed resource data for 1,000+ employees and handled 10K+ allocation transactions monthly with real-time utilization tracking."
     ],
      tech: ["ASP.NET Core", "React", "Redux", "TypeScript", "MUI"]
    },
    {
    title: "Plant Management System",
    role: "Full Stack Development",
 description: [
      "Designed and developed a Plant Management System to streamline plant operations, record management, and administrative workflows.",
      "Built scalable backend services using ASP.NET Core Web APIs and implemented high-performance data access using Dapper ORM.",
      "Implemented secure authentication modules with salted password hashing to ensure strong data security and protected user access.",
      "Developed file management features including image uploads and Excel data imports using IWebHostEnvironment for server-side processing.",
      "Integrated captcha validation to prevent bot access and improve overall application security.",
      "Collaborated on database design, API development, and frontend integration to deliver a reliable internal business application."
    ],
    tech: [
        "ASP.NET Core",
        "Dapper",
        "SQL Server",
        "React",
        "Redux",
        "TypeScript",
        "MUI"
    ]
    },
    {
    title: "Pick a Movie Website",
    role: "Frontend Development",
    description: [
      "Developed an interactive movie recommendation web application that suggests movies based on user-selected preferences.",
      "Built dynamic movie browsing, listing, and selection features using React and TypeScript for scalable frontend architecture.",
      "Implemented centralized state management using Redux to efficiently handle user selections and movie data flow.",
      "Designed a fully responsive and user-friendly interface using Bootstrap, HTML, and CSS to ensure seamless experience across devices.",    
      "Structured reusable UI components and optimized rendering performance for smooth navigation and faster load times."
    ],
    tech: [
        "React",
        "Redux",
        "TypeScript",
        "HTML",
        "CSS",
        "Bootstrap"
    ],
    liveLink: "https://pick-a-movie-for-me.vercel.app/",
    },
    {
      title: "Online Shopping Cart",
      role: "Frontend Development",
      description: [
      "Developed a feature-rich e-commerce shopping cart application using React, Redux, and TypeScript, delivering a scalable and modular frontend architecture.",
      "Implemented end-to-end cart management functionalities including add to cart, remove items, and dynamic quantity updates with real-time state synchronization.",
      "Built advanced product sorting and filtering mechanisms to enhance product discovery and improve user navigation experience.",
      "Designed and integrated a wishlist feature allowing users to save and manage products for future purchases.",
      "Created a responsive and intuitive user interface using Bootstrap, HTML, and CSS, ensuring seamless usability across devices."
    ],
    liveLink: "https://shoppingcart-woad-delta.vercel.app/",
      tech: ["React", "Redux", "TypeScript", "Bootstrap"]
    },
    {
    title: "Weather Website",
    role: "Frontend Development",
    description: [
      "Developed a real-time weather forecast web application using React, focusing on performance and component reusability.",
      "Integrated external weather APIs to fetch and display live climate data based on user-selected locations.",
      "Implemented dynamic data rendering to showcase temperature, weather conditions, humidity, and location details.",
      "Handled API calls, loading states, and error management to ensure a smooth and reliable user experience.",
      "Designed a clean, responsive user interface using HTML, CSS, and modern React practices for cross-device compatibility."
    ],
    tech: [
        "React",
        "TypeScript",
        "HTML",
        "CSS",
        "Bootstrap",
        "API Integration"
    ]
    }

  ];

  return (
    <Box sx={{ px: 6, py: 4 }}>
      {/* Section Title */}
      <Typography variant="h4" fontWeight="bold" mb={4}>
        Projects
      </Typography>

      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item xs={12} key={index}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                borderRadius: 3,
                transition: "0.3s",
                "&:hover": {
                //   transform: "translateY(-4px)",
                  boxShadow: 5
                }
              }}
            >
              {/* Title */}
              <Typography variant="h5" fontWeight="bold">
                {project.title}
              </Typography>

              {/* Role */}
              <Typography variant="body2" color="text.secondary" mb={2}>
                {project.role}
              </Typography>

              {/* Description Points */}
              <Box component="ul" sx={{ pl: 2, mb: 2 }}>
                {project.description.map((point, i) => (
                  <Typography
                    component="li"
                    variant="body2"
                    key={i}
                    sx={{ mb: 0.5 }}
                  >
                    {point}
                  </Typography>
                ))}
              </Box>

              {/* Tech Stack */}
              <Stack direction="row" spacing={1} flexWrap="wrap">
                {project.tech.map((tech, i) => (
                  <Chip
                    key={i}
                    label={tech}
                    size="small"
                    sx={{
                      bgcolor: "#EEF2FF",
                      color: "#4F46E5",
                      fontWeight: 500
                    }}
                  />
                ))}
              </Stack>

              {/* Buttons */}
              {/* Live Website */}
              {/* <Box sx={{ display: "flex", gap: 2 }}>
                <Button
                  variant="contained"
                  endIcon={<LaunchIcon />}
                  href={project.liveLink}
                  target="_blank"
                  sx={{
                    textTransform: "none",
                    borderRadius: 2,
                    background:
                      "linear-gradient(135deg,#6366F1,#8B5CF6)"
                  }}
                >
                  Live Demo
                </Button>
                </Box> */}
                
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
