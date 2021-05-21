import { 
    FASTDesignSystemProvider, 
    FASTCard, 
    FASTButton
  } from '@microsoft/fast-components';

import { css } from "@microsoft/fast-element";
import {
    DesignSystemProvider,
    defineDesignSystemProvider,
    DesignSystemProviderTemplate as template,
} from "@microsoft/fast-foundation";

  
  /*
   * Ensure that tree-shaking doesn't remove these components from the bundle.
   * There are multiple ways to prevent tree shaking, of which this is one.
   */
  FASTDesignSystemProvider;
  FASTCard;
  FASTButton;
  

  @defineDesignSystemProvider({
    name: "my-design-system-provider",
    template,
    styles: css`:host {     --ag-background-color: var(--background-color);
    --ag-odd-row-background-color: var(--background-color);
    --ag-header-background-color: var(--background-color);
    --ag-foreground-color: var(--neutral-foreground-rest); }`
})
export class MyDesignSystemProvider extends FASTDesignSystemProvider {}