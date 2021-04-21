import TextEditor from "./TextEditor";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { v4 as uuid } from "uuid";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Redirect to={`/documents/${uuid()}`} />
        </Route>
        <Route path="/documents/:id" exact>
          <TextEditor />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
