import { Box, ButtonGroup, IconButton } from "@chakra-ui/react"
import { CheckIcon, DeleteIcon } from '@chakra-ui/icons'

const TaskItem = ({bg = "tomato", text = ""}) => {
    return (
        <Box display="flex" justifyContent="space-between" bg={bg} w="100%" p={4} color="white">
            {text}
            <ButtonGroup size="sm" isAttached variant="outline">
                <IconButton aria-label="Mark task as deleted" icon={<DeleteIcon />} />
                <IconButton aria-label="Mark task as done" icon={<CheckIcon />} />
            </ButtonGroup>
        </Box>
    )
}

export default TaskItem;