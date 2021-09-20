// this component was automatically generated by IconGlyph.template.js
import React from 'react';
import { TestId } from '@trello/test-ids';

import { Icon, IconColor, IconSize } from '../src/components/Icon';

export interface GlyphProps {
  /**
   * A string that is applied as an aria attribute on the icon. Usually it
   * matches up with the display name of the icon
   * @default If no label is provided, it will fallback to the name of the icon
   */
  label?: string;
  /**
   * The color that the Icon should be rendered as.
   * @default @icon-default-color (#42526E)
   */
  color?: IconColor;
  /**
   * The size to render the Icon size.
   * @default "medium"
   */
  size?: IconSize;
  /**
   * A string that gets placed as a data attribute (data-test-id) onto the
   * Icon wrapper so that our
   * smoketest can properly target and test the component
   * @default undefined
   */
  testId?: TestId;
  // Escape hatches
  /**
   * ⚠️ DO NOT USE THIS PROP UNLESS YOU REALLY REALLY HAVE TO.
   *
   * Places a class name on the Icon (more specifically, the svg itself). This
   * is placed in addition to the classes already placed on the Icon. This is
   * placed directly onto the SVG via the glyph templates that are
   * generated by IconGlyph.template.js
   *
   * Please refrain from using this unless absolutely necessary.
   * @default undefined
   */
  dangerous_className?: string;
  /**
   * The switch for the icon to be centered in the dedicated space with padding around it.
   * Designed for cases when icon is not inline.
   */
  block?: boolean;
}

const LeaveBoardIconGlyph = () => {
  return (
    <svg
      width="24"
      height="24"
      role="presentation"
      focusable="false"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V14H5V19H19V5H5V10H3V5Z"
        fill="currentColor"
      />
      <path
        d="M11.3037 8.30511C10.8988 8.71367 10.8988 9.37509 11.3037 9.7826L12.5097 11H2.97642C2.43743 11 2 11.4488 2 12.0005C2 12.5522 2.43743 13 2.97642 13H12.5095L11.3037 14.2171C10.8988 14.6236 10.8988 15.2861 11.3037 15.6936C11.7076 16.1021 12.3631 16.1021 12.7681 15.6936L15.6979 12.7386C16.1007 12.3301 16.1007 11.6697 15.6979 11.2611L12.7681 8.30511C12.5651 8.10136 12.3 8 12.0348 8C11.7708 8 11.5046 8.10136 11.3037 8.30511Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const LeaveBoardIcon: React.FunctionComponent<GlyphProps> = (props) => {
  const { testId, dangerous_className, size, color, label, block } = props;
  return (
    <Icon
      testId={testId}
      size={size}
      dangerous_className={dangerous_className}
      color={color}
      block={block}
      label={label || 'LeaveBoardIcon'}
      glyph={LeaveBoardIconGlyph}
    />
  );
};