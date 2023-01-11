import './App.css';
import ProjectRoutes from './routes';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
      <ToastContainer />
      <ProjectRoutes />
    </>
  );
}

export default App;
