import React from 'react';
import styles from './styles';

const LogoTop = () => {
  return (
    <table border={0} cellPadding={0} cellSpacing={0} className="mcnImageBlock" style={styles.imageBlock}>
      <tbody className="mcnImageBlockOuter">
        <tr>
          <td valign="top" style={styles.imageContentContainer} className="mcnImageBlockInner">
            <table
              align="left"
              border={0}
              cellPadding={0}
              cellSpacing={0}
              className="mcnImageContentContainer"
              style={styles.imageContentContainer}
            >
              <tbody>
                <tr>
                  <td className="mcnImageContent" valign="top" style={styles.imageContent}>
                    <a href="http://www.hackernoon.com" title className target="_blank" style={styles.title}>
                      <img
                        align="center"
                        alt=""
                        src="https://raw.githubusercontent.com/atherdon/newsletters/master/archive/logos/brand/hackernoon.png"
                        width={600}
                        style={styles.img}
                        className="mcnImage"
                      />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default LogoTop;