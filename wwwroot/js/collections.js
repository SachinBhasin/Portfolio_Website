let searchQuery = '';

function renderCollections() {
    const container = document.getElementById('collectionsContainer');
    if (!container) return;
    
    const filteredEvents = collectionsData.filter(event => {
        if (!searchQuery) return true;
        const searchLower = searchQuery.toLowerCase();
        return event.name.toLowerCase().includes(searchLower) ||
               event.date.toLowerCase().includes(searchLower) ||
               event.location.toLowerCase().includes(searchLower);
    });
    
    const resultsInfo = document.getElementById('resultsInfo');
    if (searchQuery && resultsInfo) {
        resultsInfo.textContent = `Showing ${filteredEvents.length} result${filteredEvents.length !== 1 ? 's' : ''} for "${searchQuery}"`;
        resultsInfo.style.display = 'block';
    } else if (resultsInfo) {
        resultsInfo.style.display = 'none';
    }
    
    if (filteredEvents.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <p>No events found matching "${searchQuery}"</p>
            </div>
        `;
        return;
    }
    
    let html = '';
    
    filteredEvents.forEach(event => {
        html += `
            <div class="event-block ${event.comingSoon ? 'coming-soon' : ''}">
                <div class="event-location">${event.location}</div>
                <div class="event-header">
                    <div class="event-info">
                        <span class="event-date">${event.date}</span>
                        <span class="event-separator">—</span>
                        <span class="event-name">${event.name}</span>
                    </div>
                    ${event.comingSoon ? `
                        <span class="coming-soon-badge">Coming Soon</span>
                    ` : event.flickrUrl ? `
                        <a href="${event.flickrUrl}" target="_blank" class="flickr-link">
                            View on Flickr →
                        </a>
                    ` : ''}
                </div>
                
                ${!event.comingSoon && event.photos.length > 0 ? `
                    <div class="event-photos">
                        ${event.photos.map(photo => `
                            <div class="event-photo">
                                <img src="${photo}" alt="${event.name}">
                            </div>
                        `).join('')}
                    </div>
                ` : ''}
            </div>
        `;
    });
    
    container.innerHTML = html;
}

function initSearch() {
    const searchInput = document.getElementById('collectionSearch');
    if (!searchInput) return;
    
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim();
        renderCollections();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderCollections();
    initSearch();
});

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    return false;
});
