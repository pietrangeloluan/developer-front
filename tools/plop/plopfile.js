module.exports = function Plop(plop) {
  // plop generator code
  plop.setGenerator('React Component with Test and Storybook', {
    description: 'React Component, styled, test, stories and index',

    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name?'
      }
    ],

    actions: [
      {
        type: 'add',
        path: '../../src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: './templates/components/component.hbs',
        skipIfExists: true
      },
      {
        type: 'add',
        path: '../../src/components/{{pascalCase name}}/styled.ts',
        templateFile: './templates/components/styled.hbs',
        skipIfExists: true
      },
      {
        type: 'add',
        path: '../../src/components/{{pascalCase name}}/{{pascalCase name}}.unit.spec.tsx',
        templateFile: './templates/components/test.hbs',
        skipIfExists: true
      },
      {
        type: 'add',
        path: '../../src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: './templates/components/stories.hbs',
        skipIfExists: true
      },
      {
        type: 'add',
        path: '../../src/components/{{pascalCase name}}/index.ts',
        templateFile: './templates/components/index.hbs',
        skipIfExists: true
      }
    ]
  })

  // plop generator page
  plop.setGenerator('React Page', {
    description: 'React Page',

    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Page name?'
      }
    ],

    actions: [
      {
        type: 'add',
        path: '../../src/pages/{{pascalCase name}}/{{pascalCase name}}.page.tsx',
        templateFile: './templates/pages/page.hbs',
        skipIfExists: true
      },
      {
        type: 'add',
        path: '../../src/pages/{{pascalCase name}}/styled.ts',
        templateFile: './templates/pages/styled.hbs',
        skipIfExists: true
      },
      {
        type: 'add',
        path: '../../src/pages/{{pascalCase name}}/index.ts',
        templateFile: './templates/pages/index.hbs',
        skipIfExists: true
      }
    ]
  })

  // plop generator redux
  plop.setGenerator('Redux', {
    description: 'Create Redux',

    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Redux name?'
      }
    ],

    actions: [
      {
        type: 'add',
        path: '../../src/store/{{pascalCase name}}/{{pascalCase name}}.types.ts',
        templateFile: './templates/store/types.hbs',
        skipIfExists: true
      },
      {
        type: 'add',
        path: '../../src/store/{{pascalCase name}}/{{pascalCase name}}.actions.ts',
        templateFile: './templates/store/actions.hbs',
        skipIfExists: true
      },
      {
        type: 'add',
        path: '../../src/store/{{pascalCase name}}/{{pascalCase name}}.reducer.ts',
        templateFile: './templates/store/reducer.hbs',
        skipIfExists: true
      },
      {
        type: 'add',
        path: '../../src/store/{{pascalCase name}}/{{pascalCase name}}.selectors.ts',
        templateFile: './templates/store/selectors.hbs',
        skipIfExists: true
      },
      {
        type: 'add',
        path: '../../src/store/{{pascalCase name}}/index.ts',
        templateFile: './templates/store/index.hbs',
        skipIfExists: true
      }
    ]
  })
}
