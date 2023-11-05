import React from 'react';
import { Box, Button, VStack } from '@chakra-ui/react';

const Question = ({ question, options, handleAnswer }) => {
    return (
        <VStack spacing={4} align="stretch" maxW="400px" mx="auto">
            <div className="card">
            <Box p={4} borderWidth="1px" borderRadius="md">
                <h2>{question}</h2>
            </Box>
                <VStack  spacing={4} align="stretch" maxW="400px" mx="auto">
                {options.map(option => (
                <Button key={option} onClick={() => handleAnswer(option)} variant="outline">
                    {option}
                </Button>
                // <button key={option} onClick={() => handleAnswer(option)}>{option}</button>
            ))}
                </VStack>
          
            </div>
           
        </VStack>
    );
};

export default Question;
