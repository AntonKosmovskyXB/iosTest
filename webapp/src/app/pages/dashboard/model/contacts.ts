export interface IContacts {
  PersonnelId: string,
  FirstName: string,
  LastName: string,
  Email: string,
  Phone: string,
  Position: string,
  CompanyId: string,
  CompanyName: string,
  JobCompanyId: string,
  PCBU: boolean,
  TenderContact: boolean,
  RoleName: string,
  Checked?: boolean
  Name: string
  LastLoginDate: string
}

export interface IContactsTabDetails {
  Active: boolean
  Favorite: boolean
}
