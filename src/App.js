import './App.css';
import MainCard from './Components/MainCard';
import SmallCard from './Components/SmallCard';
import PageHeader from './Components/PageHeader';
import data from "./data.json";

function App() {
  return (
    <div className="App">
       <PageHeader totalFollowers={data.user.totoaFollowers}/>
       <div className='mainCardsContainer'>
        {data.data.map(item => <MainCard data={item} key={item.platform}/>)}
       </div>
       <h2 className='subHeader'>OverView - Today</h2>
       <div className='subCardContainer'>
        {data.data.map(item => item.todayOverview.map(item1 => <SmallCard data={item1} logo={item.logo} key={item.platform}/>))}
       </div>
    </div>
  );
}

export default App;
