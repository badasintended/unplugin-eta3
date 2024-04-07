import antfu from "@antfu/eslint-config";

export default antfu({
  stylistic: {
    quotes: "double",
    semi: true,
  },

  rules: {
    "style/multiline-ternary": "off",
  },
});
