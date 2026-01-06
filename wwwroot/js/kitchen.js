
        /* ================================================================
           RECIPE DATA - UPDATE THIS ARRAY WITH YOUR RECIPES
        ================================================================ */
        const recipes = [
            {
                title: "Scotish Shortbread",
                tags: ["Snack"],
                prep: "20 mins",
                cook: "30 mins",
                difficulty: "Medium",
                servings: "10 to 20",
                image: "assets/shortbread.jpg",
                description: "A simple ratio of butter, sugar, and flour creates a rich, crumbly treat.",
                ingredients: `<ul>
                    <li>200g butter</li>
                    <li>100g sugar</li>
                    <li>300g self-raising flour</li>
                </ul>`,
                instructions: `<p>Cream butter and sugar until fluffy. Add flour gradually and mix until dough forms. Roll out and cut into shapes. Bake at 180°C for 15-20 minutes until golden.</p>`,
                notes: "Use high-quality butter for the best flavour. You can also add a pinch of salt to balance the sweetness."
            },
            {
                title: "Cranberry Sauce",
                tags: ["Sauce"],
                prep: "10 mins",
                cook: "15 mins",
                difficulty: "Easy",
                servings: "30",
                image: "https://images.unsplash.com/photo-1764296922399-e140273581ae?q=80&w=772&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                description: "A tart and sweet sauce perfect for holiday meals.",
                ingredients: `<ul>
                    <li>500 g fresh or frozen cranberries</li>
                    <li>300 g sugar</li>
                    <li>2 teaspoon finely grated lemon zest</li>
                    <li>3 tablespoon water</li>
                    <li>160 g Brown Sugar</li>
                    <li>45 g Dijon mustard</li>
                    <li>45 g red wine vinegar</li>
                    <li>42 g extra virgin olive oil</li>
                    <li>30 g finely chopped shallots</li>
                    <li>1.5 teaspoon chopped fresh thyme or rosemary</li>
                    <li>1.5 teaspoon finely grated fresh ginger</li>
                    <li>1 teaspoon sea salt</li>
                </ul>`,
                instructions: `<p>Place the first four ingredients in a small saucepan and bring to a boil. Simmer for about 10 minutes or until soft and thickened</p>
                </br>
                <p>Add all remaining ingredients and simmer for another 5 minutes. Add a few more whole cranberries and simmer for another minute.</p>
                </br>
                <p>Let the sauce cool to room temperature and then store in the fridge. Will keep for at least a week.</p>`,
                notes: "Feel free to adjust the sweetness or acidity to your taste. This sauce pairs wonderfully with turkey and roasted vegetables."
            },
            {
                title: "Cranberry Glazed Salmon",
                tags: ["Dinner"],
                prep: "10 mins",
                cook: "15 mins",
                difficulty: "Easy",
                servings: "4",
                image: "https://images.unsplash.com/photo-1499125562588-29fb8a56b5d5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                description: "A deliciously glazed salmon fillet with a tangy cranberry sauce.",
                ingredients: `<ul>
                    <li>800g salmon, (4 salmon fillets)</li>
                    <li>1/3 batch of cranberry sauce</li>
                </ul>`,
                instructions: `<p>Preheat the oven to 180°C.</p>
                    </br>
                    <p>Season salmon fillets with salt and pepper, then place on a lined baking tray and bake till it reaches 50°C internal temperature (Roughly 5 minutes).</p>
                    </br>
                    <p>Once the salmon hits the desired internal temperature, remove it from the oven and spread a 0.5cm thick layer of cranberry sauce on top, then bake till it reaches 60°C internal (Roughly 7-10 minutes).</p>
                    </br>
                    <p>The salmon will continue to cook in the residual heat, so take the salmon out when it reaches 60°C internal temperature.</p>`,
                notes: "Serve with steamed vegetables or a fresh salad for a complete meal."
            },
            {
                title: "Moist Banana Bread",
                tags: ["Snack"],
                prep: "20 mins",
                cook: "1 hour",
                difficulty: "Medium",
                servings: "Many",
                image: "https://images.unsplash.com/photo-1673961020718-ac4698e08aa8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                description: "A moist and delicious banana bread made with ripe bananas, butter, chocolate chips, and a hint of vanilla.",
                ingredients: `<ul>
                    <li>3 very ripe bananas, (medium/large)</li>
                    <li>115 g unsalted butter, (8 Tbsp) at room temperature</li>
                    <li>125 g granulated sugar</li>
                    <li>2 large eggs, lightly beaten</li>
                    <li>190 g all-purpose flour</li>
                    <li>1 tsp baking soda</li>
                    <li>1/2 tsp salt</li>
                    <li>1/2 tsp vanilla extract</li>
                    <li>117 g walnuts (optional topping)</li>
                    <li>72.5 g raisins (optional)</li>
                </ul>`,
                instructions: `<p>Preheat the oven to 180°C, then grease and flour a bread loaf pan.</p>
                    <br>
                    <p>In a large mixing bowl, cream together the softened butter and the sugar.</p>
                    <br>
                    <p>Mash the bananas with a fork or use a hand blender until you have the consistency of at least a chunky sauce or completely blitzed to liquid.</p>
                    <br>
                    <p>In the same large mixing bowl, mix the bananas and eggs into the butter and sugar mixture until blended.</p>
                    <br>
                    <p>In a separate bowl, whisk together the flour, the baking soda and the salt. Once whisked together, add to the batter.</p>
                    <br>
                    <p>Add in the vanilla extract and (if using) mix in the chopped walnuts, raisins and/or chocolate chips.</p>
                    <br>
                    <p>Pour into the prepared loaf pan and bake at 180°C for 55 to 60 minutes, or until a knife inserted into the centre comes out clean. Let the banana bread rest for 10 minutes before transferring to a wire rack to cool.</p>`,
                notes: "Optional: Add a handful of chocolate chips or lay sliced bananas on top before baking for extra texture and flavour."
            },
            {
                title: "One-Pan Cashew Chicken",
                tags: ["Dinner"],
                prep: "15 mins",
                cook: "30 mins",
                difficulty: "Easy",
                servings: "3",
                image: "https://images.unsplash.com/photo-1761315412952-a3a9e3ed06ff?q=80&w=776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                description: "A one-pan meal with tender chicken, cashews, and a savory sauce.",
                ingredients: `<ul>
                    <li>120ml soy sauce</li>
                    <li>90ml honey</li>
                    <li>30ml rice wine vinegar</li>
                    <li>30ml toasted sesame oil</li>
                    <li>3 garlic cloves, minced</li>
                    <li>10ml freshly grated ginger</li>
                    <li>1 red bell pepper, chopped</li>
                    <li>1 orange bell pepper, chopped</li>
                    <li>1 red onion, chopped</li>
                    <li>6 boneless chicken thighs</li>
                    <li>150g raw unsalted cashews</li>
                    <li>Cooked brown or white rice, for serving</li>
                    <li>Chopped fresh chives, for topping</li>
                    <li>Toasted sesame seeds, for topping</li>
                </ul>`,
                instructions: `<p>Preheat the oven to 200°C.</p>
                    <br>
                    <p>In a bowl, whisk together the soy sauce, honey, vinegar, sesame oil, garlic and ginger. Place the chicken in a bowl or a container and cover it with the sauce. </p>
                    <br>
                    <p>Place the bell peppers and onion on a baking sheet. Sprinkle salt, pepper and add a dash of oil. Toss well. Roast in the oven for 15 minutes.</p>
                    <br>
                    <p>After 5 minutes, push all the vegetables to one side. Place the chicken pieces in the marinade on the baking sheet. Add the cashews as well. Roast until the chicken is cooked through, 20 minutes.</p>
                    <br>
                    <p>Toss everything together on the sheet before serving. Serve over rice and sprinkle with scallions and sesame seeds.</p>`,
                notes: "For best results, marinate the chicken overnight. Feel free to swap the vegetables for whatever you have on hand, such as broccoli, parsnips, or carrots."
            },
            {
                title: "Raspberry Ricotta Cake",
                tags: ["Dessert"],
                prep: "15 hour",
                cook: "65 mins",
                difficulty: "Advanced",
                servings: "12",
                image: "https://images.unsplash.com/photo-1675648506668-7b6d3d0dcbd8?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                description: "An Italian-inspired dessert filled with fresh raspberries & blackberries, creamy ricotta cheese, and a hint of citrus zest.",
                ingredients: `<ul>
                    <li>Nonstick cooking spray</li>
                    <li>220g all-purpose flour</li>
                    <li>1 tablespoon (12g) baking powder</li>
                    <li>1 teaspoon kosher salt</li>
                    <li>365g ricotta cheese</li>
                    <li>275g granulated sugar, divided into 2 bowls (225g and 50g)</li>
                    <li>Grated zest of 1 lemon, lime, grapefruit or orange (optional)</li>
                    <li>3 large eggs</li>
                    <li>1 teaspoon vanilla extract</li>
                    <li>115g unsalted butter, melted</li>
                    <li>400g fresh raspberries or blackberries</li>
                </ul>`,
                instructions: `<p>Preheat the oven to 180°C.</p>
                    <br>
                    <p>Grease a 9-inch springform pan with nonstick cooking spray and line the bottom with parchment paper.</p>
                    <br>
                    <p>In a medium bowl, whisk together the flour, baking powder, and salt.</p>
                    <br>
                    <p>In a large bowl, using an electric mixer on medium speed, beat the ricotta cheese and 225g of the sugar until smooth and creamy, about 2 minutes. If using, add the citrus zest and mix to combine.</p>
                    <br>
                    <p>Add the eggs one at a time, beating well after each addition. Mix in the vanilla extract. With the mixer on low speed, add the dry ingredients in three additions, alternating with the melted butter, beginning and ending with the dry ingredients. Mix just until combined.</p>
                    <br>
                    <p>Gently fold in half of the berries.</p>
                    <br>
                    <p>Pour the batter into the prepared pan and smooth the top with a spatula. Scatter the remaining berries over the top and sprinkle with the remaining 50g sugar.</p>
                    <br>
                    <p>Bake until the cake is golden brown and a toothpick inserted into the center comes out clean, about 65 minutes. Let cool completely in the pan on a wire rack. Run a knife around the edges to loosen, then remove the sides of the pan. Slice and serve.</p>`,
                notes: "I haven't quite perfected this recipe yet, so this may change in the future!"
            }
        ];

        // Open recipe modal
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

            // Display banner image
            const bannerContainer = document.getElementById('modalBanner');
            if (recipe.image) {
                bannerContainer.innerHTML = `<img src="${recipe.image}" alt="${recipe.title}">`;
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

        // Close recipe modal
        function closeRecipeModal() {
            document.getElementById('recipeModal').classList.remove('active');
            document.body.style.overflow = '';
        }

        // Close modal on background click
        document.getElementById('recipeModal').addEventListener('click', function (e) {
            if (e.target === this) closeRecipeModal();
        });

        // Close modal with Escape key
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') closeRecipeModal();
        });

        // Filter functionality - single selection toggle
        const filterBtns = document.querySelectorAll('.filter-btn');
        const recipeCards = document.querySelectorAll('.recipe-card');
        const clearBtn = document.querySelector('.clear-filters');
        let activeFilter = null;

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.dataset.filter;

                // If clicking the same filter, deselect it
                if (btn.classList.contains('active')) {
                    btn.classList.remove('active');
                    activeFilter = null;
                } else {
                    // Remove active from all buttons
                    filterBtns.forEach(b => b.classList.remove('active'));
                    // Add active to clicked button
                    btn.classList.add('active');
                    activeFilter = filter;
                }

                applyFilters();
                clearBtn.classList.toggle('visible', activeFilter !== null);
            });
        });

        function applyFilters() {
            recipeCards.forEach(card => {
                const tags = card.dataset.tags.split(',');
                if (activeFilter === null || tags.includes(activeFilter)) {
                    card.classList.add('visible');
                } else {
                    card.classList.remove('visible');
                }
            });
            updateShowMoreButton();
        }

        function clearFilters() {
            activeFilter = null;
            filterBtns.forEach(btn => btn.classList.remove('active'));
            clearBtn.classList.remove('visible');
            recipeCards.forEach(card => card.classList.add('visible'));
            updateShowMoreButton();
        }

        // Show more functionality
        const INITIAL_VISIBLE = 4;
        let showingAll = false;

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
                if (activeFilter === null || tags.includes(activeFilter)) {
                    card.classList.add('visible');
                }
            });
            updateShowMoreButton();
        }

        function updateShowMoreButton() {
            const btn = document.querySelector('.show-more-btn');
            const visibleCards = document.querySelectorAll('.recipe-card.visible').length;
            const totalMatchingCards = activeFilter === null
                ? recipeCards.length
                : [...recipeCards].filter(card => {
                    const tags = card.dataset.tags.split(',');
                    return tags.includes(activeFilter);
                }).length;

            btn.classList.toggle('hidden', showingAll || visibleCards >= totalMatchingCards);
        }

        // Initialize
        initializeVisibility();