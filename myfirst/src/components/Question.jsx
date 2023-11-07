import React from 'react';
import { Box, Button, Flex, VStack } from '@chakra-ui/react';
const Question = ({ question, options, handleAnswerSubmit }) => {
    return (
        <VStack spacing={4} align="stretch" maxW="400px" mx="auto">
          <Flex
            className="card"
            w={{ base: "200px", sm: "200px", md: "500px", lg: "500px" }}
            // border={"2px solid red"}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexDirection={{ base: "column", sm: "column", md: "row", lg: "row" }}
            p={"6%"}
          >
            <Box p={4} borderWidth="1px" borderRadius="md" color={"red"} mr={2} >
              <h2>{question}</h2>
            </Box>
            <VStack spacing={4} align="stretch" maxW="400px" mx="auto">
              {options.map(option => (
                <Button
                  className="button-62"
                  role="button"
                  key={option}
                  onClick={() => handleAnswerSubmit(option)}
                  variant="outline"
                >
                  {option}
                </Button>
              ))}
            </VStack>
          </Flex>
        </VStack>
      );
};
export default Question;
