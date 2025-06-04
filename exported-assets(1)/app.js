// Application data from JSON
const applicationData = {
  "metadata": {
    "last_updated": "2025-06-03",
    "version": "2.0",
    "data_sources": [
      "USGS NAS Database",
      "iNaturalist API",
      "Illinois DNR",
      "Taylor & Redmer 1996",
      "Peters et al. 2023"
    ]
  },
  "expansion_timeline": [
    {"year": 1973, "counties": 1, "event": "First detection - Peoria Lake, Illinois River", "source": "Page 1985"},
    {"year": 1980, "counties": 3, "event": "Rock River system invaded", "source": "Taylor & Redmer 1996"},
    {"year": 1985, "counties": 8, "event": "Illinois bans possession - $2,500 fine", "source": "515 ILCS 5/5-25"},
    {"year": 1990, "counties": 15, "event": "Des Plaines River system", "source": "Taylor & Redmer 1996"},
    {"year": 1995, "counties": 22, "event": "Fox and Kankakee Rivers", "source": "Taylor & Redmer 1996"},
    {"year": 2000, "counties": 27, "event": "Northern Illinois saturated", "source": "Taylor & Redmer 1996"},
    {"year": 2008, "counties": 35, "event": "Southern expansion begins", "source": "IDNR 2023"},
    {"year": 2024, "counties": 42, "event": "eDNA detection pilot program", "source": "IDNR 2024"}
  ],
  "native_species": [
    {
      "name": "Virile Crayfish", 
      "scientific": "Faxonius virilis", 
      "size": "8-10 cm", 
      "habitat": "Lakes, rivers",
      "status": "70% decline",
      "source": "Taylor & Redmer 1996"
    },
    {
      "name": "Northern Clearwater", 
      "scientific": "Faxonius propinquus", 
      "size": "7-9 cm", 
      "habitat": "Streams",
      "status": "80% displaced", 
      "source": "Taylor & Redmer 1996"
    },
    {
      "name": "Calico Crayfish", 
      "scientific": "Faxonius immunis", 
      "size": "5-7 cm", 
      "habitat": "Wetlands",
      "status": "Fragmented populations",
      "source": "Field Museum Guide 2018"
    },
    {
      "name": "White River Crayfish",
      "scientific": "Procambarus acutus", 
      "size": "6-8 cm",
      "habitat": "Forest preserves", 
      "status": "Restricted range",
      "source": "Field Museum Guide 2018"
    }
  ],
  "ecological_impact": [
    {
      "component": "Native Crayfish", 
      "pre_invasion": 100, 
      "post_invasion": 25,
      "source": "Taylor & Redmer 1996; Olden et al. 2006"
    },
    {
      "component": "Aquatic Plants", 
      "pre_invasion": 100, 
      "post_invasion": 30,
      "source": "Lodge et al. 1994; Kreps et al. 2016"
    },
    {
      "component": "Invertebrates", 
      "pre_invasion": 100, 
      "post_invasion": 45,
      "source": "Wilson et al. 2004; Johnson et al. 2009"
    },
    {
      "component": "Water Quality", 
      "pre_invasion": 100, 
      "post_invasion": 60,
      "source": "Lodge et al. 2000"
    }
  ],
  "field_sites": [
    {
      "name": "Skokie Lagoons",
      "coordinates": [42.1619, -87.7609],
      "depth": "0.5-1.5m",
      "substrate": "Cobble/gravel",
      "density": 12,
      "visit_date": "May 20, 2025",
      "habitat_type": "Cook County Forest Preserve",
      "water_body": "Skokie River system"
    },
    {
      "name": "Montrose Harbor", 
      "coordinates": [41.9639, -87.6381],
      "depth": "0.3-2.0m",
      "substrate": "Armor stone/concrete",
      "density": 6,
      "visit_date": "May 22, 2025",
      "habitat_type": "Urban harbor",
      "water_body": "Lake Michigan"
    }
  ],
  "management_timeline": [
    {"year": 1985, "event": "Illinois bans possession", "type": "Regulation", "impact": "Slowed new introductions"},
    {"year": 1989, "event": "Wisconsin requires permits", "type": "Regulation", "impact": "Regional coordination"},
    {"year": 2008, "event": "Valley Forge Crayfish Corps founded", "type": "Volunteer", "impact": "28,664 removed by 2022"},
    {"year": 2015, "event": "Large-scale removal trials", "type": "Control", "impact": "Mixed results"},
    {"year": 2019, "event": "Peak removal efforts", "type": "Control", "impact": "5,000+ removed from single lake"},
    {"year": 2023, "event": "Compensatory response documented", "type": "Research", "impact": "Paradigm shift in management"},
    {"year": 2024, "event": "eDNA monitoring pilot", "type": "Technology", "impact": "Early detection capability"}
  ],
  "climate_projections": {
    "years": [2025, 2030, 2035, 2040, 2045, 2050],
    "scenarios": {
      "current": [13.0, 13.0, 13.0, 13.0, 13.0, 13.0],
      "rcp26": [13.0, 13.3, 13.6, 13.9, 14.2, 14.5],
      "rcp45": [13.0, 13.6, 14.2, 14.8, 15.4, 16.0],
      "rcp85": [13.0, 13.8, 14.6, 15.4, 16.2, 17.0]
    },
    "source": "IPCC AR6 2023"
  },
  "compensatory_data": {
    "adults_removed": [0, 1000, 2000, 3000, 4000, 5000],
    "next_year_juveniles": [100, 180, 280, 420, 580, 760],
    "source": "Peters et al. 2023"
  },
  "current_stats": {
    "inat_observations": 89,
    "confirmed_sites": 47,
    "citizen_scientists": 156,
    "observation_increase": "+23%",
    "data_source": "iNaturalist API 2025"
  },
  "economic_data": {
    "annual_control_costs": 450000,
    "fine_amount": 2500,
    "volunteer_hours_value": 125000,
    "ecosystem_services_loss": "unmeasured",
    "source": "Wisconsin DNR 2023; Illinois 515 ILCS 5/5-25"
  },
  "citations": [
    {
      "id": 1,
      "citation": "Hansen, G. J. A., Ives, A. R., Vander Zanden, M. J., & Carpenter, S. R. (2013). Are rapid transitions between invasive and native species caused by alternative stable states? Canadian Journal of Fisheries and Aquatic Sciences, 70(7), 1109-1122."
    },
    {
      "id": 2,
      "citation": "Illinois Department of Natural Resources. (2023). Rusty crayfish. Wild About Illinois Crayfish! Retrieved from https://dnr.illinois.gov/education/wildaboutcrayfish"
    },
    {
      "id": 3,
      "citation": "Johnson, P. D., Becker, A. E., Sammons, S. M., Kurth, J. N., & Cordeiro, J. (2009). Gastropod responses to an invasive crayfish in freshwater lakes. Freshwater Biology, 54(7), 1323-1334."
    },
    {
      "id": 4,
      "citation": "Kreps, T. A., Larson, E. R., & Lodge, D. M. (2016). Do invasive rusty crayfish (Orconectes rusticus) decouple littoral and pelagic energy flows in lake food webs? Freshwater Science, 35(1), 103-113."
    },
    {
      "id": 5,
      "citation": "Lodge, D. M., Kershner, M. W., Aloi, J. E., & Covich, A. P. (1994). Effects of an omnivorous crayfish (Orconectes rusticus) on a freshwater littoral food web. Ecology, 75(5), 1265-1281."
    },
    {
      "id": 6,
      "citation": "Lodge, D. M., Taylor, C. A., Holdich, D. M., & Skurdal, J. (2000). Nonindigenous crayfishes threaten North American freshwater biodiversity. Fisheries, 25(8), 7-20."
    },
    {
      "id": 7,
      "citation": "Olden, J. D., McCarthy, J. M., Maxted, J. T., Fetzer, W. W., & Vander Zanden, M. J. (2006). The rapid spread of rusty crayfish (Orconectes rusticus) with observations on native crayfish declines in Wisconsin (USA) over the past 130 years. Biological Invasions, 8(8), 1621-1628."
    },
    {
      "id": 8,
      "citation": "Page, L. M. (1985). The crayfishes and shrimps (Decapoda) of Illinois. Illinois Natural History Survey Bulletin, 33(4), 335-448."
    },
    {
      "id": 9,
      "citation": "Peters, J. A., Cooper, M. J., Creque, S. M., Kornis, M. S., Maxted, J. T., Perry, W. L., Rush, S. A., & Lodge, D. M. (2023). Evidence of a compensatory response in invasive Rusty Crayfish following suppression. Management of Biological Invasions, 14(2), 267-287."
    },
    {
      "id": 10,
      "citation": "Taylor, C. A., & Redmer, M. (1996). Dispersal of the crayfish Orconectes rusticus in Illinois, with notes on species displacement and habitat preference. Journal of Crustacean Biology, 16(3), 547-551."
    },
    {
      "id": 11,
      "citation": "Wilson, K. A., Magnuson, J. J., Lodge, D. M., Hill, A. M., Kratz, T. K., Perry, W. L., & Willis, T. V. (2004). A long-term rusty crayfish (Orconectes rusticus) invasion: dispersal patterns and community change in a north temperate lake. Canadian Journal of Fisheries and Aquatic Sciences, 61(11), 2255-2266."
    }
  ]
};

// Application state
let currentPanel = 0;
const totalPanels = 13;
let charts = {};
let maps = {};
let isLoading = true;

// Panel navigation
const panels = [
  'cover', 'species', 'arrival', 'expansion', 'current', 'skokie', 
  'montrose', 'impact', 'management', 'compensatory', 'future', 'action', 'citations'
];

// Chart colors
const chartColors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325', '#944454', '#13343B'];

function applyChartTheme() {
  const styles = getComputedStyle(document.documentElement);
  const textColor = styles.getPropertyValue('--color-text').trim() || '#333';
  const borderColor = styles.getPropertyValue('--color-border').trim() || '#ccc';
  const fontFamily = styles.getPropertyValue('--font-family-base');
  Chart.defaults.color = textColor;
  Chart.defaults.borderColor = borderColor;
  Chart.defaults.font.family = fontFamily;
  if (Chart.defaults.plugins && Chart.defaults.plugins.legend) {
    Chart.defaults.plugins.legend.labels.color = textColor;
  }
}

// Initialize application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  try {
    showLoadingIndicator();
    initializeApplication();
  } catch (error) {
    handleError('Failed to initialize application', error);
  }
});

// Application initialization
function initializeApplication() {
  try {
    applyChartTheme();
    // Immediately populate data first
    populateDataContent();
    
    // Then initialize UI components
    initializeNavigation();
    initializeAccessibility();
    initializeObservers();
    updateProgressBar();
    
    // Initialize maps and charts for first panels
    initializeRequiredVisualizations();
    
    // Hide loading indicator after initialization
    setTimeout(() => {
      hideLoadingIndicator();
    }, 1000);
    
    // Focus management
    const skipLink = document.querySelector('a[href="#main-content"]');
    if (skipLink) {
      skipLink.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('main-content').focus();
      });
    }
  } catch (error) {
    handleError('Failed to initialize application', error);
  }
}

// Initialize required visualizations for first view
function initializeRequiredVisualizations() {
  // Initialize the maps and charts that should be visible on load
  if (currentPanel === 0) {
    // For first panel, preload first few panels' visualizations
    setTimeout(() => {
      initializeArrivalMap();
      initializeExpansionChart();
    }, 500);
  }
}

// Loading management
function showLoadingIndicator() {
  const loadingIndicator = document.getElementById('loading-indicator');
  if (loadingIndicator) {
    loadingIndicator.setAttribute('aria-hidden', 'false');
    loadingIndicator.style.display = 'flex';
  }
}

function hideLoadingIndicator() {
  const loadingIndicator = document.getElementById('loading-indicator');
  if (loadingIndicator) {
    loadingIndicator.setAttribute('aria-hidden', 'true');
    loadingIndicator.style.display = 'none';
  }
  isLoading = false;
}

// Error handling
function handleError(message, error) {
  console.error(message, error);
  hideLoadingIndicator();
  
  const errorDiv = document.createElement('div');
  errorDiv.className = 'error-message';
  errorDiv.innerHTML = `
    <div class="card" style="background-color: var(--color-error); color: white; padding: var(--space-20); margin: var(--space-20);">
      <h3>Error Loading Application</h3>
      <p>${message}</p>
      <p>${error ? error.message : 'Unknown error'}</p>
      <button class="btn btn--secondary" onclick="location.reload()">Retry</button>
    </div>
  `;
  
  const contentArea = document.querySelector('.content-area');
  if (contentArea) {
    contentArea.prepend(errorDiv);
  }
}

// Navigation Functions
function initializeNavigation() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const beginJourney = document.getElementById('begin-journey');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');

  // Tab button event listeners
  tabButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      if (!isLoading) {
        currentPanel = index;
        switchToPanel(panels[index]);
        updateNavigation();
      }
    });
    
    // Keyboard navigation for tabs
    btn.addEventListener('keydown', (e) => {
      handleTabKeydown(e, index);
    });
  });

  // Begin journey button
  if (beginJourney) {
    beginJourney.addEventListener('click', () => {
      currentPanel = 1;
      switchToPanel('species');
      updateNavigation();
    });
  }

  // Navigation controls
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentPanel > 0) {
        currentPanel--;
        switchToPanel(panels[currentPanel]);
        updateNavigation();
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentPanel < totalPanels - 1) {
        currentPanel++;
        switchToPanel(panels[currentPanel]);
        updateNavigation();
      }
    });
  }
}

// Accessibility initialization
function initializeAccessibility() {
  // Add keyboard navigation for arrow keys
  document.addEventListener('keydown', (event) => {
    if (event.target.closest('.tab-btn')) return;
    
    if (event.key === 'ArrowLeft' && currentPanel > 0) {
      currentPanel--;
      switchToPanel(panels[currentPanel]);
      updateNavigation();
    } else if (event.key === 'ArrowRight' && currentPanel < totalPanels - 1) {
      currentPanel++;
      switchToPanel(panels[currentPanel]);
      updateNavigation();
    }
  });
}

// Tab keyboard navigation
function handleTabKeydown(event, index) {
  const tabButtons = document.querySelectorAll('.tab-btn');
  
  switch (event.key) {
    case 'ArrowLeft':
      event.preventDefault();
      const prevIndex = index > 0 ? index - 1 : tabButtons.length - 1;
      tabButtons[prevIndex].focus();
      break;
    case 'ArrowRight':
      event.preventDefault();
      const nextIndex = index < tabButtons.length - 1 ? index + 1 : 0;
      tabButtons[nextIndex].focus();
      break;
    case 'Home':
      event.preventDefault();
      tabButtons[0].focus();
      break;
    case 'End':
      event.preventDefault();
      tabButtons[tabButtons.length - 1].focus();
      break;
  }
}

function switchToPanel(panelId) {
  // Hide all panels
  document.querySelectorAll('.panel').forEach(panel => {
    panel.classList.remove('active');
  });

  // Show selected panel
  const targetPanel = document.getElementById(panelId);
  if (targetPanel) {
    targetPanel.classList.add('active');
  }

  // Update tab buttons with proper ARIA attributes
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
    btn.setAttribute('aria-selected', 'false');
  });
  
  const activeTab = document.querySelector(`[data-tab="${panelId}"]`);
  if (activeTab) {
    activeTab.classList.add('active');
    activeTab.setAttribute('aria-selected', 'true');
  }

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Lazy load maps and charts for current panel
  setTimeout(() => {
    lazyLoadContent(panelId);
  }, 100);
}

// Lazy loading implementation
function lazyLoadContent(panelId) {
  switch (panelId) {
    case 'arrival':
      if (!maps.arrival) initializeArrivalMap();
      break;
    case 'expansion':
      if (!charts.expansion) initializeExpansionChart();
      break;
    case 'current':
      if (!maps.current) initializeCurrentMap();
      break;
    case 'skokie':
      if (!maps.skokie) initializeSkokieMap();
      break;
    case 'montrose':
      if (!maps.montrose) initializeMontroseMap();
      break;
    case 'impact':
      if (!charts.impact) initializeImpactChart();
      break;
    case 'compensatory':
      if (!charts.removal) initializeRemovalChart();
      break;
    case 'future':
      if (!charts.climate) initializeClimateChart();
      break;
  }
}

function updateNavigation() {
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const pageIndicator = document.getElementById('page-indicator');
  const progressBar = document.querySelector('.progress-indicator');

  if (prevBtn) prevBtn.disabled = currentPanel === 0;
  if (nextBtn) nextBtn.disabled = currentPanel === totalPanels - 1;

  if (pageIndicator) {
    pageIndicator.textContent = `${currentPanel + 1} of ${totalPanels}`;
  }
  
  if (progressBar) {
    progressBar.setAttribute('aria-valuenow', Math.round(((currentPanel + 1) / totalPanels) * 100));
  }
  
  updateProgressBar();
}

function updateProgressBar() {
  const progressBar = document.querySelector('.progress-bar');
  if (progressBar) {
    const progress = ((currentPanel + 1) / totalPanels) * 100;
    progressBar.style.width = `${progress}%`;
  }
}

// Data population functions
function populateDataContent() {
  try {
    populateNativeSpeciesTable();
    populateTimelineEvents();
    populateManagementTimeline();
    populateCurrentStats();
    populateFieldSiteDetails();
    populateImpactDetails();
    populateCitations();
  } catch (error) {
    handleError('Failed to populate content', error);
  }
}

function populateNativeSpeciesTable() {
  const container = document.getElementById('native-species-table');
  if (!container || !applicationData.native_species) {
    console.error('Native species table container not found or data missing');
    return;
  }

  container.innerHTML = '';
  
  applicationData.native_species.forEach(species => {
    const row = document.createElement('div');
    row.className = 'table-row';
    row.setAttribute('role', 'row');
    
    const statusClass = species.status.includes('decline') || species.status.includes('displaced') ? 'status--error' : 'status--warning';
    
    row.innerHTML = `
      <div role="cell">${species.name}</div>
      <div role="cell"><em>${species.scientific}</em></div>
      <div role="cell">${species.size}</div>
      <div role="cell">${species.habitat}</div>
      <div role="cell"><span class="status ${statusClass}">${species.status}</span></div>
    `;
    
    container.appendChild(row);
  });
}

function populateTimelineEvents() {
  const container = document.getElementById('timeline-events');
  if (!container || !applicationData.expansion_timeline) return;

  container.innerHTML = '';
  
  applicationData.expansion_timeline.forEach(event => {
    const eventElement = document.createElement('div');
    eventElement.className = 'timeline-event';
    eventElement.setAttribute('role', 'listitem');
    eventElement.innerHTML = `
      <div class="timeline-year">${event.year}</div>
      <div class="timeline-description">${event.event}</div>
      <div class="timeline-source"><small>Source: ${event.source}</small></div>
    `;
    container.appendChild(eventElement);
  });
}

function populateManagementTimeline() {
  const container = document.getElementById('management-timeline');
  if (!container || !applicationData.management_timeline) return;

  container.innerHTML = '';
  
  applicationData.management_timeline.forEach(item => {
    const timelineItem = document.createElement('div');
    timelineItem.className = 'timeline-item';
    timelineItem.setAttribute('role', 'listitem');
    timelineItem.innerHTML = `
      <div class="timeline-year">${item.year}</div>
      <div class="timeline-event">${item.event}</div>
      <div class="timeline-type">${item.type}</div>
      <div class="timeline-impact"><small><strong>Impact:</strong> ${item.impact}</small></div>
    `;
    container.appendChild(timelineItem);
  });
}

function populateCurrentStats() {
  const stats = applicationData.current_stats;
  if (!stats) return;

  const elements = {
    'inat-observations': stats.inat_observations,
    'confirmed-sites': stats.confirmed_sites,
    'citizen-scientists': stats.citizen_scientists,
    'observation-change': stats.observation_increase,
    'current-inat-count': stats.inat_observations
  };

  Object.entries(elements).forEach(([id, value]) => {
    const element = document.getElementById(id);
    if (element) {
      element.textContent = value;
    }
  });
}

function populateFieldSiteDetails() {
  if (!applicationData.field_sites) return;
  
  applicationData.field_sites.forEach((site, index) => {
    const containerId = index === 0 ? 'skokie-details' : 'montrose-details';
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `
      <p><strong>Coordinates:</strong> ${site.coordinates[0]}°N, ${Math.abs(site.coordinates[1])}°W</p>
      <p><strong>Habitat Type:</strong> ${site.habitat_type}</p>
      <p><strong>Water Body:</strong> ${site.water_body}</p>
      <p><strong>Depth Range:</strong> ${site.depth}</p>
      <p><strong>Substrate:</strong> ${site.substrate}</p>
      <p><strong>Crayfish Density:</strong> ~${site.density}/m²</p>
      <p><strong>Last Visit:</strong> ${site.visit_date}</p>
    `;
  });
}

function populateImpactDetails() {
  const container = document.getElementById('impact-details');
  if (!container || !applicationData.ecological_impact) return;

  container.innerHTML = '';
  
  applicationData.ecological_impact.forEach(impact => {
    const decline = 100 - impact.post_invasion;
    const categoryDiv = document.createElement('div');
    categoryDiv.className = 'impact-category';
    categoryDiv.innerHTML = `
      <h4>${impact.component} (${decline}% decline)</h4>
      <p>Pre-invasion baseline: ${impact.pre_invasion}% | Post-invasion: ${impact.post_invasion}%</p>
      <p><small>Source: ${impact.source}</small></p>
    `;
    container.appendChild(categoryDiv);
  });
}

function populateCitations() {
  const container = document.getElementById('citations-list');
  if (!container || !applicationData.citations) return;

  container.innerHTML = '';
  
  applicationData.citations.forEach(citation => {
    const citationDiv = document.createElement('div');
    citationDiv.className = 'citation';
    citationDiv.id = `cite-${citation.id}`;
    citationDiv.innerHTML = `<strong>${citation.id}.</strong> ${citation.citation}`;
    container.appendChild(citationDiv);
  });
}

// Chart initialization functions
function initializeExpansionChart() {
  const ctx = document.getElementById('expansion-chart');
  if (!ctx || !applicationData.expansion_timeline || charts.expansion) return;

  charts.expansion = new Chart(ctx, {
    type: 'line',
    data: {
      labels: applicationData.expansion_timeline.map(d => d.year),
      datasets: [{
        label: 'Counties Invaded',
        data: applicationData.expansion_timeline.map(d => d.counties),
        borderColor: chartColors[0],
        backgroundColor: chartColors[0] + '20',
        fill: true,
        tension: 0.4,
        pointBackgroundColor: chartColors[0],
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'Cumulative County Invasion (1973-2024)'
        },
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Number of Counties'
          }
        },
        x: {
          title: {
            display: true,
            text: 'Year'
          }
        }
      },
      interaction: {
        intersect: false,
        mode: 'index'
      }
    }
  });
}

function initializeImpactChart() {
  const ctx = document.getElementById('impact-chart');
  if (!ctx || !applicationData.ecological_impact || charts.impact) return;

  charts.impact = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: applicationData.ecological_impact.map(d => d.component),
      datasets: [
        {
          label: 'Pre-invasion',
          data: applicationData.ecological_impact.map(d => d.pre_invasion),
          backgroundColor: chartColors[0],
          borderColor: chartColors[0],
          borderWidth: 1
        },
        {
          label: 'Post-invasion',
          data: applicationData.ecological_impact.map(d => d.post_invasion),
          backgroundColor: chartColors[2],
          borderColor: chartColors[2],
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'Ecosystem Components: Before vs After Invasion'
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          title: {
            display: true,
            text: 'Relative Abundance (%)'
          }
        }
      }
    }
  });
}

function initializeClimateChart() {
  const ctx = document.getElementById('climate-chart');
  if (!ctx || !applicationData.climate_projections || charts.climate) return;

  const data = applicationData.climate_projections;
  
  charts.climate = new Chart(ctx, {
    type: 'line',
    data: {
      labels: data.years,
      datasets: [
        {
          label: 'Current (baseline)',
          data: data.scenarios.current,
          borderColor: chartColors[4],
          backgroundColor: chartColors[4] + '20',
          borderDash: [5, 5]
        },
        {
          label: 'RCP 2.6 (best case)',
          data: data.scenarios.rcp26,
          borderColor: chartColors[0],
          backgroundColor: chartColors[0] + '20'
        },
        {
          label: 'RCP 4.5 (moderate)',
          data: data.scenarios.rcp45,
          borderColor: chartColors[1],
          backgroundColor: chartColors[1] + '20'
        },
        {
          label: 'RCP 8.5 (worst case)',
          data: data.scenarios.rcp85,
          borderColor: chartColors[2],
          backgroundColor: chartColors[2] + '20'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'Temperature Projections (°C)'
        }
      },
      scales: {
        y: {
          title: {
            display: true,
            text: 'Temperature (°C)'
          }
        },
        x: {
          title: {
            display: true,
            text: 'Year'
          }
        }
      }
    }
  });
}

function initializeRemovalChart() {
  const ctx = document.getElementById('removal-chart');
  if (!ctx || !applicationData.compensatory_data || charts.removal) return;

  const data = applicationData.compensatory_data;

  charts.removal = new Chart(ctx, {
    type: 'line',
    data: {
      labels: data.adults_removed,
      datasets: [
        {
          label: 'Adults Removed',
          data: data.adults_removed,
          borderColor: chartColors[0],
          backgroundColor: chartColors[0] + '20',
          fill: false,
          yAxisID: 'y'
        },
        {
          label: 'Next Year Juveniles',
          data: data.next_year_juveniles,
          borderColor: chartColors[2],
          backgroundColor: chartColors[2] + '20',
          fill: false,
          yAxisID: 'y1'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'Compensatory Response to Adult Removal'
        }
      },
      scales: {
        y: {
          type: 'linear',
          display: true,
          position: 'left',
          title: {
            display: true,
            text: 'Adults Removed'
          }
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
          title: {
            display: true,
            text: 'Juvenile Population'
          },
          grid: {
            drawOnChartArea: false,
          },
        },
        x: {
          title: {
            display: true,
            text: 'Adults Removed'
          }
        }
      }
    }
  });
}

// Map initialization functions
function initializeArrivalMap() {
  const mapElement = document.getElementById('arrival-map');
  if (!mapElement || maps.arrival) return;

  try {
    // Peoria Lake coordinates (corrected location)
    maps.arrival = L.map('arrival-map').setView([40.7589, -89.6640], 10);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(maps.arrival);

    // First detection marker
    const marker = L.marker([40.7589, -89.6640])
      .addTo(maps.arrival)
      .bindPopup(`
        <div style="text-align: center;">
          <h4>🦞 First Detection Site</h4>
          <p><strong>Peoria Lake, Illinois River</strong></p>
          <p>Year: 1973</p>
          <p>Vector: Likely bait bucket transfer</p>
          <p><small>Source: Page 1985</small></p>
        </div>
      `);
      
    if (marker.getElement()) {
      marker.getElement().setAttribute('role', 'button');
      marker.getElement().setAttribute('aria-label', 'First detection site marker');
    }
    
    // Invalidate map size to ensure proper rendering
    setTimeout(() => {
      if (maps.arrival) {
        maps.arrival.invalidateSize();
      }
    }, 500);
  } catch (error) {
    console.error('Error initializing arrival map:', error);
    mapElement.innerHTML = '<div class="map-error">Map loading error. Please try refreshing the page.</div>';
  }
}

function initializeCurrentMap() {
  const mapElement = document.getElementById('current-map');
  if (!mapElement || maps.current || !applicationData.field_sites) return;

  try {
    maps.current = L.map('current-map').setView([42.0, -87.7], 10);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(maps.current);

    // Add field site markers
    applicationData.field_sites.forEach(site => {
      const marker = L.marker(site.coordinates)
        .addTo(maps.current)
        .bindPopup(`
          <div style="text-align: center;">
            <h4>🦞 ${site.name}</h4>
            <p><strong>Density:</strong> ${site.density}/m²</p>
            <p><strong>Habitat:</strong> ${site.habitat_type}</p>
            <p><strong>Water Body:</strong> ${site.water_body}</p>
            <p><strong>Last Survey:</strong> ${site.visit_date}</p>
          </div>
        `);
        
      if (marker.getElement()) {
        marker.getElement().setAttribute('role', 'button');
        marker.getElement().setAttribute('aria-label', `${site.name} research site marker`);
      }
    });
    
    setTimeout(() => {
      if (maps.current) {
        maps.current.invalidateSize();
      }
    }, 500);
  } catch (error) {
    console.error('Error initializing current map:', error);
    mapElement.innerHTML = '<div class="map-error">Map loading error. Please try refreshing the page.</div>';
  }
}

function initializeSkokieMap() {
  const mapElement = document.getElementById('skokie-map');
  if (!mapElement || maps.skokie || !applicationData.field_sites[0]) return;

  try {
    const site = applicationData.field_sites[0];
    maps.skokie = L.map('skokie-map').setView(site.coordinates, 15);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(maps.skokie);

    const marker = L.marker(site.coordinates)
      .addTo(maps.skokie)
      .bindPopup(`
        <div style="text-align: center;">
          <h4>🦞 ${site.name}</h4>
          <p><strong>Density:</strong> ${site.density}/m²</p>
          <p><strong>Substrate:</strong> ${site.substrate}</p>
          <p><strong>Depth:</strong> ${site.depth}</p>
          <p><strong>Last Survey:</strong> ${site.visit_date}</p>
        </div>
      `);
      
    if (marker.getElement()) {
      marker.getElement().setAttribute('role', 'button');
      marker.getElement().setAttribute('aria-label', 'Skokie Lagoons field site marker');
    }
    
    setTimeout(() => {
      if (maps.skokie) {
        maps.skokie.invalidateSize();
      }
    }, 500);
  } catch (error) {
    console.error('Error initializing Skokie map:', error);
    mapElement.innerHTML = '<div class="map-error">Map loading error. Please try refreshing the page.</div>';
  }
}

function initializeMontroseMap() {
  const mapElement = document.getElementById('montrose-map');
  if (!mapElement || maps.montrose || !applicationData.field_sites[1]) return;

  try {
    const site = applicationData.field_sites[1];
    maps.montrose = L.map('montrose-map').setView(site.coordinates, 15);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(maps.montrose);

    const marker = L.marker(site.coordinates)
      .addTo(maps.montrose)
      .bindPopup(`
        <div style="text-align: center;">
          <h4>🦞 ${site.name}</h4>
          <p><strong>Density:</strong> ${site.density}/m²</p>
          <p><strong>Substrate:</strong> ${site.substrate}</p>
          <p><strong>Depth:</strong> ${site.depth}</p>
          <p><strong>Last Survey:</strong> ${site.visit_date}</p>
        </div>
      `);
      
    if (marker.getElement()) {
      marker.getElement().setAttribute('role', 'button');
      marker.getElement().setAttribute('aria-label', 'Montrose Harbor field site marker');
    }
    
    setTimeout(() => {
      if (maps.montrose) {
        maps.montrose.invalidateSize();
      }
    }, 500);
  } catch (error) {
    console.error('Error initializing Montrose map:', error);
    mapElement.innerHTML = '<div class="map-error">Map loading error. Please try refreshing the page.</div>';
  }
}

// Intersection Observer for performance optimization
function initializeObservers() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '50px 0px'
  };

  const mapObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const mapId = entry.target.id;
        if (mapId.includes('-map')) {
          lazyLoadContent(mapId.replace('-map', ''));
        }
      }
    });
  }, observerOptions);

  // Observe all map containers
  document.querySelectorAll('.interactive-map').forEach(map => {
    mapObserver.observe(map);
  });

  // Panel visibility observer for navigation updates
  const panelObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const panelId = entry.target.id;
        const panelIndex = panels.indexOf(panelId);
        if (panelIndex !== -1 && panelIndex !== currentPanel) {
          currentPanel = panelIndex;
          updateNavigation();
          
          // Update active tab
          document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
            btn.setAttribute('aria-selected', 'false');
          });
          const activeTab = document.querySelector(`[data-tab="${panelId}"]`);
          if (activeTab) {
            activeTab.classList.add('active');
            activeTab.setAttribute('aria-selected', 'true');
          }
        }
      }
    });
  }, { threshold: 0.5 });

  // Observe all panels
  document.querySelectorAll('.panel').forEach(panel => {
    panelObserver.observe(panel);
  });
}

// Utility Functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Resize handler for charts and maps
window.addEventListener('resize', debounce(() => {
  Object.values(charts).forEach(chart => {
    if (chart && chart.resize) {
      chart.resize();
    }
  });
  
  Object.values(maps).forEach(map => {
    if (map && map.invalidateSize) {
      map.invalidateSize();
    }
  });
}, 250));

// Export for external access
window.StoryMapApp = {
  switchToPanel,
  charts,
  maps,
  applicationData,
  currentPanel: () => currentPanel,
  totalPanels
};