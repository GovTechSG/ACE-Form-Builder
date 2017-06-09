module.exports = {
  schema: {
    type: "object",
    title: "BGP components",
    properties: {
      title: {
        value: "Grant Application: Purchase Recommended Productivity Solutions",
        type: "string",
      },
      sectionTitle: {
        value: "Provide Your Contact Details",
        type: "string",
      },
      alert: {
        value: "Mandatory Field",
        type: "string",
      },
      info: {
        value: "more info",
        type: "string",
      },
      some_number: {
        title: "Percentage box",
        type: "number",
        label: true,
      },
    },
  },
  uiSchema: {
    title: {
      "ui:widget": "title",
      "ui:options": {
        label: false,
      },
    },
    sectionTitle: {
      "ui:widget": "sectionTitle",
      "ui:options": {
        label: false,
      },
    },
    alert: {
      "ui:widget": "alert",
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
    some_number: {
      "ui:widget": "percentage",
      "ui:options": {
        label: false,
      },
    },
  },
  formData: {
    some_number: 3.14,
  },
};
