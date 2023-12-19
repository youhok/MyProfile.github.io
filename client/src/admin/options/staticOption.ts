export interface Option {
    label: String,
    value: any
}

class StaticOptions {
    static status: Option[] = [
        { label: 'Active', value: 'active' },
        { label: 'Inactive', value: 'inactive' },
    ]

    static type: Option[] = [
        { label: 'Project', value: 'project' },
        { label: 'Article', value: 'article' },
    ]
}
export default StaticOptions