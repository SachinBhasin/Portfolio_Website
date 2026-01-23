const INITIAL_VISIBLE = 3;
let showingAll = false;
let activeFilter = null;
let searchQuery = '';
let filterBtns;
let clearBtn;
let recipeCards;

function generateFilters() {
    const filtersButtons = document.querySelector('.filters-buttons');
    if (!filtersButtons || typeof recipes === 'undefined') return;

    const allTags = new Set();
    recipes.forEach(recipe => {
        recipe.tags.forEach(tag => allTags.add(tag.toLowerCase()));
    });

    const sortedTags = [...allTags].sort();

    filtersButtons.innerHTML = '';

    sortedTags.forEach(tag => {
        const btn = document.createElement('button');
        btn.className = 'filter-btn';
        btn.dataset.filter = tag;
        btn.textContent = capitalise(tag);
        filtersButtons.appendChild(btn);
    });

    const clearButton = document.createElement('button');
    clearButton.className = 'clear-filters';
    clearButton.textContent = 'Clear ✕';
    clearButton.onclick = clearFilters;
    filtersButtons.appendChild(clearButton);

    filterBtns = document.querySelectorAll('.filter-btn');
    clearBtn = document.querySelector('.clear-filters');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;

            if (btn.classList.contains('active')) {
                btn.classList.remove('active');
                activeFilter = null;
            } else {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                activeFilter = filter;
            }

            showingAll = false;
            applyFilters();
            clearBtn.classList.toggle('visible', activeFilter !== null);
        });
    });
}

function initSearch() {
    const searchInput = document.getElementById('recipeSearch');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        showingAll = false;
        applyFilters();
    });
}

function capitalise(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function applyFilters() {
    let visibleCount = 0;
    
    recipeCards.forEach((card, index) => {
        const tags = card.dataset.tags.split(',');
        const title = card.querySelector('.recipe-title').textContent.toLowerCase();
        
        const matchesFilter = activeFilter === null || tags.includes(activeFilter);
        const matchesSearch = searchQuery === '' || title.includes(searchQuery);
        
        if (matchesFilter && matchesSearch) {
            if (showingAll || visibleCount < INITIAL_VISIBLE) {
                card.classList.add('visible');
                visibleCount++;
            } else {
                card.classList.remove('visible');
            }
        } else {
            card.classList.remove('visible');
        }
    });
    
    updateShowMoreButton();
}

function clearFilters() {
    activeFilter = null;
    showingAll = false;
    filterBtns.forEach(btn => btn.classList.remove('active'));
    clearBtn.classList.remove('visible');
    
    const searchInput = document.getElementById('recipeSearch');
    if (searchInput) {
        searchInput.value = '';
        searchQuery = '';
    }
    
    initializeVisibility();
}

function initializeVisibility() {
    recipeCards.forEach((card, index) => {
        if (index < INITIAL_VISIBLE) {
            card.classList.add('visible');
        } else {
            card.classList.remove('visible');
        }
    });
    updateShowMoreButton();
}

function showMoreRecipes() {
    showingAll = true;
    recipeCards.forEach(card => {
        const tags = card.dataset.tags.split(',');
        const title = card.querySelector('.recipe-title').textContent.toLowerCase();
        
        const matchesFilter = activeFilter === null || tags.includes(activeFilter);
        const matchesSearch = searchQuery === '' || title.includes(searchQuery);
        
        if (matchesFilter && matchesSearch) {
            card.classList.add('visible');
        }
    });
    updateShowMoreButton();
}

function updateShowMoreButton() {
    const btn = document.querySelector('.show-more-btn');
    if (!btn) return;
    
    const visibleCards = document.querySelectorAll('.recipe-card.visible').length;
    const totalMatchingCards = [...recipeCards].filter(card => {
        const tags = card.dataset.tags.split(',');
        const title = card.querySelector('.recipe-title').textContent.toLowerCase();
        const matchesFilter = activeFilter === null || tags.includes(activeFilter);
        const matchesSearch = searchQuery === '' || title.includes(searchQuery);
        return matchesFilter && matchesSearch;
    }).length;

    btn.classList.toggle('hidden', showingAll || visibleCards >= totalMatchingCards);
}

document.addEventListener('DOMContentLoaded', () => {
    recipeCards = document.querySelectorAll('.recipe-card');
    generateFilters();
    initSearch();
    initializeVisibility();
});
