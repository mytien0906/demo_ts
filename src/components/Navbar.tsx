import {
    AppBar,
    Box,
    FormControl,
    MenuItem,
    Select,
    Toolbar,
    Typography
} from "@mui/material";
import { useState } from "react";
import WelcomeMessage from "./WelcomeMessage";
import {makeStyles} from  '@mui/styles';
import {Theme, createStyles} from '@mui/material/styles';

const useStyles = makeStyles((theme:Theme)=>createStyles(
    positionSelect:{
        color: '#fff',
        borderBottom: '1px solid #fff'
    }
));
const arrPosition: string[] = ["FE Dev", "BE Dev", "Full-stack Dev"];
const Navbar = () => {
    const classes = useStyles();
  const [position, setPosition] = useState<string>("Full-stack Dev");

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width={1}
          py={2}
        >
          <Typography variant="h6">My Movies</Typography>
          <Box textAlign="center">
            <WelcomeMessage position={position} />
            <Box mt={1}>
              <FormControl>
                <Select
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                >
                  {arrPosition.map((item) => (
                    <MenuItem value={item}>{item}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
