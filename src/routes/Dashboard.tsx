import { ReactNode } from 'react';
import {
    Box,
    useColorModeValue,
    Drawer,
    DrawerContent,
    useDisclosure,
} from '@chakra-ui/react';

import Footer from '../components/Footer';
import { SidebarContent } from '../components/Sidebar';

export default function SidebarWithHeader({
    children,
    selected
}: {
    children: ReactNode;
    selected: string;
}) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Box maxH="100%" bg={useColorModeValue('gray.100', 'gray.900')}>
            <SidebarContent
                onClose={() => onClose}
                display={{ base: 'none', md: 'block' }}
                selected={selected}
            />
            <Drawer
                autoFocus={false}
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full">
                <DrawerContent>
                    <SidebarContent selected={selected} onClose={onClose} />

                </DrawerContent>
            </Drawer>

            <Box minH="100vh" ml={{ base: 0, md: 60 }}>
                <div style={{ padding: "20px" }}>
                    {children}
                </div>

                <div style={{
                    position: "fixed",
                    textAlign: "left",
                    width: "100%",
                    bottom: 0
                }}>
                    <Footer />
                </div>
            </Box>

        </Box>
    );
}

