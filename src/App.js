import './App.css';
import MainCard from './Components/MainCard';
import SmallCard from './Components/SmallCard';
import PageHeader from './Components/PageHeader';
import data from "./data.json";

function App() {
  return (
    <div className="App">
       <PageHeader totalFollowers={data.user.totoaFollowers}/>
       {data.data.map(item => <MainCard data={item}/>)}
       <SmallCard data={data.data[0].todayOverview[0]} logo={data.data[0].logo}/>
    </div>
  );
}

export default App;
