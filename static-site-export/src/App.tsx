import { Switch, Route } from "wouter";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import StateDirectory from "@/pages/StateDirectory";
import StatePage from "@/pages/StatePage";
import HowItWorks from "@/pages/HowItWorks";
import About from "@/pages/About";
import NotFound from "@/pages/NotFound";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/states" component={StateDirectory} />
        <Route path="/state/:stateSlug" component={StatePage} />
        <Route path="/how-it-works" component={HowItWorks} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

export default App;