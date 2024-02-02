import React, { useState } from 'react';
import Modal from 'react-modal';

const ApproveDisapproveModal = ({ isOpen, closeModal }) => {
  const [requisitions, setRequisitions] = useState([
    { id: 1, name: 'John Doe', status: 'Pending' },
    { id: 2, name: 'Jane Smith', status: 'Pending' },
    // Add more requisitions as needed
  ]);

  const handleAction = async (action, requisitionId) => {
    try {
      // Update the status and move to the approved table on approval
      if (action === 'approve') {
        const response = await fetch(`http://localhost:3001/api/approve-requisition/${requisitionId}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          // Update the local state to reflect the change
          setRequisitions((prevReqs) =>
            prevReqs.map((req) =>
              req.id === requisitionId ? { ...req, status: 'Approved' } : req
            )
          );
        } else {
          console.error('Error approving requisition:', response.statusText);
        }
      }

      // Handle disapproval
      if (action === 'disapprove') {
        // Similar logic to the approval, update status or move to a different table
        // ...
      }

      // Handle view details
      if (action === 'viewDetails') {
        // Fetch requisition details or show a modal with more information
        // ...
      }

    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="modal-overlay fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      >
        <div className="bg-white p-8 w-full max-w-4xl rounded-md relative">
          <h2 className="text-2xl font-bold mb-4">Requisitions</h2>
          <button className="absolute top-4 right-4 text-gray-500" onClick={closeModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          <div className="container mx-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">RID</th>
                  <th className="py-2 px-4 border-b">Name</th>
                  <th className="py-2 px-4 border-b">Status</th>
                  <th className="py-2 px-4 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {requisitions.map((req) => (
                  <tr key={req.id}>
                    <td className="py-2 px-4 border-b">{req.id}</td>
                    <td className="py-2 px-4 border-b">{req.name}</td>
                    <td className="py-2 px-4 border-b">{req.status}</td>
                    <td className="py-2 px-4 border-b">
                      <button
                        className={`bg-green-500 text-white px-2 py-1 rounded-full mr-2 ${req.status === 'Approved' ? 'opacity-50 cursor-not-allowed' : ''}`}
                        onClick={() => handleAction('approve', req.id)}
                        disabled={req.status === 'Approved'}
                      >
                        Approve
                      </button>
                      <button
                        className="bg-red-500 text-white px-2 py-1 rounded-full mr-2"
                        onClick={() => handleAction('disapprove', req.id)}
                      >
                        Disapprove
                      </button>
                      <button
                        className="bg-blue-500 text-white px-2 py-1 rounded-full"
                        onClick={() => handleAction('viewDetails', req.id)}
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ApproveDisapproveModal;
