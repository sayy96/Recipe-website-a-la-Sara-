# Recipe-website-a-la-Sara-
A simple website for recipe sharing between me and some friends. Mostly for fun and to have somewhere to store recipes I like:
https://sayy96.github.io/Recipe-website-a-la-Sara-/

This is intended to be collaborative bellow are instructions for adding recipes but you can also ask me to add them.

To add them yourself open the script.js file scroll or search for 
// ============================================================
// EVERYTHING BELOW THIS LINE RUNS THE PAGE.
// ============================================================

 DO NOT CHANGE ANYTHING BELOW THIS, above you should see this format:

 {
  id: "TITLE OF RECIPE WITH - instead of spaces",
  title: "TITLE OF RECIPE",
  image: "images/id_from_above.jpg",
  course: "COURSE TYPE",
  ingredients: ["Key ingredient 1", "Key ingredient 2...."],
  cuisine: "SELECT A CUISINE FROM THE DROP DOWN TO PUT",
  ingredientsList: [
    "INGREDIENTS.....",
    "TO ADD MORE USE A COMMA AFTER "" AND CONTINUE LISTING LIKE THIS SECTION UNTIL YOU FINISH, END IT WITH THE ] ",
    "..........",
  ],
  notes: [
    "ANY notes will be in the yellow box on the right side of the instructions",
    "to add many use a comma after"" like in this section ",
  ],
  steps: [
    "ADD any instructions, they will show up under the steps",
    "to add many use a comma after"" like in this section ",
  ]
},

THIS SHOULD BE ABOVE THE FINAL ] CLOSING OUT THAT SECTION OF CODE, IF YOU GET AN ERROR MAKE SURE THERE IS A COMMA AFTER THE FINAL}

IF YOU HAVE SUBGROUPD OF INGREDIENTS TO LIST SO A SAUCE AND A LIST FOR OTHER INGREDIENTS 
USE THIS FORMAT INSTEAD


 {
  id: "TITLE OF RECIPE WITH - instead of spaces",
  title: "TITLE OF RECIPE",
  image: "images/id_from_above.jpg",
  course: "COURSE TYPE",
  ingredients: ["Key ingredient 1", "Key ingredient 2...."],
  cuisine: "SELECT A CUISINE FROM THE DROP DOWN TO PUT",
  ingredientGroups: [
    {
      heading:" SECTION 1",
      items : [
        "INGEDIENTS",
        ".....",
      ]
    },
    {
      heading:"SECTION 2",
      items:[
        "INGREDIENTS...",
        "TO ADD MORE FOLLOW THIS FORMAT OF "INGREDIENT",....",

      ]
    },
    {
      heading:"SECTION 2",
      items: [
        "FOLLOW THE SAME PROCESS OF ADDING INGREDIENTS AS ABOVE",
        "MORE INGREDINETS",
      ]
    }
  ],
  notes: [
    "ANY notes will be in the yellow box on the right side of the instructions",
    "to add many use a comma after"" like in this section ",
  ],
  steps: [
    "ADD any instructions, they will show up under the steps",
    "to add many use a comma after"" like in this section ",
  ]
},
