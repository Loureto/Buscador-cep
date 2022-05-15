import { Text, TextProps } from '@chakra-ui/react';

interface TextCustomProps extends TextProps {
    children: string;
}

const TextCustom = ({ children, ...rest }: TextCustomProps) => {
    return (
        <Text color="gray.50" {...rest}>
            {children}
        </Text>
    );
};

export default TextCustom;
