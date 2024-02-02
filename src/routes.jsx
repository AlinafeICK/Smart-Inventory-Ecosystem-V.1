import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MakeRequisitionModal from './views/modals/MakeRequisitionModal ';
import AllPastRequsitionsModal from './views/modals/AllPastRequsitionsModal';
import CRMComponent from './views/CRMComponent';
import HoDComponent from './views/HeadOfDepart/HoDComponent';
const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CRMComponent />} />
        <Route path="/api/make-request" element={<MakeRequisitionModal />} />
        <Route path="/api/past-history" component={AllPastRequsitionsModal} />
        {/* hod */}
      <Route path='/admin' element={<HoDComponent/>}/>
      </Routes>
    </Router>
  );
}
export default Routers;