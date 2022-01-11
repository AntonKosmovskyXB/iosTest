export interface INavMenu {
  title: string,
  key?: string,
  icon?: string,
  category?: boolean,
  children?: INavChildMennu[]
}

export interface INavChildMennu {
    title: string,
    key: string,
    url: string,
    icon?: string
}
