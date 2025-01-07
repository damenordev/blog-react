export interface ILayout<PARAMS = unknown> {
  children: React.ReactNode
  params: Promise<PARAMS>
}
