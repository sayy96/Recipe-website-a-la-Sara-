const recipes = [
  {
    id: "tomato-basil-soup",
    title: "Tomato Basil Soup",
    image: "images/tomato-basil-soup.jpg",
    course: "Soups",
    ingredients: ["Tomato", "Basil"],
    cuisine: "Italian",
    ingredientsList: [
      "6 ripe tomatoes",
      "1/4 cup fresh basil, chopped",
      "1 onion, diced",
      "2 cups vegetable broth",
      "2 tbsp olive oil"
    ],
    steps: [
      "Saute the onion in olive oil until soft.",
      "Add tomatoes and broth, simmer 20 minutes.",
      "Blend until smooth, stir in basil, season to taste."
    ]
  },
  {
    id: "greek-salad",
    title: "Greek Salad",
    image: "images/greek-salad.jpg",
    course: "Salad",
    ingredients: ["Cucumber", "Feta", "Tomato"],
    cuisine: "Greek",
    ingredientsList: [
      "2 cucumbers, sliced",
      "2 tomatoes, chopped",
      "1/2 cup feta cheese",
      "1/4 cup olives",
      "2 tbsp olive oil"
    ],
    steps: [
      "Combine cucumbers, tomatoes, and olives in a bowl.",
      "Top with feta and drizzle with olive oil.",
      "Toss gently and serve chilled."
    ]
  },
  {
    id: "roasted-cauliflower-tahini-pomegranate",
    title: "Roasted Cauliflower with Tahini and Pomegranate",
    image: "images/roasted-cauliflower.jpg",
    course: "Sides",
    ingredients: ["Cauliflower", "Tahini", "Pomegranate"],
    cuisine: "Middle Eastern",
    ingredientsList: [
      "1 large head cauliflower, cut into florets",
      "3 tbsp olive oil",
      "1/4 cup tahini",
      "2 tbsp lemon juice",
      "2 tbsp water",
      "1/4 cup pomegranate seeds",
      "2 tbsp chopped parsley",
      "Salt to taste"
    ],
    steps: [
      "Roast cauliflower at 425°F with olive oil and salt for 25 minutes, until deeply browned.",
      "Whisk tahini, lemon juice, and water into a smooth, pourable sauce.",
      "Arrange roasted cauliflower on a platter, drizzle with tahini sauce, and scatter with pomegranate seeds and parsley."
    ]
  },
  {
    id: "black-lentil-soup-cumin-preserved-lemon",
    title: "Black Lentil Soup with Cumin and Preserved Lemon",
    image: "images/black-lentil-soup.jpg",
    course: "Soups",
    ingredients: ["Lentils", "Lemon", "Cumin"],
    cuisine: "Middle Eastern",
    ingredientsList: [
      "1 cup black lentils, rinsed",
      "1 onion, diced",
      "2 tsp cumin seeds, toasted",
      "1 preserved lemon, finely chopped",
      "4 cups vegetable stock",
      "2 tbsp olive oil",
      "Plain yogurt, to serve"
    ],
    steps: [
      "Saute onion and cumin seeds in olive oil until fragrant.",
      "Add lentils and stock, simmer 25 minutes until lentils are tender.",
      "Stir in preserved lemon, adjust salt, and serve with a swirl of yogurt."
    ]
  },
  {
    id: "charred-green-beans-almonds-zaatar",
    title: "Charred Green Beans with Almonds and Za'atar",
    image: "images/charred-green-beans.jpg",
    course: "Salad",
    ingredients: ["Green Beans", "Almonds", "Za'atar"],
    cuisine: "Middle Eastern",
    ingredientsList: [
      "1 lb green beans, trimmed",
      "2 tbsp olive oil",
      "1/4 cup sliced almonds, toasted",
      "2 tsp za'atar",
      "1 tbsp lemon juice",
      "Salt to taste"
    ],
    steps: [
      "Char green beans in a very hot pan or under a broiler until blistered, about 6 minutes.",
      "Toss with olive oil, lemon juice, and salt while still warm.",
      "Top with toasted almonds and a generous sprinkle of za'atar."
    ]
  },
  {
    id: "cauliflower-pomegranate-pistachio-salad",
    title: "Cauliflower, Pomegranate and Pistachio Salad",
    image: "images/cauliflower-pomegranate-salad.jpg",
    course: "Salad",
    ingredients: ["Cauliflower", "Pomegranate", "Pistachio"],
    cuisine: "Middle Eastern",
    ingredientsList: [
      "1 large cauliflower (about 800g), a third grated, the rest broken into florets",
      "1 medium onion, roughly sliced",
      "80ml olive oil, plus 50ml more for tossing later",
      "25g parsley, chopped",
      "10g mint, chopped",
      "10g tarragon, chopped",
      "Seeds from half a pomegranate",
      "40g toasted pistachios, roughly chopped",
      "1 tsp ground cumin",
      "1.5 tbsp lemon juice",
      "Salt"
    ],
    notes: [
      "Add as much pistachio as you want for extra crunch."
    ],
    steps: [
      "Preheat oven to 200°C fan (390°F).",
      "Grate a third of a large cauliflower (about 200g to 250g), the rest broken into florets.",
      "Toss the cauliflower florets and onion with 2 tbsp of the oil and a pinch of salt, spread on a lined tray, and roast about 20 minutes until golden and just cooked. Let cool.",
      "In a large bowl, combine the roasted vegetables with the remaining oil, the grated raw cauliflower, herbs, pomegranate seeds, pistachios, cumin, lemon juice, and a pinch of salt.",
      "Toss gently and serve on a platter."
    ]
  },
  {
    id: "black-lime-crispy-tofu",
    title: "Black Lime Crispy Tofu",
    image: "images/black-lime-tofu.jpg",
    course: "Mains",
    ingredients: ["Tofu", "Spinach"],
    cuisine: "Fusion",
    ingredientsList: [
      "2 blocks extra-firm tofu, patted dry and cubed",
      "2 tbsp cornflour (add a pinch of onion powder or cumin for extra flavor)",
      "Oil for frying",
      "2 onions, roughly chopped",
      "6 garlic cloves, chopped",
      "60ml olive oil",
      "2 tsp cumin seeds, crushed",
      "2-3 dried black limes, ground (or sub 1 tbsp lime juice + 1 tbsp lime zest)",
      "2 tbsp tomato paste",
      "20g parsley, chopped",
      "250g baby spinach",
      "Salt and black pepper",
      "1 tbsp apple cider vinegar (optional, for pickled onion)",
      "caster sugar (optional, for pickled onion)",
      "1 small red onion, thinly sliced (optional, for pickled onion)"
    ],
    notes: [
      "Chicken breast works well as a swap for the tofu if you want it heartier.",
      "The pickled onion is a nice touch but easy to skip on a weeknight.",
      "Cubed baked eggplant is a good addition if you want more veg in the pan."
    ],
    steps: [
      "Put vinegar, caster sugar, and a pinch of salt in a small bowl with 2 tbsp water. Add the sliced red onion and let sit while you cook the rest of the dish.",
      "Toss the tofu cubes in cornflour (can add onion powder or cumin for extra flavor), then fry in batches until crispy and golden, about 6 minutes per batch. Set aside on paper towels.",
      "Blitz the onion and garlic in a food processor until finely minced. Cook in the olive oil over medium-high heat until soft and browned, about 10 minutes.",
      "Add the cumin, black lime (or lime zest and juice), and tomato paste, cook 1 minute more.",
      "Add 400ml water and a good pinch of salt and pepper, simmer about 6 minutes until thickened.",
      "Stir in the crispy tofu and parsley, then add the spinach in batches, stirring until just wilted.",
      "Serve straight from the pan."
    ]
  },
  {
    id: "roasted-aubergine-curried-yogurt",
    title: "Roasted Aubergine with Curried Yogurt",
    image: "images/roasted-aubergine-curried-yogurt.jpg",
    course: "Sides",
    ingredients: ["Aubergine", "Yogurt"],
    cuisine: "Indian-inspired",
    ingredientsList: [
      "3 large aubergines, sliced into rounds",
      "100ml oil, divided",
      "200g Greek yogurt",
      "2 tsp curry powder, divided",
      "1/4 tsp turmeric",
      "1 lime, zested and juiced",
      "1 onion, thinly sliced",
      "30g flaked almonds",
      "1/2 tsp cumin seeds, toasted and crushed",
      "1/2 tsp coriander seeds, toasted and crushed",
      "40g pomegranate seeds",
      "Salt and pepper"
    ],
    steps: [
      "Preheat oven to 220°C fan (425°F). Toss aubergine slices with about 70ml of the oil and salt, spread on a lined tray, and roast 40-45 minutes until deep golden-brown. Cool slightly.",
      "Mix the yogurt with 1 tsp curry powder, turmeric, lime juice, salt, and pepper. Chill until ready to serve.",
      "Fry the onion in the remaining oil over medium-high heat for about 8 minutes until soft and golden. Add the remaining curry powder, almonds, and a pinch of salt, frying 2 more minutes until the almonds are lightly browned.",
      "Arrange the aubergine on a platter, spoon over the yogurt, and top with the fried onion mix, cumin seeds, coriander seeds, pomegranate seeds, and lime zest."
    ]
  },
  {
    id: "lime-cabbage-slaw-curry-leaf",
    title: "Lime and Cabbage Slaw with Curry Leaf",
    image: "images/lime-cabbage-slaw.jpg",
    course: "Salad",
    ingredients: ["Cabbage", "Cashews", "Lime"],
    cuisine: "Southeast Asian-inspired",
    ingredientsList: [
      "1 head white cabbage, finely shredded (or use pre-shredded bags to save time)",
      "1-2 carrots, julienned (pre-shredded works fine too)",
      "1 red onion, thinly sliced",
      "15g cilantro leaves",
      "5g mint leaves",
      "For the candied cashews: 2 tbsp brown sugar, 2.5 tsp oil, 3/4 tsp turmeric, 200g roasted cashews, 2 tsp cumin seeds",
      "For the curry leaf oil (optional): 1 red chili, sliced, 3 tbsp oil, a handful of fresh curry leaves (or sub a drizzle of chili oil)",
      "For the dressing: 70ml lime juice, 2 tsp dijon mustard, 2 garlic cloves, crushed, 1 tbsp poppy seeds (optional), 1/4 tsp salt, 75ml olive oil"
    ],
    notes: [
      "If you're short on time, skip the poppy seeds and curry leaf oil entirely, a drizzle of chili oil covers the same flavor note.",
      "Pre-shredded cabbage and carrot bags work great here and save a lot of prep time."
    ],
    steps: [
      "For the candied cashews: heat the sugar, oil, turmeric, and 2 tbsp water in a small pan until boiling, then stir in the cashews and cumin. Cook until coated and sticky, then spread on a tray and bake at 160°C fan (320°F) for about 14 minutes until golden. Cool completely.",
      "For the curry leaf oil: gently cook the chili in the oil for about 7 minutes, then add the curry leaves and cook 2-3 more minutes until translucent.",
      "Whisk together the dressing ingredients, adding the olive oil slowly while whisking.",
      "Toss the cabbage, carrots, and onion with the dressing and a pinch of salt, let sit 15 minutes to soften slightly.",
      "Fold in the herbs, transfer to a platter, drizzle with the curry leaf oil, and top with a handful of the candied cashews."
    ]
  },
  {
    id: "gnocchi-miso-butter",
    title: "Pan-Fried Gnocchi with Miso Butter",
    image: "images/gnocchi-miso-butter.jpg",
    course: "Mains",
    ingredients: ["Gnocchi", "Miso", "Spinach"],
    cuisine: "Fusion",
    ingredientsList: [
      "500g store-bought gnocchi",
      "2 tbsp oil, divided",
      "500ml vegetable or chicken stock",
      "200g baby spinach",
      "1 tbsp white miso paste",
      "1 lime, zested and juiced",
      "5g fresh ginger, grated",
      "50g unsalted butter, cubed",
      "2 spring onions, sliced",
      "1 tsp toasted sesame seeds",
      "Salt"
    ],
    notes: [
      "Store-bought gnocchi is fine here, no need to make it from scratch.",
      "Sub in another quick-cooking green like kale ribbons if you don't have spinach."
    ],
    steps: [
      "Simmer the stock in a large pan until reduced to about 200ml, roughly 12-14 minutes.",
      "Add the spinach and cook 2 minutes until just wilted, then remove and set aside, leaving the liquid in the pan.",
      "Whisk the miso, lime juice, ginger, and butter into the reduced stock over medium heat, about 3 minutes, until smooth and slightly thickened. Don't let it boil.",
      "Pan-fry the gnocchi in the remaining oil over medium-high heat until golden and crisp, 1-2 minutes per side.",
      "Add the crispy gnocchi and spinach back into the sauce, warm through, and serve topped with lime zest, spring onions, and sesame seeds."
    ]
  },
  {
    id: "mutabal-aubergine-dip",
    title: "Mutabal (Smoky Aubergine Dip)",
    image: "images/mutabal.jpg",
    course: "Sides",
    ingredients: ["Aubergine", "Tahini"],
    cuisine: "Middle Eastern",
    ingredientsList: [
      "1 jar canned roasted aubergine (or 1 large fresh aubergine, grilled until smoky and scooped out)",
      "70g tahini",
      "60ml water",
      "2 tsp pomegranate molasses (or sub a little honey and lemon juice)",
      "1 tbsp lemon juice",
      "1 garlic clove, crushed",
      "3 tbsp chopped parsley",
      "Cucumber and cherry tomatoes, diced (optional)",
      "Pomegranate seeds and olive oil, to finish",
      "Salt and pepper"
    ],
    notes: [
      "Canned roasted aubergine saves the whole grilling step and tastes great here.",
      "No pomegranate molasses in the house? A little honey plus extra lemon juice gets you close."
    ],
    steps: [
      "Chop the roasted aubergine and combine in a bowl with the tahini, water, pomegranate molasses, lemon juice, garlic, and parsley. Mix well.",
      "Taste and adjust, adding more garlic, lemon, or molasses until it has a good balance of sour and sweet.",
      "Stir in diced cucumber and tomato if using.",
      "Spread on a shallow plate, top with pomegranate seeds, and drizzle with olive oil. Great with pita or pita chips."
    ]
  },
  {
    id: "curried-carrot-mash",
    title: "Curried Carrot Mash with Brown Butter",
    image: "images/curried-carrot-mash.jpg",
    course: "Sides",
    ingredients: ["Carrot"],
    cuisine: "Indian-inspired",
    ingredientsList: [
      "1-2 red chilies, thinly sliced",
      "1.5 tbsp white wine vinegar",
      "1/2 tsp sugar",
      "8 carrots, peeled and chopped",
      "2 tbsp olive oil",
      "1 tsp curry powder",
      "1/4 tsp cinnamon",
      "30g butter (or extra olive oil)",
      "2cm piece ginger, cut into thin matchsticks",
      "1/2 tsp each: cumin seeds, fennel seeds",
      "1/2 tbsp lime juice",
      "1 spring onion, sliced",
      "5g mint, shredded",
      "Salt"
    ],
    notes: [
      "Skip nigella seeds if you don't have them on hand, or just use a bit of ground spice instead of whole seeds.",
      "This mash reheats well, good one to make ahead."
    ],
    steps: [
      "Combine the chilies, vinegar, sugar, and a pinch of salt in a small bowl and let pickle for at least 30 minutes.",
      "Steam or boil the carrots until very soft, about 25 minutes, then blitz with the olive oil, curry powder, cinnamon, and a pinch of salt into a rough mash.",
      "While the carrots cook, gently melt the butter with the ginger and spice seeds in a small pan until fragrant and lightly browned, 3-5 minutes.",
      "Spread the mash on a plate, drizzle with the spiced butter, sprinkle with lime juice, drained pickled chilies, spring onion, and mint."
    ]
  },
  {
    id: "classic-hummus",
    title: "Classic Hummus",
    image: "images/hummus.jpg",
    course: "Sides",
    ingredients: ["Chickpeas", "Tahini"],
    cuisine: "Middle Eastern",
    ingredientsList: [
      "2 cans chickpeas, drained",
      "1 pinch ground cumin",
      "120-150g tahini",
      "1 garlic clove, crushed, or more to taste",
      "1.5 tbsp lemon juice, or more to taste",
      "A couple of ice cubes, for creaminess",
      "Salt"
    ],
    notes: [
      "Canned chickpeas save the overnight soak, no real difference in the final result.",
      "The ice cubes are the trick for extra-smooth hummus, don't skip those."
    ],
    steps: [
      "Simmer the chickpeas in water with a pinch of cumin and salt for about 15 minutes until soft.",
      "Drain, reserving a little of the liquid, and blitz the warm chickpeas with the tahini, garlic, lemon juice, ice cubes, a splash of reserved liquid, and a pinch of salt until smooth.",
      "Taste and adjust, adding more tahini, garlic, lemon, or salt as needed. Blend until very smooth, it will thicken as it sits.",
      "Spread in a shallow bowl, top with olive oil, and personalize with herbs, toasted nuts, or a spoon of harissa if you like."
    ]
  },
  {
    id: "preserved-lemon-chicken",
    title: "Preserved Lemon Chicken",
    image: "images/preserved-lemon-chicken.jpg",
    course: "Mains",
    ingredients: ["Chicken", "Lemon"],
    cuisine: "Middle Eastern",
    ingredientsList: [
      "70g unsalted butter, softened",
      "3 tbsp thyme leaves",
      "3 garlic cloves, crushed",
      "1 small preserved lemon, chopped",
      "1 lemon, zested and juiced",
      "1 whole chicken, or chicken breast/thighs",
      "Salt and pepper"
    ],
    notes: [
      "This compound butter also works great on fish or tofu, not just chicken.",
      "If using breast or thigh instead of a whole bird, marinate at least 2 hours for real flavor."
    ],
    steps: [
      "Blitz the butter, thyme, garlic, preserved lemon, lemon zest, and a pinch of salt and pepper in a food processor (or with an immersion blender) until combined.",
      "Rub the butter mixture under the skin and over the chicken. If using breast or thigh, let marinate 2 hours or more for the best flavor.",
      "Drizzle with lemon juice, season, and roast at 190°C fan (375°F) for about 70 minutes, basting occasionally, until golden and cooked through.",
      "Rest 10 minutes before serving."
    ]
  },
  {
    id: "lemongrass-chicken",
    title: "Lemongrass Chicken",
    image: "images/lemongrass-chicken.jpg",
    course: "Mains",
    ingredients: ["Chicken", "Lemongrass"],
    cuisine: "Vietnamese-inspired",
    ingredientsList: [
      "600-800g chicken thigh fillets, boneless and skinless (or breast, pork, beef, or seafood)",
      "1 stalk lemongrass, white part only, bruised and sliced",
      "2 garlic cloves, minced",
      "2 tbsp lime juice",
      "2 tbsp fish sauce",
      "1 tbsp soy sauce",
      "2 tbsp brown sugar",
      "1 tbsp vegetable oil"
    ],
    notes: [
      "This marinade works on pork, beef, or shrimp too, not just chicken.",
      "Great served over rice noodles with fresh herbs as part of a vermicelli bowl."
    ],
    steps: [
      "Combine everything except the chicken in a blender and blitz into a marinade.",
      "Marinate the chicken in the mixture for at least 1 hour, up to 24 hours.",
      "Cook in a hot pan (or on the grill) for about 6-8 minutes total, until browned and cooked through, shaking off any lemongrass pieces as they fall off.",
      "Rest 5 minutes, then slice thin."
    ]
  }
];

// ============================================================
// EVERYTHING BELOW THIS LINE RUNS AUTOMATICALLY.
// You shouldn't need to edit it just to add recipes.
// ============================================================

const isHomePage = document.getElementById("card-grid") !== null;
const isRecipePage = document.getElementById("recipe-title") !== null;

if (isHomePage) {
  setupHomePage();
}

if (isRecipePage) {
  setupRecipePage();
}

function setupHomePage() {
  populateDropdown("course-select", getUniqueValues(recipes.map(r => r.course)));
  populateDropdown("ingredient-select", getUniqueValues(recipes.flatMap(r => r.ingredients)));
  populateDropdown("cuisine-select", getUniqueValues(recipes.map(r => r.cuisine)));

  document.getElementById("course-select").addEventListener("change", renderCards);
  document.getElementById("ingredient-select").addEventListener("change", renderCards);
  document.getElementById("cuisine-select").addEventListener("change", renderCards);

  renderCards();
}

function getUniqueValues(list) {
  return [...new Set(list)].sort();
}

function populateDropdown(selectId, values) {
  const select = document.getElementById(selectId);
  values.forEach(value => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.appendChild(option);
  });
}

function renderCards() {
  const courseFilter = document.getElementById("course-select").value;
  const ingredientFilter = document.getElementById("ingredient-select").value;
  const cuisineFilter = document.getElementById("cuisine-select").value;

  const filtered = recipes.filter(recipe => {
    const matchesCourse = courseFilter === "all" || recipe.course === courseFilter;
    const matchesIngredient = ingredientFilter === "all" || recipe.ingredients.includes(ingredientFilter);
    const matchesCuisine = cuisineFilter === "all" || recipe.cuisine === cuisineFilter;
    return matchesCourse && matchesIngredient && matchesCuisine;
  });

  const grid = document.getElementById("card-grid");
  grid.innerHTML = "";

  if (filtered.length === 0) {
    grid.innerHTML = "<p>No recipes match those filters yet.</p>";
    return;
  }

  filtered.forEach(recipe => {
    const card = document.createElement("a");
    card.href = "recipe.html?id=" + recipe.id;
    card.className = "recipe-card";
    card.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.title}" onerror="this.style.display='none'">
      <h3>${recipe.title}</h3>
    `;
    grid.appendChild(card);
  });
}

function setupRecipePage() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const recipe = recipes.find(r => r.id === id);

  if (!recipe) {
    document.getElementById("recipe-title").textContent = "Recipe not found";
    return;
  }

  document.getElementById("page-title").textContent = recipe.title;
  document.getElementById("recipe-title").textContent = recipe.title;
  document.getElementById("recipe-image").src = recipe.image;
  document.getElementById("recipe-image").alt = recipe.title;
  document.getElementById("recipe-image").onerror = function() { this.style.display = "none"; };
  document.getElementById("recipe-tags").textContent =
    `${recipe.course} · ${recipe.cuisine} · ${recipe.ingredients.join(", ")}`;

  const ingredientsEl = document.getElementById("recipe-ingredients");
  recipe.ingredientsList.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    ingredientsEl.appendChild(li);
  });

  const stepsEl = document.getElementById("recipe-steps");
  recipe.steps.forEach(step => {
    const li = document.createElement("li");
    li.textContent = step;
    stepsEl.appendChild(li);
  });

  const notesCol = document.getElementById("recipe-notes-col");
  const notesEl = document.getElementById("recipe-notes");
  if (recipe.notes && recipe.notes.length > 0) {
    recipe.notes.forEach(note => {
      const li = document.createElement("li");
      li.textContent = note;
      notesEl.appendChild(li);
    });
  } else {
    notesCol.style.display = "none";
  }
}