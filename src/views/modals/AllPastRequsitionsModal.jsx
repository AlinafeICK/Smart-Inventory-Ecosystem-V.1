import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

const AllPastRequsitionsModal = ({ isOpen, closeModal }) => {
  const [pastRequisitions, setPastRequisitions] = useState([]);

  useEffect(() => {
    // Fetch past requisitions data from the server
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/past-history');
        setPastRequisitions(response.data);
      } catch (error) {
        console.error('Error fetching past requisitions:', error.message);
      }
    };

    fetchData();
  }, [isOpen]);
  const splitDateTime = (dateTime) => {
    const [date, time] = dateTime.split(' ');
    return { date, time };
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className="modal"
      overlayClassName="modal-overlay fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div className="bg-white p-8 w-full max-w-4xl max-h-svh overflow-y-auto rounded-md relative">
        <h2 className="text-2xl lg:w-96 font-bold mb-4 ">History</h2>
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

        <ul>
          {pastRequisitions.map((req, index) => (
            <li key={index} className="mb-4 border-b-2 scroll-m-1 border-gray-300">
              <strong>Date:</strong> {splitDateTime(req.date).date}<br />
              <strong>Email:</strong> {req.description}<br />
              {/* Add other properties as needed */}
            </li>
          ))}
        </ul>

        <div className="flex justify-end">
          <button onClick={closeModal} className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default AllPastRequsitionsModal;
