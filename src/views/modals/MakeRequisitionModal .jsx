import React, { useState } from 'react';
import Modal from 'react-modal';

const MakeRequisitionModal = ({ isOpen, closeModal }) => {
  const [requestInfo, setRequestInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    department: '',
    phone: '',
    description: '',
    date: new Date().toISOString().split('T')[0],
    item: '',
    quantity: '',
  });
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleInputChange = (field, value) => {
    setRequestInfo({ ...requestInfo, [field]: value });
  };

  const handleMakeRequest = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/make-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestInfo),
      });

      if (response.ok) {
        console.log('Request submitted successfully');
        setShowSuccessModal(true);
        closeModal();
      } else {
        console.error('Error submitting request:', response.statusText);
        setShowSuccessAlert(true); // Set the success alert state if there was an error
      }
    } catch (error) {
      console.error('Error:', error.message);
      setShowSuccessAlert(true); // Set the success alert state if there was an error
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
          <h2 className="text-2xl font-bold mb-4">Make new request</h2>
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

          <form className="grid grid-cols-2 gap-4 mb-4 max-h-96 overflow-y-auto">
            <div>
              <label className="block mb-2">First Name:</label>
              <input
                type="text"
                value={requestInfo.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                className="w-full border rounded-md p-2"
              />
            </div>

            <div>
              <label className="block mb-2">Last Name:</label>
              <input
                type="text"
                value={requestInfo.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                className="w-full border rounded-md p-2"
              />
            </div>

            <div>
              <label className="block mb-2">E-Mail:</label>
              <input
                type="email"
                value={requestInfo.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full border rounded-md p-2"
              />
            </div>

            <div>
              <label className="block mb-2">Date:</label>
              <input
                type="text"
                value={requestInfo.date}
                onChange={(e) => handleInputChange('date', e.target.value)}
                className="w-full border rounded-md p-2"
              />
            </div>

            <div>
              <label className="block mb-2">Item name:</label>
              <input
                type="text"
                value={requestInfo.item}
                onChange={(e) => handleInputChange('item', e.target.value)}
                className="w-full border rounded-md p-2"
              />
            </div>

            <div>
              <label className="block mb-2">Phone:</label>
              <input
                type="text"
                value={requestInfo.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="w-full border rounded-md p-2"
              />
            </div>

            <div>
              <label className="block mb-2">Quantity:</label>
              <input
                type="text"
                value={requestInfo.quantity}
                onChange={(e) => handleInputChange('quantity', e.target.value)}
                className="w-full border rounded-md p-2"
              />
            </div>

            <div>
              <label className="block mb-2">Department:</label>
              <input
                type="text"
                value={requestInfo.department}
                onChange={(e) => handleInputChange('department', e.target.value)}
                className="w-full border rounded-md p-2"
              />
            </div>

            <div>
              <label className="block mb-2">Product description:</label>
              <textarea
                value={requestInfo.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                className="w-full h-20 border rounded-md p-2"
              ></textarea>
            </div>
          </form>

          {showSuccessAlert && (
            <div className="bg-red-200 border-red-500 border-l-4 p-4 mb-4">
              <p className="text-red-800">Error submitting request. Please try again.</p>
            </div>
          )}

          <div className="flex justify-end">
            <button onClick={handleMakeRequest} className="bg-green-500 text-white px-4 py-2 rounded-md">
              Request
            </button>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={showSuccessModal}
        onRequestClose={() => setShowSuccessModal(false)}
        className="modal"
        overlayClassName="modal-overlay fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      >
        {/* Content of the success modal */}
        <div className="bg-green-200 border-green-500 border-l-4 p-4 mb-4">
          <p className="text-green-800">Request submitted successfully!</p>
        </div>
      </Modal>
    </>
  );
};

export default MakeRequisitionModal;
