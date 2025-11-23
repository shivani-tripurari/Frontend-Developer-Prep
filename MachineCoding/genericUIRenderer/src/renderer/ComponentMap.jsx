import Text from "../components/Text";
import Lable from "../components/Lable";
import Input from "../components/Input";
import Button from "../components/Button";
import Container from "../components/Container";

const ComponentMap = (node, props) => {
    switch(node.type){
        case "text": 
            return (<Text value={node.value}/>);
        case "label":
            return (<Lable value={node.value}/>);
        case "input":
            return(<Input
                placeholder={node.placeholder}
                value={props.value}
                onChange={(v) => props.onChange(v)}
            />);
        case "button":
            return(<Button value={node.value} onClick={()=>props.onClick()}/>) 
        case "container":
            // Container is like a div that wraps it's children inside them
            return(
            <Container direction={node.direction}>
                {props.children}
            </Container>);
        default:
            return null;
    }
}

export default ComponentMap;