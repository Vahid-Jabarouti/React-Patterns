const secretItems = [
    "2 lb salmon",
    "5 springs fresh rosemary",
    "2 tablespoon olive oil",
    "2 small lemons",
    "1 teaspoon kosher salt",
    "4 cloves ofchoped garlic"
  ];

  const secretInstructions = [
    "Preheat the oven to 375 degrees.",
    "Lightly coat aluminum foil with oil",
    "Place salmon on foil",
    "Cover with rosemary, sliced lemons, chopped garlic.",
    "Bake for 15-20 minutes until cooked through.",
    "Remove from oven."
  ]

  function IngredientsList(props) {
    return (
      React.createElement(
    "section",
    {id: "baked-salmon", key: 0},
    React.createElement("h1", null, "Baked Salmon"),
    React.createElement(
      "div",
      {className: "ingredients"},
      React.createElement("ul", null,
        props.items.map((ingredient, idx) => React.createElement("li", {key: idx}, ingredient)))
    )))
  }

  function InstructionsList(props) {
    return (
    React.createElement(
      "section",
      {className: "instructions", key: 1},
      React.createElement("h2", null, "Cooking Instructions"),
      React.createElement("div", null, React.createElement("div", 
      null,
      props.instructions.map((ingredient, idx) => React.createElement("p", {key: idx}, ingredient)))))
    )
  }

  // let list = React.createElement(
  //   "section",
  //   {id: "baked-salmon"},
  //   React.createElement("h1", null, "Baked Salmon"),
  //   React.createElement(
  //     "div",
  //     {className: "ingredients"},
  //     React.createElement("ul", null,
  //       items.map((ingredient, idx) => React.createElement("li", {key: idx}, ingredient)))
  //   ),
  //   React.createElement(
  //     "section",
  //     {className: "instructions"},
  //     React.createElement("h2", null, "Cooking Instructions"),
  //     React.createElement("div", null, React.createElement("div", 
  //     null,
  //     instructions.map((ingredient, idx) => React.createElement("p", {key: idx}, ingredient))))))

  ReactDOM.render(
    [React.createElement(IngredientsList, {items: secretItems, key: 0}, null),
     React.createElement(InstructionsList, {instructions: secretInstructions, key: 1}), null
    ]
    , document.getElementById('root'));
