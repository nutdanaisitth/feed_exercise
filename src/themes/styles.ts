import NativeTachyons, {
  sizes as tachyonsSizes,
  styles as tachyons
} from "react-native-style-tachyons";
import { StyleSheet, Dimensions, StatusBar, Platform } from "react-native";

const { width, height } = Dimensions.get("window");
import { isIphoneX } from "react-native-iphone-x-helper";

import Colors from "../themes/colors";
// import { AppStyle, TachyonsTypeScale, ColorStyle, Style, Sizes } from './styles.d'
import { AppStyle, ColorStyle, Style, Sizes } from "./styles.d";

// 320,568 - ip 5 s, ip se
// 375,667 - ip 6 s
// 414,736 - ip 7 plus
// 414,736 - ip SE

// 320,480 - ipad Air,iPad Pro (9.7 inch)
// 320,568 - iPad Pro (12.9 inch)

const defaultRatio = 16 / 9;
const currentRatio = height / width;
const ratio = currentRatio / defaultRatio;

const REM: number = Math.floor((16 + Math.floor((width - 340) / 20)) * ratio);

NativeTachyons.build(
  {
    /* REM parameter is optional, default is 16 */
    // rem: SCREEN_WIDTH > 340 ? 18 : 16,
    rem: REM,

    fonts: {
      //ff-default               fontFamily: 'SukhumvitSet'
      default: "Sukhumvit Set"
    },
    colors: {
      palette: {
        primary: Colors.primary,
        primary_red: Colors.primaryRed,
        primary_dark: Colors.primaryDark,
        primary_light: Colors.primaryLight,
        transparent: Colors.transparent,
        accent: Colors.accent,
        white: "white",
        black: Colors.black,
        gray_light: Colors.gray_light,
        gray: Colors.gray,
        green: "green",
        yellow: "yellow",
        red: "red",
        dark_blue: "#007BAD",
        sky_blue: "#B8EBFF",
        tab_bottom_selected: '#4F3DFF'
      } as ColorStyle
    }
  },
  StyleSheet
);

export const sizes: Sizes = tachyonsSizes;
export const extra_height_iphone_x = isIphoneX() ? 20 : 0;
const currentHeight: number = StatusBar.currentHeight ? StatusBar.currentHeight : 20;
export const statusbar: number = Platform.OS === "ios" ? 20 + extra_height_iphone_x : currentHeight;
// const MIN_NAVBAR: number = (Platform.isIOS) ? 64 : 54
const NAVBAR: number = sizes.h3 * 0.75;
// export const navbar = NAVBAR > MIN_NAVBAR ? NAVBAR : MIN_NAVBAR
export const navbar: number = NAVBAR
// export const tabbar = 50
export const tabbar: number = sizes.h3;
export const button: number = sizes.h3 * 0.75;

// const textStyle: TachyonsTypeScale = {
//     f1: {
//         fontSize: 72
//     },
//     f2: {
//         fontSize: 56
//     },
//     f3: {
//         fontSize: 50
//     },
//     f4: {
//         fontSize: 32
//     },
//     f5: {
//         fontSize: 24
//     },
//     f6: {
//         fontSize: 22
//     },
//     f_headline: {
//         fontSize: 72
//     },
//     f_subheadline: {
//         fontSize: 56
//     },
// }

const appStyle: AppStyle = {
  pt_navbar: Platform.select({
    ios: { paddingTop: navbar + statusbar - 15 },
    android: { paddingTop: navbar + 15 }
  }),
  pt_statusbar: {
    paddingTop: statusbar
  },
  pb_tabbar: {
    paddingBottom: tabbar
  },
  mb_tabbar: {
    marginBottom: tabbar
  },
  h_button: {
    height: button
  },
  h_navbar: Platform.select({
    ios: { height: navbar + statusbar },
    android: { height: navbar }
  }),
  mt_navbar: Platform.select({
    ios: { marginTop: navbar + statusbar },
    android: { marginTop: navbar }
  }),
  shadowBorderOpacity: [
    {
      borderRadius: sizes.br3,
      borderColor: Colors.black,
      ...Platform.select(
        {
          ios: {
            shadowColor: Colors.shadowColor,
            shadowOffset: { height: 0, width: 0 },
            shadowOpacity: 0.3,
            shadowRadius: 3
          },

        } as any
      )
    }
  ],
  shadowBorder: [
    {
      borderRadius: sizes.br3,
      borderColor: Colors.black,
      ...Platform.select(
        {
          ios: {
            shadowColor: Colors.shadowColor,
            shadowOffset: { height: 0, width: 0 },
            shadowOpacity: 1,
            shadowRadius: 3
          },

        } as any
      )
    }
  ],
  shadowBorderTransparent: [
    {
      borderRadius: sizes.br3,
      borderWidth: 0,
      ...Platform.select(
        {
          ios: {
            shadowColor: Colors.shadowColor,
            shadowOffset: { height: 0, width: 0 },
            shadowOpacity: 0.1,
            shadowRadius: 3
          },

        } as any
      )
    }
  ],

};

export const s: Style = {
  ...tachyons,
  ...appStyle
  // ...textStyle,
};
