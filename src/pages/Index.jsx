import { Container, VStack, Heading, Text, Button, Link, Image, Box } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.md" p={8} centerContent>
      <Box borderRadius="lg" bg="teal.500" p={3} mb={6} textAlign="center">
        <Heading mb={2} color="white">
          John Doe
        </Heading>
        <Text fontSize="xl" color="gray.100">
          Software Developer | Tech Enthusiast
        </Text>
      </Box>

      <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTQ3NTgyMDB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="John Doe" mb={4} />

      <Text fontSize="lg" p={3} textAlign="center">
        Passionate about building excellent software that improves the lives of those around me. Specializing in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations.
      </Text>

      <VStack spacing={4} mt={5}>
        <Button leftIcon={<FaGithub />} colorScheme="teal" variant="solid">
          <Link href="https://github.com/johndoe" isExternal>
            GitHub
          </Link>
        </Button>
        <Button leftIcon={<FaLinkedin />} colorScheme="teal" variant="solid">
          <Link href="https://linkedin.com/in/johndoe" isExternal>
            LinkedIn
          </Link>
        </Button>
        <Button leftIcon={<FaEnvelope />} colorScheme="teal" variant="solid">
          <Link href="mailto:johndoe@example.com">Email Me</Link>
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
