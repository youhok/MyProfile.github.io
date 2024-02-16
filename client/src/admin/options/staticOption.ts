export interface Option {
    label: String,
    value: String
}

// class StaticOptions {
//     static status: Option[] = [
//         { label: 'Active', value: 'active' },
//         { label: 'Inactive', value: 'inactive' },
//     ]

//     static type: Option[] = [
//         { label: 'Project', value: 'project' },
//         { label: 'Article', value: 'article' },
//     ]
// }

const StaticOptions = {
     status: [
        { label: 'Active', value: 'active' },
        { label: 'Inactive', value: 'inactive' },
    ],

    type:   [
        { label: 'Project', value: 'project' },
        { label: 'Article', value: 'article' },
    ]
}

export default StaticOptions