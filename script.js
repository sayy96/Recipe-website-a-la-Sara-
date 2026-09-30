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
      "Add as much pistachio as you want for extra crunch.",
      "I almost never have tarragon, just use parsley and mint.",
      "I make this with garlic marinated chicken for a full meal"
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
      "Chicken breast or thigh are a tofu alternative.",
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
    
    notes: [
      "Labneh works better than greek yogurt in my opinion"
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
      "1 head white cabbage, finely shredded",
      "1-2 carrots, julienned or shredded",
      "1 red onion, thinly sliced",
      "15g cilantro leaves",
      "5g mint leaves",
      "For the candied cashews: 2 tbsp brown sugar, 2.5 tsp oil, 3/4 tsp turmeric, 200g roasted cashews, 2 tsp cumin seeds",
      "For the curry leaf oil (optional): 1 red chili, sliced, 3 tbsp oil, a handful of fresh curry leaves (or sub a drizzle of chili oil)",
      "For the dressing: 70ml lime juice, 2 tsp dijon mustard, 2 garlic cloves, crushed, 1 tbsp poppy seeds (optional), 1/4 tsp salt, 75ml olive oil"
    ],
    notes: [
      "this recipe is great but takes too long to make your life easier buy preshredded cabbage and carrots or litterally any lettuce is fine if you eat it that day",
      "make at least double the candied cashews, they are addictive and great on other salads or as a snack.",
      "you can also just buy either candies or normal cashews to save time.",
      "if you cant find poppyseed or are cheep/lazy skip it and make the dressing without it"
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
      "200g morning glory or spinach",
      "1 tbsp white miso paste",
      "1 lime, zested and juiced",
      "5g fresh ginger, grated",
      "50g unsalted butter, cubed",
      "2 spring onions, sliced",
      "1 tsp toasted sesame seeds",
      "Salt"
    ],
    notes: [
      "originally they have you make the gnocci which is also an option with 400g Maris Piper potatoes, 500g small swedes, 150g plain flour, 1 egg, and a pinch of salt. cook until super soft, food processor them together and pipe into gnocci shape",
      "litterally any leafy green can be used so spinach, kale you can also cook zuccini or add peas.",
      "I add in cubed chicken that I cooked in miso to add protein",
      "any miso will do, you dont have to have white miso, but it is the most common and mildest flavor.",
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
      "1 large fresh aubergine, grilled until smoky and scooped out (or canned roasted aubergine)",
      "70g tahini",
      "60ml water",
      "2 tsp pomegranate molasses (or sub a little honey and lemon juice)",
      "1 tbsp lemon juice",
      "1 garlic clove, crushed",
      "3 tbsp chopped parsley",
      "Cucumber and cherry tomatoes, diced (optional)",
      "Pomegranate seeds and olive oil, to finish (optional)",
      "Salt and pepper"
    ],
    notes: [
      "Canned roasted aubergine by Sera brand clear jar with a puruple lid. I found it in Delft and California so I assume its everywhere",
      "who besides me has pomegranate molasses? A little honey plus extra lemon juice is basically the same."
    ],
    steps: [
      "Put roasted aubergine in a bowl with the tahini, water, pomegranate molasses, lemon juice, garlic, and parsley. immersion belnd it until smooth, or mash with a fork if you like it chunky.",
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
      "1/2 tsp each: nigella seeds, cumin seeds, fennel seeds ( sub with the powder)",
      "1/2 tbsp lime juice",
      "1 spring onion, sliced",
      "5g mint, shredded",
      "Salt"
    ],
    notes: [
      "Skip nigella seeds if you like everyone doesnt have them, just use ground spice instead of whole seeds at the same aprox. quantities",
      "This mash reheats well, good one to make ahead and can also be used as a dip",
      "you can skip the first 3 ingredients and just make the mash"
    ],
    steps: [
      "Combine the chilies, vinegar, sugar, and a pinch of salt in a small bowl and let pickle for at least 30 minutes.",
      "Steam/boil the carrots until very soft, about 25 minutes, then blitz with the olive oil, curry powder, cinnamon, and a pinch of salt into a rough mash.",
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
      "2 cans chickpeas, drained or 200g dried chickpies",
      "1 pinch ground cumin",
      "120-150g tahini",
      "1 garlic clove, crushed, or more to taste",
      "1.5 tbsp lemon juice, or more to taste",
      "A couple of ice cubes, for creaminess",
      "Salt"
    ],
    notes: [
      "Canned chickpeas save the overnight soak, no real difference in the final result.",
      "if using dried soak overnight with 1/2 tsp baking soda then cook until super soft and try to remove skins",
      "The ice cubes are the trick for extra-smooth hummus, don't skip those.",
      "remove skins for super soft hummus",
      "instead of water + lemon you can use liquid from preserved lemons"
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
      "can sub chicken for tofu or fish but if you use tofu toss in corn starch to have some texture.",
      "buy preserved lemons from a mediterainian store.",
      "no one wants to cook a full chicken buy thigh or breast and cook for 30-40 minutes (timing may be off) instead of 70 minutes.",
      "if you have a cast iron, salt/pepper the chicken and sear it in the cast iron for 3-4 minutes per side before roasting"
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
      "works on tofu,pork, beef, or shrimp too, not just chicken.",
      "Serve in spring roll or on rice/ rice noodles as part of a vermicelli bowl (add shredded/chopped carrot, cucumber, mint, bean sprouts, lettuce, lime, jalepnio or any other veggie).",
      "you can also do it in a cast iron or bake chicken in the oven"
    ],
    steps: [
      "Combine everything except the chicken in a blender and blitz into a marinade.",
      "Marinate the chicken in the mixture for at least 1 hour, up to 24 hours.",
      "Cook in a hot pan (or on the grill) for about 6-8 minutes total, until browned and cooked through, shaking off any lemongrass pieces as they fall off.",
      "Rest 5 minutes, then slice thin."
    ]
  },
  {
    id: "stuffed-aubergine-coconut-dal",
    title: "Stuffed Aubergine in Coconut Curry Dal",
    image: "images/stuffed-aubergine-dal.jpg",
    course: "Mains",
    ingredients: ["Aubergine", "Paneer", "Lentils"],
    cuisine: "Indian-inspired",
    ingredientGroups: [
      {
        heading:"Aubergine rolls",
        items:[
          "3 large aubergines, sliced lengthways into thin planks",
          "3 tbsp olive oil, plus 1 tbsp more for finishing",
          "220g paneer or extra-firm tofu, grated",
          "2 limes, zested and juiced",
          "45g hot mango pickle, chopped, plus extra to serve",
          "5g coriander, chopped, plus extra to serve",
          "100g large spinach leaves, stems removed",
        ]
      },
      {
        heading:"Coconut Dal",
        items:[
          "3 tbsp olive oil", "5 banana shallots, chopped", "45g ginger, chopped", "2 red chilies, chopped", "30 fresh curry leaves (optional)",
          "1 tsp black mustard seeds", "1 tsp ground cumin", "1 tsp ground coriander", "1/2 tsp turmeric", "2 tsp curry powder", "2 tsp tomato paste",
          "100g dried red lentils", "1 can (400ml) coconut milk",
          "Salt and pepper"
        ]
      }
    ],
    notes: [
      "you dont have to shred the tofu you can crumble it with your had just dont blent it!",
      "the tofu can also be subbed with ground chicken or beef, but then cook the meat first or bake for much longer (35-45min)",
      "this is a long recipie but coconut dal can be made as a meal with rice",
      "curry leaves add a ton of savory citryce earthy flavor but if you cant find them do the skin of a lime and add extra of all the seasonings",
      "hot pickle mango can be subbed with mango chutney",
      "!!IMPORTANT that the eggplant is sliced about 1cm thich so you can roll it",
      "to shorten cook time of dal, buy canned/pre cooked lentils you can also just make dal from coconut milk, red curry paste and lentils for almost no effort"
    ],
    steps: [
      "Preheat oven to 220°C fan (425°F). Toss the aubergine slices with the oil, salt, and pepper, spread on lined trays, and bake 25 minutes, flipping halfway, until softened and lightly browned. Cool.",
      "For the dal: cook the shallots in 2 tbsp oil over medium-high heat about 8 minutes until golden. Add the ginger and half the chili and curry leaves, cook 2 minutes, then add the spices, tomato paste, and lentils. Stir a minute, then add the coconut milk, 600ml water, and salt. Simmer 20 minutes until thick, then pour into a baking dish.",
      "While Dal is cooking, Combine the grated paneer, lime zest, mango pickle, a splash of lime juice, coriander, and a pinch of salt in a bowl.",
      "Lay a spinach leaf on each aubergine slice, add a spoonful of the paneer mixture, and roll up tightly, seam-side down, nestling each roll into a casserole dish with the dal. Repeat until all rolls are made.",
      "Bake 15-20 minutes until golden on top and the sauce bubbles. Rest 5 minutes.",
      "(optional I mostly top with cilantro/corriander) Finish by frying the remaining chili and curry leaves in the last tablespoon of oil for a minute until crisp, spoon over the rolls, drizzle with lime juice, and top with coriander."
    ]
  },
  {
    id: "muhammara-red-pepper-walnut-dip",
    title: "Muhammara (Red Pepper and Walnut Dip)",
    image: "images/muhammara.jpg",
    course: "Sides",
    ingredients: ["Red Pepper", "Walnut"],
    cuisine: "Middle Eastern",
    ingredientsList: [
      "3 red peppers (or jar of roasted ones)",
      "50g fresh breadcrumbs",
      "1/2 tbsp lemon juice",
      "1 tbsp pomegranate molasses",
      "1.5 tsp ground cumin",
      "1 tbsp Aleppo chili flakes",
      "1 small garlic clove, crushed",
      "50g walnuts, finely chopped by hand",
      "2 tbsp olive oil, plus extra to finish",
      "Salt"
    ],
    notes: [
      "forget everything in the 1st step, buy pre roasted red peppers in a jar",
      "if you dont have pomegranate molasses, sub with a little honey and extra lemon juice",
      "dont overdo it with the garlic, you cal also use garlic paste to make life easy",
      "if you want to make it complicated use a mortar for everythign except the walnuts (chopped) which you stir in at the end. You can mess with the texture this way"
    ],
    steps: [
      "Roast the peppers at 200°C fan (390°F) for 30-35 minutes, turning occasionally, until blackened. Cover and let cool, then peel off the skin and discard the seeds.",
      "Dry the peppers a bit and work them in a mortar or immersion blender with the breadcrumbs, Walnuts, lemon juice, molasses, cumin, chili, and garlic until combined but still textured, not fully smooth.",
      "Add a pinch of salt, and the olive oil. Adjust molasses and salt to taste, it should be fairly bold. Spread in a shallow bowl, swirl the top, and drizzle with olive oil. Serve at room temperature."
    ]
  },
  {
    id: "tom-yum-soup",
    title: "Tom Yum Soup",
    image: "images/tom-yum-soup.jpg",
    course: "Soups",
    ingredients: ["Shrimp", "Lemongrass"],
    cuisine: "Thai",
    ingredientGroups: [
      {
        heading: "Broth",
        items: [
          "300g whole shrimp, shells and heads on",
          "3 cups water",
          "1/2 cup low-sodium chicken stock",
          "2 stalks lemongrass, outer layers removed",
          "1.5cm piece galangal, sliced (sub ginger and lime juice if you can't find galangal)",
          "5 kaffir lime leaves, torn",
          "2 Thai chilies",
          "3 garlic cloves",
        ]
      },
      {
        heading: "Add Ins",
        items: [
          "120g oyster mushrooms",
          "1 tomato, cut into wedges",
          "1/2 white onion, cut into wedges",
      "1 tsp sugar",
      "3 tbsp fish sauce",
      "3 tbsp lime juice",
      "Cilantro, for garnish",
      "Optional creamy version: 1.5 tbsp Thai chili paste, 1/3 cup evaporated milk"
      ]
      },
      {
        heading: "Creamy Version",
        items: [
      "1.5 tbsp Thai chili paste",
      "1/3 cup evaporated milk"
      ]}
    ],
    notes:[
      "This is super quick even though it looks like a lot and really anything can be added to the broth",
      "you do need the shrimp at least with the shells but can be frozen or not, just thaw them enough to peel "
    ],
    steps: [
      "Peel the shrimp, reserving the meat, and put the shells and heads in a pot.",
      "Smash the garlic, chili, and lemongrass to bruise them, add to the pot along with crushed kaffir lime leaves, galangal, stock, and water.",
      "Bring to a simmer, cover, and cook 10 minutes on medium heat.",
      "Strain the broth, discard the solids, and return the clear broth to the pot over low heat.",
      "Add the onion and mushrooms, simmer 3 minutes, then add the tomato and simmer 1 more minute.",
      "Add the shrimp and simmer 2 minutes until just cooked. Stir in sugar and fish sauce, simmer 1 minute.",
      "Add lime juice, taste, and adjust the balance of sweet, salty, and sour to your liking.",
      "Ladle into bowls and top with cilantro and fresh chili. For a creamy version, stir in the chili paste and evaporated milk when you add the sugar."
    ]
  },
  {
    id: "french-lemon-carrots",
    title: "Lemon Carrots (The French Kind)",
    image: "images/lemon-carrots.jpg",
    course: "Salad",
    ingredients: ["Carrot"],
    cuisine: "French",
    ingredientsList: [
      "1 lb carrots, shredded (buying pre-shredded saves time)",
      "2 tsp Dijon mustard",
      "1 tbsp lemon juice",
      "1.5 tbsp vegetable oil",
      "1.5 tbsp olive oil",
      "1-2 tsp honey, to taste",
      "Salt and pepper",
      "2 tbsp chopped parsley",
      "2 scallions, sliced (optional, easy to skip)"
    ],
    notes:[
      "they are better if htey sit in the dressing for a bit to soften if you use pre shredded carrots",
    ],
    steps: [
      "Whisk together the mustard, lemon juice, oils, honey, salt, and pepper in a bowl.",
      "Toss the shredded carrots in the dressing along with the parsley until well coated.",
      "Skip the scallions if you don't have them on hand, they're not essential to the flavor. Serve chilled or at room temperature."
    ]
  },
  {
    id: "fresh-spring-rolls-peanut-sauce",
    title: "Fresh Spring Rolls with Peanut Sauce",
    image: "images/spring-rolls.jpg",
    course: "Mains",
    ingredients: ["Shrimp", "Veggies", "Rice Noodles", "Rice Paper"],
    cuisine: "Vietnamese-inspired",
    ingredientGroups: [
      {
      heading: "Spring Roll",
      items:[
        "1 package rice paper wrappers (optional: add a sheet of Nori in the rice paper when you construct it)",
        "1 package vermicelli rice noodles (optional, I skip it)",
        "2 mangoes, sliced into thin strips",
        "1 carrot, shredded",
        "1 avocado, sliced thinly",
        "1 cucumber, thinly sliced",
        "Lettuce/spinach/kale/cabbage sliced thinly",
        "1 lb small cooked shrimp (or sub chicken/tofu/meat)",
        "Fresh mint, basil, and cilantro leaves",
        ]
      },
      {
        heading:"For the peanut sauce",
        items:[
          "3/4 cup sweet chili sauce",
          "1/3 cup peanut butter",
          "1/2 tsp soy sauce",
          "1/2 tsp hoisin sauce"
        ]
      }
    
    ],
    notes:[
      "You can really make this with any combination of things inside, avoid super liquidy veggies and anything hot, they will melt the rice paper",
      "!! DONT SKIP FRESH MINT !!",
      "Rice noodeles are ok but I skip them and make it entirely with veggies and shrimp or terriyaki tofu",
      "If you are doing this with people for dinner use  afrying pan full of water at the center of the table and pre cut the ingredients, make everyone wrap/build their own"
    ],
    steps: [
      "Cook the vermicelli noodles according to package directions, then drain and rinse with cold water.",
      "Prepare all filling ingredients: chopped veggies, herbs, and shrimp, laid out and ready to go.",
      "Fill a wide, shallow dish with about an inch of water. Dip one rice wrapper in for 10-15 seconds, it should still feel firm when you lift it out.",
      "Lay the wrapper flat, it'll continue to soften as you fill it, so don't over-soak or it will tear.",
      "Layer a little of each vegetable, a few shrimp, herb leaves, and a pinch of noodles onto the third of the wrapper closest to you.",
      "Fold in the sides, then roll the near edge up and over the filling tightly, like rolling a burrito.",
      "For the peanut sauce, blend all the sauce ingredients together until smooth."
    ]
  },
  {
    id: "smoky-aubergine-pasta",
    title: "Smoky Aubergine Pasta with Tahini",
    image: "images/aubergine-pasta.jpg",
    course: "Mains",
    ingredients: ["Aubergine", "Tahini", "Pasta"],
    cuisine: "Italian-inspired",
    ingredientsList: [
      "5 aubergines, 2 cut into cubes and 3 left whole",
      "165ml olive oil, divided",
      "1 onion, cut into wedges",
      "2 small vine tomatoes, left whole",
      "1 red chili, left whole",
      "3 tbsp tomato paste",
      "1 tsp paprika",
      "7 garlic cloves, crushed",
      "80g tahini",
      "1 tbsp lemon juice",
      "300g pasta shells",
      "10g parsley, chopped",
      "Salt and pepper",
      "Chicken cubed or tofu cubed (optional)"
    ],
    notes: [
      "Buy roasted eggplant in a jar instead of grilling it up (Sera brand purple lid) so you can skip step 2 which is time consuming and annoying",
      "For the tofu/chicken coat in : cumin, salt pepper, and cilantro if you want. You can also add in paprika or any other seasonming. If you coat it in corn starch also it will get crispy in a fying pan, toherwise skip corn starch and oven bake",
      " In  my opinion tofu crispied in a pan with oil is the best addition to this, cut the cubes THE SAME SIZE as the aubergine and aprox, the same size as a pasta shell"
    ],
    steps: [
      "Preheat oven to 220°C fan (425°F). Toss the cubed aubergine with 3 tbsp oil, salt, and pepper, and roast 30 minutes until deeply browned.",
      "(Skip if you bought the pre charred Aubergine in jar) Prick the whole aubergines and char them on a very hot, well-oiled griddle for about 35 minutes until blackened all over. ",
      "In a pan, char the onion, tomatoes, and chili with a splash of oil for about 10 minutes.",
      "Blend the tomato paste, paprika, most of the garlic with the charred vegetables until smooth, this is your sauce base. Cook with 4 tbsp oil in a small pan until fragrant and darkened, about 5-10 minutes.",
      "Whisk together the tahini, remaining garlic, lemon juice, water (add slowly until thickens then smoothes), and a pinch of salt until smooth.",
      "Cook the pasta until al dente, reserving some pasta water before draining.",
      "Warm the sauce base with a splash of pasta water and half the roasted aubergine cubes, and chicken or tofu if used then toss in the drained pasta.",
      "Toss the remaining roasted aubergine with parsley and a final drizzle of oil.",
      "Plate the pasta, drizzle generously with the tahini sauce, top with the aubergine and parsley mixture, and serve extra tahini sauce on the side."
    ]
  },
  {
    id: "pad-kee-mao-drunken-noodles",
    title: "Pad Kee Mao (Drunken Noodles)",
    image: "images/pad-kee-mao.jpg",
    course: "Mains",
    ingredients: ["Chicken", "Rice Noodles", "Basil"],
    cuisine: "Thai",
    ingredientGroups: [
      {
        heading: "Basic Drunken noodle",
        items: [
        "200g wide dried rice noodles",
        "2 tbsp oil",
        "3 garlic cloves, minced",
        "2 Thai chilies, finely chopped",
        "1/2 onion, sliced",
        "200g chicken thighs, cut into bite-size pieces",
        "2 tsp fish sauce",
        "2 green onions, cut into pieces",
        "1 cup Thai basil leaves (regular basil works too)",
        ]
      },
      {
        heading: "The sauce",
        items:[
          " 3 tbsp oyster sauce",
          "1.5 tbsp light soy sauce", 
          "1.5 tbsp dark soy sauce", 
          "2 tsp sugar, 1 tbsp water"
          
        ]
      },
      {
        heading:"Optional Veggies",
        items: [
          "Mushrooms (any kind) ",
          "Bell Pepper / Paprika",
          "Broccoli/Broccolini",
          "Spinach"
        ]
      },
      
    ],
    notes:[
      "if you cant find wide rice noodles you can cur rice paper to the thickness you want. this is super good with thick squares",
      "if the chicken is cut into little strips its even better, so it follows the shape of a noodle",
      "if you want you can also add in mushrooms julianned (sliced into matchsticks) or bell pepper or brocoli/brocolini bites or spinnach to add veggies",
      "You dont have to use dark and light soy, using only dark is tastier",
      "can sub oyster sauce for hoisin but then DONT add sugar!"
    ],
    steps: [
      "Prepare the noodles according to package directions.",
      "Mix the sauce ingredients together in a small bowl.",
      "Heat the oil in a wok or heavy skillet over high heat.",
      "Add the garlic and chili, cooking for about 10 seconds, standing back a bit since the chili can make you cough.",
      "Add the onion and cook 1 minute. (add veggies from notes if you want)",
      "Add the chicken and fish sauce, frying until cooked through, about 2 minutes.",
      "Add the green onion, noodles, and sauce, cooking 1 minute until the sauce reduces and coats everything.",
      "Remove from heat, stir in the basil until just wilted, and serve right away."
    ]
  },
  {
    id: "slow-cooker-carnitas",
    title: "Slow Cooker Carnitas",
    image: "images/carnitas.jpg",
    course: "Mains",
    ingredients: ["Pork"],
    cuisine: "Mexican-inspired",
    ingredientGroups: [
      {
        heading:"",
        items:[
          "2kg pork shoulder (or butt)",
        "2.5 tsp salt",
        "1 tsp black pepper",
        "1 onion, chopped",
        "1 jalapeno, deseeded and chopped",
        "4 garlic cloves, minced",
        "Juice of 2 oranges",
        ]
      },
      {
        heading:"For the Rub",
        items:[
          "1 tbsp dried oregano",
          "2 tsp ground cumin",
          "1 tbsp olive oil"
        ]},
    ],
    notes:[
      "instead of using a slow cooker all day, a pressure cooker can also be used (35-45 min), just follow the instructions for timing when cooking pork shoulder/butt",
      "easiest if you get it boneless but it doesnt really matter",
      "cut raw pork into cubes to accelerate cooking and give more flavor",
      "THIS CAN BE USED IN ANY MEXICAN DISH INCLUDING CRUNCH WRAPS",
      "This is not spicy at all so more chili can be added when cooking it for more uooomphf "
    ],
    steps: [
      "Rinse and dry the pork, then rub all over with salt and pepper.",
      "Combine the rub ingredients and rub over the pork as well.",
      "Place the pork fat-side up in a slow cooker, top with onion, jalapeno, and garlic, and squeeze the orange juice over everything.",
      "Cook on low for 10 hours or high for 7 hours, until tender enough to shred. (or pressure cooker for faster cook)",
      "Remove from the slow cooker, let cool slightly, then shred with two forks.",
      "Skim the fat off the remaining juices and reduce down if there's more than about 2 cups, this liquid is salty and doubles as seasoning.",
      "Spread the shredded pork on a tray, drizzle with some of the reserved liquid, and broil for a few minutes until the edges crisp up."
    ]
  },
  {
    id: "french-taboule",
    title: "Taboulé (The French Kind)",
    image: "images/taboule.jpg",
    course: "Salad",
    ingredients: ["Couscous", "Parsley", "Cucumber"],
    cuisine: "French",
    ingredientGroups: [
      {
        heading:"Classic",
        items:[
          "1.25 cups whole wheat couscous",
          "1 cup boiling water",
          "30 cherry tomatoes (optionally more diced)",
          "2 cups fresh parsley, stems trimmed",
          "3 tbsp fresh mint leaves",
          "1 cucumber, sliced and quartered",
          "1 red bell pepper, diced",
          "1 tsp onion powder",
          "1/3 cup strained tomatoes",
          "1/2 tsp salt",
          "1/4 cup plus 1 tbsp lemon juice",
          "1/4 cup olive oil",
          "Salt and pepper to taste"
        ]
      },
      {
        heading:"Optional Add Ins",
        items:[
          "1 Zucchini cubed and cooked or raw",
          "Diced tomatoes intoe veggie mix",
          "Cubed and cooked eggplant",
          "Olives cubed",
        ]
      },
    ],
    notes:[
      "You can also use Orzo here instead of couscous, or the pearl couscous",
      "Can add more to the veggie mix"
    ],
    steps: [
      "Combine the couscous and boiling water in a bowl, cover, and let sit 5 minutes. ( or follow package)",
      "Blitz the cherry tomatoes, parsley, and mint in a food processor until combined.",
      "Combine the diced pepper and cucumber with the couscous in a large bowl, add the tomato-herb mixture, and mix well, breaking up any couscous clumps.",
      "Add the onion powder, strained tomatoes, salt, lemon juice, and olive oil, mix, and season to taste.",
      "Tastes best after chilling a few hours, but can be eaten right away."
    ]
  },
  {
    id: "classic-tzatziki",
    title: "Tzatziki",
    image: "images/tzatziki.jpg",
    course: "Sides",
    ingredients: ["Cucumber", "Yogurt"],
    cuisine: "Greek",
    ingredientsList: [
      "2 cups grated cucumber (about 1 medium cucumber, no need to peel or seed)",
      "1.5 cups plain Greek yogurt (lebeneh)",
      "2 tbsp olive oil",
      "2 tbsp chopped fresh mint and/or dill",
      "1 tbsp lemon juice",
      "1 garlic clove, pressed or minced (sub garlic powder)",
      "1/2 tsp salt"
    ],
    notes:[
      "Lebeneh is better then greek yogurt if you can find it",
      "If you have preserved lemon use the juice from that"
    ],
    steps: [
      "Working in handfuls, squeeze the grated cucumber over the sink to remove excess moisture, then transfer to a serving bowl.",
      "Add the yogurt, olive oil, herbs, lemon juice, garlic, and salt, stirring to combine. Let rest 5 minutes so the flavors meld, then taste and adjust.",
      "Serve right away or chill for later, it keeps well in the fridge for about 4 days.",
      "Goes especially well alongside the Taboulé above."
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
  if (recipe.ingredientGroups) {
    // Grouped ingredients: each group gets its own sub-heading and its own bullet list.
    recipe.ingredientGroups.forEach(group => {
      const heading = document.createElement("li");
      heading.className = "ingredient-group-heading";
      heading.textContent = group.heading;
      ingredientsEl.appendChild(heading);
 
      group.items.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        ingredientsEl.appendChild(li);
      });
    });
  } else {
    // Flat list, same as before.
    recipe.ingredientsList.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      ingredientsEl.appendChild(li);
    });
  }
 
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
      if (typeof note === "string") {
        // Plain text note, same as before.
        li.textContent = note;
      } else {
        // Note with a link: { text: "...", link: "...", linkLabel: "..." }
        li.textContent = note.text + " ";
        if (note.link) {
          const a = document.createElement("a");
          a.href = note.link;
          a.textContent = note.linkLabel || "See photo";
          a.target = "_blank";
          a.rel = "noopener noreferrer";
          a.className = "note-link";
          li.appendChild(a);
        }
      }
      notesEl.appendChild(li);
    });
  } else {
    notesCol.style.display = "none";
  }
}