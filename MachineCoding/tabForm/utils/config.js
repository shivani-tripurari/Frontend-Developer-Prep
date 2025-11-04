import Profile from "../src/components/Profile";
import Interests from "../src/components/Interests";
import Settings from "../src/components/Settings";

const tabConfig = [
    {
        name : "Profile",
        component : Profile,
    },
    {
        name : "Interests",
        component : Interests,
    },
    {
        name : "Settings",
        component : Settings,
    }
];

const initialFormData = {
    name : "Shivani",
    age : 23,
    email : "shivani@gmail.com",
    //interests should be an array of checkboxes
    interests : ["hiking","travelling","creating"],
    mode : "dark",
    allowNotifications : "yes",

}

const errorValidation = {
    name : "An error occured at Name field",
    age : "An error occured at Age field",
    email : " An error occured at E-mail field",
    interests : "An error occured at Interests field "
}



export {tabConfig, initialFormData, errorValidation}






//contains formData initial state config, tabComponet config 