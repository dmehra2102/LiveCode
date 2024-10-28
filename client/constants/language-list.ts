interface Language {
  value: string;
  label: string;
  defaultCode: string;
}

export const languageList: Language[] = [
  {
    value: "typescript",
    label: "TypeScript",
    defaultCode:
      'const greeting: string = "Hello, World!";\nconsole.log(greeting);',
  },
  {
    value: "javascript",
    label: "JavaScript",
    defaultCode: 'const greeting = "Hello, World!";\nconsole.log(greeting);',
  },
  {
    value: "python",
    label: "Python",
    defaultCode: 'greeting = "Hello, World!"\nprint(greeting)',
  },
  {
    value: "java",
    label: "Java",
    defaultCode:
      'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}',
  },
];
