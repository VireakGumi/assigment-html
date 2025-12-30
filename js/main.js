document.addEventListener('DOMContentLoaded', function () {
  const sidebarMenuData = [
    {
      title: "Bank Overview",
      url: "#",
      submenu: [
        { title: "Profile", url: "/pages/sidebar-menu/bank-overview/profile.html" },
        { title: "History", url: "/pages/sidebar-menu/bank-overview/history.html" },
        { title: "Vision & Mission", url: "/pages/sidebar-menu/bank-overview/vision-mission.html" },
        { title: "Organizational Chart", url: "/pages/sidebar-menu/bank-overview/organizational-chart.html" },
        { title: "Shareholder", url: "/pages/sidebar-menu/bank-overview/shareholder.html" },
        { title: "Board of Directors", url: "/pages/sidebar-menu/bank-overview/board-of-directors.html" },
        { title: "Executive Management", url: "/pages/sidebar-menu/bank-overview/executive-management.html" },
        { title: "License", url: "/pages/sidebar-menu/bank-overview/license.html" },
        { title: "Awards & Recognition", url: "/pages/sidebar-menu/bank-overview/awards-recognition.html" },
        { title: "Internal Audit", url: "/pages/sidebar-menu/bank-overview/internal-audit.html" },
        { title: "Annual Report", url: "/pages/sidebar-menu/bank-overview/annual-report.html" },
        { title: "Audited Financial Statements", url: "/pages/sidebar-menu/bank-overview/audited-financial-statements.html" },
        { title: "BFIs Code of Conduct", url: "/pages/sidebar-menu/bank-overview/bfis-code-of-conduct.html" }
      ]
    },
    {
      title: "Support",
      url: "#",
      submenu: [
        { title: "Call Center", url: "/pages/support/call-center.html" },
        { title: "Locator", url: "/pages/support/locator.html" },
        { title: "Merchant", url: "/pages/support/merchant.html" },
        { title: "Online Request", url: "/pages/support/online-request.html" },
        { title: "Customer's Complaint / Feedback", url: "/pages/support/feedback.html" }
      ]
    },
    {
      title: "Media",
      url: "#",
      submenu: [
        { title: "News", url: "/pages/media/news.html" },
        { title: "Announcement", url: "/pages/media/announcement.html" },
        { title: "Promotion", url: "/pages/media/promotion.html" },
        { title: "Public Holiday", url: "/pages/media/public-holiday.html" },
        { title: "Calendar", url: "/pages/media/calendar.html" },
        { title: "Photo Frame", url: "/pages/media/photo-frame.html" },
        { title: "Video", url: "/pages/media/video.html" },
        { title: "Social Media", url: "/pages/media/social-media.html" }
      ]
    },
    {
      title: "Career",
      url: "#",
      submenu: [
        { title: "Job Opportunity", url: "/pages/career/job-opportunity.html" },
        { title: "Apply for Employment", url: "/pages/career/apply-for-employment.html" },
        { title: "Talent and Benefit", url: "/pages/career/talent-and-benefit.html" },
        { title: "Internship", url: "/pages/career/internship.html" }
      ]
    },
    {
      title: "Investor Relations",
      url: "#",
      submenu: [
        { title: "KB PRASAC Bond", url: "/pages/investor-relations/kb-prasac-bond.html" },
        { title: "Contact Persons", url: "/pages/investor-relations/contact-persons.html" },
        { title: "Corporate Disclosure", url: "/pages/investor-relations/corporate-disclosure.html" },
        { title: "Feedback Form", url: "/pages/investor-relations/feedback-form.html" }
      ]
    },
    {
      title: "ESG Management",
      url: "/pages/esg-management/index.html",
      submenu: null
    }
  ];

  const menuContainer = document.getElementById('sidebarMenu');
  if (!menuContainer) return;

  let html = '';
  sidebarMenuData.forEach(item => {
    const hasSub = item.submenu && item.submenu.length > 0;
    const mainUrl = item.url || '#';

    html += `
      <li class="menu-item ${hasSub ? 'has-submenu' : ''}">
        <a href="${mainUrl}" class="menu-link">
          <span class="menu-title">${item.title}</span>
          ${hasSub ? '<span class="plus">+</span>' : ''}
        </a>
        ${hasSub ? `
          <ul class="submenu">
            ${item.submenu.map(link => `
              <li><a href="${link.url}">${link.title}</a></li>
            `).join('')}
          </ul>
        ` : ''}
      </li>
    `;
  });

  menuContainer.innerHTML = html;

  // Add click handlers
  document.querySelectorAll('.menu-item.has-submenu').forEach(item => {
    const link = item.querySelector('.menu-link');
    link.addEventListener('click', (e) => {
      e.preventDefault();
      item.classList.toggle('active');
      const plus = item.querySelector('.plus');
      plus.textContent = item.classList.contains('active') ? '−' : '+';
    });
  });

  // Open "Bank Overview" by default
  const firstItem = document.querySelector('.menu-item.has-submenu');
  if (firstItem) {
    firstItem.classList.add('active');
    firstItem.querySelector('.plus').textContent = '−';
  }

  // Sidebar toggle
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('menuOverlay');
  const toggleBtn = document.getElementById('menuToggle');
  const closeBtn = document.getElementById('menuClose');

  if (toggleBtn) toggleBtn.addEventListener('click', () => {
    sidebar.classList.add('open');
    overlay.classList.add('show');
  });
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (overlay) overlay.addEventListener('click', closeMenu);

  function closeMenu() {
    sidebar.classList.remove('open');
    overlay.classList.remove('show');
  }
});