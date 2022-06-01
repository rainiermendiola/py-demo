export function employeesSvc() {
    let data:Array<IEmployees> = []

    const GetData = () => {
        data = [
            {
                employeeId:1,
                firstName: 'First 1',
                lastName: 'Last 1'
            },
            {
                employeeId:2,
                firstName: 'First 2',
                lastName: 'Last 2'
            },
            {
                employeeId:1,
                firstName: 'First 2',
                lastName: 'Last 2'
            },
        ]
        return data
    }

    return {data, GetData}
}

export interface IEmployees{
    employeeId: number,
    firstName: string,
    lastName: string
}

export default employeesSvc