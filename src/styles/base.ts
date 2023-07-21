import { createStitches } from "@stitches/react";
import { defaultThemeMap } from "@stitches/react";
import type * as Stitches from "@stitches/react";

import main from "./themes/main";

export const { styled, getCssText, globalCss, css, theme, config } =
  createStitches({
    themeMap: {
      ...defaultThemeMap,
      height: "space",
      width: "space",
    },
    theme: main,

    utils: {
      linearGradient: (value: string) => ({
        backgroundImage: `linear-gradient(${value})`,
      }),

      br: (value: Stitches.ScaleValue<"radii">) => ({
        borderRadius: value,
      }),
      mt: (value: Stitches.ScaleValue<"space">) => ({
        marginTop: value,
      }),
      mb: (value: Stitches.ScaleValue<"space">) => ({
        marginBottom: value,
      }),
      ml: (value: Stitches.ScaleValue<"space">) => ({
        marginLeft: value,
      }),
      mr: (value: Stitches.ScaleValue<"space">) => ({
        marginRight: value,
      }),
      my: (value: Stitches.ScaleValue<"space">) => ({
        marginTop: value,
        marginBottom: value,
      }),
      mx: (value: Stitches.ScaleValue<"space">) => ({
        marginLeft: value,
        marginRight: value,
      }),
      pt: (value: Stitches.ScaleValue<"space">) => ({
        paddingTop: value,
      }),
      pb: (value: Stitches.ScaleValue<"space">) => ({
        paddingBottom: value,
      }),
      pl: (value: Stitches.ScaleValue<"space">) => ({
        paddingLeft: value,
      }),
      pr: (value: Stitches.ScaleValue<"space">) => ({
        paddingRight: value,
      }),
      py: (value: Stitches.ScaleValue<"space">) => ({
        paddingTop: value,
        paddingBottom: value,
      }),
      px: (value: Stitches.ScaleValue<"space">) => ({
        paddingLeft: value,
        paddingRight: value,
      }),
      size: (value: Stitches.ScaleValue<"width | height">) => ({
        width: value,
        left: value,
      }),
    },
  });
