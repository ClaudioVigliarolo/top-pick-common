import { UserRole } from "../interfaces";
export const checkRole = (minRole: UserRole, actualRole: UserRole): boolean => {
    switch (minRole) {
        case UserRole.Admin:
            return actualRole === UserRole.Admin;
        case UserRole.Creator:
            return actualRole === UserRole.Admin || actualRole === UserRole.Creator;
        case UserRole.Default:
            return actualRole === UserRole.Admin || 
                   actualRole === UserRole.Creator || 
                   actualRole === UserRole.Default;
        case UserRole.NoRole:
            return true;
        default:
            return false;
    }
};