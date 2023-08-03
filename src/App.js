import Input from "./components/Input";
import Boxes  from "./components/Boxes";
import Counter from "./components/Counter";
import Card from "./components/Card";
import Avatar from "./components/Avatar";

function App() {
  let stylesArr = [{width:'300px',height:'150px',backgroundColor:'aqua'},{width: "300px", height: "150px", backgroundColor: "red"},{width:"300px",height:'150px',backgroundColor:'blue'}];
  return (
    <>
    <Input/>
    <Boxes stylesArr={stylesArr} />
    <Counter />
    <Card>
        <Avatar src="https://www.theanimedaily.com/wp-content/uploads/2021/10/Ryomen-Sukuna-1.jpg" alt="Sukuna Image"/>
    </Card>
    </>
  )
}

export default App;
