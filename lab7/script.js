document.addEventListener('DOMContentLoaded', () => {
    const viewSelect = document.getElementById('viewSelect');
    const container = document.body;
    const BREAKPOINT = 768; // px

    let manualOverride = false;

    function updateView() {
        // If user has manually selected a view, do not auto-switch
        if (manualOverride) return;

        const currentWidth = window.innerWidth;
        const isMobile = currentWidth <= BREAKPOINT;

        if (isMobile) {
            viewSelect.value = 'mobile';
            container.classList.add('view-mobile');
            container.classList.remove('view-desktop');
        } else {
            viewSelect.value = 'desktop';
            container.classList.add('view-desktop');
            container.classList.remove('view-mobile');
        }
    }

    // Initial check (Layout starts in Auto mode)
    updateView();

    // Resize Event
    window.addEventListener('resize', () => {
        updateView();
    });

    // Manual Switch Event
    viewSelect.addEventListener('change', (e) => {
        manualOverride = true; // User has taken control

        const selectedMode = e.target.value;

        if (selectedMode === 'mobile') {
            container.classList.add('view-mobile');
            container.classList.remove('view-desktop');
        } else {
            container.classList.add('view-desktop');
            container.classList.remove('view-mobile');
        }
    });
});
