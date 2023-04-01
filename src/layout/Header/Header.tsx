import React, {useState} from 'react'
import styles from './Header.module.sass'
import cn from 'classnames'
import {Box, Button, Image, ListItem, UnorderedList, useColorMode} from '@chakra-ui/react'
import {HeaderProps} from './Header.props'
import {Link, NavLink} from 'react-router-dom'
import Logo from 'assets/images/logo.png'
import {navLinks} from './navLinks'
import {HamburgerIcon, MoonIcon, SunIcon} from '@chakra-ui/icons'
import {useMediaQuery} from '@chakra-ui/react'


export const Header = ({className, ...props}: HeaderProps) => {
	const {colorMode, toggleColorMode} = useColorMode()
	const [isLargerThan991] = useMediaQuery('(max-width: 991px)')
	const [isShowMenu, setShowMenu] = useState(false)

	return (
		<Box
			className={cn(styles.header, className)}
			as="header"
			boxShadow="base"
			rounded="md"
			{...props}
		>
			<Box className={styles.headerRow}>
				<Link className={styles.headerLogo} to="/">
					<Image src={Logo} title="logo"/>
				</Link>

				<UnorderedList
					className={cn(styles.headerList, {
						[styles.light]: colorMode === 'light',
						[styles.dark]: colorMode === 'dark',
						[styles.headerListActive]: isShowMenu
					})}
					listStyleType="none"
					boxShadow={isLargerThan991 ? 'md' : ''}
					ml={0}>
					<Box className={styles.headerScroll}>
						{navLinks.map(el => (
							<ListItem
								className={styles.headerItem}
								key={el.id}
							>
								<NavLink
									className={({isActive}) => isActive ? cn(styles.headerLinkActive, styles.headerLink) : styles.headerLink}
									to={el.to}>
									{el.label}
								</NavLink>
							</ListItem>
						))}
					</Box>
				</UnorderedList>

				<Box className={styles.headerBtnGroup}>
					<Button
						className={styles.headerMode}
						title="dark-mode"
						onClick={toggleColorMode}
						background={'transparent'}
					>
						{colorMode === 'light' ? (
							<MoonIcon fontSize={27}/>
						) : (
							<SunIcon fontSize={27}/>
						)}
					</Button>

					{isLargerThan991 ? (
						<Button
							className={styles.headerBurger}
							title="burger"
							background={'transparent'}
							onClick={() => setShowMenu(!isShowMenu)}
						>
							<HamburgerIcon fontSize={30}/>
						</Button>
					) : null}

				</Box>
			</Box>
		</Box>
	)
}

