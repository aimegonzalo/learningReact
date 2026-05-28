import "./App.css";
import TwitterFollowCard from "./TwitterFollowCard";

export default function App() {
  return (
    <section className="App">
      <TwitterFollowCard userName="aimegonzalo" name="Gonzalo Aime" />
      <TwitterFollowCard userName="sirNity" name="NitDarkMax" />
      <TwitterFollowCard userName="romafesa" name="Rutsi" />
      <TwitterFollowCard userName="Marsopomorsa" name="Marsopa Morsa" />
    </section>
  );
}
