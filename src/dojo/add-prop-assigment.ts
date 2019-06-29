import { Project, SyntaxKind } from 'ts-morph'

export function addPropAssigment() {
  const project = new Project()
  const sourceFile = project.addExistingSourceFile(
    'src/fixtures/object-literal.ts'
  )
  const obj = sourceFile.getFirstDescendantByKind(
    SyntaxKind.ObjectLiteralExpression
  )

  obj.addPropertyAssignment({
    name: 'yum',
    initializer: `'yummy'`
  })

  console.log(obj.getText())
}
