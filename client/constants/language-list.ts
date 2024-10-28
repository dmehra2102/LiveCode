export enum ProgrammingLanguage {
  TYPESCRIPT = "typescript",
  JAVASCRIPT = "javascript",
  HTML = "html",
  CSS = "css",
  PYTHON = "python",
  JAVA = "java",
}

interface Language {
  value: ProgrammingLanguage;
  label: string;
  defaultCode: string;
}

export const languageList: Language[] = [
  {
    value: ProgrammingLanguage.TYPESCRIPT,
    label: "TypeScript",
    defaultCode:
      'const greeting: string = "Hello, World!";\nconsole.log(greeting);',
  },
  {
    value: ProgrammingLanguage.JAVASCRIPT,
    label: "JavaScript",
    defaultCode: 'const greeting = "Hello, World!";\nconsole.log(greeting);',
  },
  {
    value: ProgrammingLanguage.HTML,
    label: "HTML",
    defaultCode: "<p>Start Writing some HTML code</p>",
  },
  {
    value: ProgrammingLanguage.CSS,
    label: "CSS",
    defaultCode: `
    body {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        background-color: #f0f0f0;
        font-family: Arial, sans-serif;
    }
`,
  },
  {
    value: ProgrammingLanguage.PYTHON,
    label: "Python",
    defaultCode: 'greeting = "Hello, World!"\nprint(greeting)',
  },
  {
    value: ProgrammingLanguage.JAVA,
    label: "Java",
    defaultCode:
      'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}',
  },
];
