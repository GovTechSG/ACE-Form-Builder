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
      subSectionTitle: {
        value: "Main Contact Person",
        type: "string",
      },
      info: {
        value:
          "The person submitting this application is the main contact person. Notifications about the application will be sent to them. Update this as necessary whenever you resubmit the application.",
        type: "string",
      },
      name: {
        title: "Name",
        type: "string",
      },
      job: {
        title: "Job Title",
        type: "string",
      },
      contact: {
        title: "Contact No",
        type: "string",
      },
      some_number: {
        title: "Percentage",
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
    subSectionTitle: {
      "ui:widget": "subSectionTitle",
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
    name: {
      "ui:widget": "textBox",
      "ui:options": {
        label: false,
      },
    },
    job: {
      "ui:widget": "textBox",
      "ui:options": {
        label: false,
      },
    },
    contact: {
      "ui:widget": "textBox",
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
    name: "",
    job: "",
    contact: "",
    some_number: 3.14,
  },
};
