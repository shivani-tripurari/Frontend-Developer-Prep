const formConfig = [
    {
        name: "Title", 
        label: "Enter Title",
        type: "text",
        placeholder:"Please enter a title"
    },
    {
        name: "Description", 
        label: "Enter Description",
        type: "text",
        placeholder:"Please enter a description"
    },
    {
        name:"Category",
        label:"Select the category",
        type:"select",
        placeholder:"Please select an option",
        options : [
            {value:"to-do", label:"To-Do"},
            {value:"in-progress", label:"In-Progress"},
            {value:"completed", label:"Completed"}
        ]
    }
]

export default formConfig;