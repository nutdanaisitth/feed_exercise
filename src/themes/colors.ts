const PRIMARY: string = '#5239FF'
const PRIMARY_RED: string = '#C72127'
const PRIMARY_LIGHT: string = '#3AAFE1'
const PRIMARY_DARK: string = '#089CC0'
const ACCENT: string = '#FEB400'
const TRANSPARENT: string = 'rgba(0,0,0,0)'
const BLACK: string = '#000000' // equal #393939 with 90% opacity
const WHITE: string = '#FFFFFF'
const GRAY_LIGHT: string = '#979797'
const GRAY: string = '#F0F0F0'
const SHADOW: string = '#393939'
const fadePURPLE: string = '#5239FF'
const BLUE: string = '#3586FF'

export default {
	primary: PRIMARY,
	primaryRed: PRIMARY_RED,
	primaryLight: PRIMARY_LIGHT,
	primaryDark: PRIMARY_DARK,
	accent: ACCENT,
	transparent: TRANSPARENT,
	black: BLACK,
	white: WHITE,
	gray_light: GRAY_LIGHT,
	gray: GRAY,
	fadePURPLE: fadePURPLE,
	blue: BLUE,
	forgotPinText: '#7E2512',
	text: {
		normal: BLACK,
		label: BLACK,
		placeholder: BLACK,
		highlight: BLACK,
		error: '#A5395B',
		underline: BLACK
	},

	navbar: {
		bg: TRANSPARENT,
		borderBottomColor: TRANSPARENT,
		normal: SHADOW,
		selected: PRIMARY_DARK
	},

	tabbar: {
		bg: TRANSPARENT,
		normal: 'white',
		selected: PRIMARY_RED
	},

	drawer: {
		divider: '#37C6FF',
		button: {
			normal: [TRANSPARENT, TRANSPARENT],
			selected: ['#68D4FF', '#09A9E9']
		}
	},

	tutorial: {
		indicator: {
			normal: 'white',
			selected: '#27A9E0'
		},
		button: {
			border: '#1D3E6D'
		}
	},
	login: {
		list1: '#0AB3F7',
		list2: '#0898D1',
		list3: '#0888BB'
	},
	home: {
		border: '#239AC9',
		button: {
			top: '#3AA1CD'
		},
		indicator: {
			normal: 'white',
			selected: 'white'
		}
	},
	topup: {
		underline: '#41BBEB'
	},
	history: {
		item: {
			borderLeftPrimary: PRIMARY,
			borderLeftPrimaryRed: PRIMARY_RED
		},
		border: '#EEEEEE'
	},
	pad: {
		bgcolor: '#F9CD03',
		selected: '#675095',
		underline: '#000000',
		pinViewBorder: '#808080',
		text: '#4A4A4A'
	},
	transfer: {
		text: {
			darkpimary: '#093C6F'
		},
		colors: {
			backgroud: '#27A8DF',
			border: '#C5E7F6'
		},
		border: {
			border: '#C5E7F6'
		}
	},
	search: {
		input_background: 'rgba(255,255,255, 0.5)',
		input_text: 'white'
	},
	bg_pin: ['rgba(84,51,255, 1)', 'rgba(32,189,255, 1)'],
	bg_reward: ['#5433FF', '#20BDFF'],
	bg_home: ['#FEFEFE', '#E8EBF0'],
	gray69: '#696969',
	grayD2: '#D2D2D2',
	gradientPurple: '#5433FF',
	gradientBlue: '#20BDFF',
	shadowColor: 'rgba(0, 0, 0, .6)',
	bg_pin_fade: ['rgba(84,51,255, 0.3)', 'rgba(32,189,255, 0.3)'],
	bg_pin_hide: ['rgba(84,51,255, 0.0)', 'rgba(32,189,255, 0.0)'],


}
