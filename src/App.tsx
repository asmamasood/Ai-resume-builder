// import { useState } from 'react';
// import { Navbar } from './components/Navbar';
// import { HomePage } from './components/HomePage';
// import { TemplatesPage } from './components/TemplatesPage';
// import { EditorPage } from './components/EditorPage';
// import { PricingPage } from './components/PricingPage';
// import { DashboardPage } from './components/DashboardPage';

// type Page = 'home' | 'templates' | 'editor' | 'pricing' | 'dashboard';

// export default function App() {
//   const [currentPage, setCurrentPage] = useState<Page>('home');

//   const renderPage = () => {
//     switch (currentPage) {
//       case 'home':
//         return <HomePage onNavigate={setCurrentPage} />;
//       case 'templates':
//         return <TemplatesPage onNavigate={setCurrentPage} />;
//       case 'editor':
//         return <EditorPage onNavigate={setCurrentPage} />;
//       case 'pricing':
//         return <PricingPage onNavigate={setCurrentPage} />;
//       case 'dashboard':
//         return <DashboardPage onNavigate={setCurrentPage} />;
//       default:
//         return <HomePage onNavigate={setCurrentPage} />;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
//       {renderPage()}
//     </div>
//   );
// }



import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { TemplatesPage } from './components/TemplatesPage';
import { EditorPage } from './components/EditorPage';
import { PricingPage } from './components/PricingPage';
import { DashboardPage } from './components/DashboardPage';

type Page = 'home' | 'templates' | 'editor' | 'pricing' | 'dashboard';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={(page) => setCurrentPage(page as Page)} />;
      case 'templates':
        return <TemplatesPage onNavigate={(page) => setCurrentPage(page as Page)} />;
      case 'editor':
        return <EditorPage onNavigate={(page) => setCurrentPage(page as Page)} />;
      case 'pricing':
        return <PricingPage onNavigate={(page) => setCurrentPage(page as Page)} />;
      case 'dashboard':
        return <DashboardPage onNavigate={(page) => setCurrentPage(page as Page)} />;
      default:
        return <HomePage onNavigate={(page) => setCurrentPage(page as Page)} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage={currentPage} onNavigate={(page) => setCurrentPage(page as Page)} />
      {renderPage()}
    </div>
  );
}
