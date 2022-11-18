const toggleSidebar = () => {
  const sidebarItems = document.querySelectorAll('.sidebar-text');

  sidebarItems.forEach((sidebarItem) => sidebarItem.classList.toggle('active'));
};
