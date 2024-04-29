namespace db.utils;

aspect localAspects {
    DELETED : Boolean enum {
        Yes = true;
        No  = false;
    } default false;
}
