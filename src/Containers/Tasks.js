import { Container, VStack, Box } from "@chakra-ui/react"
import TaskItem from '../Components/TaskItem';

const Tasks = () => {
    return (
        <Container my={4}>
            <Box my={2}>
                <VStack>
                    <TaskItem bg="orange.300" />
                    <TaskItem bg="orange.300" />
                    <TaskItem bg="orange.300" />
                    <TaskItem bg="orange.300" />
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