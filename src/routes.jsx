import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './views/Dashboard';
import MakeRequisitionModal from './views/modals/MakeRequisitionModal ';
import AllPastRequsitionsModal from './views/modals/AllPastRequsitionsModal';
import CRMComponent from './views/CRMComponent';
const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CRMComponent />} />
        <Route path="/api/make-request" element={<MakeRequisitionModal />} />
        <Route path="/api/past-history" component={AllPastRequsitionsModal} />
      
      </Routes>
    </Router>
  );
}
export default Routers;