import React from 'react';
import { storiesOf } from '@storybook/react';
import Fullscreen from '../components/fullscreen';
import { PropsTable } from './components/propsTable';
import ExampleContainer from './components/exampleCode';
import '../styles/index.scss';

const propDefinitions = [
    {
        property: 'themeDark',
        propType: 'boolean',
        required: false,
        description: '是否使用暗黑主题模式',
        defaultValue: 'false',
    },
    {
        property: 'iconStyle',
        propType: 'CSSProperties',
        required: false,
        description: '图标元素样式',
        defaultValue: '',
    },
    {
        property: 'customIcon',
        propType: 'boolean',
        required: false,
        description: '是否自定义图标',
        defaultValue: 'false',
    },
    {
        property: 'fullIcon',
        propType: 'React.ReactNode',
        required: false,
        description: '自定义全屏图标',
        defaultValue: '',
    },
    {
        property: 'exitFullIcon',
        propType: 'React.ReactNode',
        required: false,
        description: '自定义退出全屏图标',
        defaultValue: '',
    },
];
const otherDependencies = `import { Fullscreen } from 'dt-react-component';`;
const code = `<p>白色主题</p>
            <Fullscreen iconStyle={iconStyle} />
            <p>暗黑主题</p>
            <Fullscreen iconStyle={iconStyle} themeDark={true} />`;

const stories = storiesOf('Fullscreen 全屏', module);
stories.add(
    'Fullscreen',
    () => {
        const iconStyle = {
            width: 12,
            height: 12,
            marginRight: 5,
        };
        return (
            <div className="story_wrapper">
                <h2>何时使用</h2>
                <p>全屏操作</p>
                <h2>示例</h2>
                <ExampleContainer otherDependencies={otherDependencies} code={code} hasCodeSandBox>
                    <p>白色主题</p>
                    <Fullscreen iconStyle={iconStyle} />
                    <p>暗黑主题</p>
                    <Fullscreen iconStyle={iconStyle} themeDark />
                </ExampleContainer>
            </div>
        );
    },
    {
        info: {
            text: `
        代码示例：
        ~~~js
        <Fullscreen themeDark={true} />
        ~~~
        `,
            TableComponent: () => PropsTable({ propDefinitions }),
        },
    }
);
