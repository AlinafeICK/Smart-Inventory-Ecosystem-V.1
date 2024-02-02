import { faChalkboardTeacher, faTasks, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import ActionsComponent from './cores/ActionComponent';

const CRMComponent = () => {
  const [showAgenda, setShowAgenda] = useState(false);
  const [showContabilidad, setShowContabilidad] = useState(false);
  const [showInformes, setShowInformes] = useState(false);
  const [showDocumentacion, setShowDocumentacion] = useState(false);
  const actions = [
    { title: 'Make Aquisition', icon: faChalkboardTeacher },
    { title: 'Track Aquisition', icon: faTasks },
    { title: 'All Past Aquisitions', icon: faUserPlus },
  ];

  return (
    <div className="bg-gray-100">
      {/* Navegación Superior */}
      <nav className="bg-blue-500 p-4 flex items-center justify-between">
        <div>
          <h1 className="text-white text-xl font-semibold">S I E</h1>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-white">Employee 1</span>
          <i className="fas fa-user-circle text-white text-2xl"></i>
        </div>
      </nav>

      {/* Navegación lateral */}
      <main className="  flex bg-white">
      <aside className="bg-gray-800 text-white w-40 min-h-screen p-4">
        <nav>
          <ul className="space-y-2">
            <li className="opcion-con-desplegable">
              <div
                className="flex items-center justify-between p-2 hover:bg-gray-700"
                onClick={() => setShowAgenda(!showAgenda)}
              >
                <div className="flex items-center">
                  <i className="fas fa-calendar-alt mr-2"></i>
                  <span>In stock</span>
                </div>
                <i className={`fas fa-chevron-down text-xs ${showAgenda ? 'transform rotate-180' : ''}`}></i>
              </div>
              <ul className={`desplegable ml-4 ${showAgenda ? '' : 'hidden'}`}>
                <li>
                  <a href="#" className="block p-2 hover:bg-gray-700 flex items-center">
                    <i className="fas fa-chevron-right mr-2 text-xs"></i>
                    Poll
                  </a>
                </li>
                <li>
                  <a href="#" className="block p-2 hover:bg-gray-700 flex items-center">
                    <i className="fas fa-chevron-right mr-2 text-xs"></i>
                    Stationary
                  </a>
                </li>
              </ul>
            </li>
            <li className="opcion-con-desplegable">
              <div
                className="flex items-center justify-between p-2 hover:bg-gray-700"
                onClick={() => setShowContabilidad(!showContabilidad)}
              >
                <div className="flex items-center">
                  <i className="fas fa-money-bill-wave mr-2"></i>
                  <span>Accounting</span>
                </div>
                <i className={`fas fa-chevron-down text-xs ${showContabilidad ? 'transform rotate-180' : ''}`}></i>
              </div>
              <ul className={`desplegable ml-4 ${showContabilidad ? '' : 'hidden'}`}>
                <li>
                  <a href="#" className="block p-2 hover:bg-gray-700 flex items-center">
                    <i className="fas fa-chevron-right mr-2 text-xs"></i>
                    Transport
                  </a>
                </li>
                <li>
                  <a href="#" className="block p-2 hover:bg-gray-700 flex items-center">
                    <i className="fas fa-chevron-right mr-2 text-xs"></i>
                    Aution
                  </a>
                </li>
                <li>
                  <a href="#" className="block p-2 hover:bg-gray-700 flex items-center">
                    <i className="fas fa-chevron-right mr-2 text-xs"></i>
                    Bills
                  </a>
                </li>
              </ul>
            </li>
            <li className="opcion-con-desplegable">
              <div
                className="flex items-center justify-between p-2 hover:bg-gray-700"
                onClick={() => setShowInformes(!showInformes)}
              >
                <div className="flex items-center">
                  <i className="fas fa-chart-bar mr-2"></i>
                  <span>Reports</span>
                </div>
                <i className={`fas fa-chevron-down text-xs ${showInformes ? 'transform rotate-180' : ''}`}></i>
              </div>
              <ul className={`desplegable ml-4 ${showInformes ? '' : 'hidden'}`}>
                <li>
                  <a href="#" className="block p-2 hover:bg-gray-700 flex items-center">
                    <i className="fas fa-chevron-right mr-2 text-xs"></i>
                    Budgets
                  </a>
                </li>
                
              </ul>
            </li>
            <li className="opcion-con-desplegable">
              <div
                className="flex items-center justify-between p-2 hover:bg-gray-700"
                onClick={() => setShowDocumentacion(!showDocumentacion)}
              >
                <div className="flex items-center">
                  <i className="fas fa-file-alt mr-2"></i>
                  <span>Documentation</span>
                </div>
                <i className={`fas fa-chevron-down text-xs ${showDocumentacion ? 'transform rotate-180' : ''}`}></i>
              </div>
              <ul className={`desplegable ml-4 ${showDocumentacion ? '' : 'hidden'}`}>
                <li>
                  <a href="#" className="block p-2 hover:bg-gray-700 flex items-center">
                    <i className="fas fa-chevron-right mr-2 text-xs"></i>
                    Pending Signatures
                  </a>
                </li>
                <li>
                  <a href="#" className="block p-2 hover:bg-gray-700 flex items-center">
                    <i className="fas fa-chevron-right mr-2 text-xs"></i>
                    Documents
                  </a>
                </li>
              </ul>
            </li>
            {/* Agrega más enlaces para la navegación lateral */}
          </ul>
        </nav>
      </aside>

      {/* Contenido principal */}
      <div className="flex items-center mt-4">
          <ActionsComponent actions={actions} />
        </div>
      </main>
    </div>
  );
};

export default CRMComponent;
