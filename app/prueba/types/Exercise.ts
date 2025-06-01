export interface DocumentationLink {
  title: string
  url: string
}

export interface Exercise {
  title: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  description: string
  instructions: string
  files: Record<string, { code: string; active?: boolean; hidden?: boolean; readOnly?: boolean }>
  dependencies: Record<string, string>
  documentationLinks?: DocumentationLink[]
  hints?: string[]
}
