export const nodes = [
    {
        id: '1',
        name: 'src_xyz',
        deadline: new Date(2020, 1, 17),
        type: 'Schema',
        isComplete: false,
        _hasContent: false,
        nodes: [
            {
                id: '11',
                name: 'table_one',
                deadline: new Date(2020, 2, 20),
                type: 'Table',
                isComplete: true,
                _hasContent: true,
                nodes: null
            },
            {
                id: '12',
                name: 'table_two',
                deadline: new Date(2020, 2, 22),
                type: 'Table',
                isComplete: false,
                _hasContent: true,
                nodes: null
            },
        ],
    },
    {
        id: '2',
        name: 'src_abc',
        deadline: new Date(2020, 1, 17),
        type: 'Schema',
        isComplete: true,
        _hasContent: false,
        nodes: [
            {
                id: '21',
                name: 'table_three',
                deadline: new Date(2020, 2, 20),
                type: 'Table',
                isComplete: true,
                _hasContent: true,
                nodes: null
            },
            {
                id: '22',
                name: 'table_four',
                deadline: new Date(2020, 2, 22),
                type: 'Table',
                isComplete: true,
                _hasContent: true,
                nodes: null
            },
            {
                id: '23',
                name: 'table_five',
                deadline: new Date(2020, 2, 22),
                type: 'Table',
                isComplete: true,
                _hasContent: true,
                nodes: null
            },
        ],
    }
];

export const randomFromInterval = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};