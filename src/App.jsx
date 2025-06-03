import './App.css'
import Benefit1 from './Images/Benefit1.png'
import Benefit2 from './Images/Benefit2.png'
import Benefit3 from './Images/Benefit3.png'
import Benefit4 from './Images/Benefit4.png'
import Benefit5 from './Images/Benefit5.png'
import artmanagement from './Images/art-management.png'
import softwarehopping from './Images/software-integration.png'
import laptopdesk from './Images/laptop-desk.png'
import patientmanagement from './Images/patient-management.png'
import ivftracking from './Images/ivf-tracking.png'
import billing from './Images/billing.png'
import labmanagement from './Images/lab-management.png'
import reports from './Images/reporting.png'

import { useState } from 'react';



function App() {
  // Add state for managing expanded FAQ items
  const [expandedFaq, setExpandedFaq] = useState(0); // 0 is the index of the first FAQ

  // Toggle function for FAQ items
  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? -1 : index);
  };
  const handleClick = () => {
    alert("We will contact you soon");
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className= ":min-h-screen bg-white">
      {/* Header */}
      <header className= " bg-white shadow-sm">
        <nav className=" max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className=" text-2xl font-bold text-blue-600">LifeLinker</div>
          <button className='cursor-pointer relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full'  onClick={() => scrollToSection('home')}>Home</button>
          <button className='cursor-pointer relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full' onClick={() => scrollToSection('why-choose-us')}>Why Choose Us</button>
          <button className='cursor-pointer relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full' onClick={() => scrollToSection('benefits')}>Benefits</button>
          <button className='cursor-pointer relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full' onClick={() => scrollToSection('faqs')}>FAQs</button>
          <button className="bg-blue-600 text-white px-6 py-2 hover:bg-blue-700 rounded-2xl">
            WhatsApp us
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <main>
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl font-bold  mb-4">The Complete Management Software for Clinics</h1>
              <div className="bg-[#0B2447] text-amber-50 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Schedule a Free Demo</h2>
                <form className="space-y-4 ">
                  <input type="text" placeholder="Name" className="w-full px-4 py-2 rounded-md border text-shadow-amber-50 " />
                  <input type="email" placeholder="Email" className="w-full px-4 py-2 rounded-md border" />
                  <input type="tel" placeholder="Phone" className="w-full px-4 py-2 rounded-md border" />
                  <input type="text" placeholder="Clinic Name" className="w-full px-4 py-2 rounded-md border" />
                  <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
                    Schedule Now
                  </button>
                </form>
              </div>
            </div>
            {/* Feature Icons */}
           
           
<div className="grid grid-cols-2 md:grid-cols-3 gap-8">
   
  {/* In-Built CRM */}
  <div className="flex items-center gap-4">
    <div className="text-blue-400">
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    </div>
    <span className="text-gray-600 text-lg ">In-Built CRM</span>
  </div>

  {/* Patient Insight */}
  <div className="flex items-center gap-4">
    <div className="text-blue-400">
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    </div>
    <span className="text-gray-600 text-lg">Patient Insight</span>
  </div>

  {/* Custom Fit */}
  <div className="flex items-center gap-4">
    <div className="text-blue-400">
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    </div>
    <span className="text-gray-600 text-lg">Custom Fit</span>
  </div>

  {/* Easy Connect */}
  <div className="flex items-center gap-4">
    <div className="text-blue-400">
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    </div>
    <span className="text-gray-600 text-lg">Easy Connect</span>
  </div>

  {/* Info on-the-go */}
  <div className="flex items-center gap-4">
    <div className="text-blue-400">
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    </div>
    <span className="text-gray-600 text-lg">Info on-the-go</span>
  </div>

  {/* Data Transfer */}
  <div className="flex items-center gap-4">
    <div className="text-blue-400">
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    </div>
    <span className="text-gray-600 text-lg">Data Transfer</span>
  </div>
</div>
          </div>
        </div>

        {/* New Features Section */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Data Protection */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-blue-500 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Data Protection</h3>
              <p className="text-gray-500">Protect Data Leakage With Strict Data Protection</p>
            </div>

            {/* Built In Task Manager */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-blue-500 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Built In Task Manager</h3>
              <p className="text-gray-500">Never Miss a Task, Get Notified at Each Approval</p>
            </div>

            {/* Easy Walkthrough */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-blue-500 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Easy Walkthrough</h3>
              <p className="text-gray-500">Access Patient Info Anytime, From any Screen</p>
            </div>

            {/* Map Patients Journey */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-blue-500 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Map Patients Journey</h3>
              <p className="text-gray-500">Step Linked Progression Bar to Know Milestones</p>
            </div>

            {/* One Stop Solution */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-blue-500 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">One Stop Solution</h3>
              <p className="text-gray-500">No Need For Multiple Software Just Use One</p>
            </div>

            {/* AI Integration */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-blue-500 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">AI Integration</h3>
              <p className="text-gray-500">TTS and AI Integrated to Reduce Humane Error</p>
            </div>
          </div>
        </div>

        // Why Choose Us section
        <section id="why-choose-us">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-blue-600 mb-8">Why Choose Us?</h2>
            <div className="space-y-6">
              {/* Item 1 */}
              <div className="flex items-start gap-6 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                  <img 
                    src={patientmanagement}
                    alt="Patient Management" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">1. Seamless Patient Management</h3>
                  <p className="text-gray-600">Effortlessly manage patient records, appointments, communications and history in a centralized, secure platform tailored for IVF clinics, enhancing efficiency <span className="text-blue-400 cursor-pointer">Read More.</span></p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-6 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                  <img 
                    src={ivftracking} 
                    alt="IVF Cycle Tracking" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">2. Detailed IVF Cycle Tracking</h3>
                  <p className="text-gray-600">Track each stage of the IVF cycle, from egg retrieval to embryo transfer, with real-time updates and data-driven insights for better outcomes. improving decision <span className="text-blue-400 cursor-pointer">Read More.</span></p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start gap-6 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                  <img 
                    src={billing} 
                    alt="Billing & Finance" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">3. Automated Billing & Finance Integration</h3>
                  <p className="text-gray-600">Streamline complex IVF billing processes with automated milestone-based, package billing and insurance management in one easy-to-use system, reducing <span className="text-blue-400 cursor-pointer">Read More.</span></p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex items-start gap-6 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                  <img 
                    src={labmanagement} 
                    alt="Lab Management" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">4. Lab Management</h3>
                  <p className="text-gray-600">Optimize lab operations by tracking embryo development, managing cryostorage and maintaining compliance with laboratory standards, all while ensuring <span className="text-blue-400 cursor-pointer">Read More.</span></p>
                </div>
              </div>

              {/* Item 5 */}
              <div className="flex items-start gap-6 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                  <img 
                    src={reports} 
                    alt="Reporting & Compliance" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">5. Reporting & Compliance</h3>
                  <p className="text-gray-600">Generate accurate, automated reports and ensure your clinic meets regulatory standards while tracking performance metrics and patient outcomes <span className="text-blue-400 cursor-pointer">Read More.</span></p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Benefits Section */}
        <section id="benefits" className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Benefits You Will Gain</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {/* First Benefit with Image */}
              <div className="text-center">
                <div className="w-28 h-28 mx-auto mb-4 overflow-hidden ">
                  <img 
                    src={Benefit1}
                    alt="Optimize operations" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold">Optimize <span className='text-blue-500'>Operations</span></h3>
              </div>
              {/* Second Benefit with Image */}
              <div className="text-center">
                <div className="w-28 h-28 mx-auto mb-4 overflow-hidden ">
                  <img 
                    src={Benefit2}
                    alt="Levarage CRM" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold">Leverage <span className='text-blue-500'> CRM </span></h3>
              </div>
              {/*Third Benefit with Image*/}
              <div className="text-center">
                <div className="w-28 h-28 mx-auto mb-4 overflow-hidden ">
                  <img 
                    src={Benefit3}
                    alt="Simplify Financial Processes" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold">Simplify <span className='text-blue-500'> Financial Processes </span></h3>
              </div>

              {/*Fourth Benefit with Image*/}
              <div className="text-center">
                <div className="w-28 h-28 mx-auto mb-4 overflow-hidden ">
                  <img 
                    src={Benefit4}
                    alt="Simplify Financial Processes" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold">Enhanced <span className="text-blue-400">Data Security </span></h3>
              </div>

              {/*Fifth Benefit with Image*/}   
              <div className="text-center">
                <div className="w-28 h-28 mx-auto mb-4 overflow-hidden ">
                  <img 
                    src={Benefit5}
                    alt="Simplify Financial Processes" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold">Forever <span className='text-blue-500'>Medical Records</span></h3>
              </div>

              
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section id="faqs" className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-blue-600 text-center mb-12">FAQs</h2>
            
            {/* Laptop Image */}
            <div className="mb-12 rounded-lg overflow-hidden shadow-lg">
              <img 
                src={laptopdesk} 
                alt="Laptop on desk with plant" 
                className="w-full h-auto "
              />
            </div>

            {/* FAQ Items */}
            <div className="space-y-4 mb-8">
              {/* FAQ Item 1 */}
              <div className="border rounded-lg overflow-hidden bg-white shadow-sm">
                <button 
                  className="w-full p-6 text-left flex justify-between items-center"
                  onClick={() => toggleFaq(0)}
                >
                  <h3 className="text-xl font-semibold text-blue-600">What features does LifeLinkr software include for clinics?</h3>
                  <svg 
                    className={`w-6 h-6 text-blue-600 transform transition-transform ${expandedFaq === 0 ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedFaq === 0 && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">LifeLinkr includes patient management, appointment scheduling, billing, EHR, and customizable dashboards to streamline clinic operations.</p>
                  </div>
                )}
              </div>

              {/* FAQ Item 2 */}
              <div className="border rounded-lg overflow-hidden bg-white shadow-sm">
                <button 
                  className="w-full p-6 text-left flex justify-between items-center"
                  onClick={() => toggleFaq(1)}
                >
                  <h3 className="text-xl font-semibold text-blue-600">Is LifeLinkr software suitable for individual doctors?</h3>
                  <svg 
                    className={`w-6 h-6 text-blue-600 transform transition-transform ${expandedFaq === 1 ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedFaq === 1 && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">Yes, LifeLinkr is designed to be scalable and can be effectively used by individual practitioners.</p>
                  </div>
                )}
              </div>

              {/* FAQ Item 3 */}
              <div className="border rounded-lg overflow-hidden bg-white shadow-sm">
                <button 
                  className="w-full p-6 text-left flex justify-between items-center"
                  onClick={() => toggleFaq(2)}
                >
                  <h3 className="text-xl font-semibold text-blue-600">How secure is patient data in LifeLinkr software?</h3>
                  <svg 
                    className={`w-6 h-6 text-blue-600 transform transition-transform ${expandedFaq === 2 ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedFaq === 2 && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">LifeLinkr employs industry-standard encryption and security measures to protect patient data.</p>
                  </div>
                )}
              </div>

              {/* FAQ Item 4 */}
              <div className="border rounded-lg overflow-hidden bg-white shadow-sm">
                <button 
                  className="w-full p-6 text-left flex justify-between items-center"
                  onClick={() => toggleFaq(3)}
                >
                  <h3 className="text-xl font-semibold text-blue-600">Can I customize the LifeLinkr dashboard style?</h3>
                  <svg 
                    className={`w-6 h-6 text-blue-600 transform transition-transform ${expandedFaq === 3 ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedFaq === 3 && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">Yes, LifeLinkr offers extensive customization options for dashboard layouts and appearances.</p>
                  </div>
                )}
              </div>

              {/* Repeat the same pattern for the last FAQ item */}
              {/* FAQ Item 5 structure remains the same, just update the index in onClick and expandedFaq check */}
            </div>
            
            

            {/* Load More Link */}
            <div className="text-center">
              <button className="text-blue-500 hover:text-blue-600 font-medium">Load More</button>
            </div>
          </div>
        </section>

        {/* Demo Scheduling Form */}
        <section className="py-12 bg-[#0B2447] text-white">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-2">Schedule a Free Demo</h2>
            <p className="text-center mb-8">
              Experience Seamless <span className="text-[#FFB800]">Healthcare Management</span>
              <br />with LifeLinkr
            </p>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Full Name*"
                    className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-full text-white placeholder-white/70 focus:outline-none focus:border-white"
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Email Address*"
                    className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-full text-white placeholder-white/70 focus:outline-none focus:border-white"
                  />
                </div>
                <div className="relative">
                  <input
                    type="tel"
                    placeholder="Phone Number*"
                    className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-full text-white placeholder-white/70 focus:outline-none focus:border-white"
                  />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="WhatsApp Number"
                    className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-full text-white placeholder-white/70 focus:outline-none focus:border-white"
                  />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Clinic Name*"
                    className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-full text-white placeholder-white/70 focus:outline-none focus:border-white"
                  />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Country*"
                    className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-full text-white placeholder-white/70 focus:outline-none focus:border-white"
                  />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="City*"
                    className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-full text-white placeholder-white/70 focus:outline-none focus:border-white"
                  />
                </div>
                <div className="relative">
                  <input
                    type="number"
                    placeholder="No. of User"
                    className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-full text-white placeholder-white/70 focus:outline-none focus:border-white"
                  />
                </div>
              </div>
              
              <div className="relative">
                <input
                  type="text"
                  placeholder="Currently Using Any Software?*"
                  className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-full text-white placeholder-white/70 focus:outline-none focus:border-white"
                />
              </div>
              
              <div className="relative">
                <textarea
                  placeholder="Message*"
                  rows="4"
                  className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-3xl text-white placeholder-white/70 focus:outline-none focus:border-white"
                ></textarea>
              </div>
              
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="terms"
                  className="w-4 h-4 rounded border-white/30"
                />
                <label htmlFor="terms" className="text-sm">
                  I agree and accept the <span className="text-[#FFB800]">Terms & Conditions</span>
                </label>
              </div>
              
              <button onClick={handleClick}
                type="submit"
                className="w-full bg-white text-[#0B2447] py-3 rounded-full font-semibold hover:bg-white/90 flex items-center justify-center gap-2 group"
              >
                Schedule Demo
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </form>
          </div>
        </section>

        {/* Managing ART Section */}
        <section className="scroll-animation py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-blue-600 mb-6">Managing ART Made Hassle Free</h2>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    Comprehensive and secure platform for managing IVF and reproductive health information.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    Centralizes patient data, lab records, treatment cycles, and financial information.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    Designed specifically for fertility clinics, making critical information easily accessible.
                  </li>
                </ul>
                <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 flex items-center gap-2">
                  Schedule Demo
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              <div className="md:w-1/2">
                <img src={artmanagement} alt="ART Management Interface" className="w-full rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Software Hopping Section */}
        <section className="scroll-animation bg-gray-50 py-12 [animation-delay:900ms]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-blue-600 mb-6">Stay Focused, No More Software Hopping</h2>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    Eliminates the need for multiple standalone systems by integrating essential functions into one platform.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    Includes HR, payroll, accounting, bank reconciliation, and inventory management tools.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    Provides comprehensive solutions for billing, patient management, pharmacy tracking, and bookkeeping.
                  </li>
                </ul>
                <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 flex items-center gap-2">
                  Schedule Demo
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              <div className="md:w-1/2">
                <img src={softwarehopping} alt="Software Integration" className="w-full rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="scroll-animation bg-white py-8 border-t [animation-delay:1000ms]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-center mb-6">
              <img src="/logo.png" alt="LifeLinkr Logo" className="h-8" />
            </div>
            <div className="text-center text-sm text-gray-500">
              <p className="mb-4">All Rights Reserved 2023-24 © Copyright - LifeLinkr</p>
              <div className="space-x-2">
                <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a> |
                <a href="#" className="text-blue-600 hover:underline">Ads Policy</a> |
                <a href="#" className="text-blue-600 hover:underline">Data Privacy</a> |
                <a href="#" className="text-blue-600 hover:underline">Disclaimer</a> |
                <a href="#" className="text-blue-600 hover:underline">User Agreement</a> |
                <a href="#" className="text-blue-600 hover:underline">Intellectual Property Rights</a> |
                <a href="#" className="text-blue-600 hover:underline">Cookie Policy</a> |
                <a href="#" className="text-blue-600 hover:underline">Refund Policy</a> |
                <a href="#" className="text-blue-600 hover:underline">Contact Information</a> |
                <a href="#" className="text-blue-600 hover:underline">Accessibility Statement</a> |
                <a href="#" className="text-blue-600 hover:underline">Security Policy</a> |
                <a href="#" className="text-blue-600 hover:underline">GDPR Compliance</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App

