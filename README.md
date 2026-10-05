# Recipe Website à la Sara

A simple website for recipe sharing between me and some friends. Mostly for fun and to have somewhere to store recipes I like.

**Live site:** https://sayy96.github.io/Recipe-website-a-la-Sara-/

This project is collaborative. You can add recipes yourself using the instructions below, or just ask me to add them.

---

## How to add a recipe

1. Open `script.js`.
2. Search for this block of comments:

   ```javascript
   // ============================================================
   // EVERYTHING BELOW THIS LINE RUNS THE PAGE.
   // ============================================================
   ```

3. **Do not change anything below that line.**
4. Just above it, add your recipe using one of the two templates below.
5. Your new recipe goes **above the final `]`** that closes the recipes list.
6. If you get an error, check that there is a comma after the final `}` of the recipe before yours.

### Field guide

| Field | What to put |
|---|---|
| `id` | Recipe title in lowercase with `-` instead of spaces (e.g. `chicken-curry`) |
| `title` | Recipe title as it should display |
| `image` | `images/` + the same id + `.jpg` (e.g. `images/chicken-curry.jpg`) |
| `course` | Course type (e.g. Dinner, Dessert) |
| `ingredients` | Short list of key ingredients (used for searching and filtering) |
| `cuisine` | Pick one from the cuisine drop-down options on the site |
| `notes` | Shown in the yellow box to the right of the instructions |
| `steps` | Instructions, shown under the steps heading |

> **Tip:** Every item in a list is wrapped in double quotes and separated by a comma. Avoid using double quotes inside the text itself (use single quotes `'` instead), or it will break the page.

---

## Template 1: Simple ingredient list

```javascript
{
  id: "title-of-recipe",
  title: "Title of Recipe",
  image: "images/title-of-recipe.jpg",
  course: "Course type",
  ingredients: ["Key ingredient 1", "Key ingredient 2"],
  cuisine: "Cuisine from the drop-down",
  ingredientsList: [
    "First ingredient",
    "Second ingredient",
    "Last ingredient (no comma after the last item is fine)"
  ],
  notes: [
    "Any note you want in the yellow box",
    "Add more notes the same way, with a comma between them"
  ],
  steps: [
    "First step",
    "Second step",
    "Add more steps the same way, with a comma between them"
  ]
},
```

---

## Template 2: Ingredients with sub-groups

Use this one if you have separate lists, for example a sauce plus the main ingredients.

```javascript
{
  id: "title-of-recipe",
  title: "Title of Recipe",
  image: "images/title-of-recipe.jpg",
  course: "Course type",
  ingredients: ["Key ingredient 1", "Key ingredient 2"],
  cuisine: "Cuisine from the drop-down",
  ingredientGroups: [
    {
      heading: "Section 1 (e.g. Sauce)",
      items: [
        "Ingredient",
        "Another ingredient"
      ]
    },
    {
      heading: "Section 2 (e.g. Main)",
      items: [
        "Ingredient",
        "Another ingredient"
      ]
    },
    {
      heading: "Section 3 (e.g. Toppings)",
      items: [
        "Ingredient",
        "Another ingredient"
      ]
    }
  ],
  notes: [
    "Any note you want in the yellow box",
    "Add more notes the same way, with a comma between them"
  ],
  steps: [
    "First step",
    "Second step",
    "Add more steps the same way, with a comma between them"
  ]
},
```

---

## Troubleshooting

- **Page is blank after my edit:** you most likely have a missing comma, a missing closing bracket, or a double quote inside a text string.
- **Image not showing:** the filename in `image` must exactly match the file in the `images/` folder, including capitalization and `.jpg`.
- **Stuck?** Message me and I will add it for you.
