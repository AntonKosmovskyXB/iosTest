export interface IAzureData extends IAzureCredentials {
  Container: string
}

export interface IAzureCredentials {
  BlobEndpoint: string
  SasToken: string
}
