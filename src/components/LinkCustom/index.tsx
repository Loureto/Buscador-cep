import { Link, LinkProps } from '@chakra-ui/react';

interface LinkCustomProps extends LinkProps {
    children: string;
}

const LinkCustom = ({ children, ...rest }: LinkCustomProps) => {
    return (
        <Link color="gray.50" {...rest}>
            {children}
        </Link>
    );
};

export default LinkCustom;
