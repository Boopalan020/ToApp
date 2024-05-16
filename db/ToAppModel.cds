namespace db.datamodel;

using { managed } from '@sap/cds/common';
using { db.utils.localAspects } from './utils/Aspects';

entity ToDoLists : managed, localAspects {
    key TaskID          : UUID;
    TaskDescription : String(200);
    TargetDate      : Date;
    EstimatedHours  : String(15);
    Status          : String(15);
    Priority        : String(15) default 'Medium';
};