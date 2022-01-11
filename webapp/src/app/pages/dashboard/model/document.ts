export interface IDocumentGroup {
  DocumentGroupId: string
  DocumentGroupName: string
  Tender: boolean
  Site: boolean
  GroupAbbr: string
  CompanyId: string
  ParentGroupId: string
  Active: boolean
  Sequence: number
  ParentGroupName: string
  CompanyName: string
}

export interface IDefaultFolder extends IPatchDefaultFolder {
  DocumentGroupName: string

  ModifiedFolderId: string
}

export interface IPatchDefaultFolder extends IMoveDocsToDefaultFolder {
  FolderId: string
}

export interface IMoveDocsToDefaultFolder {
  DefaultFolderId: string
}
