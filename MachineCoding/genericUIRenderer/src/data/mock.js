export const data = [
{
  "type": "container",
  "direction": "vertical",
  "children": [
    {
      "type": "text",
      "value": "Employee Onboarding Form",
      "style": { "fontSize": 24, "fontWeight": "bold", "marginBottom": 20 }
    },

    {
      "type": "tabs",
      "tabs": [
        {
          "label": "Personal Info",
          "content": {
            "type": "container",
            "direction": "vertical",
            "children": [
              {
                "type": "container",
                "direction": "horizontal",
                "children": [
                  {
                    "type": "label",
                    "value": "Full Name"
                  },
                  {
                    "type": "input",
                    "placeholder": "Enter full name",
                    "field": "fullName",
                    "validation": {
                      "required": true,
                      "minLength": 3
                    }
                  }
                ]
              },
              {
                "type": "container",
                "direction": "horizontal",
                "children": [
                  { "type": "label", "value": "Email" },
                  {
                    "type": "input",
                    "placeholder": "Enter email",
                    "field": "email",
                    "validation": {
                      "required": true,
                      "pattern": "^\\S+@\\S+\\.\\S+$"
                    }
                  }
                ]
              },
              {
                "type": "container",
                "direction": "horizontal",
                "children": [
                  { "type": "label", "value": "Gender" },
                  {
                    "type": "radio-group",
                    "field": "gender",
                    "options": ["Male", "Female", "Other"]
                  }
                ]
              },
              {
                "type": "date-picker",
                "field": "dob",
                "label": "Date of Birth"
              }
            ]
          }
        },

        {
          "label": "Work Details",
          "content": {
            "type": "container",
            "direction": "vertical",
            "children": [
              {
                "type": "dropdown",
                "label": "Country",
                "field": "country",
                "options": ["India", "USA", "Germany"]
              },

              {
                "type": "dropdown",
                "label": "State",
                "field": "state",
                "condition": {
                  "field": "country",
                  "equals": "India"
                },
                "dataSource": {
                  "type": "api",
                  "url": "/api/states?country={{country}}"
                }
              },

              {
                "type": "textarea",
                "label": "Address",
                "placeholder": "Enter complete address",
                "field": "address",
                "validation": { "required": true }
              },

              {
                "type": "checkbox",
                "label": "Relocation Required?",
                "field": "relocation"
              }
            ]
          }
        },

        {
          "label": "Job Preferences",
          "content": {
            "type": "container",
            "direction": "vertical",
            "children": [
              {
                "type": "dropdown",
                "label": "Role",
                "field": "role",
                "options": ["Frontend Developer", "Backend Developer", "DevOps", "Designer"],
                "validation": { "required": true }
              },

              {
                "type": "table",
                "label": "Preferred Working Locations",
                "field": "preferredLocations",
                "columns": ["City", "State"],
                "rows": [
                  ["Bangalore", "Karnataka"],
                  ["Pune", "Maharashtra"],
                  ["Hyderabad", "Telangana"]
                ]
              },

              {
                "type": "image",
                "src": "https://dummyimage.com/300x120/cccccc/000000&text=Company+Logo",
                "alt": "Company Overview"
              }
            ]
          }
        }
      ]
    },

    {
      "type": "button",
      "value": "Submit",
      "action": "submitForm"
    }
  ]
}

]
