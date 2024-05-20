namespace db.datamodel;

using {managed} from '@sap/cds/common';
using {db.utils.localAspects} from './utils/Aspects';
// External Service import ---> With Mocked Data
using {API_BUSINESS_PARTNER as ext_bupa} from '../srv/external/API_BUSINESS_PARTNER';

// Entity Projection on the External Service 'Business_Partner' ---> with Mocked Data
entity Suppliers as
    projection on ext_bupa.A_BusinessPartner {
        key BusinessPartner            as ID,
            AcademicTitle              as academic_title,
            BusinessPartnerFullName    as fullName,
            BusinessPartnerUUID        as bpuuid,
            CorrespondenceLanguage     as c_langu,
            Language                   as langu,
            to_AddressIndependentEmail as ind_email,
            BusinessPartnerIsBlocked   as isBlocked
    }


entity ToDoLists : managed, localAspects {
    key TaskID          : UUID;
        TaskDescription : String(200);
        TargetDate      : Date;
        EstimatedHours  : String(15);
        Status          : String(15);
        Priority        : String(15) default 'Medium';
};

entity Pictures {
    key ID        : UUID;
    @Core.MediaType  : mediatype
    @Core.ContentDisposition.Filename: fileName
    @Core.ContentDisposition.Type: 'inline'
    content   : LargeBinary;

    @Core.IsMediaType: true
    mediatype : String;
    fileName : String;
    applicationName:String;
}
