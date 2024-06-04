using {db.datamodel} from '../db/ToAppModel';

// Service Exposure for External service entity projection
service Suppliers
@(path: '/ExternalService')
@(requires: 'authenticated-user')
@(impl: '/srv/handlers/ExternalService.js')
{
    @readonly
    entity Suppliers as projection on datamodel.Suppliers;
}

// service for Admin role
service AdminServices 
@(path: '/todo-admin-srv')
@(requires: 'authenticated-user')
@(impl: '/srv/handlers/todoHandler.js') {

    type object {}
    action aCalculate_Estimation() returns array of object;

    @requires: 'Admin'
    @restrict: [{
        grant: ['READ', 'WRITE'],
    }]
    entity ToDoLists @(odata.draft.enabled) @(odata.draft.bypass) as projection on datamodel.ToDoLists { * } excluding { DELETED } where DELETED = false;

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

service MediaHanding_Service {
    entity MediaHandling as projection on datamodel.Pictures;    
}