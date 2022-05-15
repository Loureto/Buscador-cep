import { Flex, Text } from '@chakra-ui/react';

const Header = () => {
    return (
        <Flex
            width="100%"
            height="auto"
            bgColor="gray.700"
            align="center"
            justify="center"
            padding="10px 20px"
        >
            <Flex
                width="100%"
                maxWidth="1080px"
                justify="space-between"
                align="center"
            >
                <Text color="gray.50" fontSize="2.25rem">
                    Buscador Cep
                </Text>
                <Flex>
                    <Text color="gray.50">Busca cep</Text>
                    <Text color="gray.50">Busca cep</Text>
                    <Text color="gray.50">Busca cep</Text>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Header;
