import React from 'react';
import Book from './pages/Book';

const App: React.FC = () => {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-stone-100">
      <div className="flex-1 h-full overflow-y-auto overflow-x-hidden">
        <Book />
      </div>

      {/* Indicador de carregamento/fase no mobile */}
      <div className="md:hidden absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-forest to-brand-gold z-50"></div>
    </div>
  );
};

export default App;
