import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

import parisaImage from "./parisa-portrate.jpg";

const pages = [
  { label: "Home", url: "home" },
  { label: "About Me", url: "aboutMe" },
  { label: "Skills", url: "skills" },
  { label: "Projects", url: "projects" },
  { label: "Contact Me", url: "contactMe" },
];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "./resume.pdf"; // Path to your PDF file in the public folder
    link.download = "resume.pdf"; // Specify the file name
    link.click();
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem
                  key={index}
                  component="a"
                  href={`#${page.url}`}
                  onClick={handleCloseNavMenu}
                >
                  <Typography textAlign="center">{page.label}</Typography>
                </MenuItem>
              ))}
              <MenuItem key="downloadResume" onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Download Resume</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => (
              <Button
                href={`#${page.url}`}
                key={index}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.label}
              </Button>
            ))}
            <Button
              sx={{ my: 2, mx: 5, color: "white", display: "block" }}
              onClick={handleDownloadResume}
            >
              Download Resume
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Avatar
              sx={{ width: 56, height: 56 }}
              alt="Parisa Darkhal"
              src={parisaImage}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
