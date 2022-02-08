import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "@mui/material";

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">*/}
      {/* */}
      {/*</header>*/}
        <div className="container-fluid">
            <div className="row">
                <div className="col-1">Teste</div>
                <div className="col-1">Teste</div>
                <div className="col-1">Teste</div>
                <div className="col-1">Teste</div>
                <div className="col-1">Teste</div>
                <div className="col-1">Teste</div>
                <div className="col-1">Teste</div>
                <div className="col-1">Teste</div>
                <div className="col-1">Teste</div>
                <div className="col-1">Teste</div>
                <div className="col-1">Teste</div>
                <div className="col-1">Teste</div>
            </div>
            <div className="row">
                <div className="col-12 col-md-2">
                    <Button variant='contained'>Teste</Button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
