import React, { useState } from 'react';
import './App.css';
import MasterDataInput from './components/masterdatainput';
import DetailedAssessmentThreats from './components/detailedassessment';
import MettQuestionsScores from './components/mettquestions';

const App = () => {
  // Page toggle karne ke liye state
  const [currentPage, setCurrentPage] = useState('dashboard');

  return (
    <>
      <div className="app-container">
        <input
          type="checkbox"
          id="sidebar-toggle"
          className="sidebar-toggle-checkbox"
        />

        <aside className="sidebar">
          <div className="sidebar-header">Mett-4</div>
          <ul className="sidebar-nav">
            <li>
              <a 
                className={currentPage === 'dashboard' ? 'active' : ''} 
                href="/Dashboard"
                onClick={(e) => { e.preventDefault(); setCurrentPage('dashboard'); }}
              >
                Dashboard
              </a>
            </li>
            <li>
              <a 
                className={currentPage === 'masterdatainput' ? 'active' : ''} 
                href="/masterdatainput"
                onClick={(e) => { e.preventDefault(); setCurrentPage('masterdatainput'); }}
              >
                Master Data Input
              </a>
            </li>
            <li>
             <a 
                className={currentPage === 'detailedassessment' ? 'active' : ''} 
                href="/detailedassessment"
                onClick={(e) => { e.preventDefault(); setCurrentPage('detailedassessment'); }}
              >
                Detailed Assessment
              </a>
            </li>
            <li>
               <a 
                className={currentPage === 'mettquestions' ? 'active' : ''} 
                href="/mettquestions"
                onClick={(e) => { e.preventDefault(); setCurrentPage('mettquestions'); }}
              >
                Mett Questions and Scores
              </a>
            </li>
            <li>
              <a href="#settings">Settings</a>
            </li>
          </ul>
        </aside>

        <div className="main-wrapper">
          <nav className="navbar">
            <label htmlFor="sidebar-toggle" className="menu-toggle-btn">
              &#9776;
            </label>
            <div className="navbar-brand">
              {currentPage === 'dashboard' 
                ? 'My Dashboard' 
                : currentPage === 'masterdatainput' 
                ? 'Site Report - Master Data Input' 
                : 'Detailed Assessment of Threats'}
            </div>
          </nav>
          
          {/* Conditional Rendering: currentPage ke hisaab se component ya dashboard dikhega */}
          {currentPage === 'masterdatainput' ? (
            <div style={{ padding: '20px', width: '100%' }}>
              <MasterDataInput />
            </div>
          ) : currentPage === 'detailedassessment' ? (
            <div style={{ padding: '20px', width: '100%' }}>
              <DetailedAssessmentThreats />
            </div>
          ) : currentPage === 'mettquestions' ? (
            <div style={{ padding: '20px', width: '100%' }}>
              <MettQuestionsScores />
            </div>
          ) : (

            <div className="dashboard-container">
              <div className="top-header-bar">
                <span>0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1/0/1900</span>
                <a href="#mett-questions">METT 4 questions and scores</a>
              </div>

              <div className="dashboard-grid">
                {/* 1. METT scores per management element */}
                <div className="card col-4">
                  <div className="card-header">1. METT scores per management element</div>
                  <div className="card-body">
                    <svg width="280" height="230" viewBox="0 0 300 250">
                      <polygon points="150,40 235,105 202,202 98,202 65,105" fill="none" stroke="#D0D5D5" strokeWidth="1" />
                      <polygon points="150,58 218,110 191,188 108,188 82,110" fill="none" stroke="#D0D5D5" strokeWidth="1" />
                      <polygon points="150,76 201,115 181,173 119,173 99,115" fill="none" stroke="#D0D5D5" strokeWidth="1" />
                      <polygon points="150,94 184,120 170,159 130,159 116,120" fill="none" stroke="#D0D5D5" strokeWidth="1" />
                      <polygon points="150,112 167,125 160,145 140,145 133,125" fill="none" stroke="#D0D5D5" strokeWidth="1" />

                      <line x1="150" y1="130" x2="150" y2="40" stroke="#D0D5D5" strokeWidth="1" />
                      <line x1="150" y1="130" x2="235" y2="105" stroke="#D0D5D5" strokeWidth="1" />
                      <line x1="150" y1="130" x2="202" y2="202" stroke="#D0D5D5" strokeWidth="1" />
                      <line x1="150" y1="130" x2="98" y2="202" stroke="#D0D5D5" strokeWidth="1" />
                      <line x1="150" y1="130" x2="65" y2="105" stroke="#D0D5D5" strokeWidth="1" />

                      <polygon points="150,40 235,105 202,202 98,202 65,105" fill="none" stroke="#C27D38" strokeWidth="2.5" />

                      <text x="150" y="28" textAnchor="middle" fontSize="10" fill="#333">Planning</text>
                      <text x="242" y="108" textAnchor="start" fontSize="10" fill="#333">Inputs</text>
                      <text x="206" y="215" textAnchor="start" fontSize="10" fill="#333">Process</text>
                      <text x="94" y="215" textAnchor="end" fontSize="10" fill="#333">Outputs</text>
                      <text x="58" y="108" textAnchor="end" fontSize="10" fill="#333">Outcomes</text>
                    </svg>

                    <div className="legend-group">
                      <div className="legend-item">
                        <span className="legend-color-box" style={{ backgroundColor: '#2F6F74' }}></span>
                        <span>Your Element %</span>
                      </div>
                      <div className="legend-item">
                        <span className="legend-color-box" style={{ backgroundColor: '#C27D38' }}></span>
                        <span>Max %</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. METT scores per management element */}
                <div className="card col-4">
                  <div className="card-header">2. METT scores per management element</div>
                  <div className="card-body">
                    <svg width="280" height="220" viewBox="0 0 280 200">
                      <line x1="30" y1="160" x2="270" y2="160" stroke="#CCCCCC" />
                      <line x1="30" y1="115" x2="270" y2="115" stroke="#EAEAEA" />
                      <line x1="30" y1="70" x2="270" y2="70" stroke="#EAEAEA" />
                      <line x1="30" y1="25" x2="270" y2="25" stroke="#EAEAEA" />

                      <text x="22" y="163" fontSize="9" textAnchor="end" fill="#666">0</text>
                      <text x="22" y="118" fontSize="9" textAnchor="end" fill="#666">20</text>
                      <text x="22" y="73" fontSize="9" textAnchor="end" fill="#666">40</text>
                      <text x="22" y="28" fontSize="9" textAnchor="end" fill="#666">60</text>

                      <rect x="42" y="113" width="14" height="47" fill="#386E74" />
                      <text x="49" y="106" fontSize="9" textAnchor="middle">21</text>

                      <rect x="90" y="120" width="14" height="40" fill="#F4B183" />
                      <text x="97" y="113" fontSize="9" textAnchor="middle">18</text>

                      <rect x="138" y="25" width="14" height="135" fill="#A5DEE5" />
                      <text x="145" y="18" fontSize="9" textAnchor="middle">60</text>

                      <rect x="186" y="126" width="14" height="34" fill="#F8CBAD" />
                      <text x="193" y="119" fontSize="9" textAnchor="middle">15</text>

                      <rect x="234" y="133" width="14" height="27" fill="#E2F0D9" />
                      <text x="241" y="126" fontSize="9" textAnchor="middle">12</text>

                      <text x="49" y="176" fontSize="9" textAnchor="middle">Planning</text>
                      <text x="97" y="176" fontSize="9" textAnchor="middle">Inputs</text>
                      <text x="145" y="176" fontSize="9" textAnchor="middle">Process</text>
                      <text x="193" y="176" fontSize="9" textAnchor="middle">Outputs</text>
                      <text x="241" y="176" fontSize="9" textAnchor="middle">Outcomes</text>
                    </svg>

                    <div className="legend-group">
                      <div className="legend-item">
                        <span className="legend-color-box" style={{ backgroundColor: '#386E74' }}></span>
                        <span>Your Element Score</span>
                      </div>
                      <div className="legend-item">
                        <span className="legend-color-box" style={{ backgroundColor: '#F4B183' }}></span>
                        <span>Maximum Element Score</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. METT scores per management element (per cent) */}
                <div className="card col-4">
                  <div className="card-header">3. METT scores per management element (per cent)</div>
                  <div className="card-body" style={{ padding: '8px' }}>
                    <table className="data-table">
                      <thead>
                        <tr>
                          <th>Element</th>
                          <th>Your Element Score</th>
                          <th>Maximum Element</th>
                          <th>Your Element %</th>
                          <th>Max %</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="row-planning">
                          <td style={{ textAlign: 'left' }}>Planning</td>
                          <td>0</td>
                          <td>21</td>
                          <td>0.00%</td>
                          <td>100.00%</td>
                        </tr>
                        <tr className="row-inputs">
                          <td style={{ textAlign: 'left' }}>Inputs</td>
                          <td>0</td>
                          <td>18</td>
                          <td>0.00%</td>
                          <td>100.00%</td>
                        </tr>
                        <tr className="row-process">
                          <td style={{ textAlign: 'left' }}>Process</td>
                          <td>0</td>
                          <td>60</td>
                          <td>0.00%</td>
                          <td>100.00%</td>
                        </tr>
                        <tr className="row-outputs">
                          <td style={{ textAlign: 'left' }}>Outputs</td>
                          <td>0</td>
                          <td>15</td>
                          <td>0.00%</td>
                          <td>100.00%</td>
                        </tr>
                        <tr className="row-outcomes">
                          <td style={{ textAlign: 'left' }}>Outcomes</td>
                          <td>0</td>
                          <td>12</td>
                          <td>0.00%</td>
                          <td>100.00%</td>
                        </tr>
                        <tr className="row-total">
                          <td style={{ textAlign: 'left' }}>Total</td>
                          <td>0</td>
                          <td>126</td>
                          <td>0.00%</td>
                          <td>100.00%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 4. Threats */}
                <div className="card col-4">
                  <div className="card-header">4. Threats</div>
                  <div className="card-body" style={{ alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                    <svg width="100%" height="270" viewBox="0 0 340 270">
                      <g stroke="#EAEAEA" strokeWidth="1">
                        <line x1="160" y1="20" x2="160" y2="240" />
                        <line x1="192" y1="20" x2="192" y2="240" />
                        <line x1="224" y1="20" x2="224" y2="240" />
                        <line x1="256" y1="20" x2="256" y2="240" />
                        <line x1="288" y1="20" x2="288" y2="240" />
                        <line x1="320" y1="20" x2="320" y2="240" />
                      </g>

                      <text x="160" y="12" fontSize="8" textAnchor="middle">0%</text>
                      <text x="192" y="12" fontSize="8" textAnchor="middle">20%</text>
                      <text x="224" y="12" fontSize="8" textAnchor="middle">40%</text>
                      <text x="256" y="12" fontSize="8" textAnchor="middle">60%</text>
                      <text x="288" y="12" fontSize="8" textAnchor="middle">80%</text>
                      <text x="320" y="12" fontSize="8" textAnchor="middle">100%</text>

                      <text x="152" y="30" fontSize="6.5" textAnchor="end" fill="#333">1. Residential & commercial development</text>
                      <text x="152" y="46" fontSize="6.5" textAnchor="end" fill="#333">2. Agriculture and aquaculture</text>
                      <text x="152" y="62" fontSize="6.5" textAnchor="end" fill="#333">3. Energy production and mining</text>
                      <text x="152" y="78" fontSize="6.5" textAnchor="end" fill="#333">4. Transportation and service corridors</text>
                      <text x="152" y="94" fontSize="6.5" textAnchor="end" fill="#333">5. Biological resource use and harm</text>
                      <text x="152" y="110" fontSize="6.5" textAnchor="end" fill="#333">6. Human intrusions and disturbance</text>
                      <text x="152" y="126" fontSize="6.5" textAnchor="end" fill="#333">7. Natural system modifications</text>
                      <text x="152" y="142" fontSize="6.5" textAnchor="end" fill="#333">8. Invasive and problematic species</text>
                      <text x="152" y="158" fontSize="6.5" textAnchor="end" fill="#333">9. Pollution entering or generated</text>
                      <text x="152" y="174" fontSize="6.5" textAnchor="end" fill="#333">10. Geological events</text>
                      <text x="152" y="190" fontSize="6.5" textAnchor="end" fill="#333">11. Climate change and severe weather</text>
                      <text x="152" y="206" fontSize="6.5" textAnchor="end" fill="#333">12. Cultural and social threats</text>
                      <text x="152" y="222" fontSize="6.5" textAnchor="end" fill="#333">13. Governance problems</text>
                      <text x="152" y="238" fontSize="6.5" textAnchor="end" fill="#333">14. Other</text>

                      <g fontSize="7" fill="#666">
                        <text x="162" y="30">0%</text>
                        <text x="162" y="46">0%</text>
                        <text x="162" y="62">0%</text>
                        <text x="162" y="78">0%</text>
                        <text x="162" y="94">0%</text>
                        <text x="162" y="110">0%</text>
                        <text x="162" y="126">0%</text>
                        <text x="162" y="142">0%</text>
                        <text x="162" y="158">0%</text>
                        <text x="162" y="174">0%</text>
                        <text x="162" y="190">0%</text>
                        <text x="162" y="206">0%</text>
                        <text x="162" y="222">0%</text>
                        <text x="162" y="238">0%</text>
                      </g>
                    </svg>

                    <div className="legend-group" style={{ width: '100%' }}>
                      <div className="legend-item">
                        <span className="legend-color-box" style={{ backgroundColor: '#F4B183' }}></span>
                        <span>Extent %</span>
                      </div>
                      <div className="legend-item">
                        <span className="legend-color-box" style={{ backgroundColor: '#386E74' }}></span>
                        <span>Severity %</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Vertical Stack: Threat Extent & Severity */}
                <div className="col-4 vertical-stack">
                  <div className="card">
                    <div className="card-header">5. Threat Extent</div>
                    <div className="card-body">
                      <div className="donut-wrapper">
                        <svg width="100" height="100" viewBox="0 0 100 100">
                          <circle cx="50" cy="50" r="36" fill="none" stroke="#5B9BD5" strokeWidth="18" />
                          <text x="50" y="54" fontSize="12" fontWeight="bold" textAnchor="middle" fill="#FFFFFF">0%</text>
                        </svg>
                        <div className="legend-group" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '4px' }}>
                          <div className="legend-item">
                            <span className="legend-color-box" style={{ backgroundColor: '#ED7D31' }}></span>
                            <span>Very High</span>
                          </div>
                          <div className="legend-item">
                            <span className="legend-color-box" style={{ backgroundColor: '#A5A5A5' }}></span>
                            <span>High</span>
                          </div>
                          <div className="legend-item">
                            <span className="legend-color-box" style={{ backgroundColor: '#FFC000' }}></span>
                            <span>Medium</span>
                          </div>
                          <div className="legend-item">
                            <span className="legend-color-box" style={{ backgroundColor: '#5B9BD5' }}></span>
                            <span>Low</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header">6. Threat Severity</div>
                    <div className="card-body">
                      <div className="donut-wrapper">
                        <svg width="100" height="100" viewBox="0 0 100 100">
                          <circle cx="50" cy="50" r="36" fill="none" stroke="#5B9BD5" strokeWidth="18" />
                          <text x="50" y="54" fontSize="12" fontWeight="bold" textAnchor="middle" fill="#FFFFFF">0%</text>
                        </svg>
                        <div className="legend-group" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '4px' }}>
                          <div className="legend-item">
                            <span className="legend-color-box" style={{ backgroundColor: '#ED7D31' }}></span>
                            <span>Very High</span>
                          </div>
                          <div className="legend-item">
                            <span className="legend-color-box" style={{ backgroundColor: '#A5A5A5' }}></span>
                            <span>High</span>
                          </div>
                          <div className="legend-item">
                            <span className="legend-color-box" style={{ backgroundColor: '#FFC000' }}></span>
                            <span>Medium</span>
                          </div>
                          <div className="legend-item">
                            <span className="legend-color-box" style={{ backgroundColor: '#5B9BD5' }}></span>
                            <span>Low</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 7. Condition of values */}
                <div className="card col-4">
                  <div className="card-header">7. Condition of values</div>
                  <div className="card-body" style={{ padding: '8px', justifyContent: 'flex-start' }}>
                    <table className="data-table striped">
                      <thead>
                        <tr>
                          <th>Main value</th>
                          <th>Condition</th>
                          <th>Trend</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td>0</td><td>0</td><td>0</td></tr>
                        <tr><td>0</td><td>0</td><td>0</td></tr>
                        <tr><td>0</td><td>0</td><td>0</td></tr>
                        <tr><td>0</td><td>0</td><td>0</td></tr>
                        <tr><td>0</td><td>0</td><td>0</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 8. Status and trend in key indicator species */}
                <div className="card col-6">
                  <div className="card-header">8. Status and trend in key indicator species</div>
                  <div className="card-body" style={{ padding: '8px', justifyContent: 'flex-start' }}>
                    <table className="data-table striped">
                      <thead>
                        <tr>
                          <th>Species</th>
                          <th>Range</th>
                          <th>Population size</th>
                          <th>Pop process</th>
                          <th>Habitat area</th>
                          <th>Habitat quality</th>
                          <th>Extent of threats</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
                        <tr><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
                        <tr><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
                        <tr><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
                        <tr><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 9. Status and trend in habitats */}
                <div className="card col-6">
                  <div className="card-header">9. Status and trend in habitats</div>
                  <div className="card-body" style={{ padding: '8px', justifyContent: 'flex-start' }}>
                    <table className="data-table striped">
                      <thead>
                        <tr>
                          <th>Key habitats</th>
                          <th>Range</th>
                          <th>Area of habitat</th>
                          <th>Structure and function</th>
                          <th>Extent of threats</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
                        <tr><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
                        <tr><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
                        <tr><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
                        <tr><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default App;