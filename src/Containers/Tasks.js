import { useState, useEffect } from "react";
import { Container, VStack, Box, Flex, Input, IconButton } from "@chakra-ui/react";
import { AddIcon } from '@chakra-ui/icons';
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
    const [newTaskValue, setNewTaskValue] = useState('');
    const [lastId, setLastId] = useState(0);

    useEffect(() => {
        if(TODO_LIST) {
            setTodoList(TODO_LIST);
            const todosMaxId = Math.max(...todoList.map(task => task.id));
            console.log(todosMaxId);
            setLastId(todosMaxId);
        }

    },[]);

    const handleInputChange = (event) => setNewTaskValue(event.target.value);

    const handleAddNewTask = () => {
        setLastId(lastId + 1);
        newTaskValue !== '' && setTodoList([...todoList, {
            id: lastId,
            text: newTaskValue
        }]);
    }

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
            <Flex my={2}>
                <Input 
                    value={newTaskValue}
                    onChange={handleInputChange}
                    placeholder='Write the new task here'
                    mr="4" />
                <IconButton onClick={() => handleAddNewTask()} aria-label="Add new task" icon={<AddIcon />} />
            </Flex>
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