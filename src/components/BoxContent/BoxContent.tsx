import * as React from 'react';
import { FunctionComponent } from 'react';
import { mergeClassNames } from '../helpers';
import "./boxContent.scss"

interface BoxContentProps {
  className?: string;
}

const BoxContent: FunctionComponent<BoxContentProps> = (props) => {
  return <div className={mergeClassNames([props.className, "content"])}>{props.children}</div>
}

export default BoxContent;
