import React, {useMemo} from 'react';
import CopyButton from '@theme-original/CodeBlock/Buttons/CopyButton';
import {
  CodeBlockContextProvider,
  useCodeBlockContext,
} from '@docusaurus/theme-common/internal';

// Lines marked with the diff-remove magic comments (see docusaurus.config.js).
const REMOVED_LINE_CLASS = 'code-block-diff-remove-line';

// The copy button copies the code from the code block context. Give it a
// copy of that context without the removed lines, so pasting the code gives
// the "after" version.
export default function CopyButtonWrapper(props) {
  const {metadata, wordWrap} = useCodeBlockContext();

  const copyMetadata = useMemo(() => {
    const keptLines = metadata.code
      .split('\n')
      .filter((_, index) => !metadata.lineClassNames[index]?.includes(REMOVED_LINE_CLASS));
    return {...metadata, code: keptLines.join('\n')};
  }, [metadata]);

  return (
    <CodeBlockContextProvider metadata={copyMetadata} wordWrap={wordWrap}>
      <CopyButton {...props} />
    </CodeBlockContextProvider>
  );
}
