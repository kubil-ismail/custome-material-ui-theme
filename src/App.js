import logo from "./logo.svg";
import "./App.css";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Text from "@material-ui/core/Typography";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Text variant="h1" gutterBottom>
          Hallo kamu yang disana
        </Text>
        <Box display="flex">
          <Button variant="contained">Default</Button>
          <Button variant="contained" color="primary">
            Default with custome
          </Button>
        </Box>
      </header>
    </div>
  );
}

export default App;
