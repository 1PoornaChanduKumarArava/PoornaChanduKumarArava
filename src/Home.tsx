import { Box, Typography, Tooltip } from "@mui/material"
import {
  Work,
  Code,
  Storage,
  Api,
  Speed,
  Build
} from "@mui/icons-material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CodeIcon from "@mui/icons-material/Code";
import {  Button, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MailOutlineIcon from "@mui/icons-material/MailOutline";


const highlights = [
  {
    text: "Full-Stack Engineer (.NET + React)",
    icon: <Work fontSize="medium" />,
    gradient: "linear-gradient(135deg,#4f46e5,#3b82f6)" // Blue
  },
  {
    text: "Scalable REST API Development",
    icon: <Code fontSize="medium" />,
    gradient: "linear-gradient(135deg,#7c3aed,#a855f7)" // Purple
  },
  {
    text: "SQL Performance Optimization",
    icon: <Storage fontSize="medium" />,
    gradient: "linear-gradient(135deg,#2563eb,#0ea5e9)" // Deep Blue
  },
  {
    text: "Microservices & System Integration",
    icon: <Api fontSize="medium" />,
    gradient: "linear-gradient(135deg,#f97316,#fb923c)" // Orange
  },
  {
    text: "Performance Monitoring & Tuning",
    icon: <Speed fontSize="medium" />,
    gradient: "linear-gradient(135deg,#16a34a,#4ade80)" // Green
  },
  {
    text: "RCA & Production Debugging",
    icon: <Build fontSize="medium" />,
    gradient: "linear-gradient(135deg,#0d9488,#2dd4bf)" // Teal
  }
];


const Home = () => {
  const navigate = useNavigate();
  return (
    // <>
    //   <Box
    //     sx={{
    //       display: 'flex',
    //       justifyContent: 'space-between',
    //       alignItems: 'center',
    //       height: '81vh',
    //       padding: '0 0px',
    //       ml: 9,
    //       mt: 1,
    //       boxSizing: 'border-box'

    //     }}
    //   >
    //     <Box
    //       sx={{
    //         display: { xs: 'none', md: 'flex' },
    //         color: 'black',
    //         padding: '6px',
    //         borderRadius: '8px',
    //         fontSize: '18px',
    //         lineHeight: 1.5,
    //         textAlign: 'justify',
    //         mr: 5
    //       }}
    //     >
    //       <Typography variant="body1" className="home-text">
    //         Hi there{' '}
    //         <span style={{  backgroundColor: '#E3F2FD', color: '#000000ff', borderRadius: '5px' }}>
    //           <WavingHandTwoToneIcon />
    //         </span>
    //         <br />
    //         I am Poorna Chandu Kumar Arava, a <b>Software Engineer</b> at Talent Pace, Bangalore.
    //         Software Engineer with 2.3+ years of experience as a Full-Stack .NET Core Developer, building and supporting scalable, production-grade web applications in live environments. Strong expertise in ASP.NET Core, C#, RESTful APIs, SQL Server, React, and JavaScript, with proven ownership of backend services, database optimization, and production issue resolution. Experienced in delivering enterprise-scale systems end-to-end using Agile practices, with a focus on performance, reliability, and clean code.
    //         {/* I have experience in ASP.NET CORE - Dapper, React-Redux, TypeScript, C#, Microsoft SQL Server, Python-OOPS, Material UI, JavaScript, HTML, CSS, and Bootstrap.
    //         I led a Resource Management & Plant Management Project. Also developed an Online Shopping Cart and Pick a Movie Website using React-Redux, and designed many static web pages using HTML, CSS, JavaScript, and Bootstrap. Additionally, I have worked as a <b>Teaching Assistant</b> at NXTWAVE, where I assisted students with their queries related to HTML, CSS, and Bootstrap. I am strongly skilled in ASP .NET CORE, C#, Microsoft SQL Server, Python-OOPS, React-Redux, TypeScript, Material UI, JavaScript, HTML, CSS, and Bootstrap. My academic background includes a Bachelor's degree in Electronics and Communication Technology. My strengths include a hard-working nature, effective communication, positive attitude, and good time management. Outside of work, I enjoy reading, photography, teaching, and playing badminton and chess. */}
    //       </Typography>




    //     </Box>

    //     <Box
    //       sx={{
    //         display: { xs: 'none', md: 'flex' },
    //         justifyContent: 'center',
    //         alignItems: 'center',
    //         flex: '1',
    //         mr: 5
    //       }}
    //     >
    //       <img src="public/Poorna_Image.png" alt="Logo" height={275} width={275} />
    //     </Box>
    //   </Box>




    // </>
    <>
<Box
  sx={{
    width: "100%",
    minHeight: "62vh",          // Reduced height
    display: "flex",
    alignItems: "center",
    justifyContent: "center",  // Center whole content
    backgroundColor: "#f9fafb",
    px: 3,
    marginBottom:"0%",
    marginTop:"0%"
    

  }}
>

  {/* INNER CONTAINER (controls left/right spacing) */}
<Box
  sx={{
    width: "100%",
    // maxWidth: "1500px",        // Prevents extra right space
    marginLeft:"2%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: { xs: 4, md: 6 },
    flexDirection: { xs: "column", md: "row" }
  }}
>

  {/* 🔹 LEFT CONTENT */}
  <Box sx={{ flex: 3 }}>

    {/* SMALL INTRO */}
    <Typography
      sx={{
        fontSize: "18px",
        fontWeight: 500,
        color: "#4B5563",
        fontFamily: "Inter, sans-serif",
        letterSpacing:"0.3px"
        
      }}
    >
      Hi, I’m Poorna Chandu Kumar Arava
    </Typography>


    {/* BIG ROLE HEADLINE */}
    <Typography
      sx={{
        fontSize: { xs: "34px", md: "42px" },
        fontWeight: 700,
        color: "#111",
        lineHeight: 1.2,
        fontFamily: "Inter, sans-serif",
        mt: 1
      }}
    >
      Full-Stack Software  Engineer (.NET + React)

      {" "}

      <img
        src="/coding_gif.gif"
        alt="Coding"
        height={38}
        width={38}
        style={{ verticalAlign: "middle" }}
      />
    </Typography>


    {/* DESCRIPTION */}
    <Typography
      sx={{
        mt: 2.5,
        fontSize: "17px",
        fontWeight: 400,
        color: "#4B5563",
        maxWidth: "720px",
        lineHeight: 1.7

      }}
    >
      Software Engineer specializing in .NET Core & React, building scalable,
      production-grade enterprise applications. I design high-performance
      backend systems, optimize SQL workloads, and develop resilient APIs
      powering real-time business operations.
    </Typography>


{/* CTA BUTTONS */}
<Box sx={{ mt: 4, display: "flex", gap: 2 }}>
  <Button
    variant="contained"
    sx={{
      background: "linear-gradient(135deg,#6366F1,#06B6D4)",
      px: 3,
      py: 1.2,
      borderRadius: "10px",
      fontWeight: 600
    }}
    onClick={()=>{navigate('/Projects')}}
  >
    View Projects
  </Button>

  <a href="/PoornaChanduKumarArava_DotNetDev.pdf" download>
  <Button
    variant="outlined"
    sx={{
      borderColor: "#6366F1",
      color: "#6366F1",
      px: 3,
      py: 1.2,
      borderRadius: "10px",
      fontWeight: 600
    }}
  >
    Download Resume
  </Button>
  </a>
</Box>

{/* SOCIAL PROOF ICONS — ADD HERE */}
<Box
  sx={{
    mt: 3,
    display: "flex",
    gap: 2,
    alignItems: "center"
  }}
>
  <Tooltip title="GitHub" arrow>
    <IconButton
      component="a"
      href="https://github.com/1PoornaChanduKumarArava"
      target="_blank"
      sx={{
        border: "1px solid #E5E7EB",
        "&:hover": { color: "#6366F1" }
      }}
    >
      <GitHubIcon />
    </IconButton>
    </Tooltip>
  
  <Tooltip title="LinkedIn" arrow>
  <IconButton
    component="a"
    href="https://www.linkedin.com/in/poornachandukumararava/"
    target="_blank"
    sx={{
      border: "1px solid #E5E7EB",
      "&:hover": { color: "#0A66C2" }
    }}
  >
    <LinkedInIcon />
  </IconButton>
  </Tooltip>

  <Tooltip title="Leetcode" arrow>
  <IconButton
    component="a"
    href="https://leetcode.com/u/tZoIfkOx8L/"
    target="_blank"
    sx={{
      border: "1px solid #E5E7EB",
      "&:hover": { color: "#F59E0B" }
    }}
  >
    <CodeIcon />
  </IconButton>
  </Tooltip>

  <Tooltip title="Email" arrow>
  <IconButton
    component="a"
    href="mailto:poornachandukumararava2026@gmail.com"
    sx={{
      border: "1px solid #E5E7EB",
      transition: "all 0.25s ease",

      "&:hover": {
        color: "#6366F1",
        borderColor: "#6366F1",
      }
    }}
  >
    <MailOutlineIcon />
  </IconButton>
</Tooltip>

</Box>


  </Box>



  {/* 🔹 RIGHT IMAGE */}
  <Box
    sx={{
      flex: 1,
      display: "flex",
      justifyContent: "center"
    }}
  >

    {/* Gradient Ring Wrapper */}
    <Box
      sx={{
        background:
          "linear-gradient(135deg,#4f46e5,#06b6d4)",
        padding: "3px",
        borderRadius: "65%",
        // boxShadow:
        //   "0 20px 40px rgba(0,0,0,0.18)",
          boxShadow: "0 10px 30px rgba(99,102,241,0.25)"

      }}
    >

      <Box
        component="img"
        src="/Poorna_Image.png"
        alt="Poorna"
        sx={{
          width: { xs: 200, md: 260 },
          height: { xs: 200, md: 260 },
          borderRadius: "50%",
          objectFit: "cover",
          border: "4px solid #fff"
        }}
      />

    </Box>

  </Box>

</Box>




</Box>



<Box
  sx={{
    width: "100%",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#f9fafb",
    py: 1,                 // Reduced gap from hero
    px: 2
  }}
>

<Box sx={{ maxWidth: "1200px", width: "100%", marginRight:"16%", marginBottom:"2%" }}>

  {/* TITLE */}
  <Typography
    sx={{
      fontSize: "32px",
      fontWeight: 700,
      mb: 4,
      color: "#111",
      fontFamily: "Inter, sans-serif",
      justifyContent:"start",
      lineHeight:1.2
    }}
    
  >
    Highlights
  </Typography>

  {/* CARDS GRID */}
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: {
        xs: "1fr",
        sm: "1fr 1fr",
        md: "1fr 1fr 1fr"
      },
      gap: 3
    }}
  >
    {highlights.map((item, i) => (
      <Box
        key={i}
        sx={{

          /* Layout */
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          py: 2,
          px: 3,
          borderRadius: 3,

          /* Text */
          color: "white",
          fontWeight: 600,

          /* 6️⃣ FAANG Gradient Colors */
          background: item.gradient,

          /* 2️⃣ Glass Effect Overlay */
          backdropFilter: "blur(6px)",

          /* 5️⃣ Premium Shadow */
          boxShadow: "0 8px 20px rgba(0,0,0,0.12)",

          /* Animation */
          transition: "all 0.3s ease",

          "&:hover": {
            transform: "translateY(-6px)",

            /* 5️⃣ Hover Glow */
            boxShadow:
              "0 14px 30px rgba(0,0,0,0.18)"
          }
        }}
      >

        {/* 4️⃣ ICON CIRCLE BACKGROUND */}
        <Box
          sx={{
            width: 25,
            height: 15,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(255,255,255,0.2)"
          }}
        >
          {item.icon}
        </Box>

        {/* TEXT */}
        <Typography
          sx={{
            fontSize: "15px",
            fontWeight: 600
          }}
        >
          {item.text}
        </Typography>

      </Box>
    ))}
  </Box>

</Box>

</Box>



    </>
  )
}

export default Home