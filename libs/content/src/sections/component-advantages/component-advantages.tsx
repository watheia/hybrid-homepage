import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import styles from './component-advantages.module.scss';

import { PossibleSizes } from '@watheia/iron-ui.theme.sizes';
import { Paragraph } from '@watheia/content.text.paragraph';
import { text, alignItems } from '@watheia/content.layout.align';
import { Grid } from '@watheia/content.layout.grid-component';
import { fourWayGrid } from '@watheia/content.layout.grid-presets.four-way-grid';

import { BaseImage as Image } from '@watheia/content.elements.base-image';
import { H3 } from '@watheia/content.elements.heading';

/**
 * @name ComponentsAdvantages
 * @description
 * A section detailing the advantages of components, their isolation, and interoperability between projects.
 * Assumes the consuming component to supply className with width and other styles.
 */

export function ComponentsAdvantages(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={classNames(props.className)}
      data-bit-id="watheia.content/sections/component-advantages"
    >
      <Grid
        colMd={12}
        className={classNames(
          text.center,
          text.sm.left,
          fourWayGrid,
          alignItems.center
        )}
      >
        <div className={styles.text}>
          <H3 size={PossibleSizes.xs}>
            Develop and compose components in your workspace
          </H3>
          <Paragraph>
            Spawn Watheia's workspace to seamlessly turn our project into a
            powerful monorepo where you can easily add, remove, and compose
            components to build apps.
          </Paragraph>
        </div>
        <Image
          alt="editor with component"
          src="homepage-bit/editor-logo-comp.png"
          className={styles.img}
          fullWidth
        />

        <div className={styles.text}>
          <H3 size={PossibleSizes.xs}>
            Easily version components and update dependencies
          </H3>
          <Paragraph>
            Enjoy simple yet scalable semantic versioning per component, with
            smart automatic dependency definitions and management.
          </Paragraph>
        </div>
        <Image
          alt="smart versioning"
          src="homepage-bit/example-008.png"
          className={styles.img}
          fullWidth
        />

        <div className={styles.text}>
          <H3 size={PossibleSizes.xs}>
            Develop, build, and test with reusable dev environments
          </H3>
          <Paragraph>
            Enjoy reusable and highly customizable dev environments for
            components, to speed up and standardize development across teams and
            apps.
          </Paragraph>
        </div>
        <Image
          alt="dev tools integrations"
          src="homepage-bit/devtools.png"
          className={styles.img}
          fullWidth
        />

        <div className={styles.text}>
          <H3 size={PossibleSizes.xs}>
            Enjoy an effortless, scalable monorepo dev experience
          </H3>
          <Paragraph>
            Watheia brings you the benefits of highly modular and distributed
            development, with a simple holistic dev experience that makes
            development fun!
          </Paragraph>
        </div>
        <Image
          alt="goodbye conf files"
          src="homepage-bit/goodbye-configuration-files.png"
          className={styles.img}
          fullWidth
        />
      </Grid>
    </div>
  );
}
