module.exports = {
  schema: {
    type: "object",
    title: "BGP components",
    properties: {
      information: {
        value: "Mandatory Field",
        type: "string",
      },
      some_number: {
        title: "Percentage box",
        type: "number",
        label: true,
      },
      info: {
        value: "more info",
        type: "string",
      },
    },
  },
  uiSchema: {
    information: {
      "ui:widget": "alert",
      "ui:options": {
        label: false,
      },
    },
    some_number: {
      "ui:widget": "percentage",
      "ui:options": {
        label: false,
      },
    },
    info: {
      "ui:widget": "info",
      "ui:options": {
        label: false,
      },
    },
  },
  formData: {
    some_number: 3.14,
  },
};
