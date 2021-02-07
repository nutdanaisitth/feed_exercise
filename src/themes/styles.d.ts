export interface AppStyle {
	pt_navbar
	pt_statusbar
	pb_tabbar
	mb_tabbar
	mt_navbar
	h_button
	h_navbar
	shadowBorder
	shadowBorderOpacity
	shadowBorderTransparent
}

export interface ColorStyle {
	primary
	primary_red
	primary_dark
	primary_light
	accent
	text
	transparent
	white
	black
	gray
	gray_light
	green
	yellow
	red
	dark_blue
	sky_blue
	tab_bottom_selected
}

export interface FontStyle { }

export interface TachyonsFont {
	ff_default
}

export interface TachyonsColor {
	bg_primary
	bg_primary_10
	bg_primary_20
	bg_primary_30
	bg_primary_40
	bg_primary_50
	bg_primary_60
	bg_primary_70
	bg_primary_80
	bg_primary_90

	bg_primary_dark
	bg_primary_dark_10
	bg_primary_dark_20
	bg_primary_dark_30
	bg_primary_dark_40
	bg_primary_dark_50
	bg_primary_dark_60
	bg_primary_dark_70
	bg_primary_dark_80
	bg_primary_dark_90

	bg_primary_light
	bg_primary_light_10
	bg_primary_light_20
	bg_primary_light_30
	bg_primary_light_40
	bg_primary_light_50
	bg_primary_light_60
	bg_primary_light_70
	bg_primary_light_80
	bg_primary_light_90

	bg_accent
	bg_accent_10
	bg_accent_20
	bg_accent_30
	bg_accent_40
	bg_accent_50
	bg_accent_60
	bg_accent_70
	bg_accent_80
	bg_accent_90

	bg_gray
	bg_gray_10
	bg_gray_20
	bg_gray_30
	bg_gray_40
	bg_gray_50
	bg_gray_60
	bg_gray_70
	bg_gray_80
	bg_gray_90

	bg_gray_light
	bg_gray_light_10
	bg_gray_light_20
	bg_gray_light_30
	bg_gray_light_40
	bg_gray_light_50
	bg_gray_light_60
	bg_gray_light_70
	bg_gray_light_80
	bg_gray_light_90

	bg_text
	bg_text_10
	bg_text_20
	bg_text_30
	bg_text_40
	bg_text_50
	bg_text_60
	bg_text_70
	bg_text_80
	bg_text_90

	bg_transparent
	bg_transparent_10
	bg_transparent_20
	bg_transparent_30
	bg_transparent_40
	bg_transparent_50
	bg_transparent_60
	bg_transparent_70
	bg_transparent_80
	bg_transparent_90

	bg_white
	bg_white_10
	bg_white_20
	bg_white_30
	bg_white_40
	bg_white_50
	bg_white_60
	bg_white_70
	bg_white_80
	bg_white_90

	bg_black
	bg_black_10
	bg_black_20
	bg_black_30
	bg_black_40
	bg_black_50
	bg_black_60
	bg_black_70
	bg_black_80
	bg_black_90

	bg_green
	bg_green_10
	bg_green_20
	bg_green_30
	bg_green_40
	bg_green_50
	bg_green_60
	bg_green_70
	bg_green_80
	bg_green_90

	bg_yellow
	bg_yellow_10
	bg_yellow_20
	bg_yellow_30
	bg_yellow_40
	bg_yellow_50
	bg_yellow_60
	bg_yellow_70
	bg_yellow_80
	bg_yellow_90

	bg_red
	bg_red_10
	bg_red_20
	bg_red_30
	bg_red_40
	bg_red_50
	bg_red_60
	bg_red_70
	bg_red_80
	bg_red_90

	bg_dark_blue
	bg_dark_blue_10
	bg_dark_blue_20
	bg_dark_blue_30
	bg_dark_blue_40
	bg_dark_blue_50
	bg_dark_blue_60
	bg_dark_blue_70
	bg_dark_blue_80
	bg_dark_blue_90

	bg_sky_blue
	bg_sky_blue_10
	bg_sky_blue_20
	bg_sky_blue_30
	bg_sky_blue_40
	bg_sky_blue_50
	bg_sky_blue_60
	bg_sky_blue_70
	bg_sky_blue_80
	bg_sky_blue_90

	b__primary
	b__primary_10
	b__primary_20
	b__primary_30
	b__primary_40
	b__primary_50
	b__primary_60
	b__primary_70
	b__primary_80
	b__primary_90

	b__primary_dark
	b__primary_dark_10
	b__primary_dark_20
	b__primary_dark_30
	b__primary_dark_40
	b__primary_dark_50
	b__primary_dark_60
	b__primary_dark_70
	b__primary_dark_80
	b__primary_dark_90

	b__primary_light
	b__primary_light_10
	b__primary_light_20
	b__primary_light_30
	b__primary_light_40
	b__primary_light_50
	b__primary_light_60
	b__primary_light_70
	b__primary_light_80
	b__primary_light_90

	b__text
	b__text_10
	b__text_20
	b__text_30
	b__text_40
	b__text_50
	b__text_60
	b__text_70
	b__text_80
	b__text_90

	b__transparent
	b__transparent_10
	b__transparent_20
	b__transparent_30
	b__transparent_40
	b__transparent_50
	b__transparent_60
	b__transparent_70
	b__transparent_80
	b__transparent_90

	b__white
	b__white_10
	b__white_20
	b__white_30
	b__white_40
	b__white_50
	b__white_60
	b__white_70
	b__white_80
	b__white_90

	b__black
	b__black_10
	b__black_20
	b__black_30
	b__black_40
	b__black_50
	b__black_60
	b__black_70
	b__black_80
	b__black_90

	b__green
	b__green_10
	b__green_20
	b__green_30
	b__green_40
	b__green_50
	b__green_60
	b__green_70
	b__green_80
	b__green_90

	b__yellow
	b__yellow_10
	b__yellow_20
	b__yellow_30
	b__yellow_40
	b__yellow_50
	b__yellow_60
	b__yellow_70
	b__yellow_80
	b__yellow_90

	b__red
	b__red_10
	b__red_20
	b__red_30
	b__red_40
	b__red_50
	b__red_60
	b__red_70
	b__red_80
	b__red_90

	b__dark_blue
	b__dark_blue_10
	b__dark_blue_20
	b__dark_blue_30
	b__dark_blue_40
	b__dark_blue_50
	b__dark_blue_60
	b__dark_blue_70
	b__dark_blue_80
	b__dark_blue_90

	b__sky_blue
	b__sky_blue_10
	b__sky_blue_20
	b__sky_blue_30
	b__sky_blue_40
	b__sky_blue_50
	b__sky_blue_60
	b__sky_blue_70
	b__sky_blue_80
	b__sky_blue_90

	primary
	primary_10
	primary_20
	primary_30
	primary_40
	primary_50
	primary_60
	primary_70
	primary_80
	primary_90

	primary_dark
	primary_dark_10
	primary_dark_20
	primary_dark_30
	primary_dark_40
	primary_dark_50
	primary_dark_60
	primary_dark_70
	primary_dark_80
	primary_dark_90

	primary_light
	primary_light_10
	primary_light_20
	primary_light_30
	primary_light_40
	primary_light_50
	primary_light_60
	primary_light_70
	primary_light_80
	primary_light_90

	accent
	accent_10
	accent_20
	accent_30
	accent_40
	accent_50
	accent_60
	accent_70
	accent_80
	accent_90

	gray
	gray_10
	gray_20
	gray_30
	gray_40
	gray_50
	gray_60
	gray_70
	gray_80
	gray_90

	gray_light
	gray_light_10
	gray_light_20
	gray_light_30
	gray_light_40
	gray_light_50
	gray_light_60
	gray_light_70
	gray_light_80
	gray_light_90

	text
	text_10
	text_20
	text_30
	text_40
	text_50
	text_60
	text_70
	text_80
	text_90

	transparent
	transparent_10
	transparent_20
	transparent_30
	transparent_40
	transparent_50
	transparent_60
	transparent_70
	transparent_80
	transparent_90

	white
	white_10
	white_20
	white_30
	white_40
	white_50
	white_60
	white_70
	white_80
	white_90

	black
	black_10
	black_20
	black_30
	black_40
	black_50
	black_60
	black_70
	black_80
	black_90

	green
	green_10
	green_20
	green_30
	green_40
	green_50
	green_60
	green_70
	green_80
	green_90

	yellow
	yellow_10
	yellow_20
	yellow_30
	yellow_40
	yellow_50
	yellow_60
	yellow_70
	yellow_80
	yellow_90

	red
	red_10
	red_20
	red_30
	red_40
	red_50
	red_60
	red_70
	red_80
	red_90

	dark_blue
	dark_blue_10
	dark_blue_20
	dark_blue_30
	dark_blue_40
	dark_blue_50
	dark_blue_60
	dark_blue_70
	dark_blue_80
	dark_blue_90

	sky_blue
	sky_blue_10
	sky_blue_20
	sky_blue_30
	sky_blue_40
	sky_blue_50
	sky_blue_60
	sky_blue_70
	sky_blue_80
	sky_blue_90
}

export interface TachyonsAbsolute {
	absolute_fill
	absolute
	top_0
	top_1
	top_2
	bottom_0
	bottom_1
	bottom_2
	left_0
	left_1
	left_2
	right_0
	right_1
	right_2
}

export interface TachyonsBorder {
	br0
	br1
	br2
	br3
	br4
	br5
	br__top
	br__bottom
	br__left
	br__right
	ba
	br
	bl
	bt
	bb
}

export interface TachyonsFlexbox {
	flx_i
	flx_col
	flx_row
	flx_row_reverse
	flx_col_reverse
	flx_wrap
	aifs
	aic
	aife
	asfs
	asc
	asfe
	ass
	jcfs
	jcfe
	jcc
	jcsb
	jcsa
}

export interface TachyonsFontWeight {
	normal
	b
	fw1
	fw2
	fw3
	fw4
	fw5
	fw6
	fw7
	fw8
	fw9
}

export interface TachyonsHeight {
	h1
	h2
	h3
	h4
	h5
	h6

	max_h1
	max_h2
	max_h3
	max_h4
	max_h5
	max_h6

	min_h1
	min_h2
	min_h3
	min_h4
	min_h5
	min_h6
}

export interface TachyonsImage {
	rm_contain
	rm_cover
	rm_stretch
}

export interface TachyonsOpacity {
	o_100
	o_90
	o_80
	o_70
	o_60
	o_50
	o_40
	o_30
	o_20
	o_10
	o_05
	o_025
}

export interface TachyonsSpacing {
	ma0
	ma1
	ma2
	ma3
	ma4
	ma5
	ma6
	ma7
	ma8

	mh0
	mh1
	mh2
	mh3
	mh4
	mh5
	mh6
	mh7
	mh8

	mv0
	mv1
	mv2
	mv3
	mv4
	mv5
	mv6
	mv7
	mv8

	mt0
	mt1
	mt2
	mt3
	mt4
	mt5
	mt6
	mt7
	mt8

	mr0
	mr1
	mr2
	mr3
	mr4
	mr5
	mr6
	mr7
	mr8

	mb0
	mb1
	mb2
	mb3
	mb4
	mb5
	mb6
	mb7
	mb8

	ml0
	ml1
	ml2
	ml3
	ml4
	ml5
	ml6
	ml7
	ml8

	pa0
	pa1
	pa2
	pa3
	pa4
	pa5
	pa6
	pa7
	pa8

	ph0
	ph1
	ph2
	ph3
	ph4
	ph5
	ph6
	ph7
	ph8

	pv0
	pv1
	pv2
	pv3
	pv4
	pv5
	pv6
	pv7
	pv8

	pt0
	pt1
	pt2
	pt3
	pt4
	pt5
	pt6
	pt7
	pt8

	pr0
	pr1
	pr2
	pr3
	pr4
	pr5
	pr6
	pr7
	pr8

	pb0
	pb1
	pb2
	pb3
	pb4
	pb5
	pb6
	pb7
	pb8

	pl0
	pl1
	pl2
	pl3
	pl4
	pl5
	pl6
	pl7
	pl8
}

export interface TachyonsText {
	i
	tl
	tc
	tr
	tj
}

export interface TachyonsTypeScale {
	f_headline
	f_subheadline
	f1
	f2
	f3
	f4
	f5
	f6
	f8
	f10
	f12
	f14
	f16
	f18
	f22
	f24
	f26
	f28
	f30
	f36
}

export interface TachyonsWidth {
	w1
	w2
	w3
	w4
	w5
	w6

	max_w1
	max_w2
	max_w3
	max_w4
	max_w5
	max_w6

	min_w1
	min_w2
	min_w3
	min_w4
	min_w5
	min_w6
}
export interface Tachyons
	extends TachyonsAbsolute,
	TachyonsBorder,
	TachyonsFlexbox,
	TachyonsFontWeight,
	TachyonsHeight,
	TachyonsImage,
	TachyonsOpacity,
	TachyonsSpacing,
	TachyonsText,
	TachyonsTypeScale,
	TachyonsWidth,
	TachyonsFont,
	TachyonsColor { }

export interface Style extends AppStyle, ColorStyle, FontStyle, Tachyons { }

export interface Sizes
	extends TachyonsHeight,
	TachyonsWidth,
	TachyonsTypeScale,
	TachyonsSpacing {
	br0
	br1
	br2
	br3
	br4
	br5
}
