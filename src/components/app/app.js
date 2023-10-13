import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmpList from '../employers-list/employers-list';
import EmpAddForm from '../employers-add-form/employers-add-form';
import './app.css';


function App() {

    const data = [
        {name:'John' ,salary: 800, increase: false},
        {name: 'Alex' ,salary: 1000, increase: true},
        {name: 'Ann' ,salary: 10000, increase: false}
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