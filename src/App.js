import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import CharacterGrid from "./component/Character/CharacterGrid";
import Search from "./component/Character/Search";
import Header from "./component/Header";

const App = () => {
  const [items, setItems] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const [query,setQuery] = useState('')
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      //console.log(result.data);
      setItems(result.data);
      setIsloading(false)
      
    };
    fetchItems();
  }, [query]);
  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)}/>
      <CharacterGrid isloading={isloading} items={items}/>
    </div>
  );
};

export default App;
