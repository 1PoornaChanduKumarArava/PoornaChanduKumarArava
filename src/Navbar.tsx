// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import { useNavigate } from 'react-router';
// import { useEffect, useState } from 'react';
// import { useSearchParams } from 'react-router-dom';

// const pages = ['Home', 'Experience', 'Education', 'Projects', 'Skills', 'Certifications', 'Awards'];

// function Navbar() {
//   const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

//   const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const navigate=useNavigate();
//   const [selectedPage,setSelectedPage]=useState('');

//   useEffect(()=>{
    
//   },[])
  


//   return (
//     <AppBar position="static" sx={{ backgroundColor: 'white' }}>
//       <Container maxWidth="xl" sx={{padding:'0px'}}>
//         <Toolbar disableGutters>         
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2, ml:5,
//               display: { xs: 'none', md: 'flex' },
//               // fontFamily: 'monospace',
//               fontWeight: 700,
//               // letterSpacing: '.3rem',
//               color: 'black',
//               textDecoration: 'none',
//             }}
//           >
//             Poorna Chandu Kumar Arava
//           </Typography>

//           <Box sx={{ display: { xs: 'none', md: 'flex', color: 'black' }, mr: 18 }}>
//             <img src='public/coding_gif.gif' alt='Logo' height={28} width={28} />
//           </Box> 


//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', color: 'black' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>     
          
//           <Typography
//             variant="body1"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 5,
//               display: { xs: 'flex', md: 'none' },
//               flexGrow: 1,
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.0rem',
//               color: 'black',
//               textDecoration: 'none',
//             }}
//           >
//             Poorna Chandu Kumar Arava
//           </Typography>

//           <Box sx={{ display: { xs: 'flex', md: 'none', color: 'black' }, mr: 1 }}>
//             <img src='public/coding_gif.gif' alt='Logo' height={28} width={28} />
//           </Box>  
            

//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={()=>{navigate(`/${page}`);handleCloseNavMenu();setSelectedPage(page);}}
//                 sx={{ my: 2, color: 'black', display: 'block',
//                   fontWeight: selectedPage === page ? 'bold' : 'normal',
//                   textDecoration: selectedPage === page ? 'underline' : 'none',
//                 }}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>


//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }
// export default Navbar;
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate, useLocation } from 'react-router-dom';

const pages = [
  'Home',
  'Experience',
  'Education',
  'Projects',
  'Skills',
  'Certifications',
  'BookShelf'
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] =
    React.useState<null | HTMLElement>(null);

  const navigate = useNavigate();
  const location = useLocation();

  const handleOpenNavMenu = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavigate = (page: string) => {
    navigate(`/${page.toLowerCase()}`);
    handleCloseNavMenu();
  };

  return (
    <AppBar
      position="sticky"
      elevation={1}
      sx={{
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #eee'
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          {/* ===== Logo + Name ===== */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              cursor: 'pointer'
            }}
            onClick={() => navigate('/')}
          >
            {/* <img
              src="/coding_gif.gif"
              alt="Logo"
              height={32}
              width={32}
            /> */}

            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: '#111',
                letterSpacing: '.3px',
                display: { xs: 'none', md: 'flex' },
              }}
            >
              Poorna Chandu Kumar Arava
            </Typography>
          </Box>

          {/* ===== Mobile Menu Icon ===== */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
            <IconButton onClick={handleOpenNavMenu}>
              <MenuIcon sx={{ color: '#111' }} />
            </IconButton>

            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={() => handleNavigate(page)}
                >
                  <Typography
                    sx={{ fontWeight: 600 }}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* ===== Desktop Menu ===== */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'flex-end',
              gap: 1
            }}
          >
            {pages.map((page) => {
              const isActive =
                location.pathname ===
                `/${page.toLowerCase()}`;

              return (
                <Button
                  key={page}
                  onClick={() => handleNavigate(page)}
                  sx={{
                    color: '#111',
                    fontWeight: isActive ? 600 : 550,
                    borderBottom: isActive
                      ? '2px solid #e1e1e1'
                      : '2px solid transparent',
                    borderRadius: 0,
                    px: 2,
                    '&:hover': {
                      backgroundColor: 'transparent',
                      borderBottom:
                        '2px solid #e1e1e1'
                    }
                  }}
                >
                  {page}
                </Button>
              );
            })}
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
