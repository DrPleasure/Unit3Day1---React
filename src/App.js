import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <ButtonComponent name="First One" />
        <ButtonComponent name="Second One" />
        <ButtonComponent name="Third One" />
        <ImageComponent
          URL="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg"
          alt="dog"
        />
        <ImageComponent
          URL="https://bloximages.newyork1.vip.townnews.com/herald-dispatch.com/content/tncms/assets/v3/editorial/c/da/cda19855-5d64-5875-bcf3-a8f58c41c148/56204fbf999bc.image.jpg?resize=400%2C200"
          alt="Daniel"
        />
      </header>
    </div>
  );
}

export default App;
