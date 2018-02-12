import Link from 'next/link'

import { Flex, Box } from 'rebass'

import { colors } from './styles'

const sx = {
	nav: {
		padding: '0px',
		color: colors.magenta,
		backgroundColor: '#000',
		WebkitFontSmoothing: 'antialiased'
	}
}

const Header = (props) => {
	return (
		<div>
			<Flex wrap align="center" style={sx.nav} p={2}>
				<Link prefetch href="/">
					<a>{props.text || 'Home'}</a>
				</Link>
				<Link prefetch href="/about">
					<a>About</a>
				</Link>
				<Box ml="auto" />
				<Link href="https://github.com/lacymorrow/init-next">
					<a>Github</a>
				</Link>
			</Flex>
		</div>
	)
}

export default Header