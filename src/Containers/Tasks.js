import { useState, useEffect } from "react";
import { Container, VStack, Box } from "@chakra-ui/react"
import TaskItem from '../Components/TaskItem';

const TODO_LIST = [
    {
        id: 0,
        text: "This is a task example"
    },
    {
        id: 1,
        text: "This is a task example 2"
    },
    {
        id: 2,
        text: "This is a task example 3"
    },
    {
        id: 3,
        text: "This is a task example 4"
    },
    {
        id: 4,
        text: "This is a task example 5"
    },
]

const Tasks = () => {

    const [todoList, setTodoList] = useState([]);
    const [doneList, setDoneList] = useState([]);
    const [discardedList, setDiscardedList] = useState([]);

    useEffect(() => {
        TODO_LIST && setTodoList(TODO_LIST);
    },[]);

    const handleDone = id => {
        setDoneList(doneList.concat(todoList.filter(item => item.id === id)));
        setTodoList(todoList.filter(item => item.id !== id));
    }

    const handleDiscard = id => {
        setDiscardedList(discardedList.concat(todoList.filter(item => item.id === id)));
        setTodoList(todoList.filter(item => item.id !== id));
    }

    // Create function that receives an array and 
    // returns a TaskItem list
    const generateList = (list, bg, onDone, onDiscard) => {
        return list.map(element => {
            const {id, text} = element;
            return <TaskItem 
                key={id}
                id={id}
                text={text} 
                bg={bg} 
                onDone={onDone || null}
                onDiscard={onDiscard || null} />
        });
    }

    return (
        <Container my={4}>
            <Box my={2}>
                <VStack>
                    {generateList(todoList, "orange.300", handleDone, handleDiscard)}
                </VStack>   
            </Box>
            <Box my={2}>
                <VStack>
                    {generateList(discardedList, "red.300")}
                </VStack>   
            </Box>
            <Box my={2}>
                <VStack>
                    {generateList(doneList, "green.300")}
                </VStack>   
            </Box>
        </Container>
        
    )
}

export default Tasks;