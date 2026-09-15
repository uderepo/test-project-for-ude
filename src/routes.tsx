import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScreenHome from './pages/Screen-home/Screen';
import ScreenAbout from './pages/Screen-about/Screen';
import ScreenPricing from './pages/Screen-pricing/Screen';
import ScreenContact from './pages/Screen-contact/Screen';

/**
 * Адреса экранов приложения.
 *
 * Файл ведёт редактор: экран добавляется, переименовывается и удаляется вместе
 * со своим адресом. Править вручную можно — адрес в этом файле и есть истина.
 */
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ScreenHome />} />
        <Route path="/about/:recordKey?" element={<ScreenAbout />} />
        <Route path="/pricing/:recordKey?" element={<ScreenPricing />} />
        <Route path="/contact/:recordKey?" element={<ScreenContact />} />
        <Route path="*" element={<p>Page not found</p>} />
      </Routes>
    </BrowserRouter>
  );
}
