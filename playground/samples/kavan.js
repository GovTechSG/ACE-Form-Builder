module.exports = {
  schema: {
    type: "object",
    title: "Number fields & widgets",
    properties: {
      some_number: {
        title: "Number",
        type: "number",
      },
    },
  },
  uiSchema: {
    some_number: {
      "ui:widget": "percentage",
    },
  },
  formData: {
    some_number: 3.14,
  },
};
