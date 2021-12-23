class Employees:

    def Get(id:int = None):
        employees = [
            {'id':1, 'first_name':'first1', 'last_name':'last1', 'company_name':'compA'},
            {'id':2, 'first_name':'first2', 'last_name':'last2', 'company_name':'compA'}
        ]
        # return employees
        if id != None:
            filtered = list(filter(lambda emp: emp['id'] == id, employees))
            return filtered
        return employees