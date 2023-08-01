export const nodes = [
    {
        id: '1',
        name: 'Group 1',
        deadline: new Date(2020, 1, 17),
        type: 'Group',
        isComplete: true,
        _hasContent: false,
        nodes: [
            {
                id: '11',
                name: 'Division H',
                deadline: new Date(2020, 2, 20),
                type: 'Division',
                isComplete: true,
                _hasContent: true,
                nodes: [
                    {
                        id: '111',
                        name: 'Department 1',
                        deadline: new Date(2020, 2, 18),
                        type: 'Department',
                        isComplete: true,
                        _hasContent: false,
                        nodes: [
                            {
                                id: 'Alice Bob',
                                name: 'Alice Bob',
                                deadline: new Date(2020, 2, 18),
                                type: 'Individual',
                                isComplete: true,
                                _hasContent: false,
                                designation: 'Deputy Director',
                                nodes: null
                            },
                        ],
                    },
                    {
                        id: '112',
                        name: 'Department 2',
                        deadline: new Date(2020, 2, 19),
                        type: 'Department',
                        isComplete: true,
                        _hasContent: false,
                        nodes: [{
                            id: 'John Tan',
                            name: 'John Tan',
                            deadline: new Date(2020, 2, 18),
                            type: 'Individual',
                            isComplete: true,
                            _hasContent: false,
                            designation: 'Deputy Director',
                            nodes: null
                        },
                        {
                            id: 'Mary Lim',
                            name: 'Mary Lim',
                            deadline: new Date(2020, 2, 18),
                            type: 'Individual',
                            isComplete: true,
                            _hasContent: false,
                            designation: 'Senior Development Partner',
                            nodes: null
                        },],
                    },
                ],
            },
            {
                id: '12',
                name: 'Division 4',
                deadline: new Date(2020, 2, 22),
                type: 'Division',
                isComplete: true,
                _hasContent: true,
                nodes: [
                    {
                        id: '121',
                        name: 'Department J',
                        deadline: new Date(2020, 2, 20),
                        type: 'Department',
                        isComplete: true,
                        _hasContent: false,
                        nodes: [{
                            id: 'Person Test',
                            name: 'Person Test',
                            deadline: new Date(2020, 2, 18),
                            type: 'Individual',
                            isComplete: true,
                            designation: 'Development Partner',
                            _hasContent: false,
                            nodes: null
                        },],
                    },
                ],
            },
        ],
    },
    {
        id: '2',
        name: 'Group 2',
        deadline: new Date(2020, 2, 28),
        type: 'Group',
        isComplete: true,
        _hasContent: true,
        nodes: [
            {
                id: '22',
                name: 'Division A',
                deadline: new Date(2020, 2, 20),
                type: 'Division',
                isComplete: true,
                _hasContent: true,
                nodes: [
                    {
                        id: '221',
                        name: 'Department X',
                        deadline: new Date(2020, 2, 18),
                        type: 'Department',
                        isComplete: true,
                        _hasContent: false,
                        nodes: [
                            {
                                id: 'Bob',
                                name: 'Bob',
                                deadline: new Date(2020, 2, 18),
                                type: 'Individual',
                                isComplete: true,
                                _hasContent: false,
                                designation: 'Senior Development Partner',
                                nodes: null
                            },
                            {
                                id: 'Alice',
                                name: 'Alice',
                                deadline: new Date(2020, 2, 18),
                                type: 'Individual',
                                isComplete: true,
                                _hasContent: false,
                                designation: 'Senior Development Partner',
                                nodes: null
                            },
                        ],
                    },
                    {
                        id: '222',
                        name: 'Department Y',
                        deadline: new Date(2020, 2, 19),
                        type: 'Department',
                        isComplete: true,
                        _hasContent: false,
                        nodes: [{
                            id: 'John Doe',
                            name: 'John Doe',
                            deadline: new Date(2020, 2, 18),
                            type: 'Individual',
                            isComplete: true,
                            _hasContent: false,
                            designation: 'Senior Development Partner',
                            nodes: null
                        },
                        {
                            id: 'Jane Doe',
                            name: 'Jane Doe',
                            deadline: new Date(2020, 2, 18),
                            type: 'Individual',
                            isComplete: true,
                            _hasContent: false,
                            designation: 'Senior Development Partner',
                            nodes: null
                        },],
                    },
                ],
            },
            {
                id: '23',
                name: 'Division B',
                deadline: new Date(2020, 2, 22),
                type: 'Division',
                isComplete: true,
                _hasContent: true,
                nodes: [
                    {
                        id: '231',
                        name: 'Department T',
                        deadline: new Date(2020, 2, 20),
                        type: 'Department',
                        isComplete: true,
                        _hasContent: false,
                        nodes: [{
                            id: 'Jacob Doe',
                            name: 'Jacob Doe',
                            deadline: new Date(2020, 2, 18),
                            type: 'Individual',
                            isComplete: true,
                            _hasContent: false,
                            designation: 'Development Partner',
                            nodes: null
                        },],
                    },
                ],
            },
        ],
    },
    {
        id: '4',
        name: 'Group 3',
        deadline: new Date(2020, 4, 28),
        type: 'Group',
        isComplete: false,
        _hasContent: false,
        nodes: [
            {
                id: '41',
                name: 'Division U',
                deadline: new Date(2020, 4, 28),
                type: 'Division',
                isComplete: false,
                _hasContent: false,
                nodes: [{
                    id: '411',
                    name: 'Department N',
                    deadline: new Date(2020, 4, 28),
                    type: 'Department',
                    isComplete: false,
                    _hasContent: false,
                    nodes: [{
                        id: 'Jack Testing',
                        name: 'Jack Testing',
                        deadline: new Date(2020, 4, 28),
                        type: 'Individual',
                        isComplete: false,
                        _hasContent: false,
                        designation: 'Development Partner',
                        nodes: null
                    }]
                }]
            }
        ],
    },
];

export const randomFromInterval = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};