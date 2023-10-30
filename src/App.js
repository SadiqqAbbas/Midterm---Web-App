import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoLists from './components/todolists.component';
import EditTodo from './components/edittodo.component';
import AddTodo from './components/addtodo.component';

function App() {
  return (
   
    <Router>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/product" className="nav-link">
                Add To Do
              </Link>
              <Link to="/shop" className="nav-link">
                Edit To Do
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<TodoLists />} />
        <Route path="/product" element={<EditTodo />} />
        <Route path="/shop" element={<AddTodo />} />
      </Routes>
    
    </Router>
  );
}

export default App;
