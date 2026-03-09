import { useEffect } from 'react';
import './App.css';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Policy from './sections/Policy';
import Market from './sections/Market';
import ShareholderBackground from './sections/ShareholderBackground';
import About from './sections/About';
import Solutions from './sections/Solutions';
import Tech from './sections/Tech';
import Projects from './sections/Projects';
import GridPerformance from './sections/GridPerformance';
import Business from './sections/Business';
import BoundaryConditions from './sections/BoundaryConditions';
import JointDevelopment from './sections/JointDevelopment';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  useEffect(() => {
    // Smooth scroll polyfill for older browsers
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>
        {/* Hero Section - 首页主视觉 */}
        <div id="hero">
          <Hero />
        </div>

        {/* Policy Section - 国家政策背景 */}
        <Policy />

        {/* Market Section - 行业市场机遇 */}
        <Market />

        {/* Shareholder Background Section - 股东背景 */}
        <ShareholderBackground />

        {/* About Section - 企业介绍 */}
        <About />

        {/* Solutions Section - 业务介绍/解决方案 */}
        <Solutions />

        {/* Tech Section - 技术实力 */}
        <Tech />

        {/* Projects Section - 项目案例 */}
        <Projects />

        {/* Grid Performance Section - 并网业绩 */}
        <GridPerformance />

        {/* Business Section - 合作模式/商业战略 */}
        <Business />

        {/* Boundary Conditions Section - 储能边界条件 */}
        <BoundaryConditions />

        {/* Joint Development Section - 联合开发模式 */}
        <JointDevelopment />

        {/* Contact Section - 联系我们 */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
