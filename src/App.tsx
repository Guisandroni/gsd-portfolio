import { About } from "./components/about";
import { Header } from "./components/header";
import { Tec } from "./components/tec";
import './app.styles.css'
import { Projects } from "./components/projects";

export function App(){
  return (
    <>
      <Header/>
      <About/>
      <Tec/>
      <Projects/>
      
    </>
  )
}