import React, { useState } from 'react';
import Modal from 'react-modal';
import ProcessTracker from '../ProcessTracker';

const TrackRequsitionModal = ({ isOpen, closeModal }) => {
  const [teacherInfo, setStudentInfo] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    dateOfBirth: '',
    idNo: '',
    bloodGroup: '',
    religion: '',
    email: '',
    className: '',
    position: '',
    address: '',
    phone: '',
    shortBio: '',
    studentPhoto: null,
  });

  const handleInputChange = (field, value) => {
    setStudentInfo({ ...teacherInfo, [field]: value });
  };

  const handleUploadPhoto = (e) => {
    const file = e.target.files[0];
    setStudentInfo({ ...teacherInfo, teacherPhoto: file });
  };

  const handleAddTeacher = async () => {
    // Handle the logic for adding a new teacher
    closeModal();
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
        <h2 className="text-2xl font-bold mb-4">Item request tracking</h2>
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

        <ProcessTracker/>
        <div className="flex justify-end">
          <button onClick={handleAddTeacher} className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Vie details
          </button>
        </div>
      </div>
    </Modal>
    </>
  );
};

export default TrackRequsitionModal;
