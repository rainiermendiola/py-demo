"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeesSvc = void 0;
function employeesSvc() {
    let data = [];
    const GetData = () => {
        data = [
            {
                employeeId: 1,
                firstName: 'First 1',
                lastName: 'Last 1'
            },
            {
                employeeId: 2,
                firstName: 'First 2',
                lastName: 'Last 2'
            },
            {
                employeeId: 1,
                firstName: 'First 2',
                lastName: 'Last 2'
            },
        ];
        return data;
    };
    return { data, GetData };
}
exports.employeesSvc = employeesSvc;
exports.default = employeesSvc;
