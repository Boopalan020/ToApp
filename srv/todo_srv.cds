using {db.datamodel} from '../db/ToAppModel';

// service for Admin role
service AdminServices 
@(path: '/todo-admin-srv')
@(requires: 'authenticated-user')
@(impl: '/srv/handlers/todoHandler.js') {

    @requires: 'Admin'
    @restrict: [{
        grant: ['READ', 'WRITE'],
    }]
    entity ToDoLists as projection on datamodel.ToDoLists { * } excluding { DELETED } where DELETED = false;

}

// service for Customer role
service CustomerServices 
@(path: '/todo-customer-srv')
@(requires: 'authenticated-user')
@(impl: '/srv/handlers/todoHandler.js') {

    @requires : 'Customer'
    @restrict : [ { grant : ['READ'] }]
    entity ToDoLists_Cust as projection on datamodel.ToDoLists { 
        TaskID,
        TaskDescription,
        TargetDate,
        EstimatedHours,
        Status,
        Priority
    } where DELETED = false;
}
