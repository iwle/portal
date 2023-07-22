import * as React from 'react';

import { Identifier, TableNode, useCustom } from '@table-library/react-table-library/table';
import { CompactTable } from '@table-library/react-table-library/compact';
import { useTheme } from '@table-library/react-table-library/theme';
import { DEFAULT_OPTIONS, getTheme } from '@table-library/react-table-library/chakra-ui';
import { useRowSelect } from '@table-library/react-table-library/select';
import { useTree, TreeExpandClickTypes } from '@table-library/react-table-library/tree';
import { useSort } from '@table-library/react-table-library/sort';
import { usePagination } from '@table-library/react-table-library/pagination';
import {
    fromTreeToList,
    findNodeById,
    insertNode,
} from '@table-library/react-table-library/common';
import {
    Text,
    Box,
    HStack,
    InputGroup,
    InputLeftElement,
    Input,
    Checkbox,
    IconButton,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react';
import {
    FaPen,
    FaSearch,
    FaChevronRight,
    FaChevronDown,
    FaChevronUp,
    FaChevronLeft,
} from 'react-icons/fa';
import { nodes } from '../../constants/Data';


const key = 'Showreel';

export const DatasetsTable = () => {
    const [data, setData] = React.useState({ nodes });

    //* Theme *//

    const chakraTheme = getTheme({
        ...DEFAULT_OPTIONS,
        striped: false,
    });
    const customTheme = {
        Table: `
      --data-table-library_grid-template-columns:  64px repeat(5, minmax(0, 1fr));

      margin: 16px 0px;
    `,
    };
    const theme = useTheme([chakraTheme, customTheme]);

    //* Resize *//

    const resize = { resizerHighlight: '#dee2e6' };

    //* Pagination *//

    const pagination = usePagination(data, {
        state: {
            page: 0,
            size: 4,
        },
        onChange: onPaginationChange,
    });

    function onPaginationChange(action: any, state: any) {
        console.log(action, state);
    }

    //* Search *//

    const [search, setSearch] = React.useState('');

    useCustom('search', data, {
        state: { search },
        onChange: onSearchChange,
    });

    function onSearchChange(action: any, state: any) {
        console.log(action, state);
        pagination.fns.onSetPage(0);
    }

    //* Filter *//

    const [isHide, setHide] = React.useState(false);

    useCustom('filter', data, {
        state: { isHide },
        onChange: onFilterChange,
    });

    function onFilterChange(action: any, state: any) {
        console.log(action, state);
        pagination.fns.onSetPage(0);
    }

    //* Select *//

    const select = useRowSelect(data, {
        onChange: onSelectChange,
    });

    function onSelectChange(action: any, state: any) {
        console.log(action, state);
    }

    //* Tree *//

    const tree = useTree(
        data,
        {
            onChange: onTreeChange,
        },
        {
            clickType: TreeExpandClickTypes.ButtonClick,
            treeYLevel: 1,
            treeIcon: {
                margin: '4px',
                iconDefault: null,
                iconRight: <FaChevronRight />,
                iconDown: <FaChevronDown />,
            },
        },
    );

    function onTreeChange(action: any, state: any) {
        console.log(action, state);
    }

    //* Sort *//

    const sort = useSort(
        data,
        {
            onChange: onSortChange,
        },
        {
            sortIcon: {
                iconDefault: null,
                iconUp: <FaChevronUp />,
                iconDown: <FaChevronDown />,
            },
            sortFns: {
                TASK: (array) => array.sort((a, b) => a.name.localeCompare(b.name)),
                DEADLINE: (array) => array.sort((a, b) => a.deadline - b.deadline),
                TYPE: (array) => array.sort((a, b) => a.type.localeCompare(b.type)),
                COMPLETE: (array) => array.sort((a, b) => a.isComplete - b.isComplete),
                TASKS: (array) => array.sort((a, b) => (a.nodes || []).length - (b.nodes || []).length),
            },
        },
    );

    function onSortChange(action: any, state: any) {
        console.log(action, state);
    }

    //* Drawer *//

    const [drawerId, setDrawerId] = React.useState(null);
    const [edited, setEdited] = React.useState('');

    const handleEdit = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setEdited(event.target.value);
    };

    const handleCancel = () => {
        setEdited('');
        setDrawerId(null);
    };

    const handleSave = () => {
        if (drawerId) {
            const node = findNodeById(data.nodes, drawerId);
            const editedNode = {
                ...node,
                name: edited,
                id: '',
                deadline: '',
                isComplete: true,
                _hasContent: true,
            };
            const nodes = insertNode(data.nodes, editedNode);
            console.log(nodes);

            // setData({
            //     nodes,
            // });
        }

        setEdited('');
        setDrawerId(null);
    };

    //* Modal *//

    const [modalOpened, setModalOpened] = React.useState(false);

    //* Custom Modifiers *//

    let modifiedNodes = data.nodes;

    // search
    modifiedNodes = modifiedNodes.filter((node) =>
        node.name.toLowerCase().includes(search.toLowerCase()),
    );

    // filter
    modifiedNodes = isHide ? modifiedNodes.filter((node) => !node.isComplete) : modifiedNodes;

    //* Columns *//

    const COLUMNS = [
        {
            label: 'Task',
            renderCell: (item: { name: any; }) => item.name,
            resize,
            sort: { sortKey: 'TASK' },
            select: {
                renderHeaderCellSelect: () => (
                    <Checkbox
                        colorScheme="cyan"
                        isChecked={select.state.all}
                        isIndeterminate={!select.state.all && !select.state.none}
                        onChange={select.fns.onToggleAll}
                    />
                ),
                renderCellSelect: (item: { id: Identifier; }) => (
                    <Checkbox
                        colorScheme="cyan"
                        style={{ backgroundColor: '#ffffff' }}
                        isChecked={select.state.ids.includes(item.id)}
                        onChange={() => select.fns.onToggleById(item.id)}
                    />
                ),
            },
            tree: true,
        },
        {
            label: 'Deadline',
            renderCell: (item: { deadline: { toLocaleDateString: (arg0: string, arg1: { year: string; month: string; day: string; }) => any; }; }) =>
                item.deadline.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                }),
            resize,
            sort: { sortKey: 'DEADLINE' },
        },
        { label: 'Type', renderCell: (item: { type: any; }) => item.type, resize, sort: { sortKey: 'TYPE' } },
        {
            label: 'Complete',
            renderCell: (item: { isComplete: { toString: () => any; }; }) => item.isComplete.toString(),
            resize,
            sort: { sortKey: 'COMPLETE' },
        },
        {
            label: 'Tasks',
            renderCell: (item: { nodes: string | any[]; id: React.SetStateAction<null>; }) => (
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>{item.nodes?.length}</span>
                    <IconButton
                        aria-label="edit"
                        icon={<FaPen />}
                        size="xs"
                        variant="ghost"
                        colorScheme="cyan"
                        onClick={() => setDrawerId(item.id)}
                    />
                </div>
            ),
            resize,
            sort: { sortKey: 'TASKS' },
        },
    ];

    return (
        <>
            <Modal isOpen={modalOpened} onClose={() => setModalOpened(false)}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Not all features included here, but we got ...</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <div>
                            <Checkbox colorScheme="cyan" isChecked>
                                Resize
                            </Checkbox>
                        </div>
                        <div>
                            <Checkbox colorScheme="cyan" isChecked>
                                Sort
                            </Checkbox>
                        </div>
                        <div>
                            <Checkbox colorScheme="cyan" isChecked>
                                Search
                            </Checkbox>
                        </div>
                        <div>
                            <Checkbox colorScheme="cyan" isChecked>
                                Filter
                            </Checkbox>
                        </div>
                        <div>
                            <Checkbox colorScheme="cyan" isChecked>
                                Select
                            </Checkbox>
                        </div>
                        <div>
                            <Checkbox colorScheme="cyan" isChecked>
                                Tree
                            </Checkbox>
                        </div>
                        <div>
                            <Checkbox colorScheme="cyan" isChecked>
                                Drawer on Edit
                            </Checkbox>
                        </div>
                        <div>
                            <Checkbox colorScheme="cyan" isChecked>
                                Pagination
                            </Checkbox>
                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>

            {/* Form */}

            <HStack m={3}>
                {/* <Button
                    colorScheme="cyan"
                    variant="outline"
                    onClick={() => setModalOpened(true)}>
                    Features?
                </Button> */}

                <InputGroup>
                    <InputLeftElement
                        pointerEvents="none"
                        children={<FaSearch style={{ color: '#4a5568' }} />}
                    />
                    <Input
                        colorScheme='cyan'
                        variant="outline"
                        placeholder="Search datasets"
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                    />
                </InputGroup>

                <Checkbox
                    style={{ whiteSpace: 'nowrap' }}
                    colorScheme="cyan"
                    isChecked={isHide}
                    onChange={(event) => setHide(event.target.checked)}
                >
                    Hide Complete
                </Checkbox>
            </HStack>

            {/* Table */}

            <Box p={3} borderWidth="1px" borderRadius="lg">
                <CompactTable
                    columns={COLUMNS}
                    data={{ ...data, nodes: modifiedNodes }}
                    theme={theme}
                    layout={{ custom: true }}
                    select={select}
                    tree={tree}
                    sort={sort}
                    pagination={pagination}
                />
            </Box>

            <br />
            <HStack justify="flex-end">
                <IconButton
                    aria-label="previous page"
                    icon={<FaChevronLeft />}
                    colorScheme="cyan"
                    variant="ghost"
                    disabled={pagination.state.page === 0}
                    onClick={() => pagination.fns.onSetPage(pagination.state.page - 1)}
                />

                {pagination.state.getPages(modifiedNodes).map((_: any, index: React.Key | null | undefined) => (
                    <Button
                        key={index}
                        colorScheme="cyan"
                        variant={pagination.state.page === index ? 'solid' : 'ghost'}
                        onClick={() => pagination.fns.onSetPage(index as number)}
                    >
                        {index as number + 1}
                    </Button>
                ))}
                <IconButton
                    aria-label="next page"
                    icon={<FaChevronRight />}
                    colorScheme="cyan"
                    variant="ghost"
                    disabled={pagination.state.page + 1 === pagination.state.getTotalPages(data.nodes)}
                    onClick={() => pagination.fns.onSetPage(pagination.state.page + 1)}
                />
            </HStack>

            <Drawer isOpen={drawerId ? drawerId : false} onClose={handleCancel} placement="right">
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Create your account</DrawerHeader>

                    <DrawerBody>
                        <Text>Name: </Text>
                        <Input
                            autoFocus
                            value={
                                edited || fromTreeToList(data.nodes).find((node) => node.id === drawerId)?.name
                            }
                            onChange={handleEdit}
                            data-autofocus
                        />
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant="outline" mr={3} onClick={handleCancel}>
                            Cancel
                        </Button>
                        <Button onClick={handleSave} colorScheme="cyan">
                            Save
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
};