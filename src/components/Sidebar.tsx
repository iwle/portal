import {
    Box,
    CloseButton,
    Flex,
    Icon,
    useColorModeValue,
    Link,
    Text,
    BoxProps,
    FlexProps,
} from '@chakra-ui/react';
import {
    FiHome,
    FiLayers,
    FiUser,
    FiStar,
    FiSettings,
} from 'react-icons/fi';
import { IconType } from 'react-icons';
import { ReactText } from 'react';

interface LinkItemProps {
    name: string;
    icon: IconType;
    href: string;
}
const LinkItems: Array<LinkItemProps> = [
    { name: 'Home', icon: FiHome, href: '/' },
    { name: 'Users', icon: FiUser, href: '/users' },
    { name: 'Datasets', icon: FiLayers, href: '/datasets' },
    { name: 'Favorites', icon: FiStar, href: '/favorites' },
    { name: 'Settings', icon: FiSettings, href: '/settings' },
];

interface SidebarProps extends BoxProps {
    onClose: () => void;
    selected: string;
}

export const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
    return (
        <Box
            transition="3s ease"
            bg={useColorModeValue('white', 'gray.900')}
            borderRight="1px"
            borderRightColor={useColorModeValue('gray.200', 'gray.700')}
            paddingTop={"20px"}
            w={{ base: 'full', md: 60 }}
            pos="fixed"
            h="full"
            {...rest}>
            {/* <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                    Datagov
                </Text>
                <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
            </Flex> */}
            {LinkItems.map((link) => {
                if (rest.selected === link.name) {
                    return (
                        <NavItem key={link.name} icon={link.icon} href={link.href} selected={true}>
                            {link.name}
                        </NavItem>
                    )
                } else {
                    return (
                        <NavItem key={link.name} icon={link.icon} href={link.href} selected={false}>
                            {link.name}
                        </NavItem>
                    );
                }
            })}
        </Box>
    );
};

interface NavItemProps extends FlexProps {
    icon: IconType;
    href: string;
    children: ReactText;
    selected?: boolean;
}
const NavItem = ({ icon, children, href, ...rest }: NavItemProps) => {
    return (
        <Link href={href} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
            <Flex
                align="center"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                background={rest.selected ? "teal" : "transparent"}
                color={rest.selected ? "white" : "black"}
                _hover={{
                    bg: 'teal.400',
                    color: 'white',
                }}
                {...rest}>
                {icon && (
                    <Icon
                        mr="4"
                        fontSize="16"
                        _groupHover={{
                            color: 'white',
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        </Link>
    );
};
