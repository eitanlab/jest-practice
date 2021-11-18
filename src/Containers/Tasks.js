import { Container, VStack } from "@chakra-ui/react"
import TaskItem from '../Components/TaskItem';

const Tasks = () => {
    return (
        <Container my={2}>
            <VStack>
                <TaskItem />
                <TaskItem />
                <TaskItem />
                <TaskItem />
            </VStack>    
        </Container>
        
    )
}

export default Tasks;