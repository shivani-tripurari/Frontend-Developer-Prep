export const DEMO_DATA = {
  type: "container",
  direction: "vertical",
  children: [
    {
      type: "text",
      value: "Basic User Form"
    },
    {
      type: "container",
      direction: "horizontal",
      children: [
        { type: "label", value: "Name" },
        { type: "input", field: "name", placeholder: "Enter name" }
      ]
    },
    {
      type: "button",
      value: "Submit",
      action: "submitForm"
    }
  ]
};
