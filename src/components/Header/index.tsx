import { Flex, HStack } from '@chakra-ui/react';
import LinkCustom from '../LinkCustom';
import TextCustom from '../TextCustom';

const Header = () => {
    return (
        <Flex
            width="100%"
            height="auto"
            bgColor="gray.700"
            align="center"
            justify="center"
            padding="6px 20px"
        >
            <Flex
                width="100%"
                maxWidth="1280px"
                justify="space-between"
                align="center"
            >
                <TextCustom fontSize="2.25rem">Buscador Cep</TextCustom>

                <HStack gap="4">
                    <LinkCustom>Buscar cep</LinkCustom>
                    <LinkCustom>Buscar cep</LinkCustom>
                    <LinkCustom>Buscar cep</LinkCustom>
                </HStack>
            </Flex>
        </Flex>
    );
};

export default Header;
