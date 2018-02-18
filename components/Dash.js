import {
	Flex,
	Box,
	Button,
	Text
} from 'rebass'
import PropTypes from 'prop-types'

import { colors, fontSizes } from './styles'

const Dash = ( props ) => {

	const { background, width, badge, title, subtitle, text, subtext } = props
	const { light, lighter, colorDark, colorMain, colorError, colorSuccess, dashboardBgMain } = colors
	const { fontBodyXS, fontBodySM, fontHeaderXS } = fontSizes
	const sx = {
		dash: {
			color: colorMain,
			background: background || dashboardBgMain || '#EEE',
			padding: ( props.children && !props.padding ) ? '0' : '15px',
			position: 'relative'
		},
		badgeError: {
			backgroundColor: colorError,
			color: colorMain,
			borderRadius: '2px',
			fontSize: fontHeaderXS,
			fontWeight: '700'
		},
		badgeSuccess: {
			backgroundColor: colorSuccess,
			color: colorDark,
			borderRadius: '2px',
			fontSize: fontHeaderXS,
			fontWeight: '300'
		},
		title: {
			fontSize: props.subtitle ? fontBodyXS : fontBodySM,
			textTransform: props.subtitle ? 'uppercase' : 'none',
			color: props.subtitle ? colorMain : lighter,
			marginBottom: props.subtitle ? '3px' : '0px',
			fontWeight: '500',
			paddingBottom: '10px',
			overflow: 'hidden',
			textOverflow: 'ellipsis'
		},
		subtitle: {
			color: light
		},
		text: {
			color: light || '#222',
			fontSize: fontBodySM,
			fontWeight: '400',
			marginBottom: '10px'
		},
		subtext: {
			color: colorMain || '#444',
			fontSize: fontBodyXS,
			fontWeight: '500'
		}
	}
	return (
		<Flex wrap className='dash' width={width || 1} style={sx.dash} { ...props }>
				{title && ( <Text className="title" is='h4' style={sx.title}>{title}   { subtitle && (
					<span style={sx.subtitle}>{subtitle}</span>
				)}</Text> )}

				{text && ( <Text is='h5' style={sx.text}>{text}   { subtext && (
					<span style={sx.subtext}>{subtext}</span>
				)}</Text> )}

				{badge && (
					<Box className='badge'>
						{badge.success && (
							<Button ml={1} mb={1} style={sx.badgeSuccess}>{badge.success.text || badge.success}</Button>
						)}
						{badge.error && (
							<Button ml={1} mb={1} style={sx.badgeError}>{badge.error.text || badge.error}</Button>
						)}
					</Box>
				)}

				{props.children && (
					<div>{props.children}</div>
				)}
		</Flex>
	)

}

Dash.propTypes = {
	background: PropTypes.string,
	badge: PropTypes.object,
	text: PropTypes.string,
	title: PropTypes.string,
	subtext: PropTypes.string
}

export default Dash
