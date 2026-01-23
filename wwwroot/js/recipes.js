function openRecipeModal(index) {
    const modal = document.getElementById('recipeModal');
    const recipe = recipes[index];

    document.getElementById('modalTitle').textContent = recipe.title;
    document.getElementById('modalPrep').textContent = recipe.prep;
    document.getElementById('modalCook').textContent = recipe.cook;
    document.getElementById('modalDifficulty').textContent = recipe.difficulty;
    document.getElementById('modalServings').textContent = recipe.servings;
    document.getElementById('modalDescription').textContent = recipe.description;
    document.getElementById('modalNotes').textContent = recipe.notes || "No additional notes for this recipe.";

    const bannerContainer = document.getElementById('modalBanner');
    // Use bannerImage if available, otherwise fall back to image
    const modalImage = recipe.bannerImage || recipe.image;
    if (modalImage) {
        bannerContainer.innerHTML = `<img src="${modalImage}" alt="${recipe.title}">`;
    } else {
        bannerContainer.innerHTML = `<div class="modal-banner-placeholder">${recipe.title.toUpperCase()}</div>`;
    }

    document.getElementById('modalBody').innerHTML = `
        <h4>Ingredients</h4>
        ${recipe.ingredients}
        <div class="modal-divider"></div>
        <h4>Method</h4>
        ${recipe.instructions}
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeRecipeModal() {
    document.getElementById('recipeModal').classList.remove('active');
    document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('recipeModal').addEventListener('click', function(e) {
        if (e.target === this) closeRecipeModal();
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeRecipeModal();
    });
});
