// App.js
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';


function App() {
  return (
    <div>
      <Header></Header>
      <Header title="My React App" />
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
