import React, { HTMLAttributes } from 'react';

import classNames from 'classnames';

import { Paragraph } from '@watheia/content.text.paragraph';
import { PossibleSizes } from '@watheia/iron-ui.theme.sizes';
import { marginCenter } from '@watheia/content.layout.align';
import { textColumn } from '@watheia/content.layout.page-frame';

import { H2 } from '@watheia/content.elements.heading';
import { BaseImage as Image } from '@watheia/content.elements.base-image';

import styles from './develop-components.module.scss';

/**
 * @name DevelopComponents
 * @description
 * A section of static content, showing how Watheia breaks down complicated websites.
 * Assumes the consuming component to supply className with width and other styles.
 */

export function DevelopComponents(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} data-bit-id="watheia.content/sections/develop-components">
      <div className={classNames(textColumn, marginCenter)}>
        <H2 size={PossibleSizes.sm}>
          Split app development to independent components and teams
        </H2>
        <Paragraph
          size={PossibleSizes.lg}
          className={classNames(styles.subtitle)}
        >
          Say goodbye to monolithic app development, and hello to modular
          applications composed from features built by autonomous teams working
          side by side.
        </Paragraph>
      </div>
      <Image
        alt="bit"
        src="homepage-bit/assets/booking-breakdown.png"
        fullWidth
      />
    </div>
  );
}
