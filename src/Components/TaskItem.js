import { Box, ButtonGroup, IconButton } from "@chakra-ui/react"
import { CheckIcon, DeleteIcon } from '@chakra-ui/icons'

const TaskItem = ({id, bg = "tomato", text = "", onDone, onDiscard}) => {
    return (
        <Box display="flex" justifyContent="space-between" bg={bg} w="100%" p={4} color="white">
            {text}
            <ButtonGroup size="sm" isAttached variant="outline">
                {onDone && <IconButton onClick={() => onDiscard(id)} aria-label="Mark task as deleted" icon={<DeleteIcon />} />} 
                {onDiscard && <IconButton onClick={() => onDone && onDone(id)} aria-label="Mark task as done" icon={<CheckIcon />} />}
            </ButtonGroup>
        </Box>
    )
}

export default TaskItem;