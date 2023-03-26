import React from 'react';
import style from './index.less';
import '../../../img.jpg';

interface TitleProps {
  /**
   * @description 标题
   */
  text: string;

  /**
   * @description 样式
   */
  styles?: React.CSSProperties;
}

function Title(props: TitleProps) {
  const { text, styles } = props;

  return (
    <div style={styles} className={style.title}>
      {text}
    </div>
  );
}

export default Title;
