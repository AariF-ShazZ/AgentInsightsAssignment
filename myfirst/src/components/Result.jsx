import { Box } from '@chakra-ui/react';
import React from 'react';

const Result = ({ score, totalQuestions }) => {
    return (
        <Box maxW="400px" mx="auto" p={4} borderWidth="1px" borderRadius="md">
            <h2>Quiz Completed!</h2>
            <p>Your Score: {score} out of {totalQuestions}</p>
        </Box>

    );
};

export default Result;
