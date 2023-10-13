import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmpList from '../employers-list/employers-list';
import EmpAddForm from '../employers-add-form/employers-add-form';
import './app.css';


function App() {

    const data = [
        {name:'John' ,salary: 800, increase: false, id:1},
        {name: 'Alex' ,salary: 1000, increase: true, id:2},
        {name: 'Ann' ,salary: 10000, increase: false, id:3}
    ];

    return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>
            <EmpList data={data} />
            <EmpAddForm/>
        </div>
    )
}

export default App;