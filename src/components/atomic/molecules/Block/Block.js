import React from 'react';
import styled from '../../../../../lib/react-styler';
import Heading from '../../atoms/Heading/Heading';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import globalVar from '../../../../global/globalVar';
import '../../../../assets/react-hexagon.png';

const borderWidth = 2;

const localVar = `
  border: ${borderWidth}px solid black;
`;

const localVar2 = 'border-radius: 10px;';

const Block = styled.div`
  display: grid;
  background: #f0f0f0;
  padding: 10px;
  ${localVar}
  ${localVar2}
  ${globalVar}
  ${Heading} {
    font-size: 24px;
    color: #999;
    margin-bottom: 15px;
  }
  ${Paragraph} {
    color: #333;
    margin-bottom: 10px;
    &.last {
      margin-bottom: 0;
    }
  }
`;

export default ({heading, paragraphs}) => {
  return (   
    <Block>
      <Heading>{heading}</Heading>
      {paragraphs.map((paragraph, i) => {
        const className = (i >= paragraphs.length - 1) ? 'last' : false;
        return <Paragraph className={className}>{paragraph}</Paragraph>;
      })}
    </Block>
  );
};
