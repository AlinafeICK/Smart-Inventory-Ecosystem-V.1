import React, { useState } from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import TrackRequsitionModal from '../modals/TrackRequsitionModal';
import AllPastRequsitionsModal from '../modals/AllPastRequsitionsModal';
import MakeRequisitionModal from '../modals/MakeRequisitionModal ';

const ActionsComponent = ({ actions }) => {
  const [selectedAction, setSelectedAction] = useState(null);

  const openModal = (action) => {
    console.log('Open modal for action:', action);
    setSelectedAction(action);
  };

  const closeModal = () => {
    setSelectedAction(null);
  };

  return (
    
    <div className="flex items-center justify-center min-h-screen overflow-hidden">
      <div className="container bg-gray-100 border-t-2 border-blue-500 p-4">
        <div className="bg-indigo-500 w-full lg:w-4/5 m-auto flex items-center justify-center p-8">
          <div className="flex w-full">
            {actions.map((action, index) => (
              <div
                key={index}
                className="bg-white p-8 h-40 sm:w-96 cursor-pointer hover:bg-gray-200 flex flex-col items-center justify-center mb-4 sm:mb-0 sm:mr-4 rounded-sm"
                onClick={() => openModal(action)}
              >
                <FontAwesomeIcon
                  icon={action.icon}
                  className="text-blue-500 h-12 w-12 mb-4"
                />
                <p className="text-lg text-blue-500 font-semibold">{action.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        <Modal
          isOpen={!!selectedAction}
          onRequestClose={closeModal}
          className="modal bg-red-500"
          overlayClassName="overlay"
        >
          <div>
          {console.log('Selected Action:', selectedAction)}
            {selectedAction && (
              <>
                {selectedAction.title === 'Make Aquisition' && <MakeRequisitionModal isOpen={!!selectedAction} closeModal={closeModal} />}
                {selectedAction.title === 'Track Aquisition' && <TrackRequsitionModal isOpen={!!selectedAction} closeModal={closeModal} />}
                {selectedAction.title === 'All Past Aquisitions' && <AllPastRequsitionsModal isOpen={!!selectedAction} closeModal={closeModal} />}
              </>
            )}
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default ActionsComponent;
