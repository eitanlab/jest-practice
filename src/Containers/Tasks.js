import { useState } from "react";
import { Container, VStack, Box } from "@chakra-ui/react"
import TaskItem from '../Components/TaskItem';

const TODO_LIST = [
    {
        bg: "orange.300",
        text: "This is a task example"
    },
    {
        bg: "orange.300",
        text: "This is a task example 2"
    },
    {
        bg: "orange.300",
        text: "This is a task example 3"
    },
    {
        bg: "orange.300",
        text: "This is a task example 4"
    },
    {
        bg: "orange.300",
        text: "This is a task example 5"
    },
]

const Tasks = () => {

    const [doneList, setDoneList] = useState([]);
    const [discardedList, setDiscardedList] = useState([]);

    const todoList = TODO_LIST.map(element => {
        return <TaskItem 
          text={element.text} 
          bg={element.bg} />
    });

    return (
        <Container my={4}>
            <Box my={2}>
                <VStack>
                    {todoList}
                </VStack>   
            </Box>
            <Box my={2}>
                <VStack>
                    <TaskItem bg="red.300" />
                    <TaskItem bg="red.300" />
                    <TaskItem bg="red.300" />
                    <TaskItem bg="red.300" />
                </VStack>   
            </Box>
            <Box my={2}>
                <VStack>
                    <TaskItem bg="green.300" />
                    <TaskItem bg="green.300" />
                    <TaskItem bg="green.300" />
                    <TaskItem bg="green.300" />
                </VStack>   
            </Box>
        </Container>
        
    )
}

export default Tasks;