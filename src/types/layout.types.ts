export interface ILayout<PARAMS = unknown> {
  children: React.ReactNode
  params: Promise<PARAMS>
}

export interface ILayoutWithLocale {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}
