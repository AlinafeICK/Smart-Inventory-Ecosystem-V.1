// Usage example
import { faChalkboardTeacher, faTasks, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import ActionsComponent from './cores/ActionComponent';
import CRMComponent from './CRMComponent';

const actions = [
  { title: 'Make Aquisition', icon: faChalkboardTeacher },
  { title: 'Track Aquisition', icon: faTasks },
  { title: 'All Past Aquisitions', icon: faUserPlus },
];

function Examinations() {
  return (
    <>
      <div>
        <CRMComponent />
        <div className="flex items-center">
        <ActionsComponent actions={actions} />
        </div>
      </div>
    </>
  );

}

export default Examinations;